var express = require("express");
var router = express.Router();
const { Student, Campus  } = require("../database/models");
const e = require("express");

/* GET all students. */
// /api/students
router.get("/", async (req, res, next) => {
  // try to get students object from database
  try {
    // students will be the result of the Campus.findAll promise
    const students = await Student.findAll({ include: Campus });
    // if students is valid, it will be sent as a json response
    console.log(students);
    res.status(200).json(students);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {

      const student = await Student.findOne({
        where: {id: id},
        include: Campus,
    });
      
      if (student !== null){
        res.status(200).json(student);
      }else{
        res.status(200).json("This student doesn't not exist!");
      }
    } catch (err) {
      next(err);
    }
});


router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, imageUrl, GPA, campusId} = req.body;
  const updatedObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      GPA: GPA,
      campusId: campusId, 
    };
  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
    const { firstName, lastName, email, imageUrl, GPA, campusId} = req.body;
    const studentObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        GPA: GPA,
        campusId: campusId, 
      };
    try {
      const newStudent= await Student.create(studentObj);
      res.status(201).send(newStudent);
    } catch (err) {
      next(err);
    }
});


router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const student = await Student.findByPk(id);
      console.log(student);
      await student.destroy();
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
});

module.exports = router;