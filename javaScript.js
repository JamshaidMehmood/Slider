let slides=document.querySelectorAll(".slide");
let prev_btn=document.querySelector(".prev-btn");
let next_btn=document.querySelector(".next-btn");

slides.forEach(function(slide,index)
{
    slide.style.left=`${index*100}%`;

});
let counter=0;

prev_btn.addEventListener("click",function()
{
    counter--;
    cursorMover();

});
next_btn.addEventListener("click",function()
{
    counter++;
    cursorMover();

});
function cursorMover()
{
    if(counter>slides.length)
    {
        counter=0;
    }
    else if(counter<0)
    {
        counter=slides.length;
    }

    if(counter<slides.length)
    {
        next_btn.style.display="block";
    }
    else
    {
        next_btn.style.display="none";
    }

    if(counter>0)
    {
        prev_btn.style.display="block";
    }
    else
    {
        prev_btn.style.display="none";
    }

    slides.forEach(function(slide)
    {
        slide.style.transform=`translateX(-${counter*100}%)`;
    
    }); 

};