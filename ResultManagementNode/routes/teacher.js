const express = require('express');
const router = express.Router();
const Student = require("../models/student");

router.get('/login',(req, res) => {
    res.render("teacher/teacherLogin");
});

router.post('/login', (req, res) => {
    if(req.body.password == "admin"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teacherLogin", {
            error : "Please Enter Correct Password"
        })
    }
});
router.get('/viewall',async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/viewall", {student : allStudents})
});


router.get('/edit/:id',async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", {user : user})
});

router.post('/edit/:id',async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
});

router.get('/delete/:id',async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
});

router.get('/option',(req,res) => {
    res.render("teacher/option")
});

router.get('/add',(req, res) => {
    res.render("teacher/addstudent");
});
router.post('/add', async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,  
        roll : req.body.roll,             
        dob : req.body.dob,
        score : req.body.score        
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
});

module.exports = router;