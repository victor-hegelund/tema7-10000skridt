 const urlParams = new URLSearchParams(window.location.search);
 const id = urlParams.get("id");

 const medieurl = "https://titusinde-2763.restdb.io/media/";

 const myHeaders = {

     "x-apikey": "602e73575ad3610fb5bb6331"
 }

 document.addEventListener("DOMContentLoaded", loadJSON)

 async function loadJSON() {
     const JSONData = await fetch(`https://babushka-dd8a.restdb.io/rest/menu/${id}`, {
         headers: myHeaders
     });
     ret = await JSONData.json();
     console.log("Ruter", rute);
     visRet(ret);
 }

 function visRet() {

     document.querySelector(".langBeskrivelse").textContent = ret.langBeskrivelse;
     document.querySelector(".billede").src = medieurl + ret.billede;
     document.querySelector(".skridt").textContent = ret.skridt;
     document.querySelector(".placering").textContent = ret.placering;
     document.querySelector(".bonus_info").textContent = ret.bonus_info;
     document.querySelector("button").addEventListener("click", tilbage);
 }

 function tilbage() {
     history.back();
 }



 //Web URL
 //https://titusinde-2763.restdb.io/rest/ruter
 //


 //document.addEventListener("DOMContentLoaded", () => {
 //    const template = document.querySelector("template");
 //
 //    const url = "https://titusinde-2763.restdb.io/rest/ruter";
 //    const imgUrl = "https://titusinde-2763.restdb.io/media/";
 //
 //    const options = {
 //        headers: {
 //            'x-apikey': "602e73575ad3610fb5bb6331"
 //        }
 //    };
 //
 //    hentdata(url);
 //    async function hentdata() {
 //        console.log("hentdata")
 //        const result = await fetch(url, options);
 //        const json = await result.json();
 //        console.log(json)
 //        vis(json);
 //    }
 //
 //    function vis(ruter) {
 //        console.log("vis")
 //        ruter.forEach(rute => {
 //            let klon = template.cloneNode(true).content;
 //            klon.querySelector(".the_img").src = imgUrl + rute.billede;
 //            klon.querySelector("h2").textContent = rute.navn
 //            klon.querySelector(".skridt").textContent = rute.skridt;
 //            klon.querySelector(".placering").textContent = rute.placering;
 //            document.querySelector(".rute-list .content").appendChild(klon);
 //        })
 //    }
 //})
