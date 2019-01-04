// HELLO WORLD
console.log("Hello, World!");
document.body.innerHTML += "<h1>Hello world !</h1>";
var greetingsDiv = document.querySelector("#greetings");
greetingsDiv.innerHTML = "<h1>Hello world !</h1>";

// ADDITION
var button =  document.querySelector("#button");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var result = document.querySelector("#result");
button.addEventListener("click", addition);

function addition(event) {
	result.value = parseInt(input1.value) + parseInt(input2.value);
}

// CUMUL/MOYENNE
var btn =  document.querySelector("#btn");
var data = document.querySelector("#data");
var cumul = document.querySelector("#cumul");
var moyen = document.querySelector("#moyen");
var tableau = [];

function add(event) {
    tableau.push(parseInt(data.value));
}
function total(event) {
    var sum = 0;
    tableau.forEach(function(t) {
        sum += t;
    });
    moyen.value = sum/tableau.length;

    return sum;
}
function execute(event) {
    add();
    cumul.value = total();
}
btn.addEventListener("click", execute);

// DAMIER
var createdam = document.querySelector("#createdam");
var damier = document.querySelector("#damier");

createdam.addEventListener("click", chess);

function chess() {
    for (var i=0; i < 81; i++) {
        damier.innerHTML += `<div class="square"></div>`
    }
};


// EXERCICE 4 REVERSE

// var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];
// students.sort().reverse();
// students.forEach(function(student) {
//     document.querySelector("#studentList").innerHTML += `<li>${student}</li>`;
// })

// BASIC CONSOLE //
// var alexandre = { firstname: "Alexandre", lastname: "Briffaut", birthday: "24/08/91"}
// console.log(alexandre.firstname + " " + alexandre.lastname);
// alexandre.hello = function() {
//     console.log(`Hello my name is ${this.firstname} and I'm born the ${this.birthday}`)
// }
// alexandre.hello()
// var alexandre = { firstname: "Alexandre", lastname: "Briffaut" }
// console.log(JSON.stringify(alexandre))

// var JSONText  = `{ "firstname": "Adolf", "lastname": "Hitler" }`
// console.log(JSON.parse(JSONText))

// IMAGE IS COMING //
// var button = document.querySelector("#button");
// var emile = document.querySelector("#image");
// var button2 = document.querySelector("#button2");
// var image = document.querySelector("#image2");

// button.addEventListener("click", function (event) {
//      fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
//         .then(response => response.blob())
//         .then(function (myBlob) {
//             var objectURL = URL.createObjectURL(myBlob);
//             emile.src = objectURL;
//             emile.alt = "Logo Wikipédia";
//         });
// });

// button2.addEventListener("click", function (event) {
//     fetch("https://vignette.wikia.nocookie.net/finalfantasy/images/e/e3/Ff8-squall2.jpg/revision/latest?cb=20100604071440")
//        .then(response => response.blob())
//        .then(function (myBlob) {
//            var objectURL = URL.createObjectURL(myBlob);
//            image.src = objectURL;
//            image.alt = "Squall";
//        });
// });

// LIST CARD
// var students = [];
// var list = document.querySelector("#studentsList");

// fetch("http://api-students.popschool-lens.fr/students.json")
// .then(response => response.json())
// .then(function (response) {
//     students = response.students
//     students.forEach(function(student) {
//         list.innerHTML += `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${student.firstname}</h5>
//           <p class="card-text">${student.lastname}, ${student.sex}</p>
//           <a href="#" class="btn btn-primary">Supprimer</a>
//         </div>
//       </div>`
//     });
// });

// EL FAMASO VIBRATOR //
// var button = document.querySelector("#button");

// function vibrate (){
//   navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])
// }
// button.addEventListener("click", vibrate);


// XVIDEO //
// var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

// navigator.mediaDevices.getUserMedia(constraints)
// .then(function(mediaStream) {
//   var video = document.querySelector('video');
//   video.srcObject = mediaStream;
//   video.onloadedmetadata = function(e) {
//     video.play();
//   };
// })
// .catch(function(err) { console.log(err.name + ": " + err.message); });
