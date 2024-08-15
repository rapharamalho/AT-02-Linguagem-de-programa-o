function checar() {
    var prestacao = parseInt(document.getElementById("prestacao").value)
    var juros = parseInt(document.getElementById("juros").value)
    var meses = parseInt(document.getElementById("meses").value)

    for (i = 1; i <= meses; i++) {
        total += (total * juros /100)
    }
    alert(`O valor total de juro é: ${total}`)

document.getElementById("resultado").innerHTML = `O valor total de juro é: ${total}`

}

