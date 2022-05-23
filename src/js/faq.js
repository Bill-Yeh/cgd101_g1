window.addEventListener('load', function() {
    //faq 選單
    let course = document.getElementsByTagName('h2'); 
    
    for(let i = 0; i<course.length; i++){
        course[i].addEventListener('click',function(){
            course[i].style.color = '#fff';
            for(let j=0; j<course.length; j++){
                if(i != j){
                    course[j].style.color = '#F37420';
                }
            }
        });
    };

    // ================我要發文燈箱===================

    // 我要發文btn
    let postBtn = document.getElementById('faq_desktop_btn');

    // 關閉按鈕
    let postClose = document.getElementsByClassName('faq_post_close');

    // 燈箱
    let postLightBox = document.getElementById('faq_post');

    postBtn.addEventListener('click',function(){
        postLightBox.style.display = 'flex';
    })
    
    postClose.addEventListener('click',function(){
        postLightBox.style.display = 'none';
    })
});


// //綁定class:
// //1. 傳回字串
// //2. 傳回物件
// //3. 傳回物件(簡易)
// new Vue({
//     el: '.faq',
//     data: {     // 變數放這裡!
//         message: 'Hello',
//     },
//     methods: { // 函數大部分放這裡!
//     },
//     computed:{  //函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)
        
//     },
// });