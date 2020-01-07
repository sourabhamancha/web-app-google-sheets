# Web Application
This project acts as a web template that uses Google Spreadsheets as a database to store and retrieve data. The project is also an extension to Google forms, but, however, can be extended to have more unrestricted options as HTML/CSS/JavaScript are involved. It uses Google Apps Script to communicate with Google Sheets.

The project uses MaterializeCSS, which is a modern responsive CSS framework based on Material Design by Google. MaterializeCSS helps in speeding up the development and also, easy to work with.

# Google Apps Script 
The project is developed in GAS environment, which is diveded into 4 subfiles:
1)Code.gs:
  This has all the google apps script functions and acts like an API between the web template and sheets.
2)WebPage.html:
  All the HTML content of the web template is developed here.
3)WebPage-css.html
  The styling/CSS part of the web template is developed here.
4)WebPage-js.html
  The file contains JavaScript involved in the web app.
  
# Project Setup
1) Create a new project in https://script.google.com/home
2) Go to File > New > Script file and name it as Code.gs
3) Copy the code from Code.gs from this project to the newly added Code.gs
4) Make 3 new HTML files and name them WebPage.html, WebPage-css.html and WebPage-js.html and copy the respective codes in the    project and save the project
5) In the Apps Script File, go to Publish > Deploy as web app
6) Copy the web app URL and authorize the project
7) Submit

You can now use the copied URL to open the web page.
