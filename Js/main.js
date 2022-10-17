let menu_khaled = document.getElementById("khaled");

let seeAll= document.getElementById('seeAll');
let portfolioItem = document.getElementsByClassName('portfolio-item');
portfolioItem = Array.from(portfolioItem);

let navLinke = document.getElementsByClassName('nav-linke');
navLinke = Array.from(navLinke);

// to show the nav bar in mobile
let menu = function () {
    menu_khaled.classList.toggle("toggle");
    console.log(menu_khaled);
}

// to effect the text color in nav bar
navLinke.map((link)=>{
    link.addEventListener('click' , ()=>{
        navLinke.map((x)=>x.classList.remove('active'));
        link.classList.add('active');
        
    })
})

// action on seeAll button

seeAll.addEventListener('click' , ()=>{
    portfolioItem.map((item , i)=>{
        if(i>5){
            item.classList.toggle('d-none');
            console.log(scrollY )
            window.scroll({left:0,top:2500,})
        }
    });

    if(seeAll.innerText == 'See All'){
        seeAll.innerText = 'See Less';
    }else {
        seeAll.innerText = 'See All';
    }
})