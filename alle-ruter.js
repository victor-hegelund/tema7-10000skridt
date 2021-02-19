document.addEventListener("DOMContentLoaded", () => {
    const template = document.querySelector("template");

    const url = "https://titusinde-2763.restdb.io/rest/ruter";
    const imgUrl = "https://titusinde-2763.restdb.io/media/";

    const options = {
        headers: {
            'x-apikey': "602e73575ad3610fb5bb6331"
        }
    };

    hentdata(url);
    async function hentdata() {
        console.log("hentdata")
        const result = await fetch(url, options);
        const json = await result.json();
        console.log(json)
        vis(json);
    }

    function vis(ruter) {
        console.log("vis")
        ruter.forEach(rute => {
            let klon = template.cloneNode(true).content;
            klon.querySelector(".the_img").src = imgUrl + rute.billede;
            klon.querySelector("h2").textContent = rute.navn
            klon.querySelector(".skridt").textContent = `${rute.skridt} skridt`;
            klon.querySelector(".placering").textContent = rute.placering;
            klon.querySelector("button").addEventListener("click", () => visDetaljer(rute))
            document.querySelector(".rute-list .content").appendChild(klon);
        })
    }

    function visDetaljer(rute) {
        location.href = `rute.html?id=${rute._id}`;
    }
})
