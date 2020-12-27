let x = 0;

let images = document.querySelectorAll(".img");

setInterval(imageDisplay, 5000);

function imageDisplay() 
{
        images[x].style.display = "none";

        x++;
        
        if (x == images.length) {
          x = 0;
        }
        
        images[x].style.display = "block";
      
}