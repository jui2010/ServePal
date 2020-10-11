## Introduction
ServePal is a web app built to recommend technicians of various skillsets to the client facing certain problem, based on factors like efficiency, distance from the clients location, priority, etc.

## What it does
#### Admin Perspective: 
- Be able to view all the client locations on the map
- Can track all the clients who have been assigned a technician and those that are still pending
- For clients whose requirements are not fullfilled, the admin will be recommended a list of 3 technicians which further can be assigned to a particular task

#### Technician Perspective:
- A technician can login and add his schedule with all the tasks assigned to him
- In case the technician is not able to make it to the client location, the technician can notify the admin 
- The admin will receive an alert about his unavailability and make the necessary provisions by selecting a replacement which will be recommended by the system

#### User Perspective:
- User can login and add their requirement on the website
- Their tasks will be assigned to a technician, and user will be able to track his location and availability

## How I built it
In order to build the web application, I used the following technologies:

- ReactJs: To build the front end of the app, where users/admin can login and use various functionalities.
- Express: To build the backend API's, for integrating the front-end with the database.
- MongoDB Atlas: To store user data, information of the various client locations and details/skills of the technicians.
- Leaflet.js : To plot a map, which showcases the client and the recommended technician locations.

## Accomplishments that I'm proud of
I was able to demonstrate a minimum viable product in a short time span.

## What's next for Easy Park
The functionalities I wish to inculcate:

- Add the schedule of the technicians, so that the admin can easily view which tasks should be assigned to whom
- Giving the technician a credibility score, which will depend on the efficiency, time taken, customer review, etc
- Recommend teams for a particular activity
