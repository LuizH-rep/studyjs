const box = document.getElementById("mybox");

let tema = false; 

function cor() {
  if (!tema) {
    document.body.style.backgroundColor = "rgba(41, 41, 41, 0.863)";
    box.style.backgroundColor = "purple";
    box.style.color = "white";
  } else {
    document.body.style.backgroundColor = "";
    box.style.backgroundColor = "";
    box.style.color = "";
  }
  tema = !tema;
}

box.addEventListener("click", cor);

const up = document.getElementById("up")

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});

function upage(){
    window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
}

up.addEventListener("click", upage)

