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
function delet()
{
    document.getElementById("ecran").value = " ";
}
function fermer() {
    window.close();
}
function log() {
    let resultat = Math.log(ecran.value);
    ecran.value = resultat;
}
function tan() {
    let resultat = Math.tan(ecran.value);
    ecran.value = resultat;
}
function cos() {
    let resultat = Math.cos(ecran.value);
    ecran.value = resultat;
}
function sin() {
    let resultat = Math.sin(ecran.value);
    ecran.value = resultat;
}
function ln() {
    let resultat = Math.LN10(ecran.value);
    ecran.value = resultat;
}
function expo() {
    let resultat = Math.exp(ecran.value);
    ecran.value = resultat;
}
function abs(){
    let resultat = Math.abs(ecran.value);
    ecran.value=resultat;
}
function effacer() {
    var ecran = document.getElementById("ecran").value;
    document.getElementById("ecran").value = ecran.substring(0, ecran.length - 1);
}
function puissance2() {
    ecran = document.getElementById("ecran");
    ecran.value = ecran.value * ecran.value;
}
function racine(){
    let resultat = Math.sqrt(ecran.value);
    ecran.value=resultat;
}
function py(){
    ecran = document.getElementById("ecran");
    var resultat = Math.PI += " ";
    ecran.value += resultat;
}
function puissance() {
    
}