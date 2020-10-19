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
    if (char > 97){
        complete();
        return; 
    
    }
    
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
         $(".card-container").hide().fadeIn(500);
         $(".card-container-hidden").css("display", "none");
         $(".work").css("padding-bottom", "3vh");
         $(".show-more").show(); 
        }
        
        else{
         $(".show-more").hide();   
         $(".card-container-hidden").css("display", "block"); 
         $(".card-container").not("."+name).hide();  
         $(".card-container").filter("."+name).hide().fadeIn(500);
         $(".card-container-hidden").not("."+name).hide();  
         $(".card-container-hidden").filter("."+name).hide().fadeIn(500);
        } 

    }) 
})
       
$(".proj-links a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})





//Show more
$(document).ready(function(){
    $(".show-more").click(function(){
      $(".card-container-hidden").css("display", "block").hide().fadeIn(500);
      $(".show-more").hide();
      $(".work").css("padding-bottom", "10vh");
    });
  });

  
 