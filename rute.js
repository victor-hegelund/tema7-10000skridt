 const urlParams = new URLSearchParams(window.location.search);
 const id = urlParams.get("id");

 const medieurl = "https://titusinde-2763.restdb.io/media/";
 let rute;

 const myHeaders = {

     "x-apikey": "602e73575ad3610fb5bb6331"
 }

 document.addEventListener("DOMContentLoaded", loadJSON)

 async function loadJSON() {
     const JSONData = await fetch(`https://titusinde-2763.restdb.io/rest/ruter/${id}`, {
         headers: myHeaders
     });
     rute = await JSONData.json();
     console.log("Ruter");
     visRuter(rute);
 }

 function visRuter() {
     document.querySelector(".navn").textContent = rute.navn;
     document.querySelector(".langBeskrivelse").textContent = rute.langBeskrivelse;
     document.querySelector(".billede").src = medieurl + rute.billede;
     document.querySelector(".skridt").textContent = rute.skridt + " Antal";
     document.querySelector(".placering").textContent = rute.placering;
     document.querySelector(".bonus_info").textContent = rute.bonus_info;
     document.querySelector("button").addEventListener("click", tilbage);
 }

 function tilbage() {
     history.back();
 }
