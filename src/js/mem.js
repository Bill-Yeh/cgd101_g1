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



//人物上下動

// function charmove(){
//     setInterval(()=>{
//             $("#me").animate({
//                 top:'-=10px',
//             },'easeInQuad');

//             $("#me").animate({
//                 top:'+=10px',
//             },'easeInQuad');
//     },2000)
// }




window.onload=charmove()




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
        document.querySelector(`.tab_${tabs[i]}`).addEventListener("click",changeTabs);
    }
}

window.onresize=resize;








//換裝區切換類別頁
function reStartCloset(){

    //判斷是否為第一次打開
    if(document.querySelector("#target")!=null){
    document.querySelector("#target").removeAttribute('id','target')
    }

    //預設為第一個頁籤
    let first=document.querySelector('.page div:nth-child(1)');
    first.setAttribute('id','target')

    let tab_hat=document.querySelector('.tab_hat')
    let tab_dress=document.querySelector('.tab_dress')
    let tab_tool=document.querySelector('.tab_tool')

    tab_hat.style.zIndex=10;
    tab_dress.style.zIndex=9;
    tab_tool.style.zIndex=8;

    return function changeTabs(){
        document.querySelector("#target").removeAttribute('id','target')
        
        let target=document.querySelector(`.${String(this.className)}`);

        target.setAttribute('id','target');

        
        //排頁籤順序
        if(`${String(this.className)}`=="tab_hat"){
            tab_hat.style.zIndex=10;
            tab_dress.style.zIndex=9;
            tab_tool.style.zIndex=8;
        }
        else if(`${String(this.className)}`=="tab_dress"){
            tab_hat.style.zIndex=9;
            tab_dress.style.zIndex=10;
            tab_tool.style.zIndex=9;
        }
        else if(`${String(this.className)}`=="tab_tool"){
            tab_hat.style.zIndex=8;
            tab_dress.style.zIndex=9;
            tab_tool.style.zIndex=10;
        }
    }   

}


var changeTabs=reStartCloset();



document.querySelector('.closet').addEventListener("click",reStartCloset);







//諮詢老師
function openChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='block';

    if(document.querySelector('.tr') == null){

        setTimeout(()=>{
            let wrapper = document.createElement('div');
            wrapper.setAttribute('class','tr');
            document.querySelector('.conv').appendChild(wrapper);

            let tr=document.querySelector('.tr')

            let title = document.createElement('span');
            title.textContent ='語實巨進老師';
            title.setAttribute('class','tr-name');
            tr.appendChild(title);
            
            let HeadShot = document.createElement('div');
            HeadShot.setAttribute('class','trHead');
            tr.appendChild(HeadShot);

            let trHead=document.querySelector('.trHead')

            let img = document.createElement('img');
            img.src="./images/char_00.png";
            trHead.appendChild(img);

            let p = document.createElement('p');
            p.textContent ='同學您好，請留下想問的問題，老師將盡快回覆你^^';
            tr.appendChild(p);


        },800)
    }

}


function sentMessage(){

    //建立使用者訊息
    let wrapper = document.createElement('div');
    wrapper.setAttribute('class','user');
    document.querySelector('.conv').appendChild(wrapper);

    
    let userArr= document.querySelectorAll('.user');


    let title = document.createElement('span');
    title.textContent ='使用者';
    title.setAttribute('class','user-name');
    userArr[userArr.length-1].appendChild(title);
    
    let HeadShot = document.createElement('div');
    HeadShot.setAttribute('class','userHead');
    userArr[userArr.length-1].appendChild(HeadShot);

    let userHeadArr= document.querySelectorAll('.userHead');

    let img = document.createElement('img');
    img.src="./images/char_00.png";    
    
    userHeadArr[userHeadArr.length-1].appendChild(img);

    let p = document.createElement('p');
    let input=document.querySelector('#inputTxt').value;

    p .textContent =input;
    userArr[userArr.length-1].appendChild(p);

    //清空輸入欄位
    document.querySelector('#inputTxt').value="";


    //老師回覆
    setTimeout(()=>{
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class','tr');
        document.querySelector('.conv').appendChild(wrapper);

        let trArr= document.querySelectorAll('.tr');

        let title = document.createElement('span');
        title.textContent ='語實巨進老師';
        title.setAttribute('class','tr-name');
        trArr[trArr.length-1].appendChild(title);
        
        let HeadShot = document.createElement('div');
        HeadShot.setAttribute('class','trHead');
        trArr[trArr.length-1].appendChild(HeadShot);

        let trHeadArr= document.querySelectorAll('.trHead');

        let img = document.createElement('img');
        img.src="./images/char_00.png";
        trHeadArr[trHeadArr.length-1].appendChild(img);

        let p = document.createElement('p');
        p.textContent ='感謝你的提問，請稍等老師回覆~';
        trArr[trArr.length-1].appendChild(p);

    },800)


}




function closeChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='none';
}


document.querySelector(".teacher").addEventListener("click",openChetbox);
document.querySelector(".cancel").addEventListener("click",closeChetbox);

document.querySelector(".sent").addEventListener("click",sentMessage);

document.querySelector("#inputTxt").addEventListener('keydown',function(e){
    if( e.keyCode === 13 ){
        sentMessage();
    }
  });






