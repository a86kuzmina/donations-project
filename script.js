const btnVk = document.querySelector("#vk");
const btnTg = document.querySelector("#tg");
const btnInst = document.querySelector("#inst");
btnVk.addEventListener('click',() => {
    window.location.href = "https://vk.com/veschvoblago";
});
btnTg.addEventListener('click',() => {
    window.location.href = "https://t.me/veschvoblago";
});
btnInst.addEventListener('click',() =>  {
    window.location.href = "https://www.instagram.com/vesch_vo_blago/";
});
const modal__export = document.getElementById("modalExp");
const btn__export = document.getElementById("export");
const span__export = document.getElementsByClassName("close__export")[0];
const modal = document.getElementById("myModal");
const btn = document.getElementById("help");
const span = document.getElementsByClassName("close")[0];
const modal__work = document.getElementById("modalWork");
const btn__work = document.getElementById("volonter");
const span__work = document.getElementsByClassName("close__work")[0];
const modal__partner = document.getElementById("modalPartner");
const btn__partner = document.getElementById("partner");
const span__partner = document.getElementsByClassName("close__partner")[0];
btn__export.addEventListener('click', () => {
modal__export.style.display = "block";
});
span__export.addEventListener('click', () =>  {
    modal__export.style.display = "none";
});
modalExp.addEventListener('click', (event) =>  {
    if (event.target == modal__export) {
    modal__export.style.display = "none";
    }
  });
btn.addEventListener('click', () => {
    modal.style.display = "block";
  });
  span.addEventListener('click', () => {
    modal.style.display = "none";
  });
  myModal.addEventListener('click', (event) =>  {
    if (event.target == modal) {
        modal.style.display = "none";
      }
});
  btn__work.addEventListener('click', () => {
    modal__work.style.display = "block";
  });
  span__work.addEventListener('click', () => {
    modal__work.style.display = "none";
  });
  modalWork.addEventListener('click', (event) =>  {
    if (event.target == modal__work) {
        modal__work.style.display = "none";
      }
    });
  btn__partner.addEventListener('click', () => {
    modal__partner.style.display = "block";
  });
  span__partner.addEventListener('click', () =>  {
    modal__partner.style.display = " none";
  });
modalPartner.addEventListener('click', (event) =>  {        
    if (event.target == modal__partner) {
        modal__partner.style.display = "none";
    }
    });
const transition = document.querySelector('#transition');
function Object() {
  document.location = "recycle.html";
}
transition.addEventListener('click', Object);

function show() {
    if (document.getElementById("city-select").value == "novokuznetsk") {
      document.getElementById("card__kemerovo").style.display = "none";
      document.getElementById("card__novo").style.display = "block";
    }
    if (document.getElementById("city-select").value == "kemerovo") {
      document.getElementById("card__kemerovo").style.display = "block";
      document.getElementById("card__novo").style.display = "none";
    }
  }

