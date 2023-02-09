//basic exercise
var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
let newSandwich = JSON.parse(sandwiches);
let newFries = JSON.parse(fries);

console.log(newSandwich);
console.log(newFries);

document.getElementById("box1").innerHTML = `My favorite sandwich is a ${newSandwich.sandwich} which has approximately ${newSandwich.calories} calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories
} calories.`;
//end of basic exercise

//intermediate exercise
let employees = `[{
    "userId": "29893944817",
    "jobTitleName" : "Developer",
    "firstName": "Patrik",
    "lastName": "Jonathan",
    "emailAddress": "patrik.k.jonathan@gmail.com",
    "salary": "3500"
}, {
    "userId": "29823964877" ,
    "jobTitleName": "Analyst",
    "firstName": "Tom",
    "lastName": "Irani",
    "emailAddress": "tomrirani@gmail.com",
    "salary": "3600"
}, {
    "userId": "25833742117" ,
    "jobTitleName": "Program Directory",
    "firstName": "Tom",
    "lastName": "Hanks",
    "emailAddress": "tomhanks@gmail.com",
    "salary": "3700"
}, {
    "userId": "29823964187" ,
    "jobTitleName": "Developer",
    "firstName": "Tom",
    "lastName": "Jonathan",
    "emailAddress": "tomjonahan@gmail.com",
    "salary": "3100"
}, {
    "userId": "29823965397" ,
    "jobTitleName": "Program Directory",
    "firstName": "Jonathan",
    "lastName": "Tomas",
    "emailAddress": "jonathantomas@gmail.com",
    "salary": "3000"
}, {
    "userId": "29823964807" ,
    "jobTitleName": "Developer",
    "firstName": "John",
    "lastName": "Hill",
    "emailAddress": "johnhill@gmail.com",
    "salary": "2900"
}, {
    "userId": "29823964727" ,
    "jobTitleName": "Analyst",
    "firstName": "Tim",
    "lastName": "Jonathan",
    "emailAddress": "timjonathan@gmail.com",
    "salary": "3500"
}, {
    "userId": "29823964855" ,
    "jobTitleName": "Developer",
    "firstName": "Tod",
    "lastName": "Smith",
    "emailAddress": "todsmith@gmail.com",
    "salary": "3400"
}, {
    "userId": "29823964866" ,
    "jobTitleName": "Program Directory",
    "firstName": "Tom",
    "lastName": "Smith",
    "emailAddress": "tomsmith@gmail.com",
    "salary": "3300"
}, {
    "userId": "29823964888" ,
    "jobTitleName": "Developer",
    "firstName": "Tomas",
    "lastName": "Tomas",
    "emailAddress": "tomastomas@gmail.com",
    "salary": "3200"
}]`;
let allEmployees = JSON.parse(employees);
console.log(allEmployees);
for (let val in allEmployees) {
    document.getElementById("tBody").innerHTML += `    
            <tr>
                <th scope="row">${Number(val)+1}</th>
                <td>${allEmployees[val].userId}</td>
                <td>${allEmployees[val].jobTitleName}</td>
                <td>${allEmployees[val].firstName}</td>
                <td>${allEmployees[val].lastName}</td>
                <td>${allEmployees[val].emailAddress}</td>
                <td>${allEmployees[val].salary}</td>
            </tr>
`;
}
//end of intermediate exercise

//advanced exercise