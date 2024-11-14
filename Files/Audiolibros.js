const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

function crearElemento(type, i, title, autor) {
    const node = document.createElement("div");
    node.role = "listitem"
    node.className = "w-dyn-item"

    const a = document.createElement("a")
    a.className = "project-wrapper w-inline-block"
    a.href = "./Podcast.html?type=" + type + "%type2=lnumber=" + i

    const div = document.createElement("div")
    div.className = "project-image-wrapper"

    const img = document.createElement("img")
    img.src = "./Audiolibros_Images/" + i + ".jpg"
    img.loading = "lazy"
    img.sizes = "(max-width: 479px) 92vw, (max-width: 1919px) 45vw, 552px"
    img.className = "project-image"

    const div2 = document.createElement("div")
    div2.className = "post-info slide-in-bottom-400ms"
    div2.style = "align-items: center;"

    const div3 = document.createElement("div")
    div3.className = "project-name"
    div3.innerHTML = title

    const p = document.createElement("p")
    p.className = "regular-paragraph white"
    p.innerHTML = autor

    div2.appendChild(div3)
    div2.appendChild(p)

    div.appendChild(img)

    a.appendChild(div)
    a.appendChild(div2)

    node.appendChild(a)

    return node
}

function crearEmpty() {
    const p = document.createElement("p")
    p.className = "regular-paragraph white"
    p.innerHTML = "No hay audiolibros disponibles."
    return p
}

function addBooks(type) {
    var name = "Audiolibros.txt"
    if (type == "p") {
        name = "Audiolibros_p.txt"
    } else if (type == "k") {
        name = "Audiolibros_k.txt"
    }
    fetch(name)
        .then((res) => res.text())
        .then((text) => {
            if (text == null || text == "") {
                document.getElementById("listaAudiolibros").appendChild(crearEmpty())
            } else {
                console.log(text)
                const libros = text.split('\n')
                for (i in arrayRange(0, libros.length - 1, 1)) {
                    const data = libros[i].split("%");
                    document.getElementById("listaAudiolibros").appendChild(crearElemento(type, i, data[0], data[1]))
                }
            }

        })
        .catch((e) => console.error(e));
}

window.onload = function () {
    var number = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    console.log(number)
    var type = number.split("=")[1]
    if (type == "s") {
        document.title = "Secundaria - Biblioteca"
    } else if (type == "p") {
        document.title = "Primaria - Biblioteca"
    } else {
        document.title = "Kids - Biblioteca"
    }
    addBooks(type)
};