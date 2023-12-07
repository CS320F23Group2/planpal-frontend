# planpal-frontend

## Description
PlanPal is a website that allows users to generate study schedules based on their classes and extracurricular events. PlanPal currently allows users to log in securely, create events, view a generated calendar schedule, view events assigned to them (for today, tomorrow, the entire week, and all events), and log out securely.

This repository focuses on the frontend portion of PlanPal. Our frontend is based on React-Bootstrap and is routed with Express. 

> PlanPal is a project for CS 320, the software engineering course at UMass Amherst.

> NOTE: The auth-sveltekit submodule was designed to integrate authentication and fully deploy the frontend before product demonstrations, but was not intended to replace the frontend.   

## Authors
### Frontend Team
  - Gauri Arvind
  - Riya Sharma
  - Aaditya Vikram

## Project Structure
Our repository hosts a number of files associated with the frontend, organized alphabetically. Some of the most important and crucial files include the following:
   - App.js: React page that contains the main routing of the application to other pages in the application via a navbar (which are dashboard.js, calendar.js, settings.js, and the original page)
   - calendar.js: React page that contains the view of the calendar, which is generated based on calendarView.js
   - dashboard.js: React page that contains the user's dashboard of events they are required to do for today, tomorrow, the entire week,      and all events
   - login.js: React page that handles the login feature for users
   - newEvent.js: React page that allows users to create an event with the name of the event, a description of the event, the start date      of the event, and the end date of the event.
   - register.js: React page that allows users to sign up for PlanPal. This file is included in our most recent version.  
   - settings.js: React page that contains the user's settings for their PlanPal account, which include profile, account, notification,       and privacy settings.


## How to Run PlanPal
To run PlanPal, download the files associated with the project, then run npm install to download any dependencies and npm start to start the application. The initial startup of the application may take time to fully log in. 


