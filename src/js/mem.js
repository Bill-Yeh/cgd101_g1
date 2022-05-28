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

// var workItem=""

function openLightBox(){
    let black=document.querySelector(".black");
    black.style.display='block';


    let targetClass=`.${String(this.className)}_lightBox`
    let lightBoxInfo=document.querySelector(targetClass);
    lightBoxInfo.style.display='block';

    let lightBox=document.querySelector("#lightBox");

    lightBox.style.marginTop=`-${lightBox.offsetHeight/2}px`;
    lightBox.style.marginLeft=`-${lightBox.offsetWidth/2}px`;

    // return workItem=`.${String(this.className)}_lightBox`   
}


//燈箱變更大小、位置
function resize(){ 
    let lightBox=document.querySelector("#lightBox");
    // let lightBoxInfo=document.querySelector(workItem);

    lightBox.style.marginTop=`-${lightBox.offsetHeight/2}px`;
    lightBox.style.marginLeft=`-${lightBox.offsetWidth/2}px`;
    }





//關閉燈箱
function cancelLightBox(){
    let black=document.querySelector(".black");
    black.style.display='none';
    let lightBox=document.querySelectorAll("div#lightBox > div");

    for(i=0;i<lightBox.length;i++){
        document.querySelector(`.${lightBox[i].className}`).style.display='none';
    }

     
}






//關閉燈箱
document.querySelector(".black").addEventListener("click",cancelLightBox);
document.querySelector(".backTo").addEventListener("click",cancelLightBox);
document.querySelector("#lightBox").addEventListener("click", function(e){e.stopPropagation()});





//設定可點選物件事件聆聽
window.onload=function(){

    //可點物件聆聽
    let items=new Array("desk","map","bed","closet","box1")
    for(let i=0;i<items.length;i++){
        document.querySelector(`.${items[i]}`).addEventListener("click",openLightBox);
    }

    let tabs=new Array("hat","dress","tool")
    for(let i=0;i<tabs.length;i++){
        document.querySelector(`.tab_${tabs[i]}`).addEventListener("click",changePage);
    }
}

window.onresize=resize;




//諮詢老師
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



//換裝區切換類別頁
function reStartCloset(){
    if(document.querySelector("#target")!=null){
    document.querySelector("#target").removeAttribute('id','target')
    }

    let first=document.querySelector('.page div:nth-child(1)');
    first.setAttribute('id','target')

    return function changePage(){
        document.querySelector("#target").removeAttribute('id','target')
        
        let target=document.querySelector(`.${String(this.className)}`);

        target.setAttribute('id','target');
    }   

}


var changePage=reStartCloset();



document.querySelector('.closet').addEventListener("click",reStartCloset);



