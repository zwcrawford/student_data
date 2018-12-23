const students = [
{
    name: "Chris Miller",
    class: "History",
    info: "Failed last exam",
    score: 59
},
{
    name: "Courtney Seward",
    class: "History",
    info: "Has completed all homework",
    score: 91
},
{
    name: "Garrett Ward",
    class: "History",
    info: "Wonderful at helping other students",
    score: 88
},
{
    name: "John Dulaney",
    class: "History",
    info: "Has never missed a class or exam",
    score: 92
},
{
    name: "Greg Lawrence",
    class: "History",
    info: "Sub-par performance all around",
    score: 64
},
{
    name: "Leah Duvic",
    class: "History",
    info: "Wonderful student",
    score: 97
},
{
    name: "Jesse Page",
    class: "History",
    info: "Smokes too much. Distracting.",
    score: 76
},
{
    name: "Kevin Haggerty",
    class: "History",
    info: "Falls asleep in class",
    score: 79
},
{
    name: "Max Wolf",
    class: "History",
    info: "Talks too much",
    score: 83
},
{
    name: "Lissa Goforth",
    class: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
},
{
    name: "Tyler Bowman",
    class: "History",
    info: "When was the last time he attended class?",
    score: 48
},
{
    name: "Ray Medrano",
    class: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
}
]
// Get index element to display
let containerDiv = document.querySelector("#container");

let student = (name, className, info) => `
    <div id="student">
        ${h1(name, "xx-large passing")}
        ${section(className, "bordered dashed section--padded")}
        ${aside(info, "pushRight")}
    </div> `

let failing_student = (name, className, info) => `
    <div id="student">
        ${h1(name, "xx-large failing")}
        ${section(className, "bordered dashed section--padded")}
        ${aside(info, "pushRight")}
    </div> `

// h1 constructor function
const h1 = (text, style) => {
return `<h1 class="${style}">${text}</h1>`
};
// section constructor function
const section = (text, style) => {
return `<section class="bordered dashed ${style}">${text}</section>`
};
// aside constructor function
const aside = (text, style) => {
return `<aside class="${style}">${text}</aside>`
};

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    containerDiv.innerHTML += student(students[i].name, students[i].class, students[i].info);
  } else {
    containerDiv.innerHTML += failing_student(students[i].name, students[i].class, students[i].info);
  };
};