let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

let course = courses.find((course) => {
  return course.CourseId === "PROG200";
});

console.log(course.StartDate);

console.log("-----------------------------------");

let courseShort = courses.find((courseShort) => courseShort.CourseId === "PROG200");
console.log(courseShort.StartDate);

console.log("-----------------------------------");

let courseAlt = courses.find((c) => c.CourseId === "PROG200");
console.log(courseAlt.StartDate);

console.log("-----------------------------------");

console.log("-----------------------------------");
//Question 3
let courseFilter = courses.filter((courseFilter) => {
  return parseFloat(courseFilter.Fee) <= 50;
});

console.log(courseFilter);

console.log("-----------------------------------");
//Question 3
let courseFilterShort = courses.filter((courseFilterShort) => parseInt(courseFilterShort.Fee) <= 50);

console.log(courseFilterShort);

console.log("-----------------------------------");
//Question 4
let classroomFilter = courses.filter((classroomFilter) => classroomFilter.Location === "Classroom 1");
console.log(classroomFilter);
