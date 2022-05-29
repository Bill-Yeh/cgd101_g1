

function init(){
    // *-----------開啟燈箱---------* //
    let test_50 = document.querySelectorAll('.test_50');

    for(let i = 0; i < test_50.length; i++){
        test_50[i].addEventListener('click',function(){
            testing.style.display = 'block';
        })
    }

    // *-----------關閉燈箱---------* //
    let test_lightBox_close = document.querySelector('.test_lightBox_close');

    let testing = document.querySelector('.test_lightBox_bg');

    test_lightBox_close.addEventListener('click',function(){
        testing.style.display = 'none';
    })
}

window.addEventListener('load',init,false);