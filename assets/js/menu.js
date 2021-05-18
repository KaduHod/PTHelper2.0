var menu = document.getElementById('menu')
// if(window.screen.width <=480){
    menu.style.height = `${window.screen.height}px`
    function mostra_menu(){
        menu.style.top = '-100px'
        
    }
    function esconde_menu(){
        menu.style.top = `-${window.screen.height+200}px`
    }
// }else{
//     menu.style.display = 'block'
//     menu.style.top = '-10000px'
// }
