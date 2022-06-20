new Vue({
    el:'.wall',
    data:{
        img: ['map','closet','clock','flower','window']
    },
})
new Vue({
    el:'.floor',
    data:{
        img: ['bed','box1','teacher','phone','mat','desk','chair','box2'] 
    },
})


//交易紀錄請求
let buyListVue=
new Vue({
    el:'#orderAPP',
    data:{
        prodRows:[],
    },
    created() {
        let xhr = new XMLHttpRequest();

		xhr.onload = function(){
            buyListVue.prodRows = JSON.parse(xhr.responseText)
            // console.log(JSON.parse(xhr.responseText))
            for(i=0;i<buyListVue.prodRows.length;i++){
                buyListVue.prodRows[i].payment_time=buyListVue.prodRows[i].payment_time.split('.')[0]
            }

        };
		xhr.open("get", "./mem_orderList.php",true);
		xhr.send();	
    },    
});


//交易紀錄模板
let prodRow = Vue.component("component-orderList", {

    props:['item_order_id','payment_time','item_img','item_price','lesson_order_id','lesson_img','lesson_price'],
    template:` <tr>
                <td>#{{item_order_id}}{{lesson_order_id}}</td>
                <td>{{payment_time}}</td>
                <td><img :src='item_img ? item_img : lesson_img' alt=""></td>
                <td>{{item_price}}{{lesson_price}}</td>
                </tr>`
})



//抓目前會員的角色
let me=
new Vue({
    el:'#me',
    data:{
        roleImg:[],
    },
    created() {
        let xhr = new XMLHttpRequest();

		xhr.onload = function(){
            me.roleImg = JSON.parse(xhr.responseText)
            
        };
		xhr.open("get", "front_getMemberInfo.php",true);
		xhr.send();	
    }, 
})







//確定是否是首次註冊後進入會員專區
function showChar(){
    let url=document.referrer;
    let urlArry=url.split("/")
    let frontUrl=urlArry[urlArry.length-1]

    if(frontUrl == 'signUp_animation.html'){
        //開啟燈箱
        let black=document.querySelector(".bg_00");
        black.style.display='flex';

        setTimeout(()=>{

            let lightBoxInfo=document.querySelector(".getchar_lightBox");

            lightBoxInfo.style.width='40vw';
            lightBoxInfo.style.height='50vh';

        },100)

        setTimeout(()=>{

            let talk=document.querySelector(".talkBox");
            talk.style.display="block"

            let talkBox=document.querySelector(".talkBox_inside");
            talkBox.animate({
                width:"100%"
            },4500,'linear')


            setTimeout(()=>{
                let button=document.querySelector(".goMem");
                button.style.display="block";

                talkBox.style.width="100%"
            },3000)
        },1200)
    }
}


//進入引導
function pageTour(){
    let black=document.querySelector(".bg_00");
    black.style.backgroundColor='rgba(0, 0, 0, 0.8)';
    let hello = new Array("我是QQ","點選床可以修改會員密碼","地圖可以查看學習地圖開放狀況","書可以查詢學習紀錄","衣櫥可以讓學伴換裝","藏寶箱可以查看購買紀錄","點選訊息可以線上問老師問題，老師看到後會回覆","手機可以做異常回報，看到任何奇怪的都可以回報");
    let talkInside = document.getElementById("firstSpeak");
    talkInside.innerText = hello[0]
}


window.addEventListener("load",showChar)
document.querySelector(".goMem").addEventListener("click",pageTour)



