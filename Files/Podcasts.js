const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

function crearElemento(i, title, autor) {
    const node = document.createElement("div");
    node.role = "listitem"
    node.className = "w-dyn-item"

    const a = document.createElement("a")
    a.className = "project-wrapper w-inline-block"
    a.href = "./Podcast.html?type=p%number=" + i

    const div = document.createElement("div")
    div.className = "project-image-wrapper"

    const img = document.createElement("img")
    img.src = "./Podcasts_Images/" + i + ".jpg"
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
    p.innerHTML = "No hay podcasts disponibles."
    return p
}

window.onload = function () {
    fetch('Podcasts.txt')
        .then((res) => res.text())
        .then((text) => {
            if (text == null || text == "") {
                document.getElementById("podcastLista").appendChild(crearEmpty())
            } else {
                console.log(text)
                const libros = text.split('\n')
                for (i in arrayRange(0, libros.length - 1, 1)) {
                    const data = libros[i].split("%");
                    document.getElementById("podcastLista").appendChild(crearElemento(i, data[0], data[1]))
                }
            }

        })
        .catch((e) => console.error(e));
};