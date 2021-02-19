document.addEventListener("DOMContentLoaded", () => {
    const template = document.querySelector("template");

    const url = "https://titusinde-2763.restdb.io/rest/ruter";
    const imgUrl = "https://titusinde-2763.restdb.io/media/";

    let filterMin;
    let filterMax;

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
        document.querySelector(".rute-list .content").textContent = "";
        console.log("vis")
        ruter.forEach(rute => {
            console.log("filterMin: " + filterMin)
            console.log("filterMax: " + filterMax)
            console.log("rute.skridt: " + rute.skridt)
            if (rute.skridt >= filterMin && rute.skridt <= filterMax) {
                let klon = template.cloneNode(true).content;
                klon.querySelector(".the_img").src = imgUrl + rute.billede;
                klon.querySelector("h2").textContent = rute.navn
                klon.querySelector(".skridt").textContent = `${rute.skridt} skridt`;
                klon.querySelector(".placering").textContent = rute.placering;
                klon.querySelector("button").addEventListener("click", () => visDetaljer(rute))
                document.querySelector(".rute-list .content").appendChild(klon);
            }
        })
    }

    function visDetaljer(rute) {
        location.href = `rute.html?id=${rute._id}`;
    }









    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider .thumb.left");
    var thumbRight = document.querySelector(".slider .thumb.right");
    var range = document.querySelector(".slider .range");

    function setLeftValue() {
        var _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        document.querySelector("#output-left").textContent = _this.value;

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";

        filterRuterMin(_this);
    }
    setLeftValue();

    function setRightValue() {
        var _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

        document.querySelector("#output-right").textContent = _this.value;

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";

        filterRuterMax(_this);
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function () {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
        thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
        thumbRight.classList.remove("active");
    });

    function filterRuterMin(_this) {
        filterMin = _this.value;
        console.log("Min: " + filterMin);
        hentdata();
    }

    function filterRuterMax(_this) {
        filterMax = _this.value;
        console.log("Max: " + filterMax);
        hentdata();
    }


})
