document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.querySelector(".btn-outline-primary");
    
    const paragraf = document.querySelector(".paragraf1");
    
    button.addEventListener("click",function (){
        if (paragraf.style.display==="none" || paragraf.style.display===""){
            paragraf.style.display="block";
            button.textContent="Czytaj mniej";
        }
        else{
            paragraf.style.display="none";
            button.textContent="Czytaj wiecej";
        }
    });
    
    const buttonSecond = document.querySelector(".btn-outline-primary");
    
    const paragrafSecond = document.querySelector(".paragraf2");
    
    buttonSecond.addEventListener("click",function (){
        if (paragrafSecond.style.display==="none" || paragrafSecond.style.display===""){
            paragrafSecond.style.display="block";
            this.textContent="Czytaj mniej";
        }
        else{
            paragrafSecond.style.display="none";
            this.textContent="Czytaj wiecej";
        }
    });
    
    const wrocGora = document.querySelector(".btn-outline-info");
    
   wrocGora.addEventListener("click",function(){
       window.scroll({
           top:0,
           left:0,
           behavior:"smooth"
       });
   });


    
    
});