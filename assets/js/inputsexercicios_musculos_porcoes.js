musculos_drop_down = filtraPorMusculo(arrMusculos)
console.log(musculos_drop_down)
function bota_inputs_exercicios_musc(indice){
    var botao_options_drop_down = document.getElementsByClassName('drop-down-options')
    var container_drop_down = botao_options_drop_down
    musculos_drop_down.forEach((el,index) => {
        let option = document.createElement('div')
        option.setAttribute('class','option-drop-down')
        option.innerHTML = `<p>${el.Nome}</p>`
        if(indice===0){
            option.setAttribute('onclick',`resultado_exercicios('${el.Nome}')`)
        }
        option.style.animation = `move-drop-down 500ms ${index*30}ms cubic-bezier(0.175, 0.885, 0.32, 1.045) forwards`
        botao_options_drop_down[indice].appendChild(option)
        if(index >= 12){
            option.style.borderWidth = '0px 0px 1px 0px'
        }
    });
    
}
function resultado_exercicios(musculo){
    let resultado = document.getElementById('lista-exercicios')
    let altura1 = resultado.clientHeight
    if(resultado.childElementCount > 0){
        while(resultado.childElementCount > 0){
            resultado.childNodes.forEach((el, index)=>{
                resultado.removeChild(el)
            })
        }
    }
    let titulo = document.createElement('h1')
    titulo.innerHTML = musculo
    resultado.appendChild(titulo)
    musculos_drop_down.forEach((el)=>{
        //console.log(el)
        if(el.Nome === musculo){
            el['Exercícios agrupados'].forEach((el)=>{
                let li = document.createElement('li')
                li.innerHTML = el
                resultado.appendChild(li)
            })
            
        }
    })
    console.log(blocos_animacao_scroll[0].gatilho) 
    console.log(resultado.clientHeight + "-" + altura1)
    
}

/*function bota_inputs_exercicios_musc(indice){
    var botao_options_drop_down = document.getElementsByClassName('drop-down-options')
    var container_drop_down = botao_options_drop_down
    console.log(botao_options_drop_down[0])
    /*for(let item of botao_options_drop_down){
        musculos_drop_down.forEach((el,index) => {
            let option = document.createElement('div')
            option.setAttribute('class','option-drop-down')
            option.innerHTML = `<p>${el.Nome}</p>`
            option.style.animation = `move-drop-down 500ms ${index*30}ms cubic-bezier(0.175, 0.885, 0.32, 1.045) forwards`
            item.appendChild(option)
            if(index >= 12){
                option.style.borderWidth = '0px 0px 1px 0px'
            }
        });
    }
    
}*/
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

