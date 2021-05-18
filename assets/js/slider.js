var slider_block = document.getElementById('header-bcColor')
var slider_options = document.getElementById('slider-options-container')
// setTimeout(()=>{

// },15)

arrSlider = [
    {
        src:'url(assets/img/slider3.jpg)',
        pos:'-10px -10px',
        pos2: '0px -250px'
    },
    {
        src:'url(assets/img/slider2.jpg)',
        pos:'-10px -50px',
        pos2: '0px -150px'
    },
    {
        src:'url(assets/img/slider.jpg)',
        pos:'00px -200px',
        pos2: 'center'
    }
    
]
function inicia_slider(){
    bota_options_slider()
    
}
function bota_options_slider(){
    
    var slider_container = document.getElementById('slider-options-container')    
    arrSlider.forEach((el,index)=>{
        var circle = document.createElement('div')
        circle.setAttribute('id',index)
        if(index == 0){
            circle.setAttribute('class','circle-slider active')                        
        }else{
            circle.setAttribute('class','circle-slider')
            circle.setAttribute('id',`${index}`)
        }
        circle.setAttribute('onclick',`slider(${index})`)
        slider_container.appendChild(circle)        
    })
    slider('0')
    
}
function slider(el){
    var option_active = document.getElementById(el)   
    option_active.parentNode.childNodes.forEach((ele,index)=>{
        if(index != 0){
            ele.setAttribute('class','circle-slider')
        }
    })
    option_active.setAttribute('class','circle-slider active')
    muda_slider(option_active.getAttribute('id'))
}
function  muda_slider(indice){
    let header = document.getElementById('header-bcColor')    
    header.style.backgroundImage = arrSlider[indice].src
    if(window.screen.width>480){
        header.style.backgroundPosition = arrSlider[indice].pos2
    }else{
        header.style.backgroundPosition = arrSlider[indice].pos
    }
}
