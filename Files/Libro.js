const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

window.onload = function () {
    var number = parent.document.URL.substring(parent.document.URL.indexOf('?number='), parent.document.URL.length);
    fetch("Libros.txt")
        .then((res) => res.text())
        .then((text) => {
            const libros = text.split('\n')
            i = number.split("=")[1]
            const data = libros[i].split("%");
            console.log(data)
            var image = document.getElementById("LibroImg")
            image.src = "./Libros_Images/" + i + ".jpg"
            var title = document.getElementById("LibroTitulo")
            title.innerHTML = data[0]
            var autor = document.getElementById("LibroAutor")
            autor.innerHTML = data[1]
            var pub = document.getElementById("LibroPublicacion")
            pub.innerHTML = data[3] + ", " + data[2]
            var cat = document.getElementById("LibroCategoria")
            cat.innerHTML = data[4]
            var ref = document.getElementById("LibroRef")
            ref.href = "./Libros/" + i + ".pdf"
        })
        .catch((e) => console.error(e));
};