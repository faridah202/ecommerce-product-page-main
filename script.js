let cart = document.getElementById('cart');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let counter = document.getElementById('counter');
let nom = document.getElementById('cut');
let btn = document.getElementById('btn')
let count = 0
let preview1 = document.getElementById('preview1');
let preview2 = document.getElementById('preview2');
let preview3 = document.getElementById('preview3');
let preview4 = document.getElementById('preview4');
let preview5 = document.getElementById('preview5');
let mainimg = document.getElementById('mainimg');
let mainimg2 = document.getElementById('mainimg2');
let mainimg3 = document.getElementById('mainimg3');
let mainimg4 = document.getElementById('mainimg4');

minus.addEventListener('click', function(){
      count--;
      nom.innerHTML = count; 
})
plus.addEventListener('click', function(){
    count++;
      nom.innerHTML = count; 
})

btn.addEventListener('click', function(){
    counter.textContent = nom.textContent
    counter.style.display = 'block'
})
preview1.addEventListener('click', function(){
    mainimg.style.display = 'block'
    mainimg2.style.display = 'none'
    mainimg3.style.display = 'none'
    mainimg4.style.display = 'none'
    })
preview2.addEventListener('click', function(){
mainimg.style.display = 'none'
mainimg2.style.display = 'block'
mainimg3.style.display = 'none'
mainimg4.style.display = 'none'
})

preview3.addEventListener('click', function(){
    mainimg.style.display = 'none'
    mainimg2.style.display = 'none'
    mainimg3.style.display = 'block'
    mainimg4.style.display = 'none'
    })
    
preview4.addEventListener('click', function(){
        mainimg.style.display = 'none'
        mainimg2.style.display = 'none'
        mainimg3.style.display = 'none'
        mainimg4.style.display = 'block'
        })    