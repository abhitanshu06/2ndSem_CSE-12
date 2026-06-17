let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

let student = {
name: name,
roll: roll,
math: math,
science: science,
english: english
};

students.push(student);

alert("Student Added");
}

function displayStudents(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total/3;

output += `Name: ${s.name} <br> Roll: ${s.roll} | Total: ${total} | Average: ${avg.toFixed(2)} <br>`;
}

document.getElementById("output").innerHTML = output;
}

function showTopStudents(){

let output="";

for(let s of students){

let avg = (s.math + s.science + s.english)/3;

if(avg > 80){
output += `${s.name} (Average: ${avg.toFixed(2)}) <br>`;
}

}

document.getElementById("output").innerHTML = output;
}

function showFailed(){

let output="";

for(let s of students){

let avg = (s.math + s.science + s.english)/3;

if(avg < 40){
output += `${s.name} (Average: ${avg.toFixed(2)}) <br>`;
}

}

document.getElementById("output").innerHTML = output;
}

function countStudents(){

document.getElementById("output").innerHTML =
"Total Students: " + students.length;

}