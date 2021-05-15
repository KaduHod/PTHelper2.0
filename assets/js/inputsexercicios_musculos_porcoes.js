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
    resultado.style.animation = ''
    resultado.style.transform = 'translateX(-350px)'
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
    resultado.style.animation = 'ul 300ms cubic-bezier(0.175, 0.885, 0.32, 1.120) forwards'
    // console.log(blocos_animacao_scroll[0].gatilho) 
    // console.log(resultado.clientHeight + "-" + altura1) ul.style.animation = ''
    
}
var posicaoX_inicial_parametro = null
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
        options_porcoes_container.setAttribute('id','options_porcoes_container_musculos')
        resultado.appendChild(options_porcoes_container)
        let cont_porcao = 0
        //Adiciono as porcoes ao menu de porcoes
        for(porcao in musculos_drop_down[indice]['Exercícios e porções do músculo']){
            if(porcao != 'areaAdicional'){
                
                let porcao_option = document.createElement('div')
                porcao_option.setAttribute('id',`porcao-${porcao}`)
                if(cont_porcao == 0){// boto borda na primeira porção
                    porcao_option.setAttribute('class','porcao_option_border')
                }else{
                    porcao_option.setAttribute('class','porcao_option')
                }
                porcao_option.setAttribute('onclick',`Bota_border('porcao-${porcao}')`)
                porcao_option.innerHTML = `<p class='tittle_porcao_option'>${porcao}</p>`
                options_porcoes_container.appendChild(porcao_option)     
            }
            cont_porcao++
        }
    

    //criar a div que contem as informações de subporcoes
    let resultado_container = document.createElement('div')
    resultado_container.setAttribute('class','resultado_container')
    resultado_container.setAttribute('id', 'resultado_container_musculos')
    let largura = resultado.clientWidth*options_porcoes_container.childElementCount
    resultado_container.style.width = `${largura}px`
    resultado.appendChild(resultado_container)
        cont = 0
        //criar um bloco para cada porcao do musculo
            for(porcao in musculos_drop_down[indice]['Exercícios e porções do músculo']){
                if(porcao != 'areaAdicional'){
                    let porcao_bloco = document.createElement('div')
                    porcao_bloco.setAttribute('class','porcao')
                    porcao_bloco.setAttribute('id',`porcao-${porcao}-block`)

                    resultado_container.appendChild(porcao_bloco)
                    //porcao_bloco.innerHTML = porcao
                    // Devo botar as inormações nos blocos de cada porcão
                    if(Array.isArray(musculos_drop_down[indice]["Exercícios e porções do músculo"][porcao])!=false){
                        let ul_exercicios = document.createElement('ul')
                        porcao_bloco.appendChild(ul_exercicios)
                        let porcao_analisada = musculos_drop_down[indice]["Exercícios e porções do músculo"][porcao]
                        porcao_analisada.forEach(el=>{
                            let li_exercicio = document.createElement('li')
                            li_exercicio.innerHTML = el
                            ul_exercicios.appendChild(li_exercicio)
                        })
                        
                    }else{
                        for(let subPorcao in musculos_drop_down[indice]["Exercícios e porções do músculo"][porcao]){
                            
                            if(subPorcao != 'areaAdicional'){
                                let subPorcao_bloco = document.createElement('div')
                                subPorcao_bloco.setAttribute('class','subPorcao')
                                subPorcao_bloco.innerHTML = `<p style="padding-bottom: 5px;">${subPorcao}</p>`
                                porcao_bloco.appendChild(subPorcao_bloco)
                                let ul_exercicios = document.createElement('ul')
                                ul_exercicios.style.fontSize = '14px'
                                subPorcao_bloco.appendChild(ul_exercicios)
                                musculos_drop_down[indice]["Exercícios e porções do músculo"][porcao][subPorcao].forEach(el=>{
                                    let li_exercicio = document.createElement('li')
                                    li_exercicio.innerHTML = el
                                    ul_exercicios.appendChild(li_exercicio)
                                })
                            }
                        }
                    }
                    

                    //boto a primeira porção na posição da tela
                    let posicaoX_inicial = porcao_bloco.getBoundingClientRect().x * -1
                    if(cont == 0){

                            posicaoX_inicial_parametro = posicaoX_inicial
                            resultado_container.style.transform = `translateX(${posicaoX_inicial}px)`
                        }else{
                        
                        }
                    cont++
                }   
            }
}

function muda_bloco(id_opcao){
    let resultado_container = document.getElementById('resultado_container_musculos')
    let options_porcoes_container = document.getElementById('options_porcoes_container_musculos')
    let porcao_selecionada = document.getElementById(id_opcao)
    
    let largura_tela = resultado_container.clientWidth/resultado_container.childElementCount
    resultado_container.childNodes.forEach((el,index)=>{
        if(index==0){
            
        }
        if(el.getAttribute('id')===`${id_opcao}-block`){
            index_move = index
            let movimento = index_move*largura_tela
            let movimento2 = posicaoX_inicial_parametro-movimento
            resultado_container.style.transform = `translateX(${movimento2}px)`
        }
    })
}
function Bota_border(id){
    // aqui vou botar as brodas nas porcoes 
    let porcao = document.getElementById(id)
    let pai = porcao.parentNode
    pai.childNodes.forEach(el=>{
        if(el.getAttribute('id')== id){
            el.setAttribute('class','porcao_option_border') 
        }else{
            el.setAttribute('class','porcao_option')
        }
        
    })
    muda_bloco(id)
}


