## Instructions
Create an app using the next js package downlaoded and the app has to do the following: 
- It's a software app where it should have a left side naviagtion bar (Vertical navigation menu)
- The navigation bar should have the following options: 
  - Dashboard
  - Event Details

## Styling details
use as the navigation bar background color dark theme this: #202020 and with the right side border line this: #424242 
while the main home/dashboard page should have a background color of this: #191919 and the same pattern should be followed for the cards on the home page. 

The app has to do the following: 
- The dashboard goal is to act as a area for the admin to view the combined number of events doen and also see data based on different dates, ad cost etc. Full data analysis for the admin and fully customizable. Also add charts to make it more interactive. You can use these colors: 3B72FF and 6B40E3 
- The dashboard should show the number of events done (in card grid format)
Mainly one should be able to toggle between the dates and the dynamic data should be changed accordinly. 
The source of the data for the dashboard will come from the event details page where the data is stored locally 

## Event Details Page Instrcutions
- On the event detail page it should show all the events that have been done in card or list format (the option should be chosen by the admin from a simple toggle on the screen)
- It should show all the 12 months with the names (but show only those which have been done and completed)
- Each card of the month should show different events that were done in that month and on clicking it should interactable which when clicked should show a more detailed view of the event data (this is for the admin to view the data of a specific event in more detail). Main numbers include - Total amount spent, total link clicks, total guide signs ups and total event registrations. 
- Now a person can create a new event, after clicking the new event a pop up screen or somthing should appear where the admin is asked to create a new event name and choose the month and date of the event and based on the creation of the event the data should be stored locally and also shown on the dashboard and event details page. 
- Then the admin can go to this event or if created first time open it directly showing rows and column table showing details of the event like - Event Name, Date, Total Spent, Total Link Clicks, Total Guide Signs Up, Total Event Registrations, Total Guide Signs Up Cost Per Sign Up, Total Event Registration Cost Per Sign Up, Total Cost Per Click. 
- The admin should be able to edit any of the data and delete the event. 
- The data should be updated in the dashboard and event details page when any of the data is changed or deleted. 
- The data should be stored locally in the browser and should be able to be accessed even when offline. 
and user when click enter new data it should be asking to fill the data like date, total amount spent on that date, total link clicks, total guide signs up and total event regsitration and then it should be added to the table. 
- Each event happens on a certain date (for example 6th october and it would have a marketing period of rought one to two weeks before the event date to promote it and this data is showing that, till the event how much money is spent on per day basis and other details, ALSO ADD A TOTAL GLOBAL HEADER SHOWCASING MAJOR OVERALL SPENT TILL NOW, CLICKS TOTAL, GUIDE SIGN UPS TOTAL, EVENT REGISTRATIONS TOTAL)
- Color scheme same like before 

  
##MAIN THING to keep in mind
- for example 6th october and it would have a marketing period of rought one to two weeks before the event date to promote it and this data is showing that, till the event how much money is spent on per day basis and other details, ALSO ADD A TOTAL GLOBAL HEADER SHOWCASING MAJOR OVERALL SPENT TILL NOW, CLICKS TOTAL, GUIDE SIGN UPS TOTAL, EVENT REGISTRATIONS TOTAL)

## Use these
- Use ICON library similar to feather icons but for the next js project icons
- Keep the design UI modern, simple and futuristic 
- Use a modern charting library for the charts 
- Follow the color scheme of the app 
- Make the buttons vibrant blue color like before 
- Use modern Poppins font for the text 
- Use a modern date picker for the date picker 
- Use a modern table library for the table 
- Use a modern form library for the form 
- Use a modern charting library for the charts 

## Main thing 2
- Make sure everything is being used as per Next JS project and it should not crash
- The logic works as per the instructions and the data is stored locally and can be accessed even when offline
- You can use tailwind css for the styling or you can use any other css framework but it has to be modern and sleek

#File structure importance
- Make sure all the files are in the correct folder and the structure is correct and make sense
- Always make, create and update in the root directory, if any changes are needed to be made in the files give ASCII strcture along with it