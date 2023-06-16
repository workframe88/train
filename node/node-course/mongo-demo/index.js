const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not Connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublic: Boolean,
});

async function createCourse() {
  const Course = mongoose.model("Course", courseSchema);
  const course = new Course({
    name: "Kowit Test",
    author: "Frame",
    tags: ["angular", "frontend"],
    isPublic: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourse() {
  const courses = await Course
    //.find({price:{ $gte: 10 , $lte: 20 }});
    //.find({ price: { $in: [10, 15, 20] } })
    //.find()
    //.or([{ author: "Frame" }, { isPublished: true }])
    //.find({ author: /^Frame/ })
    // .find({ author: /Kowit$/i })
    // .find({ author: /.*Frame.*/i })
    .find({ author: "Frame", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
createCourse();
