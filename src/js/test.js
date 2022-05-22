

function init(){
    var test_screenWidth = document.body.clientWidth;
    let test_50_pic = document.getElementById('test_50_pic');

    if(test_screenWidth >= 768){
        test_50_pic.src= 'images/test_topic1.png';
    }
}

window.addEventListener('load',init,false);