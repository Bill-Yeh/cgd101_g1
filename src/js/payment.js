window.addEventListener('load',function(){

    // 確認結帳燈箱
    let paymentCheckBox = document.getElementById('payment_confirm_check');

    // 確認結帳btn(外面的)
    let paymentCheckBtn = document.getElementById('confirmPayment');

    // 關閉icon
    let checkClose = document.getElementById('confirm_check_close');

    // 燈箱內的確認結帳btn
    let confirmPayment = document.getElementById('confirm_payment_btn');

    // 取消付款btn
    let cancelBtn = document.getElementById('cancel_trade');

    let customerInput = document.querySelectorAll('.customer_input');

    // 點擊確認結帳btn開燈箱
    paymentCheckBtn.addEventListener('click',function(e){
        for(i = 0 ;i<customerInput.length; i++){
            if(customerInput[i].value ==''){
                alert('請輸入完整資訊');
                return;
            }
        }
        
        // 開燈箱
        paymentCheckBox.style.display = 'flex';

        // 點叉叉關燈箱
        checkClose.addEventListener('click',function(){
            paymentCheckBox.style.display = 'none';
        })

        // 點取消付款btn關燈箱
        cancelBtn.addEventListener('click',function(){
            paymentCheckBox.style.display = 'none';
        })

        // 點確認結帳btn跳出付款成功訊息並跳轉到會員專區
        confirmPayment.addEventListener('click',function(){
            alert('付款成功，祝您學習一切順利');
            window.location.replace('mem.html');
        })
    })
})

function setBlur(obj,target2){
    var target =document.getElementById(target2);
    if(obj.value.length == obj.getAttribute('maxlength'))
        {
            target.focus();
        }
    return;
}