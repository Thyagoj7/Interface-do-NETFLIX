$('.owl-carousel').owlCarousel({
    loop:true,      //navegar de forma infinita ou não
    margin:10,      //margin entre os filmes
    nav:false,       //seta de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})