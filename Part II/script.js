function likes(element){
    let contador = element.previousElementSibling;
    let num = contador.innerText;
    num = num.split("");
    num = (Number(num[0])*10) + Number(num[1]);
    num ++;
    contador.innerText = num + " like(s)";
}