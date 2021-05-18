var tela = window.screen.width
if(tela>480){
    menu.style.visibility = 'collapse'
    menu.childNodes.forEach((el,index)=>{
        if(index==1){
            el.style.visibility = 'collapse'
        }
    })
    menu.parentNode.childNodes.forEach(element => {
        // if(element.getAttribute('id')=='menu'){
        //     menu.parentNode.removeChild(menu)
        // }c
    });
}