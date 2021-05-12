
function load_top(){// recarregar pagina no topo
    window.scrollTo(0,0)
}
blocos_animacao_scroll = [
    // {
    //     bloco: regioes_do_corpo,
    //     gatilho: 10
    // },
    {
        bloco: exercicios,
        gatilho: 90,
        active:true,
        indice: 0  
    },
    {
        bloco: m_p_e,
        gatilho: 320,
        active:true,
        indice:1

    },
    {
        bloco: footer,
        gatilho: 530,
        active: false
    }
]//arr de objetos com elementos da aniamção para o topo

function scroll_func(blocos_animacao){// função acionad pelo  scroll para os elementos se moverem para cima
    var scroll_pos_y = window.scrollY
    //console.log(scroll_pos_y)
    blocos_animacao.forEach(el=> {
        if(scroll_pos_y> el.gatilho){
            el.bloco.style.animation = 'move_top 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'            
            if(el.active == true){
                bota_inputs_exercicios_musc(el.indice)
                el.active = false
            }
        }
        else{
            el.bloco.style.animation = ''
            el.bloco.style.paddingTop = '120px'
        }     
        
        
    })
    
    
}
