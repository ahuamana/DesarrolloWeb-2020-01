/*
var numero=1;
var palabra="jaimito";
var decimal=10.5;
var verdadero=true;
var lista =[1,2,67,34,'palabra']

console.log(numero);
console.log(palabra);

let numero1=2;

if(numero>numero1){
    console.log('numero es mayor que numero1')

}else {console.log('numero es menor que numero1')}

*/

var botonMenu= document.querySelector('.nav__menuIcon');

var menu =document.querySelector('.nav__menuBox')

// console.log(botonMenu);

// botonMenu.addEventListener('click',function(){
//     console.log('hiciste clik');
//     // menu.classList.add('active');
//     if(menu.classList.contains('active')){
//         menu.classList.remove('active');
//     }else{
//         menu.classList.add('active');
//     }
// });
function showmenu(){
    menu.classList.toggle('active');
}

// botonMenu.addEventListener('click',function(){
//     menu.classList.toggle('active');
// });

botonMenu.addEventListener('click',showmenu);

// Gestos con HAMMER.JS

var $body =document.body;
var gestos = new Hammer($body);

function mostrarmenu(){
    menu.classList.add('active');
}

function escondermenu(){
    menu.classList.remove('active');
}

gestos.on('swiperight',mostrarmenu);
gestos.on('swipeleft',escondermenu);