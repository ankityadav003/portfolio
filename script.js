function myFunction() {
  var x = document.getElementById("a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function valid() {
  if (document.frm.name.value.length < 5) {
    alert("Enter your name")
    return false;
  }
  else if (document.frm.email.value == "") {
    alert("Enter your email")
    return false;
  }
  else if (document.frm.email.value == "") {
    alert("Enter your email")
    return false;
  }
  else if (document.frm.number.value == "") {
    alert("Enter your number")
    return false;
  }
  else if (document.frm.subject.value.length < 15) {
    alert("Enter your subject (minimum 10 words)")
    return false;
  }
  else {
    myFunction4();
    alert("Thank you! Your details has been succefully saved.")
  }
}

function myFunction4() {
  var what = document.getElementById("chat1");
  what.classList.toggle("chat1");
}
function myFunction5() {
  var drop = document.getElementById("dropdown");
  drop.classList.toggle("drop");
}
function myFunction6() {
  var drop = document.getElementById("dropdown-2");
  drop.classList.toggle("drop-2");
}

function whatsapp() {
  var whatsapp = document.getElementById("whatsapp2");
  whatsapp.classList.toggle("whatsapp-container-open");
}

function active() {
  var active = document.getElementById("second-nav");
  active.classList.toggle("second-nav-active");
}

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


var type = new Typed(".type1", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var type = new Typed(".type", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});




var modal = document.getElementById("myModal");
let logo = document.getElementById('logo-2')
logo.onclick = function () {
  modal.style.display = "block";
}

var span = document.getElementById("cross");
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let logos = document.getElementById('logo')
logos.onclick = function () {
  modal.style.display = "block";
}

let hero = document.getElementById("hero");
let nav = document.querySelector("nav");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? nav.classList.add("sticky")
      : nav.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hero);


// var row = document.getElementById("row");
// const numberObs = new IntersectionObserver(
//   (entries, observer) => {
//     let [entry] = entries
//     console.log(entry)
//     if (!entry.isIntersecting) return;
//     let countingNum = document.querySelectorAll(".count");
//     let speed = 10;
//     countingNum.forEach((curElem) => {
//       let updateNumber = () => {
//         let targetNumber = parseInt(curElem.dataset.number)
//         let initialNum = parseInt(curElem.innerText)
//         let increaseNum = Math.trunc(targetNumber / speed)
//         if (initialNum < targetNumber) {
//           curElem.innerText = initialNum + increaseNum

//           setTimeout(
//             updateNumber,
//             80);
//         }
//       };
//       updateNumber()
//     })

//     observer.unobserve(row)
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// numberObs.observe(row)

