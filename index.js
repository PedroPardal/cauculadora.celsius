let count;
const reset = document.getElementById("reset");
const conC = document.getElementById("conC");
const conF = document.getElementById("conF");
const contador = document.getElementById("contador");
const submit = document.getElementById("submit");

document.getElementById("submit").onclick =function(){
   count = document.getElementById("graus").value;
   count = Number(count);
   document.getElementById("contador").textContent = count;
    
}
conF.onclick = function(){
    count = (count * 9/5)+32;
    count = Math.round(count);
    contador.textContent = count +"°F"
}
conC.onclick = function(){
    count = (count - 32) * 5/9
    count = Math.round(count);
    contador.textContent = count +"°C"
}
reset.onclick = function(){
    count = 0;
    contador.textContent = count +"°"
}
const botao = document.getElementById("botao");

submit.addEventListener("click", function() {
    const inputTexto = document.getElementById("graus").value;
    if (inputTexto === "") {
        alert("Por favor, digite algo no campo de texto!");
        return;
    }
    
})
submit.addEventListener("click", function() {
    const inputTexto = document.getElementById("graus").value;
    if (inputTexto = NaN) {
        alert("Você só pode digitar numeros!");
        return;
    }})


