# Automation_Mail_Sender
A responsive backend project builds on node.js, used to send automation emails on respective email ( currently using: brainseednetworks931@gmail.com)

For front-end languages used:
- HTML5
- CSS3
- Vanilla JS

For back-end JS scripts used:
- Node.js (for installing modules and basic JS functions)
- Express.js (for linking files with each other)
- Body_parser.js (for getting input in backend processing)
- nodemailer.js (for sending gmail)

This project is created as an interview problem ( for developing automation mail sending webapp ) by BrainSeed foundation.

Gmail is sended on brainseednetworks931@gmail.com, at a spam block.

##### For running this project in your environment, follow steps below:
- Pull this project in your private environment / Local Storage.
- Use "npm install", to install all dependencies inside package.json file
- In Git Bash run command "node app.js"
- Finally, in your browser search for "localhost:3000"
- WebApp will open in your browser

### for changing receiver Gmail Address:
In app.js file, search for mailOptions, inside post request for contact page.
there after "to:" keyword, you can add new receiver email

WebApp is hosted on Heroku US server, follow the link below:
      https://automation-gmail-sender.herokuapp.com/?