function guide(){
    let hello = new Array("我是QQ","點選床可以修改會員密碼","地圖可以查看學習地圖開放狀況","書可以查詢學習紀錄","衣櫥可以讓學伴換裝","藏寶箱可以查看購買紀錄","點選訊息可以線上問老師問題，老師看到後會回覆","手機可以做異常回報，看到任何奇怪的都可以回報");
    let talkInside = document.getElementById("firstSpeak");
    let talkCon = talkInside.innerText.trim();
    let black =document.querySelector(".bg_00");
    let lightBoxInfo =document.querySelector(".getchar_lightBox");
    let guideClose = document.getElementById("closeGuide2");
    let talk = document.querySelector(".talkBox");
    let bedguide = document.getElementById("bedGuide");
    let mapguide = document.getElementById("mapGuide");
    let bookguide = document.getElementById("bookGuide");
    let closetguide = document.getElementById("closetGuide");
    let treasureboxguide = document.getElementById("treasureBoxGuide");
    let messageguide = document.getElementById("messageGuide");
    let errorguide = document.getElementById("errorGuide");
    let button=document.querySelector(".goMem");
    
    guideClose.style.display = "none";
    if(talkCon ==hello[0]){
    talkInside.innerText=hello[1];
    bedguide.style.display = "block";
    button.style.display = "none";
   }else if(talkCon ==hello[1]){
    talkInside.innerText=hello[2];
    bedguide.style.display = "none";
    mapguide.style.display = "block";
   }else if(talkCon ==hello[2]){
    talkInside.innerText=hello[3];
    mapguide.style.display = "none";
    bookguide.style.display = "block";
   }else if(talkCon ==hello[3]){
    talkInside.innerText=hello[4];
    bookguide.style.display = "none";
    closetguide.style.display = "block";
   }else if(talkCon ==hello[4]){
    talkInside.innerText=hello[5];
    closetguide.style.display = "none";
    treasureboxguide.style.display = "block";
   }else if(talkCon ==hello[5]){
    talkInside.innerText=hello[6];
    treasureboxguide.style.display = "none";
    messageguide.style.display = "block";
   }else if(talkCon ==hello[6]){
    talkInside.innerText=hello[7];
    messageguide.style.display = "none";
    errorguide.style.display = "block";
   }else if(talkCon ==hello[7]){
    talkInside.innerText="";
    black.style.display='flex';
    lightBoxInfo.style.display = "none";
    guideClose.style.display = "flex";
    talk.style.display = "none";
    errorguide.style.display = "none";
   }
};
function guideClose(){
    let closeguide = document.getElementById("closeGuide2");
    let black =document.querySelector(".bg_00");
    closeguide.style.display="none";
    black.style.display="none";
};
function guideAgain(){
    let hello = new Array("我是QQ","點選床可以修改會員密碼","地圖可以查看學習地圖開放狀況","書可以查詢學習紀錄","衣櫥可以讓學伴換裝","藏寶箱可以查看購買紀錄","點選訊息可以線上問老師問題，老師看到後會回覆","手機可以做異常回報，看到任何奇怪的都可以回報");
    let talkInside = document.getElementById("firstSpeak");
    let bedguide = document.getElementById("bedGuide");
    let closeguide = document.getElementById("closeGuide2");
    let talk = document.querySelector(".talkBox");
    let lightBoxInfo = document.querySelector(".getchar_lightBox");
    talkInside.innerText=hello[1];
    bedguide.style.display = "block";
    closeguide.style.display="none";
    talk.style.display = "block";
    lightBoxInfo.style.display="block";
};


function init(){
    let talk = document.querySelector(".talkBox");
    let close = document.getElementById("imSure");
    let again = document.getElementById("doAgain");
    talk.addEventListener("click",guide);
    close.addEventListener("click",guideClose);
    again.addEventListener("click",guideAgain);
};
window.addEventListener('load',init)



//確認VP範圍
function checkWindow(){
    let vh = window.innerHeight;
    document.querySelector('.wrapper').style.height=`${vh-1}px`
}

window.addEventListener('load',checkWindow);

window.addEventListener('resize',checkWindow);


//========================================================

// 開啟燈箱
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

    let psw=document.querySelector('#psw')
    let new_psw=document.querySelector('#new_psw')
    let new_psw_check=document.querySelector('#new_psw_check')

    psw.value="";
    new_psw.value="";
    new_psw_check.value="";
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
        document.querySelector(`.tab_${tabs[i]}`).addEventListener("click",ChangeClothesItem);
    }
}




window.addEventListener('resize',resize);



//================================================================
//變更密碼

function setPW(){
    let psw=document.querySelector('#psw')
    let new_psw=document.querySelector('#new_psw')
    let new_psw_check=document.querySelector('#new_psw_check')



    let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            let ans= JSON.parse(xhr.responseText);
            if(ans=="修改成功"){
                psw.value="";
                new_psw.value="";
                new_psw_check.value="";
                

                //關閉燈箱
                let black=document.querySelector(".black");
                black.style.display='none';
                let lightBox=document.querySelectorAll("div#lightBox > div");

                for(i=0;i<lightBox.length;i++){
                    document.querySelector(`.${lightBox[i].className}`).style.display='none';
                }   
                alert("修改成功");

            }
            else{
                alert("輸入錯誤請再次檢查");
            }
        
        };

    xhr.open("post", "mem_resetPw.php",true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
    let newPwInfo= `password=${psw.value}&newPassword=${new_psw.value}&new_psw_check=${new_psw_check.value}`
    xhr.send(newPwInfo);
}

