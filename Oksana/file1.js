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
let books = `[{
    "title": "American Gods",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1462924585i/30165203.jpg",
    "link": "https://www.goodreads.com/book/show/30165203-american-gods",
    "read": "true"}, {
        "title": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
    "author": "Terry Pratchett, Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615552073i/12067.jpg",
    "link": "https://www.goodreads.com/book/show/12067.Good_Omens?from_search=true&from_srp=true&qid=54xZXmU390&rank=1",
    "read": "true"}, {
        "title": "Norse Mythology",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516128292i/37903770.jpg",
    "link": "https://www.goodreads.com/book/show/37903770-norse-mythology",
    "read": "false"}, {
        "title": "The Sandman Vol. 1: Preludes & Nocturnes",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411609637i/23754.jpg",
    "link": "https://www.goodreads.com/book/show/23754.The_Sandman_Vol_1",
    "read": "true"}, {
        "title": "Trigger Warning: Short Fictions and Disturbances",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415036119i/22522808.jpg",
    "link": "https://www.goodreads.com/book/show/22522808-trigger-warning",
    "read": "false"}, {
        "title": "Stardust",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459127484i/16793.jpg",
    "link": "https://www.goodreads.com/book/show/16793.Stardust",
    "read": "true"}, {
        "title": "Neverwhere",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348747943i/14497.jpg",
    "link": "https://www.goodreads.com/book/show/14497.Neverwhere",
    "read": "true"}, {
        "title": "Coraline",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493497435i/17061.jpg",
    "link": "https://www.goodreads.com/book/show/17061.Coraline",
    "read": "true"} 
]`;
let newBooks = JSON.parse(books);

for (let val of newBooks) {
    if (val.read == "true") {
        document.getElementById("box").innerHTML += `
    <div class="card" id="cardId" style="width: 17rem; height: 40rem; margin: 6px; background-color: white">
        <img src="${val.cover}" class="card-img-top" style="height: 60%; width: 100%" alt="${val.title}">
        <div class="card-body">
            <h5 class="card-title">${val.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${val.author}</h6>
            <a href="${val.link}" class="btn btn-success" target="blank">See more</a>
        </div>
    </div>
`;
    } else {
        document.getElementById("box").innerHTML += `
        <div class="card" id="cardId" style="width: 17rem; height: 40rem; margin: 6px; background-color: yellow">
            <img src="${val.cover}" class="card-img-top" style="height: 70%; width: 100%" alt="${val.title}">
            <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${val.author}</h6>
                <a href="${val.link}" class="btn btn-success" target="blank">See more</a>
            </div>
        </div>
    `;
    }


}



//end of advanced exercise