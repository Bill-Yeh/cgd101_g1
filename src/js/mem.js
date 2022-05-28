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
        img: ['bed','box1','teacher','phone','mat','desk','chair','box2'] 
    },
    methods:{

    }
   
})

// new Vue({
//     el:'.input',
    
//     methods:{
//         inputFocus(){

//         }

//     }
// })




// 開啟燈箱
function openLightBox(){

    let black=document.querySelector(".black");
    black.style.display='block';


    // let vw=window.innerWidth;
    // let vh=window.innerHeight;
    let lightBox=document.querySelector("#lightBox")
    lightBox.style.marginTop=`-${lightBox.offsetHeight/2}px`;
    lightBox.style.marginLeft=`-${lightBox.offsetWidth/2}px`;

    console.log(`-${lightBox.offsetWidth/2} px`)

    // lightBox.style.marginTop=top;
    // lightBox.style.marginLeft=left;

    
    let targetClass=`.${String(this.className)}_lightBox`
    let lightBoxContent=document.querySelector(targetClass);
    lightBoxContent.style.display='block';

}

function resize (){
    let lightBox=document.querySelector("#lightBox")
    lightBox.style.marginTop=`-${lightBox.offsetHeight/2}px`;
    lightBox.style.marginLeft=`-${lightBox.offsetWidth/2}px`;

}





//關閉燈箱
function cancelLightBox(){
    let black=document.querySelector(".black");
    black.style.display='none';
    let lightBox=document.querySelectorAll("div#lightBox > div");
    for(i=0;i<lightBox.length;i++){
        lightBox[i].className.style.display='none';
    }
    
}







document.querySelector(".black").addEventListener("click",cancelLightBox);
document.querySelector(".back").addEventListener("click",cancelLightBox);
document.querySelector("#lightBox").addEventListener("click", function(e){e.stopPropagation()});


window.onresize=resize;


//設定可點選物件事件聆聽
window.onload=function(){
    let items=new Array(".desk",".map",".bed",".closet",".box1")
    for(let i=0;i<items.length;i++){
    document.querySelector(items[i]).addEventListener("click",openLightBox);
    }
}




function openChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='block';
}

function closeChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='none';
}




document.querySelector(".teacher").addEventListener("click",openChetbox);
document.querySelector(".cancel").addEventListener("click",closeChetbox);




