let cons = document.querySelector('.consultant')
window.onload = function(){
let up = document.querySelector('.up');
let scrolled;
let timer;
up.addEventListener('click',function(){
    scrolled = window.pageYOffset;
    scrollToTop()
});
function scrollToTop(){
    if ( scrolled > 0){
    up.style.display = 'block';
    window.scrollTo(0,scrolled);
    scrolled = scrolled - 20;
    timer = setTimeout(scrollToTop,5);
    }
     else{
        clearTimeout(timer);
        window.scrollTo(0,0);
        }
}
window.onscroll = function(){
    if(window.pageYOffset > 400){
        up.style.opacity= '1';
        cons.style.display = 'block';
    }
    else{
        up.style.opacity = null;
        cons.style.display = 'none';
    }
}
cons.onmouseover = menuShow;
cons.onmouseout = menuHide;
function menuShow(){
    cons.style.left = '0';
    }
    
    function menuHide(){
       cons.style.left = '-240px';
    }
}

let left = document.querySelector('.arrow-left');
let line = document.querySelector('.line');
let num = 0;
let right = document.querySelector('.arrow-right')
right.addEventListener('click',function(event){
    num = num + 1;
    console.log(num);
    if(num == 4){
        line.style.marginLeft = '0';
        num = 0;
    }
    if(num == 1){
        line.style.marginLeft = '-900px';
    }
    if(num == 2){
        line.style.marginLeft = '-1800px';
    }
    if(num == 3){
        line.style.marginLeft = '0';
        num = 0;
    }
})
left.addEventListener('click',function(event){
    num = num - 1;
    console.log(num);
    if(num == -1){
        line.style.marginLeft = '-1800px';
        num = 3;
    }
    if(num == 0){
        line.style.marginLeft = '0';
    }
    if(num == 1){
        line.style.marginLeft = '0';
        num = 0;
    }
    if(num == 2){
        line.style.marginLeft = '-900px';
    }
})
let chat = document.querySelector('.chat');
let inp = document.querySelector('#input');
let but = document.querySelector('#but');

but.addEventListener('click',function(event){
    let div = document.createElement('div');
    chat.appendChild(div)
    div.innerText = input.value;

    
})
