const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'rahul.sanjay009@gmail.com',
        pass: 'Sanjosestate$321'
    },
    tls: {
        rejectUnauthorized: false
    }
});


/*transporter.use('compile',hbs({
    viewEngine:  {
        extName: '.handlebars',
        partialsDir: 'src',
        layoutsDir: './views',
        defaultLayout: 'forgotpass.handlebars',
      },
    viewPath: './views'
}));*/

var email='rahul.sanjay009@gmail.com';
let HelperOptions={
    from: '"Rahul Sanjay M" <rahul.sanjay009@gmail.com',
    to: email,
    cc: 'monadarling858@gmail.com',
    bcc:'gowthamsps98@gmail.com',
    subject: 'Test from Nodemailer',
    html: {path:'./views/forgotpass.html'},
    context: {
        name: "Ittop",
        uname: "baka",
        code: "ebshje"
    }
};
transporter.sendMail(HelperOptions,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log('The message was sent');
    console.log(info);
    }
});