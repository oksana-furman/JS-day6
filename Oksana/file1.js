//basic exercise
// var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
// var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
// let newSandwich = JSON.parse(sandwiches);
// let newFries = JSON.parse(fries);

// console.log(newSandwich);
// console.log(newFries);

// document.getElementById("box1").innerHTML = `My favorite sandwich is a ${newSandwich.sandwich} which has approximately ${newSandwich.calories} calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories
// } calories.`;
//end of basic exercise

//intermediate exercise
// let employees = `[{
//     "userId": "29893944817",
//     "jobTitleName" : "Developer",
//     "firstName": "Patrik",
//     "lastName": "Jonathan",
//     "emailAddress": "patrik.k.jonathan@gmail.com",
//     "salary": "3500"
// }, {
//     "userId": "29823964877" ,
//     "jobTitleName": "Analyst",
//     "firstName": "Tom",
//     "lastName": "Irani",
//     "emailAddress": "tomrirani@gmail.com",
//     "salary": "3600"
// }, {
//     "userId": "25833742117" ,
//     "jobTitleName": "Program Directory",
//     "firstName": "Tom",
//     "lastName": "Hanks",
//     "emailAddress": "tomhanks@gmail.com",
//     "salary": "3700"
// }, {
//     "userId": "29823964187" ,
//     "jobTitleName": "Developer",
//     "firstName": "Tom",
//     "lastName": "Jonathan",
//     "emailAddress": "tomjonahan@gmail.com",
//     "salary": "3100"
// }, {
//     "userId": "29823965397" ,
//     "jobTitleName": "Program Directory",
//     "firstName": "Jonathan",
//     "lastName": "Tomas",
//     "emailAddress": "jonathantomas@gmail.com",
//     "salary": "3000"
// }, {
//     "userId": "29823964807" ,
//     "jobTitleName": "Developer",
//     "firstName": "John",
//     "lastName": "Hill",
//     "emailAddress": "johnhill@gmail.com",
//     "salary": "2900"
// }, {
//     "userId": "29823964727" ,
//     "jobTitleName": "Analyst",
//     "firstName": "Tim",
//     "lastName": "Jonathan",
//     "emailAddress": "timjonathan@gmail.com",
//     "salary": "3500"
// }, {
//     "userId": "29823964855" ,
//     "jobTitleName": "Developer",
//     "firstName": "Tod",
//     "lastName": "Smith",
//     "emailAddress": "todsmith@gmail.com",
//     "salary": "3400"
// }, {
//     "userId": "29823964866" ,
//     "jobTitleName": "Program Directory",
//     "firstName": "Tom",
//     "lastName": "Smith",
//     "emailAddress": "tomsmith@gmail.com",
//     "salary": "3300"
// }, {
//     "userId": "29823964888" ,
//     "jobTitleName": "Developer",
//     "firstName": "Tomas",
//     "lastName": "Tomas",
//     "emailAddress": "tomastomas@gmail.com",
//     "salary": "3200"
// }]`;

// let allEmployees = JSON.parse(employees);
// console.log(allEmployees);
// for (let val in allEmployees) {
//     document.getElementById("tBody").innerHTML += `    
//             <tr>
//                 <th scope="row">${Number(val)+1}</th>
//                 <td>${allEmployees[val].userId}</td>
//                 <td>${allEmployees[val].jobTitleName}</td>
//                 <td>${allEmployees[val].firstName}</td>
//                 <td>${allEmployees[val].lastName}</td>
//                 <td>${allEmployees[val].emailAddress}</td>
//                 <td>${allEmployees[val].salary}</td>
//             </tr>
// `;
// }
//end of intermediate exercise

