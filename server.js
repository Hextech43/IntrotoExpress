// import express framework
const express = require("express")
// initilalise a port
const PORT = 3500


// create an instance of express
const app = express()
app.use(express.json())


// create A Javscript array of object

const studentInfo = {
    name :"John",
    course :"Full Stack",
    duration: "One year",
    institution : "Decagon",
    grade:{
        javaScript : 60,
        HTML : 80,
        css : 50,
        IonicAngular : 50,
        Node: 40
    }
}



// entry route
// REQUEST : GET localhost:3500/
app.get("/", (req, res)=>{
     // res.json({message: 'Welcome to ExpressJS'})
    // passing a responds with status code
    res.status(200).json({message:"Welcome to expressJS"})
})

// get student info
// REQUEST : GET localhost:3500/studentInfo
app.get("/studentInfo", (rq,res)=>{
    // res.status(200).json(studentInfo)\\
    res.status(200
        ).json({message:"List os students and their Information", data : studentInfo})
})



app.listen(PORT, ()=>{
    console.log(`sever is ready to run at port : ${PORT}`)
})





