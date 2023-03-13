// Detecting button press :

for(var i=0; i<document.querySelectorAll(".drum").length;i++)
{
    //function calling by object after sensing click
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
    //    console.log(this.innerHTML); // here 'this' will give the current object of click
         this.style.color="white";
        var ButtonInnerHtml =this.innerHTML;
        sound(ButtonInnerHtml);
        
        drumAnimation("."+ButtonInnerHtml);

    }
         
    );

}


//Detecting keyword press :

//here a addEventListener is added to whole document,unlike above given buttons/or a particular element
// 'keypress' is a type of event which detect key from keyboard
//wheres the function not calling by us it calling by object ,which is a whole document

document.addEventListener("keypress",function(event)   

{
        console.log(event);  
    //  alert(` key ${event.key} from keyboard  is pressed `)
        console.log(event.key);// just to check what event propert evoke
        sound(event.key);
        drumAnimation("."+event.key);
}
);

function sound(key)
{
    switch(key)
    {
           case "w":
           {
               var sound = new Audio("sounds/tom-1.mp3"); // here sound is a object of 'Audio' ,
               sound.play(); //and 'play' is the method of Audio constructor function.
               return;
           }

   case "a":
   {
       var sound = new Audio("sounds/tom-2.mp3");
       sound.play();
       return;
   }
   case "s":
   {
       var sound = new Audio("sounds/tom-3.mp3");
       sound.play();
       return;
   }
   case "d":
   {
       var sound = new Audio("sounds/tom-4.mp3");
       sound.play();
       return;
   }
   case "j":
   {

       var sound = new Audio("sounds/crash.mp3");
       sound.play();
       return;
   }
  case "k":
   {
       var sound = new Audio("sounds/kick-bass.mp3");
       sound.play();
       return;
   }
   case "l":
   {
       var sound = new Audio("sounds/snare.mp3");
       sound.play();
       return;
   }

   default:
       alert("wrong key !");
       break;
}

}

// applying animation :
function drumAnimation(key)
{
    
    document.querySelector(key).classList.add("pressed");
    // setTimeout function to set smthng for a particular time
    setTimeout(function()
    {   
        document.querySelector(key).classList.remove("pressed");
    },100);

}

