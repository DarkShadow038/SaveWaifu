let images = [
    "../public/img/sorteio/waifu1.jpg",
    "../public/img/sorteio/waifu2.jpg",
    "../public/img/sorteio/waifu3.jpg",
    "../public/img/sorteio/waifu4.jpg",
]

window.addEventListener("load", function() {
    var rand1 = Math.round(Math.random() * 3 + 1);
    var rand2 = Math.round(Math.random() * 3 + 1);
    var rand3 = Math.round(Math.random() * 2 + 1);

    switch (rand1) {
        case 1:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/waifu1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/waifu2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/waifu3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/waifu4.jpg";
            break;
    }
    switch (rand2) {
        case 1:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/waifu1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/waifu2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/waifu3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/waifu4.jpg";
            break;
    }
    switch (rand3) {
        case 1:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/waifu1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/waifu2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/waifu3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/waifu4.jpg";
            break;
    }

    if (rand1 == 1 && rand2 == 1 && rand3 == 1) {
        document.getElementById("sucesso").innerText = "Você salvou a Megumin! :3";
    }
	else if(rand1 == 2 && rand2 == 2 && rand3 == 2) {
        document.getElementById("sucesso").innerText = "Você salvou a Nico! :3";
	}
	else if(rand1 == 3 && rand2 == 3 && rand3 == 3) {
        document.getElementById("sucesso").innerText = "Você salvou a Shimakaze! :3";
	}
	else if(rand1 == 4 && rand2 == 4 && rand3 == 4) {
        document.getElementById("sucesso").innerText = "Você salvou a Kitsune! :3";
	}
	else {
        document.getElementById("fracasso").innerText = "Você não salvou a Waifu!";
    }
});