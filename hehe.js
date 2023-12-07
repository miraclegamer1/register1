//1
// let a = prompt("sonni yozing");

// if (a % 3 == 0 && a % 5 == 0) {
//   console.log("fizzbuzz");
// }
// else if (a % 5 == 0) {
//   console.log("buzz")
// } else if (a % 3 == 0) {
//   console.log("fizz");
// }
// else if (a % 3 != 0 && a % 5 != 0 && a > 0) {
//   a = -a;
//   console.log(a);
// } else if (a % 3 != 0 && a % 5 != 0) {
//   console.log(Math.abs(a));
// } else if (a == 0) {
//   console.log("10");
// }

//2

// let w = prompt("w necha");
// let h = prompt("h necha"); 

// if (w > h) {
//   console.log(true + " " + "bu manzara");
// }else  {
//   console.log(false + " " + "bu manzara emas");
// }

// function name(width,height) {
//   return width > height
// }

// console.log( name(100,200));

//3

// function name(a,b) {
//    a > b ? a: b
// }
// console.log(name(7,5));

//4

// let a = 10

// for (let i = 1; i <= a; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " juft");
//   }else if (i % 2 == 1) {
//     console.log(i +  " tog'");
//   }
// }

//5

// let kirit = prompt("sonnnn");

// if (kirit >= 90) {
//   alert("A");
// }else if (kirit >= 80) {
//   alert("B")
// }
// else if (kirit >= 70) {
//   alert("C")
// }
// else if (kirit >= 60) {
//   alert("D")
// }else if (kirit >= 50) {
//   alert("E")
// }


//6

// let a = "khaki";
// let b = "red";

//     a = b;
//     b = a;

//   console.log(a);
//   console.log(b);


//              sayt

///      let 


let root = document.getElementById("root");
let register = document.querySelector(".registercard");
let ismi = document.getElementById("ismi");
let yoshi = document.getElementById("yoshi");
let turm = document.getElementById("turm");
let h1 = document.createElement("h1");
let h2 = document.createElement("h1");
let h3 = document.createElement("h1");
let s = document.querySelector(".s");
let q = document.querySelector(".q");
let salom = document.getElementById("salom");

ismi.addEventListener("input", function() {
  h1.innerHTML = `😀ismiz:${ismi.value}`;
  if (ismi.value === "") {
    h1.innerHTML = "";
  }
});

yoshi.addEventListener("input", function() {
  h2.innerText = `🏆yosh: ${yoshi.value}`;
  if (yoshi.value === "") {
    h2.innerHTML = "";
  }
});

turm.addEventListener("input", function() {
  if (turm.value === "ha") {
    h3.innerText = `ooo zor😍: ${turm.value}`;
  } else if (turm.value === "yoq") {
    h3.innerText = ` yomonku😒: ${turm.value}`;
  }
  if (turm.value === "") {
    h3.innerHTML = "";
  }
});

s.addEventListener("click", function() {
  var token = "6386977009:AAHe7Q20_rIAoJVTQrVWmTUA_Z1TUxwkay0"; 
  var chat_id  = -4029762609
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${ismi.value} ${yoshi.value} ${turm.value}/`
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
  salom.innerText = "Qabul qilindi✅";
  ismi.value = "";
  yoshi.value = "";
  turm.value = "";
  h1.innerHTML = `😀ismiz:${ismi.value}`;
  if (ismi.value === "") {
    h1.innerHTML = "";
  }
  h2.innerText = `🏆yosh: ${yoshi.value}`;
  if (yoshi.value === "") {
    h2.innerHTML = "";
  }
  if (turm.value === "") {
    h3.innerHTML = "";
  }
});

q.addEventListener("click", function() {
  salom.innerText = "Qabul qilinmadi❌";
  ismi.value = "";
  yoshi.value = "";
  turm.value = "";
  if (ismi.value === "") {
    h1.innerHTML = "";
  }
  h2.innerText = `🏆yosh: ${yoshi.value}`;
  if (yoshi.value === "") {
    h2.innerHTML = "";
  }
  if (turm.value === "") {
    h3.innerHTML = "";
  }
});

register.appendChild(h1);
register.appendChild(h2);
register.appendChild(h3);



