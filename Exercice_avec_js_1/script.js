let btn = document.getElementById("btn");
let div_cadre = document.getElementsByClassName("div_cadre");
btn.addEventListener("click",() => {
  if(getComputedStyle(div_cadre).display != "none"){
    div_cadre.style.display = "none";
  } else {
    div_cadre.style.display = "block";
  }
});

