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

//Question 1:When does the PROG200 course start?
function findOneCourse(array) {
  if (array.CourseId === "PROG200") {
    return array;
  } else {
    return false;
  }
}

let foundClass = courses.find(findOneCourse);
console.log(foundClass.StartDate);

//or

 console.log("----------------------------------");

function findOneCourse(course) {
  return course.CourseId === "PROG200";
}

let findThatDate = courses.find(findOneCourse);
console.log(findThatDate.StartDate);

//or

console.log("----------------------------------");

//Old way
for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId === "PROG200") {
    console.log(`${courses[i].StartDate}`);
  }
}

//OR 

let course = courses.find(theC=> theC.CourseId == "PROG200")


console.log("----------------------------------");

//Question 2:  What is the title of the PROJ500 course?
function findOneCourseTitle(array) {
  if (array.CourseId === "PROJ500") {
    return true;
  } else {
    return false;
  }
}

let theCourse = courses.find(findOneCourseTitle);
console.log(theCourse.Title);

//or

console.log("----------------------------------");

function findThatOneCourse(arr){
    return arr.CourseId === "PROJ500";
}

let theOneCourseTitle = courses.find(findThatOneCourse);
console.log(theOneCourseTitle.Title)

console.log("----------------------------------");



//or

function findClassTitleAlternative() {
  let foundClass = courses.find((course) => course.CourseId === "PROJ500"); // with an arrow function
  if (foundClass) {
    console.log(foundClass.Title);
  }
}

findClassTitleAlternative();

//Question 3: What are the titles of the courses that cost $50 or less
console.log("-----------------");

function findManyTitles(course) {
  if (course.Fee <= 50.0) {
    return true;
  } else {
    return false;
  }
}

let foundManyClasses = courses.filter(findManyTitles);
console.log(foundManyClasses);

//What classes meet in "Classroom1"
console.log("-----------------");

function classroomMeetUpLocation(array) {
  if (array.Location === "Classroom 1") {
    return true;
  } else {
    return false;
  }
}

let classes = courses.filter(classroomMeetUpLocation);
console.log(classes);
