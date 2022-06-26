window.addEventListener('load', function(){
    // 會員變數
    let memberWeb;

    // rwd會員專區
    let rwdMem = document.getElementById('rwdMem');

    // header loginBox
    let loginBox = document.getElementById('loginBox');

    // header 會員專區icon的div
    let member = document.getElementById('for_member_section');

    // header 會員專區icon
    let memIcon = document.getElementById('userHead');

    // header 會員專區
    let memArea = document.getElementById('memArea');

    // header 登出
    let logout = document.getElementById('logout');

    // header 代幣區
    let moneyArea = document.getElementById('moneyArea');

    // 登入後出現的會員名稱
    let memName = document.getElementById('memName');

    // =================================================

    // 登入/註冊燈箱
    let loginRegister = document.getElementById('login_register');

    // 關閉icon
    let loginRegisterClose = document.getElementById('login_close');

    // 登入欄位
    let loginColumn = document.getElementById('login');

    // 登入切換鍵
    let loginSwitch = document.getElementById('loginSwitch');

    // 帳號登入
    let loginAccount = document.getElementById('login_account');

    // 密碼登入
    let loginPassword = document.getElementById('login_password');

    // 登入btn
    let loginBtn = document.getElementById('user_login');

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

    //登入帳號過
    let accountValid = userEmail.test(loginAccount.value);
    // console.log("帳號", accountValid);

    //登入密碼過
    let passwordValid = passwordCheck.test(loginPassword.value);
    // console.log("密碼", passwordValid); 

    //註冊帳號過
    let accountValid2 = userEmail.test(memberAccount.value);
    // console.log("帳號:",accountValid2);

    //註冊密碼過
    let passwordValid2 = passwordCheck.test(memberPassword.value);

    // ====================開燈箱和登入註冊切換=============================

    let isLogin = false;
    // 燈箱開
    memIcon.addEventListener('click',function(){
        // 登入開燈箱
        if(memIcon.style.display = 'block'){
            loginRegister.style.display = 'flex';
        }
        // else{ //登出關燈箱

        // }
    })

    window.addEventListener('resize',function() {
        if(window.innerWidth < 992){
            memArea.style.display = 'none';
            // rwdMem.style.display = 'none';
        }else{
            rwdMem.style.display = 'none';
            if (isLogin) memArea.style.display = 'block';
        }
    })

    

    // =================登入驗證==================
    // window.onresize = loginBtn;
    loginBtn.addEventListener('click',function(e){
    // 登入欄位如為空值，跳警告
        if(loginAccount.value == '' || loginPassword.value == ''){
            alert('請輸入帳號密碼');
            e.preventDefault();
            return;
        }
    // 帳號驗證
        if (loginAccount.value.search(userEmail) == -1) {
            alert('帳號格式錯誤');
            loginAccount.value = "";
            loginAccount.focus();
            e.preventDefault();
            return;
        }

    // 密碼驗證
        if(loginPassword.value.search(passwordCheck) == -1){
            alert('密碼格式錯誤');
            loginPassword.select();
            e.preventDefault();
            return;
        }

        let xhr = new XMLHttpRequest();
            xhr.onload = function(e){
                let memberWeb = JSON.parse(xhr.responseText);
                if(memberWeb.account != `${loginAccount.value}` || memberWeb.password != `${loginPassword.value}` || memberWeb.member_status == '0'){
                    alert('帳號密碼不符!');
                    e.preventDefault();
                    return;
                }else if(window.innerWidth < 992){
                    isLogin = true;
                    memIcon.style.display = 'none';
                    rwdMem.style.display = 'block';
                    window.addEventListener('resize',function() {
                        memArea.style.display = 'none';
                        rwdMem.style.display = 'block';
                        memIcon.style.display = 'none';
                        loginBox.style.width = '10%';
                    })
                    memName.innerText = memberWeb.member_name;
                    //將登入表單上的資料清空，並隱藏起來
                    loginAccount.value = '';
                    loginPassword.value = '';
                    loginRegister.style.display = 'none';
                    
                    logout.style.display = 'block';
                    // loginBox.style.width = '10%';
                    moneyArea.style.margin = 'auto';
                }else if(window.innerWidth > 992){
                    isLogin = true;
                    memName.innerText = memberWeb.member_name;
                    rwdMem.style.display = 'none';
                    window.addEventListener('resize',function() {
                        rwdMem.style.display = 'none';
                        memArea.style.display = 'block';
                    })
                    //將登入表單上的資料清空，並隱藏起來
                    loginAccount.value = '';
                    loginPassword.value = '';
                    loginRegister.style.display = 'none';
                    
                    memArea.style.display = 'block';
                    memIcon.style.display = 'none';
                    logout.style.display = 'block';
                    loginBox.style.width = '25%';
                    moneyArea.style.margin = '0';
                }

                //頁面重新整理(現在是全部都會重新整理)
                  location.reload();
                
                
            }
            xhr.open("post", "front_login.php", true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

            let data_info = `account=${loginAccount.value}&password=${loginPassword.value}`;
            console.log(data_info);
            xhr.send(data_info);
    })
    // 取得會員是否已登入的資訊
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
                rwdMem.style.display = 'block';
            } else {
                isLogin = false;
                rwdMem.style.display = 'none';
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
                rwdMem.style.display = 'none';
            } else {
                isLogin = false;
                rwdMem.style.display = 'none';
            }
        }
        xhr.open("get", "front_getMemberInfo.php", true);
        xhr.send(null);
    }

    // 登出
    logout.addEventListener('click',function(){
        //======================回server端刪除session資訊
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){ //登出後頁面的資訊統一調整一下
            loginRegister.style.display = 'none';
            memName.style.display = 'none';
            memIcon.style.display = 'block';
            logout.style.display = 'none';
            memArea.style.display = 'none';
            loginBox.style.width = '0';
            moneyArea.style.margin = '0';
            window.location.href = "home.html";
            rwdMem.style.display = 'none';
        }
        xhr.open("get", "front_logout.php", true);
        xhr.send(null);
    })
    
    // window.addEventListener('resize',function(){
    // })
    
    if(window.innerWidth > 992){
        memArea.addEventListener('click',function(){
            window.location.href = "mem.html";
        })
    }

    // 點叉叉關燈箱
    loginRegisterClose.addEventListener('click',function(){
        loginRegister.style.display = 'none';

        // 登入內容清空
        loginAccount.value = '';
        loginPassword.value = '';

        // 註冊欄位值清空
        memberName.value = '';
        memberAccount.value = '';
        memberPassword.value = '';
        confirmPassword.value = '';
    })

    // 切換到註冊
    registerSwitch.addEventListener('click',function(e){
        loginColumn.style.display = 'none';
        loginSwitch.style.backgroundColor = '#F9BB4D';
        registerColumn.style.display = 'block';
        registerSwitch.style.backgroundColor = '#FAE6B8';
        // 登入內容清空
        loginAccount.value = '';
        loginPassword.value = '';
    })

    // 切換到登入
    loginSwitch.addEventListener('click',function(e){
        registerColumn.style.display = 'none';
        registerSwitch.style.backgroundColor = '#F9BB4D';
        loginColumn.style.display = 'block';
        loginSwitch.style.backgroundColor = '#FAE6B8';

        // 註冊欄位值清空
        memberName.value = '';
        memberAccount.value = '';
        memberPassword.value = '';
        confirmPassword.value = '';
    })
})