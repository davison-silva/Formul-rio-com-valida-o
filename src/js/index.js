let item = document.querySelectorAll(".item");
const botao = document.getElementById("botao");
let inputs = document.querySelectorAll(".inputs");


botao.addEventListener("click", function(){
    inputs.forEach(function(input, index){

        if(input.value !== ''){
            // console.log('valido ' + index)
            // console.log(item[index])
            item[index].classList.remove('invalido');
            item[index].classList.add('valido');
            return
        } else if (input.value === '') {
            // console.log('invalido ' + index)
            item[index].classList.remove('valido');
            item[index].classList.add('invalido');
        }
    });
});