document.querySelector("#reset").addEventListener('submit',(e)=>{
    e.preventDefault()});

document.querySelector("#reset").addEventListener('click',setPW);



//=================================================================
//換裝區

var hatArray=new Array();
var dressArray=new Array();
var toolArray=new Array();

//裝備資料匯入
function getItem(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        buyList= JSON.parse(xhr.responseText);

        for(i=0 ; i<buyList.length ;i++){
            let this_item_class=buyList[i].item_img.split("_")

            switch(this_item_class[1]){
                case"hat":
                    hatArray.push(this_item_class[2])
                    break;
                case"dress":
                    dressArray.push(this_item_class[2])
                    break;
                case"tool":
                    toolArray.push(this_item_class[2])
                    break;
            }
        }
    };
    xhr.open("get", "./mem_itemList.php",true);
    xhr.send();	

}

window.addEventListener('load',getItem);







//切換類別頁
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


    //預設為第一個頁籤的內容
    let parent=document.querySelector('.items');
    let child=document.querySelectorAll(".items >div");
    if(parent.lastElementChild !=null){
        for(let i=0;i<child.length;i++){
            parent.removeChild(child[i])
        }
    }


    document.querySelector(".items").style.left="0";

    

    for(let i=0;i<hatArray.length;i++){
        let itemContent=document.createElement('div');
        parent.appendChild(itemContent);
        itemContent.setAttribute("class",`char_hat_${hatArray[i]}`);
        let itemImg=document.createElement('img');
        document.querySelectorAll('.items >div')[i].appendChild(itemImg);
        itemImg.setAttribute("class",`char_hat_${hatArray[i]}`);
        itemImg.src=`./images/char_hat_${hatArray[i]}`;
    }



    //回拋更換頁籤的函式
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




//切換頁籤顯示內容
function ChangeClothesItem(){

    document.querySelector(".items").style.left="0";

    let target=this.className;
    let parent=document.querySelector('.items');
    
    let child=document.querySelectorAll(".items >div");
    if(parent.lastElementChild !=null){
        for(let i=0;i<child.length;i++){
            parent.removeChild(child[i])
        }
    }
    
    switch (target) {
        case 'tab_hat':
            for(let i=0;i<hatArray.length;i++){
                let itemContent=document.createElement('div');
                parent.appendChild(itemContent);
                itemContent.setAttribute("class",`char_hat_${hatArray[i]}`);
                let itemImg=document.createElement('img');
                document.querySelectorAll('.items >div')[i].appendChild(itemImg);
                itemImg.setAttribute("class",`char_hat_${hatArray[i]}`);
                itemImg.src=`./images/char_hat_${hatArray[i]}`;
            }
            break;
        case 'tab_dress':
            for(let i=0;i<dressArray.length;i++){
                let itemContent=document.createElement('div');
                parent.appendChild(itemContent);
                itemContent.setAttribute("class",`char_dress_${dressArray[i]}`);
                let itemImg=document.createElement('img');
                document.querySelectorAll('.items >div')[i].appendChild(itemImg);
                itemImg.setAttribute("class",`char_dress_${dressArray[i]}`);
                itemImg.src=`./images/char_dress_${dressArray[i]}`;
            }
            break;
        case 'tab_tool':
            for(let i=0;i<toolArray.length;i++){
                let itemContent=document.createElement('div');
                parent.appendChild(itemContent);
                itemContent.setAttribute("class",`char_tool_${hatArray[i]}`);
                let itemImg=document.createElement('img');
                document.querySelectorAll('.items >div')[i].appendChild(itemImg);
                itemImg.setAttribute("class",`char_tool_${toolArray[i]}`);
                itemImg.src=`./images/char_tool_${toolArray[i]}`;
            }
            break;
      }

}







//點擊向前
function goFront(){
    let itemsWrapper=document.querySelector(".item-wrapper");
    let items=document.querySelector(".items");

    let itemsWrapper_W=itemsWrapper.offsetWidth;

    let leftValue=items.offsetLeft
    
    if(leftValue !=0){
        if(Math.abs(leftValue) / itemsWrapper_W < 1){
            items.style.left="0"
        }
        else{
            items.style.left=`${leftValue+itemsWrapper_W}px`
        }
    }
}

