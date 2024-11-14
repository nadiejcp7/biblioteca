window.onload = function () {
    var number = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length).split("=")[1]
    var data = number.split("%")
    var type = data[0].split("=")[1]
    var type2 = data[1].split("=")[1]
    number = data[2].split("=")[1]
    var name = "Audiolibros"
    if (type2 == "p") {
        name = "Podcasts"
    } else {
        if (type == "p") {
            document.title = "Primaria - Biblioteca"
            name = "Audiolibros_p"
        } else if (type == "k") {
            document.title = "Kids - Biblioteca"
            name = "Audiolibros_k"
        } else {
            document.title = "Secundaria - Biblioteca"
        }

    }
    fetch(name + ".txt")
        .then((res) => res.text())
        .then((text) => {
            const data = text.split('\n')[number].split("%");
            var element = document.getElementById("player")
            element.src = "./name/" + number + ".mp3"
            element = document.getElementById("portada")
            element.src = "./" + name + "_Images/" + number + ".jpg"
            element = document.getElementById("podcastTitle")
            element.innerHTML = data[1]
            element = document.getElementById("podcastAutors")
            element.innerHTML = data[0]
        })
        .catch((e) => console.error(e));

    console.log()
};