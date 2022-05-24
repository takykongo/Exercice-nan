let quest4 = document.querySelector('#quest4');

function effacer(){
    if(quest4.style.display !='none'){
        quest4.style.display ='none'
    }else{
        quest4.style.display ='block';
    }
}

/*quest4.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })*/


function decompte(){
    i=60;
    for(i=0 ; i> 60 ; i++ ){
        if(i>=-1){
            affiche = i;
        }else{
            affiche = i;
        }
        sec.innerHTML = affiche;
    }
}
let rec = setInterval(decompte,1000);
let sec = document.querySelector('#sec');

sec.innerHTML = (rec);

