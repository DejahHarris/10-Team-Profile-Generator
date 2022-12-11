const fs = require('fs');
const inquirer = require('inquirer');

// Employee template
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// array for employee data-manager will not be constant
const teamMembers = [];
let manager;
let teamTitle;
//prompt for project and manager info
function managerData() {
    inquirer.prompt([
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
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamTitle = managerAnswers.teamTitle;
            console.log("Now we will ask for employee information.")
            lesserEmployeeData();
        });
}
//employee data
function lesserEmployeeData() {
    inquirer.prompt([
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
    ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.school);
        team.splice(team.length-1,0,intern.getHTML());
        buildTeam();
      })
    }

    return printHTML(team);
  ;

function printHTML(team){
  fs.writeFile("Team.html",team, (err) => {
    if(err) {
      throw err;
    };
    console.log("Your team has been constructed!");
  });
  open("Team.html");
  };
  initalize()
  .then((answers)=>{
    const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
    team.splice(team.length-1,0,manager.getHTML());
    buildTeam();
  });