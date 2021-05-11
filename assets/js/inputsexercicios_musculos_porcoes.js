musculos_drop_down = filtraPorMusculo(arrMusculos)
console.log(musculos_drop_down)


function bota_inputs_exercicios_musc(){
    var botao_options_drop_down = document.getElementsByClassName('drop-down-options')
    var container_drop_down = botao_options_drop_down
    for(let item of botao_options_drop_down){
        musculos_drop_down.forEach((el,index) => {
            let option = document.createElement('div')
            option.setAttribute('class','option-drop-down')
            option.innerHTML = `<p>${el.Nome}</p>`
            option.style.animation = `move-drop-down 700ms ${index*40}ms ease-out forwards`
            item.appendChild(option)
        });
    }
}
    // botao_options_drop_down.style.border = '1px solid red'
    // musculos_drop_down.forEach((el,index)=>{
    //     delay = index*10
    //     let option = document.createElement('div')
    //     option.setAttribute('class','option-drop-down')
    //     option.innerHTML = `<p>${el.Nome}</p>`
    //     option.style.animationDelay = delay
    //     botao_options_drop_down.appendChild(option)
    // })
    

//cubic-bezier(0.175, 0.885, 0.32, 1.275) 

