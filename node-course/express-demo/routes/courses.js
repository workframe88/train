const express = require("express");
const routes = express.Router();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

routes.get("/", (req, res) => {
  res.send(courses);
});

routes.post("/", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);

  if (result.error)
    // 422 Unprocessable Entity
    return res.status(422).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

routes.put("/:id", (req, res) => {
  // Look up the course
  // If not existing, return 422 (Unprocessable Entity)
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");

  // Validate
  // If invalid, return 400 - Bad Request
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Update course
  // Return the updated course
  course.name = req.body.name;
  res.send(course);
});

routes.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");

  // Delete
  course.index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

module.exports = routes;
