function afficher(val) 
{ 
    document.getElementById("ecran").value+=val;
}
function calculer()
{
    let a = document.getElementById("ecran").value 
    let b = eval(a) 
    document.getElementById("ecran").value = b 
}

