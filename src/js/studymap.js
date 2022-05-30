new Vue({
        el:'.village',
        data:{
            img: ['firstVillage','secondVillage','thirdVillage','fourthvillage','fifthVillage','sixthVillage','seventhVillage'] 
        },
        methods:{
            nextTo50(){
                location.href="studyMap_50village.html";
            },
            nextToFirst(){
                location.href="studyMap_word_lv1.html";
            },
            nextToSecond(){
                location.href="studyMap_50village.html";
            },
            nextToThird(){
                location.href="studyMap_50village.html";
            },
        }
    })
new Vue({
        el:'.cloud',
        data:{
            img: ['background','1','2','3','4','5'] 
        },
        methods:{
            
        }
       
    })
    //==========對話招呼============
    let startCon = new Array('你好，我是數字大師，今天一起來學習數字吧!','我是時間管理大師，I want to know，你行不行?','初次見面，我是顏色大師，學習顏色怎麼說吧!','嘿嘿嘿，我是え...一起來學...50音え段...','我是お~今天一起來學習50音的母音お段~~' );
    //==========對話框人像============
   let npcSrc = new Array('./images/studyMap_NPC_number.png','./images/studyMap_NPC_time.png','./images/studyMap_NPC_color.png','./images/studyMap_NPC_food.png','./images/studyMap_NPC_trafic.png' );
    //==========對話============
   let numberCon = new Array("首先是「1」發音為「ichi」","再來是「2」，發音為「ni」","再來是「3」，發音為「san」","再來是「4」，發音為「yonn」","再來是「5」，發音為「go」","再來是「6」，發音為「roku」","再來是「7」，發音為「nana」","再來是「8」，發音為「hachi」","再來是「9」，發音為「kyuu」","再來是「10」，發音為「jyuu」","再來是「100」，發音為「hyaku」","再來是「1千」，發音為「sen」","再來是「1萬」，發音為「ichiman」");
   let timeCon = new Array("「おととい」前天，發音為「ototoi」","「きのう」昨天，發音為「kinou」","「きょう」今天，發音為「kyou」","「あした」明天，發音為「ashita」","「あさって」後天，發音為「asa-te」","「にちようび」星期日，發音為「nichiyoubi」","「げつようび」星期一，發音為「getsuyoubi」","「かようび」星期二，發音為「kayoubi」","「すいようび」星期三，發音為「suiyoubi」","「もくようび」星期四，發音為「mokuyoubi」","「きんようび」星期五，發音為「kinyoubi」","「どようび」星期六，發音為「doyoubi」");
   let colorCon = new Array("首先教學的是「しろ」白色，發音為「shiro」","再來是「くろ」黑色，發音為「kuro」","再來是「あか」紅色，發音為「aka」","再來是「あお」藍色，發音為「ao」","再來是「きいろ」黃色，發音為「kiiro」","再來是「ちゃいろ」棕色，發音為「chairo」","再來是「みどり」綠色，發音為「midori」","再來是「むらさき」紫色，發音為「murasaki」","再來是「きんいろ」金色，發音為「kiniro」","再來是「ぎんいろ」銀色，發音為「giniro」");
   let eCon = new Array("首先...「え」發音為「e」...","...「け」白色，發音為「ke」...","...「せ」，發音為「se」...","...「て」，發音為「te」...","...「ね」，發音為「ne」...","...「へ」，發音為「he」...","...「め」，發音為「me」...","...「れ」，發音為「re」...");
   let oCon = new Array("首先教學的是「お」發音為「o」","再來是「こ，發音為「ko」","再來是「そ」，發音為「so」","再來是「と」，發音為「to」","再來是「の」，發音為「no」","再來是「ほ」，發音為「ho」","再來是「も」，發音為「mo」","再來是「よ」，發音為「yo」","再來是「ろ」，發音為「ro」","再來是「を」，發音為「wo」","最後一個是鼻音「ん」，發音為「n」");
   //===========聲音檔路徑===========
   let soundSrcNumber = new Array("./sound/1.mp3","./sound/2.mp3","./sound/3.mp3","./sound/4.mp3","./sound/5.mp3","./sound/6.mp3","./sound/7.mp3","./sound/8.mp3","./sound/9.mp3","./sound/10.mp3","./sound/100.mp3","./sound/1000.mp3","./sound/10000.mp3");
   let soundSrcTime = new Array("./sound/tdby.mp3","./sound/yesterday.mp3","./sound/today.mp3","./sound/tomorrow.mp3","./sound/tdat.mp3","./sound/sunday.mp3","./sound/monday.mp3","./sound/tuesday.mp3","./sound/wendsday.mp3","./sound/thursday.mp3","./sound/friday.mp3","./sound/saturnday.mp3");
   let soundSrcColor = new Array("./sound/white.mp3","./sound/black.mp3","./sound/red.mp3","./sound/blue.mp3","./sound/yellow.mp3","./sound/brown.mp3","./sound/green.mp3","./sound/purple.mp3","./sound/gold.mp3","./sound/silver.mp3");
   let soundSrcE = new Array("./sound/e.mp3","./sound/ke.mp3","./sound/se.mp3","./sound/te.mp3","./sound/ne.mp3","./sound/he.mp3","./sound/me.mp3","./sound/re.mp3");
   let soundSrcO = new Array("./sound/o.mp3","./sound/ko.mp3","./sound/so.mp3","./sound/to.mp3","./sound/no.mp3","./sound/ho.mp3","./sound/mo.mp3","./sound/yo.mp3","./sound/ro.mp3","./sound/wo.mp3","./sound/n.mp3");
    //==========圖像檔路徑==============
   let fifityPicNumber = new Array("./images/studyMap_ichi.svg","./images/studyMap_ni2.svg","./images/studyMap_san.svg","./images/studyMap_yonn.svg","./images/studyMap_go.svg","./images/studyMap_roku.svg","./images/studyMap_nana.svg","./images/studyMap_hachi.svg","./images/studyMap_kyuu.svg","./images/studyMap_jyuu.svg","./images/studyMap_hyaku.svg","./images/studyMap_sen.svg","./images/studyMap_ichiman.svg");//13
   let fifityPicTime = new Array("./images/studyMap_tdby.svg","./images/studyMap_yesterday.svg","./images/studyMap_today.svg","./images/studyMap_tomorrow.svg","./images/studyMap_tdat.svg","./images/studyMap_sunday.svg","./images/studyMap_monday.svg","./images/studyMap_tuseday.svg","./images/studyMap_wendsday.svg","./images/studyMap_thursday.svg","./images/studyMap_friday.svg","./images/studyMap_saturnday.svg");//12
   let fifityPicColor = new Array("./images/studyMap_white.svg","./images/studyMap_black.svg","./images/studyMap_red.svg","./images/studyMap_blue.svg","./images/studyMap_yellow.svg","./images/studyMap_brown.svg","./images/studyMap_green.svg","./images/studyMap_purple.svg","./images/studyMap_gold.svg","./images/studyMap_silver.svg");//10
   let fifityPicE = new Array("./images/studyMap_e.svg","./images/studyMap_ke.svg","./images/studyMap_se.svg","./images/studyMap_te.svg","./images/studyMap_ne.svg","./images/studyMap_he.svg","./images/studyMap_me.svg","./images/studyMap_re.svg");//8
   let fifityPicO = new Array("./images/studyMap_o.svg","./images/studyMap_ko.svg","./images/studyMap_so.svg","./images/studyMap_to.svg","./images/studyMap_no.svg","./images/studyMap_ho.svg","./images/studyMap_mo.svg","./images/studyMap_yo.svg","./images/studyMap_ro.svg","./images/studyMap_wo.svg","./images/studyMap_n.svg");//11
