//ejercicio N°1

let bordeRojo = false;

function cambiarBorde() {
    let img = document.getElementById('warcraft1');

    if (bordeRojo) {
        img.style.border = '';
        bordeRojo = false;
    } else {
        img.style.border = '5px solid red';
        bordeRojo = true;
    }
}

//ejercicio N°2

function calcularStickers() {
    let cantidadSticker1 = Number(document.getElementById("sticker1").value);
    let cantidadSticker3 = Number(document.getElementById("sticker3").value);
    let cantidadSticker2 = Number(document.getElementById("sticker2").value);
    
    let totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    if (totalStickers <= 10) {
        document.getElementById("resultado1").textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        document.getElementById("resultado1").textContent = "Llevas demasiados stickers.";
        
    }
}


//ejercicio N°3

function verificarPassword() {
    let password1 = Number(document.getElementById("passwordSelect1").value);
    let password2 = Number(document.getElementById("passwordSelect2").value);
    let password3 = Number(document.getElementById("passwordSelect3").value);

    if (password1 === 7 && password2 === 7 && password3 === 7) {
        document.getElementById("resultado2").textContent = "Password 1 correcto.";
    } else if (password1 === 9 && password2 === 1 && password3 === 1) {
        document.getElementById("resultado2").textContent = "Password 2 es correcto.";
    } else {
        document.getElementById("resultado2").textContent = "Password incorrecto.";
    }
}
