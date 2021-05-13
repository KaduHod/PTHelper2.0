musculos_drop_down = filtraPorMusculo(arrMusculos)
console.log(musculos_drop_down)
function bota_inputs_exercicios_musc(indice){
    var botao_options_drop_down = document.getElementsByClassName('drop-down-options')
    var container_drop_down = botao_options_drop_down
    musculos_drop_down.forEach((el,index) => {
        let option = document.createElement('div')
        option.setAttribute('class','option-drop-down')
        option.innerHTML = `<p style="font-size: 13px;font-weight:bolder;">${el.Nome}</p>`
        if(indice===0){
            option.setAttribute('onclick',`resultado_exercicios('${el.Nome}')`)
        }
        if(indice===1){
            option.setAttribute('onclick',`resultado_musculos('${index}')`)
        }
        option.style.animation = `move-drop-down 500ms ${index*30}ms cubic-bezier(0.175, 0.885, 0.32, 1.045) forwards`
        botao_options_drop_down[indice].appendChild(option)
        /*if(index >= 12){
            option.style.borderWidth = '0px 0px 1px 0px'
        }*/
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
function resultado_musculos(indice){
   let dados =  musculos_drop_down[indice]['Exercícios e porções do músculo']
   let resultado = document.getElementById('musculo-porcao-exercicios-resultado')
   while(resultado.childElementCount > 0 ){
       resultado.childNodes.forEach(el=>{
           resultado.removeChild(el)
       })
   }
   let titulo = document.createElement('h1')
   titulo.innerHTML = musculos_drop_down[indice].Nome
   resultado.appendChild(titulo)

   let result_container = document.createElement('div')
   result_container.setAttribute('class','result_container')
   resultado.appendChild(result_container)
   
    for(prop in dados){
        if(prop != 'areaAdicional'){
            let porcao = document.createElement('div')
            porcao.setAttribute('class','porcao')
            porcao.innerHTML = `<h4>${prop}<h4>`
            result_container.appendChild(porcao)
            if(Array.isArray(dados[prop])){
                dados[prop].forEach(el=>{
                    let exercicio = document.createElement('p')
                    exercicio.innerHTML = "- "+el
                    porcao.appendChild(exercicio)
                })
            }else{
                let subPorcaoContainer = document.createElement('div')
                subPorcaoContainer.setAttribute('class','subPorcaoContainer')
                porcao.appendChild(subPorcaoContainer)
                porcao.style.flex = '2'
                for(subPor in dados[prop]){
                    let subPorcao = document.createElement('div')
                    subPorcao.setAttribute('class','sub-porcao')
                    subPorcao.innerHTML = `<h4>${subPor}</h4>`
                    subPorcaoContainer.appendChild(subPorcao)
                    dados[prop][subPor].forEach(el=>{
                        subPorcao.innerHTML += `<p>-${el}</p>`
                    })
                }
                
                    
                
            }
        }
    }
}

