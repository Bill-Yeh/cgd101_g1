window.addEventListener('load',function(){
    let adminWeb;

    // 管理員帳號
    let administatorAccount = document.getElementById('administator_login_account');

    // 管理員密碼
    let administatorPassword = document.getElementById('administator_login_password');

    // 管理員登入btn
    let administatorBtn = document.getElementById('administator_login');

    // 管理員顯示字樣
    let headerAdmin = document.getElementById('header_admin');

    // 登出
    let backLogout = document.getElementById('backLogout');

    // 取得管理員是否已登入的資訊
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        adminWeb = JSON.parse(xhr.responseText);
        if(adminWeb.backstage_account == true || adminWeb.backstage_status == '2'){
            headerAdmin.innerText = adminWeb.backstage_name;
        }
    }
    xhr.open("get", "back_getAdministratorInfo.php", true);
    xhr.send(null);

    // 登出
    backLogout.addEventListener('click',function(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){ //登出後頁面的資訊統一調整一下
            headerAdmin.innerText = '';
            window.location.replace('backStage_login.html');
        }
        xhr.open("get", "front_logout.php", true);
        xhr.send(null);
    })
})