// Written by Gauri Arvind

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function InsertCalendar() {
    // Initialization of navigate function
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth') === null) {
          navigate('/');
        }
    });

    // Variables for key information
    const [inputFields, setInputFields] = useState([
        {name:'', desc:'', startTime: '', endTime: ''}
    ])

    // Helper functions for inserting the calendar
    // Inserts changes made to a singular course meeting into the inputFields array
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    //Adds new course meetings to page
    const addFields = () => {
        let newfield = {name:'', desc:'', startTime: '', endTime: ''}
        setInputFields([...inputFields, newfield])
        console.log(inputFields[0])
    }

    //Handles submission of form to the backend to create the event
    const submit = async(e) => {
        e.preventDefault();
        let data = {name:'', desc:'', startTime: '', endTime: ''}
        setInputFields([data])
        
        for(let i = 0; i < inputFields.length; ++i) {
            const auth = JSON.parse(localStorage.getItem('auth'));
            const res = await fetch(`https://planpal-backend-xig7.onrender.com/events/${auth._id}?sessionToken=${auth.authentication.sessionToken}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "ownerId": auth._id,
                    "title": inputFields[i].name,
                    "description": inputFields[i].desc,
                    "start_date": inputFields[i].startTime,
                    "end_date": inputFields[i].endTime
                })
            });
            if (res.status === 400) {
                alert("Error with creating course schedule. If you have duplicate names for course names, it can be changed to Meeting 1 - CS 320 or Meeting 2 - CS 320 to differentiate.")
            } else if (res.status === 403) {
                navigate('/')
            } else {
                navigate('/dashboard');
            }
        }
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }

    // CSS Styling (based off of styling of new event)
    const containerStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#0000',
        padding: '20px',
        borderRadius: '10px',
    };

    const courseLabelStyle = {
        display: 'block',
        margin: '10px 0',
        // Additions to label styling for course:
        fontSize: '20px'
    }

    const labelStyle = {
        display: 'block',
        margin: '10px 0',
    }

    const divStyle = {
        margin: '0px 0px 10px 0px'
    }

    const inputStyle = {
        width: '100%',
        padding: '5px',
        fontSize: '16px',
    };
    
    const buttonStyle = {
        background: '#007BFF',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        //Additions to button styling:
        margin: '0px 10px 0px 0px',
    };

    return (
        <div style={containerStyle}>
            <h1>Add Course Meetings</h1>
            <p>To add your courses to the calendar, choose how many times the course meets each week,
               and the number of associated slots for the course will appear. This includes lectures
               and any additional sections your course has, such as discussions. <br/><br/>
               Once the information is shown, write a course name (which must be unique for each course meeting created), 
               description (which can include whether the course is a lecture, discussion, lab, etc.), the start time 
               and end time (on a given date). This feature will only work for the week chosen,  and in the future would 
               include all the weeks the course operates for. Once you click Submit, the schedule will be generated on the calendar.
            </p>

            <p>An example of a course meeting for a given week would be: <br/> <br/> 
               Meeting 1 - Course Name: CS 320 <br/> 
               Description: Software Engineering Lecture with Jaime Dávila (Tuesday) <br/> 
               Start Time: 1:00 and End Time: 2:15 <br/><br/> 

               Meeting 2 - Course Name: CS 320 <br/> 
               Description: Software Engineering Lecture with Jaime Dávila (Thursday) <br/> 
               Start Time: 1:00 and End Time: 2:15 <br/> <br/> 

               Meeting 3 - Course Name: CS 320 <br/> 
               Description: Software Engineering Discussion with Jaime Dávila (Wednesday) <br/> 
               Start Time: 11:10 and End Time: 12:05 <br/> <br/> 
            </p>
            <form>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <label style={courseLabelStyle}>Course Meeting {index+1}</label>
                            </div>
                            <div style={divStyle}>
                                <label style={labelStyle}>Course Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Meeting 1 for CS 320'
                                    value={input.name}
                                    onChange={event => handleFormChange(index, event)}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={divStyle}>
                                <label style={labelStyle}>Course Description</label>
                                <input
                                    type='text'
                                    name='desc'
                                    placeholder='Tuesday Meeting of CS 320'
                                    value={input.desc}
                                    onChange={event => handleFormChange(index, event)}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={divStyle}>
                                <label style={labelStyle}>Course Start Date</label>
                                <input
                                    type='datetime-local'
                                    name='startTime'
                                    value={input.startTime}
                                    onChange={event => handleFormChange(index, event)}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={divStyle}>
                                <label style={labelStyle}>Course End Date</label>
                                <input
                                    type='datetime-local'
                                    name='endTime'
                                    value={input.endTime}
                                    onChange={event => handleFormChange(index, event)}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <button onClick={() => removeFields(index)} style={buttonStyle}>Remove Course Meeting</button>
                            </div>
                            <br/>
                        </div>   
                    )
                })}
            </form>
            <button onClick={addFields} style={buttonStyle}>Add More Course Meetings</button>
            <button onClick={submit} style={buttonStyle}>Submit</button>
        </div>

    );
};

export default InsertCalendar;
