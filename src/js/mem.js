new Vue({
    el:'.wall',
    data:{
        img: ['map','closet','clock','flower','window']
    },
},
)
new Vue({
    el:'.floor',
    data:{
        img: ['bed','box1','phone','mat','desk','chair','box2'] 
    },
   
})




function openXlLightBox(){
    let black=document.querySelector(".black");
    let xl=document.querySelector(".xl_lightBox");
    black.style.display='block';
    xl.style.display='block';
}


function openLgLightBox(){
    let black=document.querySelector(".black");
    let lg=document.querySelector(".lg_lightBox");
    black.style.display='block';
    lg.style.display='block';
}


function openMdLightBox(){
    let black=document.querySelector(".black");
    let md=document.querySelector(".md_lightBox");
    black.style.display='block';
    md.style.display='block';
}


function cancelLightBox(){
    let black=document.querySelector(".black");
    // let box=document.querySelector(".md_lightBox");
    black.style.display='none';
    document.querySelector(".xl_lightBox").style.display='none';
    document.querySelector(".lg_lightBox").style.display='none';
    document.querySelector(".md_lightBox").style.display='none';
    
}




document.querySelector(".desk").addEventListener("click",openXlLightBox);
document.querySelector(".map").addEventListener("click",openLgLightBox);
document.querySelector(".bed").addEventListener("click",openMdLightBox);
document.querySelector(".closet").addEventListener("click",openLgLightBox);
document.querySelector(".box1").addEventListener("click",openMdLightBox);

document.querySelector(".black").addEventListener("click",cancelLightBox);
document.querySelector(".xl_lightBox").addEventListener("click", function(e){e.stopPropagation()});
document.querySelector(".lg_lightBox").addEventListener("click", function(e){e.stopPropagation()});
document.querySelector(".md_lightBox").addEventListener("click", function(e){e.stopPropagation()});