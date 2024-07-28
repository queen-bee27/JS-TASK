const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); // '["HTML","CSS","JS","React","Node","Python"]'

let age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON); // '250'

let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON); // 'true'

const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
};
const studentJSON = JSON.stringify(student);
console.log(studentJSON); // JSON string of the student object

const selectedStudentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(selectedStudentJSON); // JSON string with only firstName, lastName, and skills

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;

const parsedTxt = JSON.parse(txt);
console.log(parsedTxt);

let maxSkills = 0;
let userWithMostSkills = '';

for (const user in parsedTxt) {
  const userSkills = parsedTxt[user].skills.length;
  if (userSkills > maxSkills) {
    maxSkills = userSkills;
    userWithMostSkills = user;
  }
}

console.log(`${userWithMostSkills} has the most skills with ${maxSkills} skills.`); // Output: Asab has the most skills with 8 skills.
