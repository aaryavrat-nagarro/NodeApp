const express = require("express");
const router = express.Router();
const Student = require("../models/student")

router.get('/login',(req, res) => {
    res.render("student/login");
 });
router.post('/login',async (req, res) => {

    const student = await Student.findOne({roll :  req.body.roll});    
    
    if(!student){
      res.render("student/login", {
        error : "Invalid roll number"
      })
    }      
    res.render("student/view", { one : student});
});

module.exports = router;