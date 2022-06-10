window.addEventListener('load',function(){
    // 管理員切換
    let administatorSwitch = document.getElementById('administator');

    // 教師切換
    let teacherSwitch = document.getElementById('teacher');

    // 管理員表單
    let administatorContent = document.getElementById('administator_form');

    // 管理員帳號
    let administatorAccount = document.getElementById('administator_login_account');

    // 管理員密碼
    let administatorPassword = document.getElementById('administator_login_password');

    // 教師表單
    let teacherContent = document.getElementById('teacher_form');

    // 教師帳號
    let teacherAccount = document.getElementById('teacher_login_account');

    // 教師密碼
    let teacherPassword = document.getElementById('teacher_login_password');

    // 點教師切換到教師表單
    teacherSwitch.addEventListener('click',function(){
        teacherContent.style.display = 'block';
        teacherSwitch.style.backgroundColor = '#FAE6B8';
        administatorContent.style.display = 'none';
        administatorSwitch.style.backgroundColor = '#F9BB4D';

        // 管理員內容清空
        administatorAccount.value = '';
        administatorPassword.value = '';
    })

    // 點管理員切換到管理員表單
    administatorSwitch.addEventListener('click',function(){
        administatorContent.style.display = 'block';
        administatorSwitch.style.backgroundColor = '#FAE6B8';
        teacherContent.style.display = 'none';
        teacherSwitch.style.backgroundColor = '#F9BB4D';

        // 教師內容清空
        teacherAccount.value = '';
        teacherPassword.value = '';
    })


    // =================登入驗證==================

    //email(帳號)的正規表達式
    let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 

    //密碼的正規表達式
    let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; 

    //管理員登入帳號過
    let accountValid = userEmail.test(administatorAccount.value);
    // console.log("帳號", accountValid);

    //管理員登入密碼過
    let passwordValid = passwordCheck.test(administatorPassword.value);
    // console.log("密碼", passwordValid); 

    //教師登入帳號過
    let accountValid2 = userEmail.test(teacherAccount.value);
    // console.log("帳號", accountValid);

    //教師登入密碼過
    let passwordValid2 = passwordCheck.test(teacherPassword.value);
    // console.log("密碼", passwordValid);


    // 管理員登入btn
    let administatorBtn = document.getElementById('administator_login');

    // 教師登入btn
    let teacherBtn = document.getElementById('teacher_login');


    // 管理員登入驗證
    administatorBtn.addEventListener('click',function(e){
        // 登入欄位如為空值，跳警告
            if(administatorAccount.value == '' || administatorPassword.value == ''){
                alert('請輸入帳號密碼');
                e.preventDefault();
                return;
            }
        // 帳號驗證
            if (administatorAccount.value.search(userEmail) == -1) {
                alert('帳號格式錯誤');
                administatorAccount.value = "";
                administatorAccount.focus();
                e.preventDefault();
                return;
            }
    
        // 密碼驗證
            if(administatorPassword.value.search(passwordCheck) == -1){
                alert('密碼格式錯誤');
                administatorPassword.select();
                e.preventDefault();
                return;
            }else{
                // alert('登入成功!!!');
            //================使用Ajax 回server端,取回登入者姓名, 放到頁面上    
                let xhr = new XMLHttpRequest();
                xhr.onload = function(){
                    let memberWeb = JSON.parse(xhr.responseText);
                    memName.innerText = memberWeb.member_name;
                    //將登入表單上的資料清空，並隱藏起來
                    loginAccount.value = '';
                    loginPassword.value = '';
                    loginRegister.style.display = 'none';
                    
                    memArea.style.display = 'none';
                    memIcon.style.display = 'none';
                    logout.style.display = 'block';
                    loginBox.style.width = '10%';
                    moneyArea.style.margin = 'auto';
                }
                xhr.open("post", "front_login_register.php", true);
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

                let data_info = `account=${loginAccount.value}&password=${loginPassword.value}`;
                console.log(data_info);
                xhr.send(data_info);
                    return window.location.replace('backStage_account.html');
            }   
    
        })



        // 教師登入驗證
        teacherBtn.addEventListener('click',function(e){
        // 登入欄位如為空值，跳警告
            if(teacherAccount.value == '' || teacherPassword.value == ''){
                alert('請輸入帳號密碼');
                e.preventDefault();
                return;
            }
        // 帳號驗證
            if (teacherAccount.value.search(userEmail) == -1) {
                alert('帳號格式錯誤');
                teacherAccount.value = "";
                teacherAccount.focus();
                e.preventDefault();
                return;
            }
    
        // 密碼驗證
            if(teacherPassword.value.search(passwordCheck) == -1){
                alert('密碼格式錯誤');
                teacherPassword.select();
                e.preventDefault();
                return;
            }else{
                return window.location.replace('backStage_option_teacher.html');
            }   
    
        })
})