// to run the file: node ics-parse.js
let file = '/Users/gauri/Downloads/320-testing-local/mySchedule.ics'; //the only issue is that it's sourced from my downloads, but replacing this will work

// Converts SPIRE Calendar into a string
// Input: aFile(.ics file)
// Returns: string
function convertIcsToString(aFile) {
    const fs = require('fs');
    const fileContents = fs.readFileSync(aFile, "utf-8"); //converts .ics to string
    return fileContents;
}

// Example of converted schedule, which in this case is my schedule

// Parses the SPIRE calendar (stored as a string) and separates it into classes, which is
// stored in an object
// Input: icsFile(string)
// Returns: object
function parseCalendar(icsFile) {
    const lines = icsFile.split('\n');
    const events = [];
    let event;

    for(let i = 0; i < lines.length; ++i) {
        const line = lines[i].trim();
        if(line === 'BEGIN:VEVENT') {
            event = {};
        }
        else if (line === 'END:VEVENT') {
            events.push(event);
        }
        else if(event) {
            const match = /^([A-Z]+):(.*)$/.exec(line);
            if(match) {
                const [,key, value] = match;
                event[key] = value;
            }
        }
    }
    return events;
}

// Combines convert_ics_to_string and parse_calendar into one easy-to-call function
// Input: aFile(.ics file)
// Returns: object
function icsParseToCalendar(file) {
    let schedule = convertIcsToString(file);
    return parseCalendar(schedule);
}

// Splits the Summary section of one class into the name of the course and the type of the course
// Input: res(object), idx(int)
// Returns: array
function splitSummary(res, idx) {
    let summary = res[idx].SUMMARY.split(' ');
    return [summary[0] + ' ' + summary[1], summary[2]]; 
}

// Gets the precise location (without whitespace or *)
// Input: res(object), idx(int)
// Returns: string
function fixLocation(res, idx) {
    let location = res[idx].LOCATION;
    let result = location.replace("*", "").trim();
    return result;
}

// Gets the days the course is occuring for (such as Monday and Wednesday)
// Input: res(object), idx(int)
// Returns: string[]
function courseWeekdays(res, idx) {
    let wholePhrase = res[idx].RRULE.split(";");
    let byday = wholePhrase[1];
    let dates = byday.substr(6).split(",");
    let daysOfCourse = [];
    for(let i = 0; i < dates.length; ++i) {
        if(dates[i] == "MO") {
            daysOfCourse.push("Monday");
        }
        if(dates[i] == "TU") {
            daysOfCourse.push("Tuesday");
        }
        if(dates[i] == "WE") {
            daysOfCourse.push("Wednesday");
        }
        if(dates[i] == "TH") {
            daysOfCourse.push("Thursday");
        }
        if(dates[i] == "FR") {
            daysOfCourse.push("Friday");
        }
    }
    return daysOfCourse;
}

// Gets the duration of the course in a tuple representing hours and minutes
// specifically as [hours, minutes]
// Input: res(object), idx(int)
// Returns: int[]
function fixDuration(res, idx) {
    let dur = res[idx].DURATION.substr(2);
    let hour = parseInt(dur.charAt(0));
    let minute = parseInt(dur.substr(2, 3));
    return [hour, minute];
}

// Gets the frequency that the course occurs for (such as weekly).
// Input: res(object), idx(int)
// Returns: string
function getFrequency(res, idx) {
    let wholePhrase = res[idx].RRULE.split(";");
    let freq = wholePhrase[0];
    return freq.charAt(5) + freq.substr(6).toLowerCase();
}

// Gets the start and end dates of the course and returns it in a tuple 
// which is structured as [start, end]
// Input: res(object), idx(int)
// Returns: string[]
function getStartEndAsTuple(res, idx) {
    let startDate = res[idx].DTSTART.substr(0, 8);
    let wholePhrase = res[idx].RRULE.split(";");
    let endDate = wholePhrase[2].substr(6);
    return [startDate, endDate];
}

// This function consolidates previous functions into a script to demo.
// Input: res(object), idx(int)
// Returns: string
function demoCode(res, idx) {
    let sum = splitSummary(res, idx);
    let courseName = sum[0];
    let courseType = sum[1];
    let loc = ". \nIt is located in " + fixLocation(res, idx);

    let weekDates = courseWeekdays(res, idx);
    let weekOccurances = "";
    for(let i = 0; i < weekDates.length; ++i) {
        if(i == weekDates.length - 1) {
            let lastDate = "and " + weekDates[i];
            weekOccurances += lastDate;
        }
        else if(i == 0 && weekDates.length == 2) {
            weekOccurances += weekDates[i] + " ";
        }
        else {
            let curr = weekDates[i] + ", ";
            weekOccurances += curr;
        }
    }


    let dtion = fixDuration(res, idx);
    let durStr = dtion[0] + " hours and " + dtion[1] + " minutes";

    let fre = getFrequency(res, idx);
    let startEnd = getStartEndAsTuple(res, idx);
    let startEndStr = " and it starts on " + startEnd[0] + " and ends on " + startEnd[1];

    let total = "This course is " + courseName + " " + courseType + loc + " and occurs on " + weekOccurances + ". \nThis course runs for " + durStr + startEndStr + ".";
    return total; 
}

// Demo
// In this demo I'll be showcasing one of my courses and how it is split.
// I'll be specifically focusing on CS 320 (this course) and MGMT 342 (another course)
// to show that it works across different courses and majors.

//This is the starting point of that, where my schedule is generated as an object
let res = icsParseToCalendar(file);

// This is the code for CS 320:
// Index: 3

console.log(demoCode(res, 3)); //this is for CS 320 (lecture).
console.log("\n");

//This includes the lab for CS 320:
// Index: 4
console.log(demoCode(res, 4)); //this is for CS 320 (discussion).
console.log("\n");

// And this is the code for MGMT 342:
// Index: 5
console.log(demoCode(res, 5)); //this is for MGMT 342 (lecture)


