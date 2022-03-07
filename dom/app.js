console.log("im being printed by the Javascript file");

const h1 = document.querySelector("h1");

h1.innerText = "yay its monday";
h1.style.color = "red";

const demodiv = document.querySelector("#demodiv");

const p1 = document.createElement("p"); //query selector returns elements that it find or element that it creates
p1.innerText = "I'm the first paragraph";

//append child needed to out p1 inside div

const p2 = document.createElement("p"); 
p2.innerText = "I'm 2";

const p3 = document.createElement("p"); 
p3.innerText = "I'm third";

demodiv.appendChild(p1);
demodiv.appendChild(p2);
demodiv.appendChild(p3);

const paragraphs = document.querySelectorAll("p")

console.log(paragraphs);

const makeTextBlue = function (){
for (let i = 0; i <paragraphs.length; i++){
    paragraphs[i].classList.add("blue-text");
}   
}

const textChnager = document.querySelectorAll("#text-changer");

textChnager.addEventListener("click", makeTextBlue);

