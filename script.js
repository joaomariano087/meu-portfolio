/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if(destino){
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   ANIMAÇÃO DE SCROLL
========================= */

const elementos = document.querySelectorAll(".animar");

function animarSecoes(){
  elementos.forEach(el => {

    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if(posicao < alturaTela - 100){
      el.classList.add("ativo");
    }

  });
}

window.addEventListener("scroll", animarSecoes);

/* executa ao carregar */
animarSecoes();