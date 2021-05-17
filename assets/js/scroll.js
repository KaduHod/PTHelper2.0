
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
        gatilho: 734,
        active:true,
        indice: 0  
    },
    {
        bloco: m_p_e,
        gatilho: window.screen.height,
        active:true,
        indice:1

    },
    {
        bloco: footer,
        gatilho: 734,
        active: false
    }
]//arr de objetos com elementos da aniamção para o topo
var gatilho_scroll = window.screen.height - 50

function scroll_func(blocos_animacao){// função acionad pelo  scroll para os elementos se moverem para cima
    
    blocos_animacao.forEach(el=> {
        if(el.bloco.getBoundingClientRect().y< gatilho_scroll){
            el.bloco.style.animation = 'move_top 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'            
            if(el.active == true){
                bota_inputs_exercicios_musc(el.indice)
                el.active = false
            }
        }
        else{
            // el.bloco.style.animation = ''
            // el.bloco.style.paddingTop = '120px'
        }     
        
        
    })
    
    
}
