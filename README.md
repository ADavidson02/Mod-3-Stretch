# Mod 3 Stretch Technology - Advice Board / Firebase Back End (Group Project)

### The link to our repo can be found there
https://github.com/ADavidson02/Mod-3-Stretch

### The link to the project description can be found here
https://frontend.turing.io/projects/module-3/stretch.html

## Project Overview
We were tasked with building a timer that can log the type, goal, and length of the activity. Each activity type is associated with a specific color which is applied in several places throughout the site. The timer feature shows the countdown before displaying a congratulatory message and the option to log your activity, which is the only way to return back to the main page where you can create a new activity, aside from refreshing the page. The log activity feature allows the user to store the completed activities and display them under the Past Activities section, with the color flag of the type of activity that was chosen. Local Storage was used to preserve the information when the page is refreshed.

For this project, our group decided to work with firebase along with React and Router to build an application with a simple backend that we could post to and fetch data from. We wanted to make an application that could crowdsource advice to anyone who was willing to share or in need of advice. We also added an extra fetch to a public api for randomly generated advice. In the future we would like to make it user authenticated so that the advice is saved persoanlly to each user that wants to keep track of the advice they have collected.

## Goals
For this project we wanted to learn and experiment working with a backend that we created and could manipulate and were successful in doing so.

## Technologies
Javascript
React
Router
Node
Jest
CSS
Bootstrap
Firebase/Firestore

## Challenges
User Authentication and testing with router

## Wins
We can post to our database in cloud firestore and recieve all the data back.

## ScreenShots
Fetched data from public api:
![view of fetching data](/README-assets/Fetch-advice.gif)<br />

Posts user advice to cloud firestore:
![posts data to firebase](/README-assets/POST-firestore.gif)<br />


## Credits
Aaron Townsend: https://github.com/atownse
Amanda Davidson: https://github.com/ADavidson02
Estelle Staffieri: https://github.com/Estaffieri
