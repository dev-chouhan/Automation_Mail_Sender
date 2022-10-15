//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// variables
var senderName;
var senderEmail;
var senderPhone;
var subject = "New contact from enquiry";

// Get requests
app.get("/", function(req, res){
    res.render("home");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.post("/contact", function(req, res){
    senderName = req.body.senderName0;
    senderEmail = req.body.senderEmail0;
    senderPhone = req.body.senderPhone0;
    message = req.body.senderMessage0;
    var body = "Name: " + senderName + "<br />       Email: " + senderEmail + "<br />       Phone no.: " + senderPhone + "<br />        Message: " + message;

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'node-123-123-112233-321@outlook.com',
            pass: 'newPassword123'
        }
    });
    
    var mailOptions = {
        from: 'node-123-123-112233-321@outlook.com',
        to: 'brainseednetworks931@gmail.com',
        subject: subject,
        text: body,  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send(error);
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect('/');
})

// Serving listening on Port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port , function () {
    console.log("Server started Successfully");
});