function showLightBox(e){
   //背景變暗
   document.getElementById('mapFliter').style.display='block';
   document.getElementById('mapCon').style.display ='flex';
   document.getElementById('close').style.display='block';
   document.getElementById('number').style.display="none";
   document.getElementById('time').style.display="none";
   document.getElementById('color').style.display="none";
   document.getElementById('food').style.display="none";
   document.getElementById('trafic').style.display="none";
   //====法1抓陣列ID======================
   // let id = String(e.target.id)
   // let index = npcId.indexOf(id)
   // let pic = document.getElementById('PIC')
   // let con = document.getElementById('CON')
   // con.innerText = startCon[index]
   // pic.src=npcSrc[index]
   //==========法2========================
   let target = e.target.getAttribute('id');
   let pic = document.getElementById('pic');
   let con = document.getElementById('con');
       if(target =='number'){
           con.innerText = startCon[0];
           pic.src = npcSrc[0];
       }else if(target =='time'){
           con.innerText = startCon[1];
           pic.src = npcSrc[1];
       }else if(target =='color'){
           con.innerText = startCon[2];
           pic.src = npcSrc[2];
       }else if(target =='food'){
           con.innerText = startCon[3];
           pic.src = npcSrc[3];
       }else if(target =='trafic'){
           con.innerText = startCon[4];
           pic.src = npcSrc[4];
       }
}
function conversation(){
   let speaker = document.getElementById('sound');
   let photo = document.getElementById('mapMain');
   let fifty = document.getElementById('main_pic')
   let con = document.getElementById('con');
   let sound = document.getElementById('voice')
   let test = document.getElementById('toTest')
   speaker.style.display='flex';
   photo.style.display='flex';
   //數字
   if(cat.innerText == startCon[0]){
       con.innerText = numberCon[0];
       sound.src = soundSrcNumber[0];
       fifty.src = fifityPicNumber[0];
   }else if(cat.innerText == numberCon[0]){
       con.innerText = numberCon[1];
       sound.src = soundSrcNumber[1];
       fifty.src = fifityPicNumber[1];
   }else if(cat.innerText == numberCon[1]){
       con.innerText = numberCon[2];
       sound.src = soundSrcNumber[2];
       fifty.src = fifityPicNumber[2];
   }else if(cat.innerText == numberCon[2]){
       con.innerText = numberCon[3];
       sound.src = soundSrcNumber[3];
       fifty.src = fifityPicNumber[3];
   }else if(cat.innerText == numberCon[3]){
       con.innerText = numberCon[4];
       sound.src = soundSrcNumber[4];
       fifty.src = fifityPicNumber[4];
   }else if(cat.innerText == numberCon[4]){
       con.innerText = numberCon[5];
       sound.src = soundSrcNumber[5];
       fifty.src = fifityPicNumber[5];
   }else if(cat.innerText == numberCon[5]){
       con.innerText = numberCon[6];
       sound.src = soundSrcNumber[6];
       fifty.src = fifityPicNumber[6];
   }else if(cat.innerText == numberCon[6]){
       con.innerText = numberCon[7];
       sound.src = soundSrcNumber[7];
       fifty.src = fifityPicNumber[7];
   }else if(cat.innerText == numberCon[7]){
       con.innerText = numberCon[8];
       sound.src = soundSrcNumber[8];
       fifty.src = fifityPicNumber[8];
   }else if(cat.innerText == numberCon[8]){
       con.innerText = numberCon[9];
       sound.src = soundSrcNumber[9];
       fifty.src = fifityPicNumber[9];
   }else if(cat.innerText == numberCon[9]){
       con.innerText = numberCon[10];
       sound.src = soundSrcNumber[10];
       fifty.src = fifityPicNumber[10];
   }else if(cat.innerText == numberCon[10]){
       con.innerText = numberCon[11];
       sound.src = soundSrcNumber[11];
       fifty.src = fifityPicNumber[11];
   }else if(cat.innerText == numberCon[11]){
       con.innerText = numberCon[12];
       sound.src = soundSrcNumber[12];
       fifty.src = fifityPicNumber[12];
   }else if(cat.innerText == numberCon[12]){
       con.innerText = numberCon[0];
       sound.src = soundSrcNumber[0];
       fifty.src = fifityPicNumber[0];
       // document.getElementById('mapFliter').style.display='none';
       document.getElementById('mapCon').style.display ='none';
       speaker.style.display='none';
       photo.style.display='none';
       document.getElementById('close').style.display='none';
       toTest.style.display='flex';
   }
   //時間
   else if(cat.innerText == startCon[1]){
       con.innerText = timeCon[0];
       sound.src = soundSrcTime[0];
       fifty.src = fifityPicTime[0];
   }else if(cat.innerText == timeCon[0]){
       con.innerText = timeCon[1];
       sound.src = soundSrcTime[1];
       fifty.src = fifityPicTime[1];
   }else if(cat.innerText == timeCon[1]){
       con.innerText = timeCon[2];
       sound.src = soundSrcTime[2];
       fifty.src = fifityPicTime[2];
   }else if(cat.innerText == timeCon[2]){
       con.innerText = timeCon[3];
       sound.src = soundSrcTime[3];
       fifty.src = fifityPicTime[3];
   }else if(cat.innerText == timeCon[3]){
       con.innerText = timeCon[4];
       sound.src = soundSrcTime[4];
       fifty.src = fifityPicTime[4];
   }else if(cat.innerText == timeCon[4]){
       con.innerText = timeCon[5];
       sound.src = soundSrcTime[5];
       fifty.src = fifityPicTime[5];
   }else if(cat.innerText == timeCon[5]){
       con.innerText = timeCon[6];
       sound.src = soundSrcTime[6];
       fifty.src = fifityPicTime[6];
   }else if(cat.innerText == timeCon[6]){
       con.innerText = timeCon[7];
       sound.src = soundSrcTime[7];
       fifty.src = fifityPicTime[7];
   }else if(cat.innerText == timeCon[7]){
       con.innerText = timeCon[8];
       sound.src = soundSrcTime[8];
       fifty.src = fifityPicTime[8];
   }else if(cat.innerText == timeCon[8]){
       con.innerText = timeCon[9];
       sound.src = soundSrcTime[9];
       fifty.src = fifityPicTime[9];
   }else if(cat.innerText == timeCon[9]){
       con.innerText = timeCon[10];
       sound.src = soundSrcTime[10];
       fifty.src = fifityPicTime[10];
   }else if(cat.innerText == timeCon[10]){
       con.innerText = timeCon[11];
       sound.src = soundSrcTime[11];
       fifty.src = fifityPicTime[11];
   }else if(cat.innerText == timeCon[11]){
       con.innerText = timeCon[0];
       sound.src = soundSrcTime[0];
       fifty.src = fifityPicTime[0];
       // document.getElementById('mapFliter').style.display='none';
       document.getElementById('mapCon').style.display ='none';
       speaker.style.display='none';
       photo.style.display='none';
       document.getElementById('close').style.display='none';
       test.style.display='flex';
   }
   //顏色
   else if(cat.innerText == startCon[2]){
       con.innerText = colorCon[0];
       sound.src = soundSrcColor[0];
       fifty.src = fifityPicColor[0];
       photo.style.backgroundColor='white'
   }else if(cat.innerText == colorCon[0]){
       con.innerText = colorCon[1];
       sound.src = soundSrcColor[1];
       fifty.src = fifityPicColor[1];
       photo.style.backgroundColor='black'
   }else if(cat.innerText == colorCon[1]){
       con.innerText = colorCon[2];
       sound.src = soundSrcColor[2];
       fifty.src = fifityPicColor[2];
       photo.style.backgroundColor='red'
   }else if(cat.innerText == colorCon[2]){
       con.innerText = colorCon[3];
       sound.src = soundSrcColor[3];
       fifty.src = fifityPicColor[3];
       photo.style.backgroundColor='blue'
   }else if(cat.innerText == colorCon[3]){
       con.innerText = colorCon[4];
       sound.src = soundSrcColor[4];
       fifty.src = fifityPicColor[4];
       photo.style.backgroundColor='yellow'
   }else if(cat.innerText == colorCon[4]){
       con.innerText = colorCon[5];
       sound.src = soundSrcColor[5];
       fifty.src = fifityPicColor[5];
       photo.style.backgroundColor='brown'
   }else if(cat.innerText == colorCon[5]){
       con.innerText = colorCon[6];
       sound.src = soundSrcColor[6];
       fifty.src = fifityPicColor[6];
       photo.style.backgroundColor='green'
   }else if(cat.innerText == colorCon[6]){
       con.innerText = colorCon[7];
       sound.src = soundSrcColor[7];
       fifty.src = fifityPicColor[7];
       photo.style.backgroundColor='purple'
   }else if(cat.innerText == colorCon[7]){
       con.innerText = colorCon[8];
       sound.src = soundSrcColor[8];
       fifty.src = fifityPicColor[8];
       photo.style.backgroundColor='gold'
   }else if(cat.innerText == colorCon[8]){
       con.innerText = colorCon[9];
       sound.src = soundSrcColor[9];
       fifty.src = fifityPicColor[9];
       photo.style.backgroundColor='silver'
   }else if(cat.innerText == colorCon[9]){
       con.innerText = colorCon[0];
       sound.src = soundSrcColor[0];
       fifty.src = fifityPicColor[0];
       photo.style.backgroundColor='#FAE6B8';
       document.getElementById('mapCon').style.display ='none';
       speaker.style.display='none';
       photo.style.display='none';
       document.getElementById('close').style.display='none';
       test.style.display='flex';;
   }
   //食物
   else if(cat.innerText == startCon[3]){
       con.innerText = eCon[0];
       sound.src = soundSrcE[0];
       fifty.src = fifityPicE[0];
   }else if(cat.innerText == eCon[0]){
       con.innerText = eCon[1];
       sound.src = soundSrcE[1];
       fifty.src = fifityPicE[1];
   }else if(cat.innerText == eCon[1]){
       con.innerText = eCon[2];
       sound.src = soundSrcE[2];
       fifty.src = fifityPicE[2];
   }else if(cat.innerText == eCon[2]){
       con.innerText = eCon[3];
       sound.src = soundSrcE[3];
       fifty.src = fifityPicE[3];
   }else if(cat.innerText == eCon[3]){
       con.innerText = eCon[4];
       sound.src = soundSrcE[4];
       fifty.src = fifityPicE[4];
   }else if(cat.innerText == eCon[4]){
       con.innerText = eCon[5];
       sound.src = soundSrcE[5];
       fifty.src = fifityPicE[5];
   }else if(cat.innerText == eCon[5]){
       con.innerText = eCon[6];
       sound.src = soundSrcE[6];
       fifty.src = fifityPicE[6];
   }else if(cat.innerText == eCon[6]){
       con.innerText = eCon[7];
       sound.src = soundSrcE[7];
       fifty.src = fifityPicE[7];
   }
   else if(cat.innerText == eCon[7]){
       con.innerText = eCon[0];
       sound.src = soundSrcE[0];
       fifty.src = fifityPicE[0];
       document.getElementById('mapCon').style.display ='none';
       speaker.style.display='none';
       photo.style.display='none';
       document.getElementById('close').style.display='none';
       test.style.display='flex';;
   }
   //交通
   else if(cat.innerText == startCon[4]){
       con.innerText = oCon[0];
       sound.src = soundSrcO[0];
       fifty.src = fifityPicO[0];
   }else if(cat.innerText == oCon[0]){
       con.innerText = oCon[1];
       sound.src = soundSrcO[1];
       fifty.src = fifityPicO[1];
   }else if(cat.innerText == oCon[1]){
       con.innerText = oCon[2];
       sound.src = soundSrcO[2];
       fifty.src = fifityPicO[2];
   }else if(cat.innerText == oCon[2]){
       con.innerText = oCon[3];
       sound.src = soundSrcO[3];
       fifty.src = fifityPicO[3];
   }else if(cat.innerText == oCon[3]){
       con.innerText = oCon[4];
       sound.src = soundSrcO[4];
       fifty.src = fifityPicO[4];
   }else if(cat.innerText == oCon[4]){
       con.innerText = oCon[5];
       sound.src = soundSrcO[5];
       fifty.src = fifityPicO[5];
   }else if(cat.innerText == oCon[5]){
       con.innerText = oCon[6];
       sound.src = soundSrcO[6];
       fifty.src = fifityPicO[6];
   }else if(cat.innerText == oCon[6]){
       con.innerText = oCon[7];
       sound.src = soundSrcO[7];
       fifty.src = fifityPicO[7];
   }else if(cat.innerText == oCon[7]){
       con.innerText = oCon[8];
       sound.src = soundSrcO[8];
       fifty.src = fifityPicO[8];
   }else if(cat.innerText == oCon[8]){
       con.innerText = oCon[9];
       sound.src = soundSrcO[9];
       fifty.src = fifityPicO[9];
   }else if(cat.innerText == oCon[9]){
       con.innerText = oCon[10];
       sound.src = soundSrcO[10];
       fifty.src = fifityPicO[10];
   }else if(cat.innerText == oCon[10]){
       con.innerText = oCon[0];
       sound.src = soundSrcO[0];
       fifty.src = fifityPicO[0];
       document.getElementById('mapCon').style.display ='none';
       speaker.style.display='none';
       photo.style.display='none';
       document.getElementById('close').style.display='none';
       test.style.display='flex';
   }
}  
function justPlay(e){
   let sound = document.getElementById('voice')
   sound.play();
   e.stopPropagation();//阻止冒泡事件
}
function shutDown(){
   document.getElementById('mapFliter').style.display='none';
   document.getElementById('mapCon').style.display ='none';
   document.getElementById('sound').style.display='none';
   document.getElementById('mapMain').style.display='none';
   document.getElementById('mapMain').style.backgroundColor='#FAE6B8'; 
   document.getElementById('close').style.display='none';
   document.getElementById('number').style.display="block";
   document.getElementById('time').style.display="block";
   document.getElementById('color').style.display="block";
   document.getElementById('food').style.display="block";
   document.getElementById('trafic').style.display="block";
}
function goToTest(e){
   let target = e.target.getAttribute('id');
   window.location.href="https://www.google.com.tw/";
}
function cancelBox(){
   document.getElementById('mapFliter').style.display='none';
   document.getElementById('toTest').style.display='none';
   document.getElementById('number').style.display="block";
   document.getElementById('time').style.display="block";
   document.getElementById('color').style.display="block";
   document.getElementById('food').style.display="block";
   document.getElementById('trafic').style.display="block";
}
let cat = document.getElementById('mapCon')
function init(){
   let imgs = document.getElementsByClassName('npc-img');
   let closeBox = document.getElementById('close');
   let goto =document.getElementById('Yes');
   let cancel =document.getElementById('No');
   for(let i=0;i<imgs.length; i++){
       imgs[i].onclick = showLightBox ;
   };
   cat.addEventListener('click',conversation,false);
   sound.addEventListener('click',justPlay,false);
   closeBox.addEventListener('click',shutDown,false);
   goto.addEventListener('click',goToTest,false);
   cancel.addEventListener('click',cancelBox,false);
};
window.addEventListener("load", init, false);
    


