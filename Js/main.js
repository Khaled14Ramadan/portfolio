let menu_khaled = document.getElementById("khaled");

// to show the nav bar in mobile
let menu = function () {
    menu_khaled.classList.toggle("toggle");
    console.log(menu_khaled);
}

//to show background of nav after header (jQuery)

let aboutOffset = $("#about").offset().top;
displayNav($(window).scrollTop());//if reload when secroll after about section

$(window).scroll(function () {

    let valueScroll = $(window).scrollTop();
    displayNav(valueScroll);
});

function displayNav(v){
    if(v > aboutOffset - 150)
    {
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#btnUp").fadeOut(500);
    }
}

///this write behavior scrool by jquery

$("a[href ^='#']").click(function(){
    let aHref = $(this.href).offset().top;
    $("html , body").animate({scrollTop:aHref} , 2000);
});