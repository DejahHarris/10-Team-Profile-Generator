function managerCard(member){
    return `
    <div class="card hovercard">
    <div class="cardheader">
        <div class="card-heading">
            ${member.name}
        </div>

        <div class="role">
            <img src="images/Screenshot 2022-12-10 at 10.00.14 PM.png"></img>
            Manager
        </div>
    </div>
    <div class="card-body">
        <div class="desc">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${member.id}</li>
        <li class="list-group-item">${member.email}</li>
        <li class="list-group-item">${member.role}</li>
        <li class="list-group-item">${member.officeNumber}</li>
    </ul>
        </div>
    </div>
    `
}
function engineerCard(member){
return `
<div class="card hovercard">
<div class="cardheader">
    <div class="card-heading">
        ${member.name}
    </div>

    <div class="role">
        <img src="images/Screenshot 2022-12-10 at 10.00.14 PM.png"></img>
        Manager
    </div>
</div>
<div class="card-body">
    <div class="desc">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${member.id}</li>
    <li class="list-group-item">${member.email}</li>
    <li class="list-group-item">${member.role}</li>
    <li class="list-group-item">${member.github}</li>
</ul>
    </div>
</div>
`
}

function internCard(member){
    return `
    <div class="card hovercard">
            <div class="cardheader">
                <div class="card-heading">
                    ${member.name}
                </div>

                <div class="role">
                    <img src="images/Screenshot 2022-12-10 at 10.00.14 PM.png"></img>
                    Intern
                </div>
            </div>
            <div class="card-body">
                <div class="desc">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${member.id}</li>
                        <li class="list-group-item">${member.email}</li>
                        <li class="list-group-item">${member.school}</li>
                    </ul>
                </div>
            </div>
        </div>
`
}


function generatehtml(title,team){
    return `
    <!DOCTYPE html>
<html>

<head>
    <title>${title}</title>
    <link href="style.css" rel="stylesheet">
</head>

<body>
${team.map(member =>{
    console.log(member)
   if (member.getRole()==="Manager")return managerCard(member)
   if (member.getRole()==="Engineer")return engineerCard(member)
   if (member.getRole()==="Intern")return internCard(member)
}).join("")}
        
<footer>

</footer>
</body>
</html>
    `
}

module.exports = generatehtml