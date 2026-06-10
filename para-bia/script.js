// ========================================
// CONTADOR DESDE 24/03/2026
// ========================================

const dataNamoro = new Date("2026-03-24T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataNamoro;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const contador = document.getElementById("contador");

    if (contador) {

        contador.innerHTML =
        `❤️ Juntos há ${dias} dias, ${horas} horas e ${minutos} minutos ❤️`;

    }

}

setInterval(atualizarContador, 1000);
atualizarContador();


// ========================================
// CORAÇÕES SUBINDO
// ========================================

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
    (Math.random() * 18 + 12) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(criarCoracao, 1200);


// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},

{
threshold:0.15
}

);

window.addEventListener("load", () => {

const elementos = document.querySelectorAll(
".chapter, .photo-block, .polaroid, .letter, .sofa"
);

elementos.forEach(el => {

el.style.opacity = "0";

el.style.transform = "translateY(30px)";

el.style.transition =
"all .8s ease";

observer.observe(el);

});

});


// ========================================
// FRASES ROMÂNTICAS ALEATÓRIAS
// ========================================

const frases = [

"❤️ Minha lembrança favorita sempre tem você nela.",
"🌳 Algumas das melhores partes da minha vida começaram no Garden.",
"☀️ Os dias ficam mais leves quando estou com você.",
"🛋️ Nosso sofá ainda não existe, mas já é um dos meus lugares favoritos.",
"💌 Você transformou momentos simples em memórias especiais.",
"❤️ Entre todos os lugares do mundo, meu favorito continua sendo ao seu lado."

];

function trocarFrase() {

const elemento =
document.getElementById("frase-aleatoria");

if(!elemento) return;

const indice =
Math.floor(Math.random() * frases.length);

elemento.innerHTML =
frases[indice];

}

trocarFrase();

setInterval(trocarFrase, 8000);