
function checkWindow(){
    let vh = window.innerHeight;
    document.querySelector('.signUp_wrapper').style.height=`${vh-1}px`
}

window.addEventListener('load',checkWindow);

window.addEventListener('resize',checkWindow);



function ShowMsg(){
    setTimeout(()=>{
        document.querySelector('.msg_box').style.display="block";

        document.querySelector('.msg_box_inside').animate({
            width:"100%"
        },4000,'linear')
    },1500)

    setTimeout(()=>{
        document.querySelector('.msg_box_inside').style.width="1px"

    },5800)


    setTimeout(()=>{
        document.querySelector('.welcome').style.display="none"
        document.querySelector('.tip').style.display="block"
        document.querySelector('.msg_box_inside').animate({
            width:"100%"
        },4000,'linear')
    },6000)

    setTimeout(()=>{
        document.querySelector('.msg_box_inside').style.width="100%"
    },10000)


}



window.addEventListener('load',ShowMsg);




var scrollCount=0

function ZoomIn(){
    let box=document.querySelector(".img_box");
    let msg=document.querySelector(".msg_box");

    msg.style.display="none"
    let boxW=box.offsetWidth;
    let boxH=box.offsetHeight;
    
  
    if(scrollCount>23){
        document.querySelector('.msg_box').style.opacity="0";
    

        setTimeout(()=>{
            window.location.href='mem.html';

        },800)
    }

    else if(scrollCount<15){
        box.style.width=`${boxW+100}px`;
        box.style.height=`${boxH+100}px`;
        let boxW2=box.offsetWidth;
        let boxH2=box.offsetHeight;
        box.style.left=`-${(boxW2-window.innerWidth)/2}px`;
        box.style.top=`-${(boxH2-window.innerHeight)/2}px`;

    }

    else if(scrollCount>15 && scrollCount<20){
        box.style.width=`${boxW+1000}px`;
        box.style.height=`${boxH+1000}px`;
        let boxW2=box.offsetWidth;
        let boxH2=box.offsetHeight;
        box.style.left=`-${(boxW2-window.innerWidth)/2}px`;
        box.style.top=`-${(boxH2-window.innerHeight)/2}px`;
    }


    else{
        box.style.width=`${boxW+5000}px`;
        box.style.height=`${boxH+5000}px`;
        let boxW2=box.offsetWidth;
        let boxH2=box.offsetHeight;
        box.style.left=`-${(boxW2-window.innerWidth)/2}px`;
        box.style.top=`-${(boxH2-window.innerHeight)/2}px`;
    }
  


    scrollCount++;



}


window.addEventListener('wheel',ZoomIn);
window.addEventListener('touchmove',ZoomIn);
document.addEventListener('keydown',function(e){
    if(e.keyCode === 38 ){
        ZoomIn();
    }
  });


