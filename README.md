# Friend-Finder

This is like a dating app but for friends. The user can take a survey and find a buddy that has the highest compatibility based on a number of survey questions.

## Tools Utilized
* Express
* Heroku

## Instructions
1. Go to the home page and click on the "Take Survey" button
2. You will be brought to a new page where you need to add your name and a photo url to associate with yourself
3. The following is a 10 question survey where you answer each one on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree).
4. The app will then use an algorithm to calculate the buddy that has the highest compatibility with you and display their name and photo back to you on a modal

## How It Works
The app stores each buddy in its database and then once a new user takes the survey, it compares their answers with the rest of the buddys in the system. The way this is calculated is by finding the absolute difference between the two users' scores and the one with the lowest difference has the highest compatibility.

You can also click on the "API Buddies List" button towards the bottom of the page to view all the buddies API in JSON format.

### App View
![heybud](https://user-images.githubusercontent.com/26778117/67450725-2d64dc00-f5d3-11e9-8a59-e8056d19b3e1.PNG)

## Author(s)
[Madeleine Prak](https://github.com/madeleineprak/)