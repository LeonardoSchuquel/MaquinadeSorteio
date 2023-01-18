let name = document.getElementById('name')
let lista = document.getElementById('voluntarios')
let res = document.getElementById(`res`)
let pessoas = []

function registrar() {

    if (name.value.length == 0) {
        alert('[ERRO] Sem nome para registro')
    } else {

        pessoas.push(name.value)
        let item = document.createElement('option')
        item.innerText = name.value
        lista.appendChild(item)
    }
    name.value = ''
    name.focus()
}

function sordear() {

    if (pessoas.length < 0) {
        alert('[ERRO] Não dá para fazer um sordeio com menos de 2 candidados')
    } else {
        let s = Math.floor(Math.random() * pessoas.length)
        res.innerHTML = `<h2>${s + 1}</h2><p>${pessoas[s]}</p>`
    }


}