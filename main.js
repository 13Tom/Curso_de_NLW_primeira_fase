const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle)

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')     })
}

/* Quando clicar em um intem do menu, esconde o menu*/

const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')    })
} 
/*Muda o header da página quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        /*Scroll é maior que altura do header*/
        header.classList.add('scroll')
    }else{
        /*Scroll é menor que altura do header*/
        header.classList.remove('scroll')
    }
})
