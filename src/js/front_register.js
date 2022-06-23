window.addEventListener('load', function(){
    // 登入/註冊燈箱
    let loginRegister = document.getElementById('login_register');

    // 註冊欄位
    let registerColumn = document.getElementById('register');

    // 註冊切換鍵
    let registerSwitch = document.getElementById('registerSwitch');

    // 會員名稱
    let memberName = document.getElementById('member_name_id');

    // 會員帳號
    let memberAccount = document.getElementById('member_account_id');

    // 會員密碼
    let memberPassword = document.getElementById('member_password_id');
    
    // 確認密碼
    let confirmPassword = document.getElementById('confirm_password_id');
    
    // 註冊btn
    let registerBtn = document.getElementById('user_register');
    
    //email(帳號)的正規表達式
    let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 

    //密碼的正規表達式
    let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; 

    //註冊帳號過
    let accountValid2 = userEmail.test(memberAccount.value);
    // console.log("帳號:",accountValid2);

    //註冊密碼過
    let passwordValid2 = passwordCheck.test(memberPassword.value);

    // 登入後出現的會員名稱
    let memName = document.getElementById('memName');


    // =================註冊驗證==================
    registerBtn.addEventListener('click',function(e){
    // 註冊欄位如為空值，跳警告
        if(memberName.value == '' || memberAccount.value == '' || memberPassword.value == '' || confirmPassword.value == ''){
            alert('欄位不可為空值');
            e.preventDefault();
            return;
        }

        // 帳號驗證
        if (memberAccount.value.search(userEmail) == -1) {
            alert('帳號格式錯誤');
            memberAccount.value = "";
            memberAccount.focus();
            e.preventDefault();
            return;
        }

        // // 密碼驗證
        if(memberPassword.value.search(passwordCheck) == -1){
            alert('密碼格式錯誤');
            memberPassword.select();
            e.preventDefault();
            return;
        }

        // // 確認密碼驗證
        if (confirmPassword.value != memberPassword.value) {
            alert('確認密碼錯誤');
            confirmPassword.select();
            e.preventDefault();
            return;
        } 

        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            let memberEnroll = JSON.parse(xhr.responseText);

            if(memberEnroll == '帳號已存在'){
                alert(memberEnroll);
            }else{
                //將註冊表單上的資料清空，並隱藏起來
                memberAccount.value = '';
                memberPassword.value = '';
                confirmPassword.value = '';
                loginRegister.style.display = 'none';
                // alert('註冊成功，請登入帳號即可開始學習!');
                window.location.href = "signUp_animation.html";
            }
            if(window.innerWidth < 992){
                let xhr = new XMLHttpRequest();
                xhr.onload = function(){
                    memberWeb = JSON.parse(xhr.responseText);
                    if(memberWeb.account){
                        isLogin = true;
                        memName.innerText = memberWeb.member_name;
                        // header上面的東西隱藏/顯示
                        memIcon.style.display = 'none';
                        logout.style.display = 'block';
                        loginBox.style.width = '10%';
                        moneyArea.style.margin = 'auto';
                    } else {
                        isLogin = false;
                    }
                }
                xhr.open("get", "front_getMemberInfo.php", true);
                xhr.send(null);
            }else if(window.innerWidth > 992){
                let xhr = new XMLHttpRequest();
                xhr.onload = function(){
                    memberWeb = JSON.parse(xhr.responseText);
                    if(memberWeb.account){
                        isLogin = true;
                        memName.innerText = memberWeb.member_name;
                        // header上面的東西隱藏/顯示
                        memIcon.style.display = 'none';
                        logout.style.display = 'block';
                        memArea.style.display = 'block';
                        loginBox.style.width = '25%';
                        moneyArea.style.margin = '0';
                    } else {
                        isLogin = false;
                    }
                    location.reload()
                }
                xhr.open("get", "front_getMemberInfo.php", true);
                xhr.send(null);
            }
        }
        xhr.open("post", "front_register.php", true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

        let data_info = `member_name=${memberName.value}&account=${memberAccount.value}&password=${memberPassword.value}`;

        console.log('註冊資訊:',data_info);
        xhr.send(data_info);
        
    })

})