//點擊向後
function goBack(){
    let itemsWrapper=document.querySelector(".item-wrapper");
    let items=document.querySelector(".items");

    let itemsWrapper_W=itemsWrapper.offsetWidth;
    let items_W=items.offsetWidth;

    let leftValue=items.offsetLeft
    
    if(items_W > itemsWrapper_W){
        if((items_W + leftValue) / itemsWrapper_W <= 2){
            if(Math.abs(leftValue)+ itemsWrapper_W< items_W){
            items.style.left=`-${Math.abs(leftValue)+items_W % itemsWrapper_W}px`
            }
        }
        else{
            items.style.left=`-${itemsWrapper_W}px`
        }
    }
}



document.querySelector(".itemFront").addEventListener("click",goFront);
document.querySelector(".itemBack").addEventListener("click",goBack)


//取得目前會員有穿的裝備
function catchItem(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        onList= JSON.parse(xhr.responseText);
        if(onList !==''){
            for(i=0;i<onList.length;i++){
                switch(onList[i].item_img.split("_")[1]){
                    case "hat":
                        let hat=document.querySelector(".hat")
                        let hatImg=document.createElement("img")
                        hat.appendChild(hatImg)
                        hatImg.src=`${onList[i].item_img}_on.png`
                        break;

                    case "dress":
                        let dress=document.querySelector(".dress")
                        let dressImg=document.createElement("img")
                        dress.appendChild(dressImg)
                        dressImg.src=`${onList[i].item_img}_on.png`
                        break;

                    case "tool":
                        let tool=document.querySelector(".tool")
                        let toolImg=document.createElement("img")
                        tool.appendChild(toolImg)
                        toolImg.src=`${onList[i].item_img}_on.png`
                        break;
                }
            }

            setTimeout(()=>html2canvas(document.querySelector(".char_content"),{backgroundColor:null},{allowTaint: true}).then(function(e) {

                let canvasArr=document.querySelectorAll("canvas")
                
                document.body.appendChild(e);
                if(canvasArr.length>0){
                    document.querySelector("canvas").remove()
                }
        
                let canvas=document.querySelector("canvas")
                let image = new Image();
                image.src = canvas.toDataURL();
               
        
                document.querySelector("#me").src=image.src
                document.querySelector(".eyes").style.top="8px"

                let black=document.querySelector(".black")


                black.style.display="none"
                black.style.backgroundColor="rgba(0, 0, 0, 0.6)"
                black.style.zIndex=10000000

                document.querySelector("#lightBox").style.left="50%"

                document.querySelector(".closet_lightBox").style.display="none"

        
            }),10)
        }
        
    };

    xhr.open("get", "mem_catchItem.php",true);
    xhr.send();

}

window.addEventListener("load",catchItem)


//html>canvas>img
function convertCanvasToImage(){
    setTimeout(()=>html2canvas(document.querySelector(".char_content"),{backgroundColor:null},{allowTaint: true}).then(function(e) {

        let canvasArr=document.querySelectorAll("canvas")
        
        document.body.appendChild(e);
        if(canvasArr.length>0){
            document.querySelector("canvas").remove()
        }

        let canvas=document.querySelector("canvas")
        let image = new Image();
	    image.src = canvas.toDataURL();
       

        document.querySelector("#me").src=image.src
        document.querySelector(".eyes").style.top="8px"

    }),100)

}

document.querySelector(".store").addEventListener("click",convertCanvasToImage)



//存進資料庫，哪些衣服穿上
function storeClothes(){
    setTimeout(()=>{
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        onList= JSON.parse(xhr.responseText);
    
    }
    let hat=(document.querySelector(".hat >img")!=null) ? document.querySelector(".hat >img").src.split("/")[6].replace(".png_on","") : ""


    let dress=(document.querySelector(".dress >img")!=null) ? document.querySelector(".dress >img").src.split("/")[6].replace(".png_on","") :"";

    let tool=(document.querySelector(".tool >img")!=null) ? 
    document.querySelector(".tool >img").src.split("/")[6].replace(".png_on","") : "";



    xhr.open("post", "mem_storeClothes.php",true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
    let newImgInfo=`hat=./images/${hat}&dress=./images/${dress}&tool=./images/${tool}`
    xhr.send(newImgInfo)

    },300)
}

