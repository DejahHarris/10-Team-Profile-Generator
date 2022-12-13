const fs = require('fs');
const inquirer = require('inquirer');

// Employee template
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatehtml = require("./utils/generatehtml")

const managerQuestions = [
    {
        type: "input",
        message: "What is the name of this team/project?",
        name: "teamTitle"
    },
    {
        type: "input",
        message: "Who is the manager of this project?",
        name: "managerName"
    },
    {   // Employee ID.
        type: "input",
        message: "What is the manager's ID?",
        name: "managerID"
    },
    {   // Employee Email.
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    }]
const lesserEmpQuestions = [
    {
        type: "list",
        message: "What is this employee's role?",
        name: "employeeRole",
        choices: ["Intern", "Engineer"]
    },
    //questions for employee role
    {
        type: "input",
        message: "What is the employee's name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the employee's id?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "employeeEmail"
    },
    {
        type: "input",
        message: "What is the Engineer's Github?",
        name: "github",
        when: (userInput) => userInput.employeeRole === "Engineer"
    },
    {
        type: "input",
        message: "What's the Intern's school?",
        name: "school",
        when: (userInput) => userInput.employeeRole === "Intern"
    },
    {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to add another team member?"
    }
]

// array for employee data-manager will not be constant
const teamMembers = [];
let teamTitle;
//prompt for project and manager info
function managerData() {
    inquirer.prompt(managerQuestions).then(managerAnswers => {
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
        teamMembers.push(manager)
        teamTitle = managerAnswers.teamTitle;
        console.log("Now we will ask for employee information.")
        lesserEmployeeData();
    });
}
//employee data
function lesserEmployeeData() {
    inquirer.prompt(lesserEmpQuestions).then(answers => {
        if (answers.employeeRole === "Intern") {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee);
        } else if (answers.employeeRole === "Engineer") {
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
        }
        if (answers.newEmployee === true) {
            lesserEmployeeData();
        } else {
            fs.writeFile("./dist/team.html", generatehtml(teamTitle,teamMembers), (err) => {
                if (err) {
                    throw err;
                };
                console.log("Your team has been constructed!");
            });
           
        }
    });
}
managerData()
