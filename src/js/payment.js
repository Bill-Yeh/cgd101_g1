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

    let inputValue = document.querySelector('.customer_input');

    // 信用卡號1
    let cardID1 = document.getElementById('card_id');

    // 信用卡號2
    let cardID2 = document.getElementById('card_id2');

    // 信用卡號3
    let cardID3 = document.getElementById('card_id3');

    // 信用卡號4
    let cardID4 = document.getElementById('card_id4');

    // 有效期限
    let expireDate = document.getElementById('expire');

    // 安全碼
    let security = document.getElementById('security');

    // 姓名
    let name = document.getElementById('customer_name');

    // 電話
    let phone = document.getElementById('customer_phone');

    // 信箱
    let email = document.getElementById('customer_email');

    // 點擊確認結帳btn開燈箱
    paymentCheckBtn.addEventListener('click',function(e){
        if(cardID1.value =='' || cardID2.value ==''|| cardID3.value ==''|| cardID4.value ==''|| expireDate.value ==''|| security.value ==''|| name.value ==''|| phone.value ==''|| email.value ==''){
            alert('請輸入完整資訊');
            e.preventDefault();
            return;
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