document.querySelector(".store").addEventListener("click",storeClothes)






//點選列中子物件
function dressOn(){
    let hat=document.querySelector(".hat")
    let dress=document.querySelector(".dress")
    let tool=document.querySelector(".tool")

    
    if(document.querySelector("#target").className=="tab_hat"){
        let hatChild=document.querySelector(".hat >img")
        
        if(hatChild !=null ){
            hat.removeChild(hatChild);
        }
        
        
        let hatImg=document.createElement("img")
        hat.appendChild(hatImg)
        hatImg.src=`./images/${this.className}_on.png`
        
    }

    else if(document.querySelector("#target").className=="tab_dress"){
        let dressChild=document.querySelector(".dress >img")
        
        if(dressChild !=null ){
            dress.removeChild(dressChild);
        }

        let dressImg=document.createElement("img")
        dress.appendChild(dressImg)
        dressImg.src=`./images/${this.className}_on.png`

    }

    else if(document.querySelector("#target").className=="tab_tool"){
        let toolChild=document.querySelector(".tool >img")
        
        if(toolChild !=null ){
            tool.removeChild(toolChild);
        }
        let toolImg=document.createElement("img")
        tool.appendChild(toolImg)
        toolImg.src=`./images/${this.className}_on.png`
        
    }


}


//設定事件聆聽
function clothItem(){
    setTimeout(()=>{
        let closet_item=document.querySelectorAll(".items >div")
        for(i=0;i<closet_item.length;i++){
        closet_item[i].addEventListener("click",dressOn)
        }
    },500)
}




document.querySelector('.closet').addEventListener("click",clothItem)
document.querySelector('.tab_hat').addEventListener("click",clothItem)
document.querySelector('.tab_dress').addEventListener("click",clothItem)
document.querySelector('.tab_tool').addEventListener("click",clothItem)








//==================================================
//諮詢老師


let AskList=
    new Vue({
        el:'#askAPP',
        data:{
            sentence:[],
        },
        created() {
            let xhr = new XMLHttpRequest();

            xhr.onload = function(){
                AskList.sentence = JSON.parse(xhr.responseText)
               
                if(AskList.sentence){ //如果學生已經發問過
                    let filter=AskList.sentence.filter(index => index.ask_src=="2" && index.read_or_not=="0")

                    if(filter.length!="0"){ //是否有未讀訊息
                    document.querySelector(".teacher").src='./images/map_mem_teacher_reply.png'
                    }

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
                    img.src="./images/home_teacher2.png";
                    trHead.appendChild(img);

                    let p = document.createElement('p');
                    p.textContent ='同學您好，請留下想問的問題，老師將盡快回覆你^^';
                    tr.appendChild(p);
                }

                

            };
            xhr.open("get", "mem_askLog.php",true);
            xhr.send();	
        },
    });


//對話模板
let askCom= Vue.component("component-askLog", {

    props:['ask_content','ask_src','ask_time','member_name'],
    template:`<div :class='ask_src==1 ?"user":"tr"' >
                <span :class='ask_src==1 ?   "user-name" : "tr-name"'>{{ ask_src==1 ?member_name :"語實巨進老師"}}</span>
                <div :class='ask_src==1 ? "userHead" : "trHead"'>
                <img src="./images/home_teacher2.png">
                </div>
                <p>{{ask_content}}</p>
                </div>`
})





//開啟談話視窗
function openChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='block';

    let user=document.querySelectorAll('.userHead')
    for(i=0;i<user.length;i++){
        user[i].remove()
    }



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
            img.src="./images/home_teacher2.png";
            trHead.appendChild(img);

            let p = document.createElement('p');
            p.textContent ='同學您好，請留下想問的問題，老師將盡快回覆你^^';
            tr.appendChild(p);

        },800)
    }

    let xhr = new XMLHttpRequest()
        xhr.onload = function(){
            result=JSON.parse(xhr.responseText);
            console.log(result)
        }
                
    xhr.open("get", "mem_checkReply.php",true);
    xhr.send();	



    document.querySelector(".teacher").src='./images/map_mem_teacher.png'

}