//advanced exercise
let books = `[{
    "title": "American Gods",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1462924585i/30165203.jpg",
    "link": "https://www.goodreads.com/book/show/30165203-american-gods",
    "read": "true",
    "genres": "Fantasy, Fiction, Mythology, Urban Fantasy, Science Fiction Fantasy, Adult, Contemporary, Horror",
    "pages": "635 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
    "author": "Terry Pratchett, Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615552073i/12067.jpg",
    "link": "https://www.goodreads.com/book/show/12067.Good_Omens?from_search=true&from_srp=true&qid=54xZXmU390&rank=1",
    "read": "true",
    "genres": "Fantasy, Fiction, Humor, Urban Fantasy, Comedy, Science Fiction Fantasy, Adult, Supernatural",
    "pages": "491 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Norse Mythology",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516128292i/37903770.jpg",
    "link": "https://www.goodreads.com/book/show/37903770-norse-mythology",
    "read": "false",
    "genres": "Fantasy, Mythology, Fiction, Short Stories, Historical Fiction, Classics, Adult, Retellings, Religion",
    "pages": "301 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "The Sandman Vol. 1: Preludes & Nocturnes",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411609637i/23754.jpg",
    "link": "https://www.goodreads.com/book/show/23754.The_Sandman_Vol_1",
    "read": "true",
    "genres": "Graphic Novels, Comics, Fantasy, Fiction, Horror, Mythology, Urban Fantasy, Adult",
    "pages": "233 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Trigger Warning: Short Fictions and Disturbances",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415036119i/22522808.jpg",
    "link": "https://www.goodreads.com/book/show/22522808-trigger-warning",
    "read": "false",
    "genres": "Fantasy, Short Stories, Fiction, Horror, Science Fiction Fantasy, Anthologies, Poetry, Adult",
    "pages": "310 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Stardust",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459127484i/16793.jpg",
    "link": "https://www.goodreads.com/book/show/16793.Stardust",
    "read": "true", 
    "genres": "Fantasy, Fiction, Romance, Young Adult, Adventure, Magic, Science Fiction Fantasy, Fairy Tales, Adult",
    "pages": "248 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Neverwhere",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348747943i/14497.jpg",
    "link": "https://www.goodreads.com/book/show/14497.Neverwhere",
    "read": "true",
    "genres": "Fantasy, Fiction, Urban Fantasy, Science Fiction Fantasy, Horror, Adventure, Adult, Young Adult",
    "pages": "370 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"}, {
        "title": "Coraline",
    "author": "Neil Gaiman",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493497435i/17061.jpg",
    "link": "https://www.goodreads.com/book/show/17061.Coraline",
    "read": "true",
    "genres": "Fantasy, Horror, Fiction, Young Adult, Childrens, Paranormal, Adventure, Mystery",
    "pages": "176 pages",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum cupiditate corrupti necessitatibus iure tenetur eveniet itaque perspiciatis, eaque odit nihil fuga recusandae ad at omnis molestias a repellat voluptatum ullam repellendus! Id aliquid quod quibusdam blanditiis saepe sequi provident repellat laudantium aliquam beatae, voluptates architecto recusandae voluptatum vero tempore?"} 
]`;
// console.log("here: " + books.charAt(710));
let newBooks = JSON.parse(books);
let i = 0;
for (let val of newBooks) {
    let color = "";
    if (val.read == "true") {
        color = "white";
    } else {
        color = "yellow";
    }
    document.getElementById("box").innerHTML += `
    <div class="card" id="cardId" style="width: 17rem; height: 40rem; margin: 6px; background-color: ${color}">
        <img src="${val.cover}" class="card-img-top" style="height: 60%; width: 100%" alt="${val.title}">
        <div class="card-body">
            <h5 class="card-title">${val.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${val.author}</h6>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#books${i}">See more</button>
        </div>
    </div>

    <div class="modal fade" id="books${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="title${i}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="title${i}">${val.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <p class="text-muted">Genres: ${val.genres}</p>
                           <p class="text-muted">${val.pages}</p>
                           <p>${val.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success btnLink">
                            <a href="${val.link}" target="blank" style="text-decoration: none; color: white">Go to website</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
`;
    i++;
}