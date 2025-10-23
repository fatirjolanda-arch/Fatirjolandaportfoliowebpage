const buka1 = document.querySelector(".cer2 h2");
const buka = document.querySelector(".certificate");
const tutup = document.querySelector(".certificate button");


buka1.addEventListener("click", () => {
    buka.style.display = "block";
});

tutup.addEventListener("click", () => {
    buka.style.display= "none";
 });

 const buka2 = document.querySelector(".cer1 #h21");
 const popup = document.querySelector(".ijazah");
 const tutup1 = document.querySelector(".ijazah button");

 buka2.addEventListener("click", () => {
    alert("This image is Not available");
 });



 const buka3 = document.querySelector(".cer1 #h12");
 
 buka3.addEventListener("click", () => {
   alert("This image is Not available");
 });

 const buka4 = document.querySelector(".cer1 #h13");
 const popup1 = document.querySelector(".IELTS");
 const tutup2 = document.querySelector(".IELTS button");

 buka4.addEventListener("click", () => {
   popup1.style.display = "block";
 });

 tutup2.addEventListener("click", () => {
   popup1.style.display = "none";
 });