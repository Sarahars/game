const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () =>{
    btn1.style.display="none";
    btn2.style.display="block";
})

btn2.addEventListener("click", () =>{
    btn2.style.display="none";
    btn1.style.display="block";
})