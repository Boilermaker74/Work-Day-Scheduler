# Workday Scheduler 
## Description
This project is a very simple workday scheduler for tasks or appointments.  The app consists of a heading that displays the current day, date and year. The workday is split up into eight-hour segments or time blocks starting at 9:00 AM and finishing at 5:00 PM .  Each time block represents one hour in an eight-hour workday.
![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/header1.png)
The user can enter text into any of the 8-hour time blocks.  The data is then stored in local storage once the save key is pressed by the user.   

The app utilizes the API DayJS to access the current time of day.  A time block is then compared to the current time of time of day.  If that time block’s time has passed, the block is colored grey.  If the block is in the current time frame it is colored red.  Future time blocks will be colored green.  The app is dynamic. The colors of the time blocks will update as time passes.  

This project was part of a boot camp challenge, but it was exciting because it was, in my opinion, the first really practical app that we created.  It was the first challenge that I could envision using in the real world. Also, it was interesting using DayJS in the project.  Having a temporal aspect which changes with time was a departure from the static apps that only accepted input from the user.  I learned how to incorporate data from a Web API into my code. To bring  real world data into my project. We were also introduced to jQuery. 
## Deployed Application URL
https://boilermaker74.github.io/
## Table of Contents
* [Installation](#installation)
* [Features](#features)
* [Languages and Technologies Used](#languages-and-technologies-used)
* [Dependencies](#dependencies)
* [How to Use This Application](#how-to-use-this-application)
* [Licenses](#Licenses)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation
No installation is necessary. The app runs from the URL address: https://boilermaker74.github.io/  
## Features
The time blocks change color as time passes. The app utilizes the API DayJS to access the current time of day.  A time block is then compared to the current time of time of day.  If that time block’s time has passed, the block is colored grey.  If the block is in the current time frame it is colored red.  Future time blocks will be colored green.
![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/timeppf.png)

The app is dynamic. The colors of the time blocks will update as time passes. 
![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/timepast.png)

It stores user entered text into local storage
## Languages and Technologies Used
![Github license](https://img.shields.io/badge/Language-HTML,CSS,JavaScript-blue.svg)
![Github license](https://img.shields.io/badge/Technology-JQuerry,DayJS-blue.svg)
## Dependencies
N/A
## How to Use This Application:
This app is designed to organize meetings or events that fill a typical workday.  The user enters data to describe the events in the appropriate time block that corresponds to the time of that event. ![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/entertext.png)The user then presses the save button to store the information. The app responses with an alert stating that the data has been saved to local storage. 
![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/datastored.png)
Erasing the data is accomplished by deleting the text in the text box and again clicking the save button. 
## Licenses
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
## Contributors
N/A
## Testing
In the assets/script.js file on line 12, the app gets the current time of day.


![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/TOD.png)

Adding an arithmetic operation at the end of the line will change the time of day for the app. In this way, the color change of the time blocks can be confirmed without waiting for the actual time change. 

![alttext](https://github.com/Boilermaker74/Work-Day-Scheduler/blob/main/assets/images/TOD-5.png)
## Questions
Please send your questions [here](mailto:Bradm1492@gmail.com?subject=[GitHub]%20Dev%20Connect) or visit [github/Boilermaker74](https://github.com/Boilermaker74).
