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




// 確認開啟燈箱大小
function openLightBox(){
    let black=document.querySelector(".black");
    black.style.display='block';

    let vw=window.innerWidth
    let lightBox=document.querySelector("#lightBox").classList;
    let target=String(this.className)
    if(vw>1200){
        if(target=="map"||target=="desk"){
            lightBox.add("xl_lightBox")
        }
        else if(target=="closet"||target=="box1" ){
            lightBox.add("lg_lightBox")
        }
        else if(target=="bed"){
            lightBox.add("md_lightBox")
        }
    }
    else if(vw>992){
        if(target=="map"||target=="desk" ){
            lightBox.add("xl_lightBox")
        }
        else if(target=="closet"||target=="box1"){
            lightBox.add("lg_lightBox")
        }
        else if(target=="bed"){
            lightBox.add("md_lightBox")
        }
    }
    else if(vw>768){
        if(target=="map"||target=="desk"){
            lightBox.add("xl_lightBox")
        }
        else if(target=="bed"||target=="closet"||target=="box1"){
            lightBox.add("lg_lightBox")
        }
    }
    else{
        lightBox.add("xl_lightBox")
    }
}


//關閉燈箱
function cancelLightBox(){
    let black=document.querySelector(".black");
    black.style.display='none';
    let lightBox=document.querySelector("#lightBox");
    lightBox.className="";
}



document.querySelector(".black").addEventListener("click",cancelLightBox);
document.querySelector(".back").addEventListener("click",cancelLightBox);
document.querySelector("#lightBox").addEventListener("click", function(e){e.stopPropagation()});


//設定可點選物件事件聆聽
window.onload=function(){
    let items=new Array(".desk",".map",".bed",".closet",".box1")
    for(let i=0;i<items.length;i++){
    document.querySelector(items[i]).addEventListener("click",openLightBox);
    }
}



