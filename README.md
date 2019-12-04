# Facial-Recognition-Attendance
Repository hosting the source code for the Facial Recognition Based Attendance Application

## What is this project?
This project will use the facial recognition as an alternative for the many current attendance taking systems. Facial recognition will eliminate or significantly reduce the issues of said attendance techniques by an automated system of recognizing which student is currently present in the room. Moreover, it will involve little user interaction in the user interface of the web application platform. The user audience is targeted to professors and teachers to a provide time-efficient and user-friendly attendance system for institutions. 

The real-world issues faced in many institutions show that the duration of attendance check causes wasted lecture time, confusion, inaccuracy, and human error. Creating a sign in sheet, calling out names, using clickers all become tedious tasks that can be easily eliminated in this age of technology. Automating this task will relieve time consuming stress, as well as make students aware that they need to attend class each and every period. This project can also minimize the rate at which peers will sign each other in if they are absent.

## How will this project be used?
The user (teacher) will first have to log in, which logging in will require checking the credentials in the database and return back with either a correct or incorrect credentials message. After the credentials are checked the user will be redirected to the main dashboard. If it's their first time logging in, the user will then need to create a class with course information and create students for the class with student information.
Then they will upload an image, which will find faces of the students, and then select the ‘take attendance’ option where the API will start taking data from the image to recognize the faces. Once the faces have been recognized as students, the facial_recognition API will communicate with our attendance API and with the database to mark students as present or absent.

Along with the 'take attendance' option, there are also options to see the attendance of a student, a particular class session and from the beginning of the semester to the present day. There will even be a section with recent class sessions that will give a summary of the attendance of the most recent class session.

# Contributors
Sean Droke
Bella Yang
Tyler Allen
Ioannis Kiouris Kyparisis
Chris Bechter
Jagnoor Singh
