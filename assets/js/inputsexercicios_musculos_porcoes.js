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
    var resultado = document.getElementsByClassName('resultado3')[0]
    //removo todo conteudo do resultado ao clicar na opção
    while(resultado.childElementCount>0){resultado.childNodes.forEach(el=>{resultado.removeChild(el)})}
    //console.log(musculos_drop_down[indice])

    //crio div que tem o nome do músculo escolhido
    let musculo_escolhido = document.createElement('h3')
    musculo_escolhido.innerHTML = musculos_drop_down[indice]['Nome']
    resultado.appendChild(musculo_escolhido)

    // cria a div com as porcoes a serem vizualizadas / menu de porcoes
        let options_porcoes_container = document.createElement('div')
        options_porcoes_container.setAttribute('class','options_porcoes_container')
        resultado.appendChild(options_porcoes_container)

        //Adiciono as porcoes ao menu de porcoes
        for(porcao in musculos_drop_down[indice]['Exercícios e porções do músculo']){
            if(porcao != 'areaAdicional'){
                let porcao_option = document.createElement('div')
                porcao_option.setAttribute('class','porcao_option')
                porcao_option.innerHTML = `<p class='tittle_porcao_option'>${porcao}</p>`
                options_porcoes_container.appendChild(porcao_option)     
            }
        }
    

    //criar a div que contem as informações de subporcoes
    let resultado_container = document.createElement('div')
    resultado_container.setAttribute('class','resultado_container')
    let largura = resultado.clientWidth*options_porcoes_container.childElementCount
    resultado_container.style.width = `${largura}px`
    resultado.appendChild(resultado_container)
        cont = 0
        //criar um bloco para porcao do musculo
            for(porcao in musculos_drop_down[indice]['Exercícios e porções do músculo']){
                if(porcao != 'areaAdicional'){
                    let porcao_bloco = document.createElement('div')
                    porcao_bloco.setAttribute('class','porcao')

                    resultado_container.appendChild(porcao_bloco)
                    porcao_bloco.innerHTML = porcao

                    //boto a primeira porção na posição da tela
                        if(cont == 0){
                            let posicaoX_inicial = porcao_bloco.getBoundingClientRect().x * -1
                            console.log(porcao_bloco.getBoundingClientRect())
                            console.log(porcao_bloco)
                            console.log(posicaoX_inicial)
                            resultado_container.style.transform = `translateX(${posicaoX_inicial}px)`
                        }
                    cont++
                }
                
                
            }
        
        


    
    
}