function sentMessage(){
    let input=document.querySelector('#inputTxt').value;

    let xhr = new XMLHttpRequest();

            xhr.onload = function(){
                let result= JSON.parse(xhr.responseText)
                console.log(result)
            }
            xhr.open("post", "mem_insertAsk.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

            let newAsk=`ask=${input}`
            xhr.send(newAsk);	


    //建立使用者訊息
    let wrapper = document.createElement('div');
    wrapper.setAttribute('class','user');
    document.querySelector('.conv').appendChild(wrapper);

    
    let userArr= document.querySelectorAll('.user');


    let title = document.createElement('span');
    let name=document.querySelector('#memName').innerText
    title.textContent =name;
    title.setAttribute('class','user-name');
    userArr[userArr.length-1].appendChild(title);
    
    let HeadShot = document.createElement('div');
    HeadShot.setAttribute('class','userHead');
    userArr[userArr.length-1].appendChild(HeadShot);

    let userHeadArr= document.querySelectorAll('.userHead');

    let img = document.createElement('img');
    img.src="./images/char_00_1.png";    
    
    userHeadArr[userHeadArr.length-1].appendChild(img);

    let p = document.createElement('p');
    

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
        img.src="./images/home_teacher2.png";
        trHeadArr[trHeadArr.length-1].appendChild(img);

        let p = document.createElement('p');
        p.textContent ='感謝你的提問，請稍等老師回覆~';
        trArr[trArr.length-1].appendChild(p);

    },800)
}



//關閉對話視窗
function closeChetbox(){
    let chetbox=document.querySelector(".chetbox");
    chetbox.style.display='none';

}


document.querySelector(".teacher").addEventListener("click",openChetbox);
document.querySelector(".chetbox .cancel").addEventListener("click",closeChetbox);

document.querySelector(".sent").addEventListener("click",sentMessage);

document.querySelector("#inputTxt").addEventListener('keydown',function(e){
    if( e.keyCode === 13 ){
        sentMessage();
    }
  });







//===================================================

//開啟異常通報
function openError(){
    let chetbox=document.querySelector(".error");
    chetbox.style.display='block';
}

document.querySelector('.phone').addEventListener('click',openError)




//textarea高度自適應
function textareaSize(){
    let input=document.querySelector('.error_msg')

    input.style.height='auto';
    input.style.height=`${this.scrollHeight}px`
}

document.querySelector('.error_msg').addEventListener('input',textareaSize)







//異常通報上傳檔案預覽
window.addEventListener("load", function(){
    document.getElementById("upFile").onchange = function(e){
        let file = e.target.files[0];  //取得所選物件file的參考
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("myImage").src=e.target.result;
        }
        reader.readAsDataURL(file);

    document.querySelector("#upFile").style.display='none';
    }
})



//關閉異常通報
function closeError(){
    document.querySelector(".error").style.display='none'

}

document.querySelector(".error .cancel").addEventListener('click',closeError)



//=====================================================
//學伴自動對話
var talkJpArry=new Array("こんにちは","一緒に勉強しますしょう")

function talk(){
    let txtJp=document.querySelector(".say_txt_jp")
    let talk=document.querySelector(".say_text")
    let content=document.querySelector(".say")

    setTimeout(()=>{
        content.style.display="inline-block";
    },1500)

    setTimeout(()=>{
        txtJp.innerText=talkJpArry[0]
        let talkH=txtJp.offsetHeight

        talk.animate({
            width:`${talkH+12}px`
        },1000)
        setTimeout(()=>{
            talk.style.width=`${talkH+12}px`
        },990)

        setTimeout(()=>{
            content.style.display="none";
        },3000)

    },2000)

    setTimeout(()=>{
        talk.style.width="1px"
        content.style.display="inline-block";
        txtJp.innerText=talkJpArry[1]

        setTimeout(()=>{
            let talkH=txtJp.offsetHeight
            talk.animate({
                width:`${talkH+10}px`
            },1000)
            setTimeout(()=>{
                talk.style.width=`${talkH+10}px`
            },990)

            setTimeout(()=>{
                content.style.display="none";
                talk.style.width="1px"
            },3000)
        },1000)
    },7000) 
}


setInterval(talk,13000)

window.addEventListener('load',talk)



setInterval(()=>{
    let me=document.querySelector(".eyes");
    setTimeout(() => {
        me.src="./images/char_00_eye_close.png"
    },500)


    setTimeout(() => {
        me.src="./images/char_00_eye_open.png"
    },1500);

},4500)


// window.addEventListener('load',eyes)
