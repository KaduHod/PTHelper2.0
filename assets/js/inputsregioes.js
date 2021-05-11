
var regioes_inputs_container = document.querySelector('#regioes-corpo-botoes')
for(regioes in musculosReduceRegiao){
    var botao = document.createElement('div')
    botao.innerHTML = regioes
    botao.setAttribute('class','regioes-botao')
    botao.setAttribute('id',`botao-${regioes}`)
    botao.setAttribute('onclick',`cria_lista_regioes('${regioes}','botao-${regioes}')`)
    regioes_inputs_container.appendChild(botao)
}
function cria_lista_regioes(regiao,id_botao){
    var bloco_result = document.getElementById('lista-regioes')
    let botao = document.getElementById(id_botao)

    botao.parentNode.childNodes.forEach((element,index) => {
        if(index!=0){
            element.style.color = '#fff'
            element.style.background = 'linear-gradient(to bottom, #2C5364, #203A43, #0F2027);'
            element.style.borderTopLeftRadius = '5px'
        }
    });
    botao.style.color = '#fff'
    botao.style.borderTopLeftRadius = '15px'
    while(bloco_result.childElementCount > 0){
        bloco_result.childNodes.forEach((el)=>{
            bloco_result.removeChild(el)
        })
    }
    musculosReduceRegiao[regiao].forEach((el)=>{
        var ul = document.createElement('ul')
        var ul_tittle = document.createElement('h2')
        ul_tittle.style.textShadow = '0px 0px 3px black'
        
        
        ul.appendChild(ul_tittle)
        musculo = arrMusculos.filter((ele)=>{
            if(ele.nome == el.nome){
                return ele
            }
            
        })
        
        ul_tittle.innerHTML = musculo[0].nome
        ex_agr = filtraPorMusculo(musculo[0])
        ex_agr['Exercícios agrupados'].forEach((elem)=>{
            var exer = document.createElement('li')
            exer.innerHTML = "- "+elem
            ul.appendChild(exer)
            exer.style.opacity = '1'
            exer.style.textShadow = '0px 0px 2px black'
        })
        bloco_result.style.height = '230px'
        bloco_result.appendChild(ul)       
    })
    //COntrole do scroll caso um dos elementos esteja mais alto
        blocos_animacao_scroll[0].gatilho = 212
        blocos_animacao_scroll[1].gatilho = 424
        blocos_animacao_scroll[2].gatilho = 610
}