//Smooth Scroll
const scroll = new SmoothScroll('.nav-links, .arrow, #work, a[href*="#"]' ,{
    speed: 900
});

//Text Fade
const text = document.querySelector(".intro-text",);
const strText = text.textContent;
const splitText = strText.split("")
text.textContent=""
for (let i=0; i < splitText.length; i++){
    if (splitText[i] == "/"){
        text.innerHTML += "<br>" 
        continue;
    }
    text.innerHTML += "<span>" + splitText[i] + "</span>"
    
    if (splitText[i] === " "){
        text.innerHTML += "<span>" + "&nbsp" + "</span>" 
        continue;
    }
    
}
    

let char = 0;
let timer = setInterval(onTick, 15);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++
    complete;
    return; 
}

function complete (){
clearInterval(timer);
timer=null;
}


//Filter

$(document).ready(function(){
    $(".proj-nav-link").click(function(){
       const name = $(this).attr("data-filter");
        if (name == "all"){
            $(".container").show();
        }
        else{
         $(".container").not("."+name).hide() ;  
         $(".container").filter("."+name).show() ;  
        } 
    }) 
})
$(".proj-links a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})