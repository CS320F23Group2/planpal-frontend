import React, { useRef, useState } from 'react'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const InsertCalendar = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    return (
        <div className="insert-calendar-container">
               {/* This functionality allows users on the frontend to add their current SPIRE
                   schedules to the backend, creating the foundation of their study schedule. */}
                <h1>Insert Calendar</h1>
                <p>If you would like to insert your current SPIRE calendar, insert it below! 
                    Note that the only file type allowed is .ics, the standard file type for calendars
                    including SPIRE calendars. To obtain your SPIRE calendar, log in to your SPIRE account, 
                    go to Manage Classes, Download Class Schedule, and choose the semester you would like
                    to add to your calendar.</p>
                    {/*The button is where the code is going wrong, but I dunno how to fix it.
                        If all else fails, the input section is the necessary part that makes this work,
                        so feel free to redo this. */}
                <button type="button">
                   <i className="ics-file-upload" />
                   <span> Upload Calendar </span>
                </button>
                <input 
                    type="file"
                   //TODO: make sure that the other part is working before this one: accept=".ics"
                    ref={fileInputField}
                    accept=".ics"
                    title=""
                    value=""
                    {...otherProps}
                />

        </div>
    )
}

export default InsertCalendar;
