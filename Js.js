let flag=1
let _spans=document.querySelectorAll('.humberger>span')
function humberger(){
    if(flag % 2){
        document.getElementById('nav-top').style.height='100vh'
        _spans[1].style.opacity='0'
        _spans[0].style.animationName='span0'
        _spans[2].style.animationName='span2'
    }else{
        document.getElementById('nav-top').style.height='70px'
        _spans[1].style.opacity='1'
        _spans[0].style.animationName='span00'
        _spans[2].style.animationName='span22'
    }
    flag++
}

function nightMode(){
    if(flag % 2){
        document.getElementsByTagName('body')[0].classList.add('nightmode')
    }else{
        document.getElementsByTagName('body')[0].classList.remove('nightmode')
    }
    flag++
}