//gsap雲動畫
    // gsap.to("#cloud1",{
    //     x:-10,
    //     y:3,
    //     repeat:Infinity,
    //     duration:9,
    //     yoyo:true,
    // });
    // gsap.to("#cloud2",{
    //     x:30,
    //     y:0,
    //     repeat:Infinity,
    //     duration:10,
    //     yoyo:true,
    // });
    // gsap.to("#cloud3",{
    //     x:40,
    //     y:-5,
    //     repeat:Infinity,
    //     duration:8,
    //     yoyo:true,
    // });
    // gsap.to("#cloud4",{
    //     x:-60,
    //     y:5,
    //     repeat:Infinity,
    //     duration:15,
    //     yoyo:true,
    // });
    // gsap.to("#cloud5",{
    //     x:50,
    //     y:10,
    //     repeat:Infinity,
    //     duration:10,
    //     yoyo:true,
    // });
    //==========================================

        //     // let npcId =new Array('asan','isan','usan','esan','osan')
        //     let startCon = new Array('你好，我是あ，今天一起來學習50音的母音あ段吧!','本大爺是い，學習母音い段的事，就交給我吧!','初次見面，我是う，快來學習50音的母音う段，GO!!','嘿嘿嘿，我是え...一起來學...50音え段...','我是お~今天一起來學習50音的母音お段~~' );
        //     let npcSrc = new Array('./images/studyMap_NPC_a.png','./images/studyMap_NPC_i.png','./images/studyMap_NPC_u.png','./images/studyMap_NPC_e.png','./images/studyMap_NPC_o.png' );
        //     let aCon = new Array("首先教學的是「あ」發音為「a」","再來是「か，發音為「ka」","再來是「さ」，發音為「sa」","再來是「た」，發音為「ta」","再來是「な」，發音為「na」","再來是「は」，發音為「ha」","再來是「ま」，發音為「ma」","再來是「や」，發音為「ya」","再來是「ら」，發音為「ra」","再來是「わ」，發音為「wa」");
        //     let iCon = new Array("首先教學的是「い」發音為「i」","再來是「き」，發音為「ki」","再來是「し」，發音為「shi」","再來是「ち」，發音為「chi」","再來是「に」，發音為「ni」","再來是「ひ」，發音為「hi」","再來是「み」，發音為「mi」","再來是「り」，發音為「ri」");
        //     let uCon = new Array("首先教學的是「う」發音為「u」","再來是「く，發音為「ku」","再來是「す」，發音為「su」","再來是「つ」，發音為「tsu」","再來是「ぬ」，發音為「nu」","再來是「ふ」，發音為「fu」","再來是「む」，發音為「mu」","再來是「ゆ」，發音為「yu」","再來是「る」，發音為「ru」");
        //     let eCon = new Array("首先...「え」發音為「e」...","...「け」，發音為「ke」...","...「せ」，發音為「se」...","...「て」，發音為「te」...","...「ね」，發音為「ne」...","...「へ」，發音為「he」...","...「め」，發音為「me」...","...「れ」，發音為「re」...");
        //     let oCon = new Array("首先教學的是「お」發音為「o」","再來是「こ，發音為「ko」","再來是「そ」，發音為「so」","再來是「と」，發音為「to」","再來是「の」，發音為「no」","再來是「ほ」，發音為「ho」","再來是「も」，發音為「mo」","再來是「よ」，發音為「yo」","再來是「ろ」，發音為「ro」","再來是「を」，發音為「wo」","最後一個是鼻音「ん」，發音為「n」");
        //     let soundSrcA = new Array("./sound/a.mp3","./sound/ka.mp3","./sound/sa.mp3","./sound/ta.mp3","./sound/na.mp3","./sound/ha.mp3","./sound/ma.mp3","./sound/ya.mp3","./sound/ra.mp3","./sound/wa.mp3");
        //     let soundSrcI = new Array("./sound/i.mp3","./sound/ki.mp3","./sound/shi.mp3","./sound/chi.mp3","./sound/ni.mp3","./sound/hi.mp3","./sound/mi.mp3","./sound/ri.mp3");
        //     let soundSrcU = new Array("./sound/u.mp3","./sound/ku.mp3","./sound/su.mp3","./sound/tsu.mp3","./sound/nu.mp3","./sound/fu.mp3","./sound/mu.mp3","./sound/yu.mp3","./sound/ru.mp3");
        //     let soundSrcE = new Array("./sound/e.mp3","./sound/ke.mp3","./sound/se.mp3","./sound/te.mp3","./sound/ne.mp3","./sound/he.mp3","./sound/me.mp3","./sound/re.mp3");
        //     let soundSrcO = new Array("./sound/o.mp3","./sound/ko.mp3","./sound/so.mp3","./sound/to.mp3","./sound/no.mp3","./sound/ho.mp3","./sound/mo.mp3","./sound/yo.mp3","./sound/ro.mp3","./sound/wo.mp3","./sound/n.mp3");
        //     let fifityPicA = new Array("./images/studyMap_a.svg","./images/studyMap_ka.svg","./images/studyMap_sa.svg","./images/studyMap_ta.svg","./images/studyMap_na.svg","./images/studyMap_ha.svg","./images/studyMap_ma.svg","./images/studyMap_ya.svg","./images/studyMap_ra.svg","./images/studyMap_wa.svg");//10
        //     let fifityPicI = new Array("./images/studyMap_i.svg","./images/studyMap_ki.svg","./images/studyMap_shi.svg","./images/studyMap_chi.svg","./images/studyMap_ni.svg","./images/studyMap_hi.svg","./images/studyMap_mi.svg","./images/studyMap_ri.svg");//8
        //     let fifityPicU = new Array("./images/studyMap_u.svg","./images/studyMap_ku.svg","./images/studyMap_su.svg","./images/studyMap_tsu.svg","./images/studyMap_nu.svg","./images/studyMap_fu.svg","./images/studyMap_mu.svg","./images/studyMap_yu.svg","./images/studyMap_ru.svg");//9
        //     let fifityPicE = new Array("./images/studyMap_e.svg","./images/studyMap_ke.svg","./images/studyMap_se.svg","./images/studyMap_te.svg","./images/studyMap_ne.svg","./images/studyMap_he.svg","./images/studyMap_me.svg","./images/studyMap_re.svg");//8
        //     let fifityPicO = new Array("./images/studyMap_o.svg","./images/studyMap_ko.svg","./images/studyMap_so.svg","./images/studyMap_to.svg","./images/studyMap_no.svg","./images/studyMap_ho.svg","./images/studyMap_mo.svg","./images/studyMap_yo.svg","./images/studyMap_ro.svg","./images/studyMap_wo.svg","./images/studyMap_n.svg");//11
        // function showLightBox(e){
        //     //背景變暗
        //     document.getElementById('mapFliter').style.display='block';
        //     document.getElementById('mapCon').style.display ='flex';
        //     //====法1抓陣列ID======================
        //     // let id = String(e.target.id)
        //     // let index = npcId.indexOf(id)
        //     // let pic = document.getElementById('PIC')
        //     // let con = document.getElementById('CON')
        //     // con.innerText = startCon[index]
        //     // pic.src=npcSrc[index]
        //     //==========法2========================
        //     let target = e.target.getAttribute('id');
        //     let pic = document.getElementById('pic');
        //     let con = document.getElementById('con');
        //         if(target =='asan'){
        //             con.innerText = startCon[0];
        //             pic.src = npcSrc[0];
        //         }else if(target =='isan'){
        //             con.innerText = startCon[1];
        //             pic.src = npcSrc[1];
        //         }else if(target =='usan'){
        //             con.innerText = startCon[2];
        //             pic.src = npcSrc[2];
        //         }else if(target =='esan'){
        //             con.innerText = startCon[3];
        //             pic.src =npcSrc[3];
        //         }else if(target =='osan'){
        //             con.innerText = startCon[4];
        //             pic.src =npcSrc[4];
        //         }
        //         // console.log(pic);
        //         // console.log(e.target.getAttribute('id'));
        // }
        // function conversation(){
        //     let speaker = document.getElementById('sound');
        //     let photo = document.getElementById('mapMain');
        //     let fifty = document.getElementById('main_pic')
        //     let con = document.getElementById('con');
        //     let sound = document.getElementById('voice')
        //     speaker.style.display='flex';
        //     photo.style.display='flex';
        //     //あ
        //     if(cat.innerText==startCon[0]){
        //         con.innerText = aCon[0];
        //         sound.src = soundSrcA[0];
        //         fifty.src = fifityPicA[0];
        //     }else if(cat.innerText==aCon[0]){
        //         con.innerText = aCon[1];
        //         sound.src = soundSrcA[1];
        //         fifty.src = fifityPicA[1];
        //     }else if(cat.innerText==aCon[1]){
        //         con.innerText = aCon[2];
        //         sound.src = soundSrcA[2];
        //         fifty.src = fifityPicA[2];
        //     }else if(cat.innerText==aCon[2]){
        //         con.innerText = aCon[3];
        //         sound.src = soundSrcA[3];
        //         fifty.src = fifityPicA[3];
        //     }else if(cat.innerText==aCon[3]){
        //         con.innerText = aCon[4];
        //         sound.src = soundSrcA[4];
        //         fifty.src = fifityPicA[4];
        //     }else if(cat.innerText==aCon[4]){
        //         con.innerText = aCon[5];
        //         sound.src = soundSrcA[5];
        //         fifty.src = fifityPicA[5];
        //     }else if(cat.innerText==aCon[5]){
        //         con.innerText = aCon[6];
        //         sound.src = soundSrcA[6];
        //         fifty.src = fifityPicA[6];
        //     }else if(cat.innerText==aCon[6]){
        //         con.innerText = aCon[7];
        //         sound.src = soundSrcA[7];
        //         fifty.src = fifityPicA[7];
        //     }else if(cat.innerText==aCon[7]){
        //         con.innerText = aCon[8];
        //         sound.src = soundSrcA[8];
        //         fifty.src = fifityPicA[8];
        //     }else if(cat.innerText==aCon[8]){
        //         con.innerText = aCon[9];
        //         sound.src = soundSrcA[9];
        //         fifty.src = fifityPicA[9];
        //     }else if(cat.innerText==aCon[9]){
        //         con.innerText = aCon[0];
        //         sound.src = soundSrcA[0];
        //         fifty.src = fifityPicA[0];
        //         document.getElementById('mapFliter').style.display='none';
        //         document.getElementById('mapCon').style.display ='none';
        //         speaker.style.display='none';
        //         photo.style.display='none';
        //     }
        //     //い
        //     else if(cat.innerText==startCon[1]){
        //         con.innerText = iCon[0];
        //         sound.src = soundSrcI[0];
        //         fifty.src = fifityPicI[0];
        //     }else if(cat.innerText==iCon[0]){
        //         con.innerText = iCon[1];
        //         sound.src = soundSrcI[1];
        //         fifty.src = fifityPicI[1];
        //     }else if(cat.innerText==iCon[1]){
        //         con.innerText = iCon[2];
        //         sound.src = soundSrcI[2];
        //         fifty.src = fifityPicI[2];
        //     }else if(cat.innerText==iCon[2]){
        //         con.innerText = iCon[3];
        //         sound.src = soundSrcI[3];
        //         fifty.src = fifityPicI[3];
        //     }else if(cat.innerText==iCon[3]){
        //         con.innerText = iCon[4];
        //         sound.src = soundSrcI[4];
        //         fifty.src = fifityPicI[4];
        //     }else if(cat.innerText==iCon[4]){
        //         con.innerText = iCon[5];
        //         sound.src = soundSrcI[5];
        //         fifty.src = fifityPicI[5];
        //     }else if(cat.innerText==iCon[5]){
        //         con.innerText = iCon[6];
        //         sound.src = soundSrcI[6];
        //         fifty.src = fifityPicI[6];
        //     }else if(cat.innerText==iCon[6]){
        //         con.innerText = iCon[7];
        //         sound.src = soundSrcI[7];
        //         fifty.src = fifityPicI[7];
        //     }else if(cat.innerText==iCon[7]){
        //         con.innerText = iCon[0];
        //         sound.src = soundSrcI[0];
        //         fifty.src = fifityPicI[0];
        //         document.getElementById('mapFliter').style.display='none';
        //         document.getElementById('mapCon').style.display ='none';
        //         speaker.style.display='none';
        //         photo.style.display='none';
        //     }
        //     //う
        //     else if(cat.innerText==startCon[2]){
        //         con.innerText = uCon[0];
        //         sound.src = soundSrcU[0];
        //         fifty.src = fifityPicU[0];
        //     }else if(cat.innerText==uCon[0]){
        //         con.innerText = uCon[1];
        //         sound.src = soundSrcU[1];
        //         fifty.src = fifityPicU[1];
        //     }else if(cat.innerText==uCon[1]){
        //         con.innerText = uCon[2];
        //         sound.src = soundSrcU[2];
        //         fifty.src = fifityPicU[2];
        //     }else if(cat.innerText==uCon[2]){
        //         con.innerText = uCon[3];
        //         sound.src = soundSrcU[3];
        //         fifty.src = fifityPicU[3];
        //     }else if(cat.innerText==uCon[3]){
        //         con.innerText = uCon[4];
        //         sound.src = soundSrcU[4];
        //         fifty.src = fifityPicU[4];
        //     }else if(cat.innerText==uCon[4]){
        //         con.innerText = uCon[5];
        //         sound.src = soundSrcU[5];
        //         fifty.src = fifityPicU[5];
        //     }else if(cat.innerText==uCon[5]){
        //         con.innerText = uCon[6];
        //         sound.src = soundSrcU[6];
        //         fifty.src = fifityPicU[6];
        //     }else if(cat.innerText==uCon[6]){
        //         con.innerText = uCon[7];
        //         sound.src = soundSrcU[7];
        //         fifty.src = fifityPicU[7];
        //     }else if(cat.innerText==uCon[7]){
        //         con.innerText = uCon[8];
        //         sound.src = soundSrcU[8];
        //         fifty.src = fifityPicU[8];
        //     }else if(cat.innerText==uCon[8]){
        //         con.innerText = uCon[0];
        //         sound.src = soundSrcU[0];
        //         fifty.src = fifityPicU[0];
        //         document.getElementById('mapFliter').style.display='none';
        //         document.getElementById('mapCon').style.display ='none';
        //         speaker.style.display='none';
        //         photo.style.display='none';
        //     }
        //     //え
        //     else if(cat.innerText==startCon[3]){
        //         con.innerText = eCon[0];
        //         sound.src = soundSrcE[0];
        //         fifty.src = fifityPicE[0];
        //     }else if(cat.innerText==eCon[0]){
        //         con.innerText = eCon[1];
        //         sound.src = soundSrcE[1];
        //         fifty.src = fifityPicE[1];
        //     }else if(cat.innerText==eCon[1]){
        //         con.innerText = eCon[2];
        //         sound.src = soundSrcE[2];
        //         fifty.src = fifityPicE[2];
        //     }else if(cat.innerText==eCon[2]){
        //         con.innerText = eCon[3];
        //         sound.src = soundSrcE[3];
        //         fifty.src = fifityPicE[3];
        //     }else if(cat.innerText==eCon[3]){
        //         con.innerText = eCon[4];
        //         sound.src = soundSrcE[4];
        //         fifty.src = fifityPicE[4];
        //     }else if(cat.innerText==eCon[4]){
        //         con.innerText = eCon[5];
        //         sound.src = soundSrcE[5];
        //         fifty.src = fifityPicE[5];
        //     }else if(cat.innerText==eCon[5]){
        //         con.innerText = eCon[6];
        //         sound.src = soundSrcE[6];
        //         fifty.src = fifityPicE[6];
        //     }else if(cat.innerText==eCon[6]){
        //         con.innerText = eCon[7];
        //         sound.src = soundSrcE[7];
        //         fifty.src = fifityPicE[7];
        //     }
        //     else if(cat.innerText==eCon[7]){
        //         con.innerText = eCon[0];
        //         sound.src = soundSrcE[0];
        //         fifty.src = fifityPicE[0];
        //         document.getElementById('mapFliter').style.display='none';
        //         document.getElementById('mapCon').style.display ='none';
        //         speaker.style.display='none';
        //         photo.style.display='none';
        //     }
        //     //お
        //     else if(cat.innerText==startCon[4]){
        //         con.innerText = oCon[0];
        //         sound.src = soundSrcO[0];
        //         fifty.src = fifityPicO[0];
        //     }else if(cat.innerText==oCon[0]){
        //         con.innerText = oCon[1];
        //         sound.src = soundSrcO[1];
        //         fifty.src = fifityPicO[1];
        //     }else if(cat.innerText==oCon[1]){
        //         con.innerText = oCon[2];
        //         sound.src = soundSrcO[2];
        //         fifty.src = fifityPicO[2];
        //     }else if(cat.innerText==oCon[2]){
        //         con.innerText = oCon[3];
        //         sound.src = soundSrcO[3];
        //         fifty.src = fifityPicO[3];
        //     }else if(cat.innerText==oCon[3]){
        //         con.innerText = oCon[4];
        //         sound.src = soundSrcO[4];
        //         fifty.src = fifityPicO[4];
        //     }else if(cat.innerText==oCon[4]){
        //         con.innerText = oCon[5];
        //         sound.src = soundSrcO[5];
        //         fifty.src = fifityPicO[5];
        //     }else if(cat.innerText==oCon[5]){
        //         con.innerText = oCon[6];
        //         sound.src = soundSrcO[6];
        //         fifty.src = fifityPicO[6];
        //     }else if(cat.innerText==oCon[6]){
        //         con.innerText = oCon[7];
        //         sound.src = soundSrcO[7];
        //         fifty.src = fifityPicO[7];
        //     }else if(cat.innerText==oCon[7]){
        //         con.innerText = oCon[8];
        //         sound.src = soundSrcO[8];
        //         fifty.src = fifityPicO[8];
        //     }else if(cat.innerText==oCon[8]){
        //         con.innerText = oCon[9];
        //         sound.src = soundSrcO[9];
        //         fifty.src = fifityPicO[9];
        //     }else if(cat.innerText==oCon[9]){
        //         con.innerText = oCon[10];
        //         sound.src = soundSrcO[10];
        //         fifty.src = fifityPicO[10];
        //     }else if(cat.innerText==oCon[10]){
        //         con.innerText = oCon[0];
        //         sound.src = soundSrcO[0];
        //         fifty.src = fifityPicO[0];
        //         document.getElementById('mapFliter').style.display='none';
        //         document.getElementById('mapCon').style.display ='none';
        //         speaker.style.display='none';
        //         photo.style.display='none';
        //     }
        // }
        // // sound.onclick = function justPlay(e){
        // //     e.stopPropagation();//阻止事件冒泡
        // // }   
        // function justPlay(e){
        //     let sound = document.getElementById('voice')
        //     sound.play();
        //     e.stopPropagation();
        // }
        // let cat = document.getElementById('mapCon')
        // function init(){
        //     let imgs = document.getElementsByClassName('npc-img');
        //     for(let i=0;i<imgs.length; i++){
        //         imgs[i].onclick = showLightBox ;
        //     };
        //     cat.onclick = conversation;
        //     sound.onclick = justPlay;
        // };
        // //window.addEventListener("mouseover",justPlay)
        // window.addEventListener("load", init, false);