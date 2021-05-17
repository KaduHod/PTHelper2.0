var menu = document.getElementById('menu')
console.log(menu)
menu.style.height = `${window.screen.height}px`
function mostra_menu(){
    menu.style.top = '-100px'
    
}
function esconde_menu(){
    menu.style.top = `-${window.screen.height+200}px`
}