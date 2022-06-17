function $_(id){
    return document.getElementById(id);
}

//檢視目前測驗進度變數
let test50Arr = new Array();
let testTangoArr = new Array();
let testKaiwaArr = new Array();

// ========== 抓會員 ========== //
function test_getMemberInfo(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let member = JSON.parse(xhr.responseText);
        if(member.member_name){
            //載入目前上課進度
            test_showTest();

            //顯示可以儲存紀錄的按鈕
            let test_result_save= document.getElementById('test_result_save');
            test_result_save.innerText = '儲存紀錄';
            document.getElementById('test_getCoin_line').style.display = 'block';

            // console.log(JSON.parse(xhr.responseText));
            // console.log('會員');

            //把分數存進去
            test_result_save.addEventListener('click',test_record);
        }else{
            document.getElementById('test_result_save').innerText = '關閉';
            document.getElementById('test_getCoin_line').style.display = 'none';
            // console.log('訪客');
        }
    }
    xhr.open("get", "./front_getMemberInfo.php", true);
    xhr.send(null);
}

// ========== 載入會員上課的進度 ========= //
function test_showTest(){
    //清空頁面顯示
    let test50 = $_('test50_data');
    let testTango = $_('testTango_data');
    let testKaiwa = $_('testKaiwa_data');
    test50.innerHTML = '';
    testTango.innerHTML = '';
    testKaiwa.innerHTML = '';

    //從後台撈出會員課程進度
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let show = JSON.parse(xhr.responseText);

        for(let i=0;i<show.length;i++){
            if(show[i].lesson_type_id == 1){
                test50Arr.push(show[i].lesson_name);
            }else if(show[i].lesson_type_id == 2){
                testTangoArr.push(show[i].lesson_name);
            }else if(show[i].lesson_type_id == 3){
                testKaiwaArr.push(show[i].lesson_name);
            };
        };

        //把陣列資料放進html裡
        for(let i=0;i<test50Arr.length;i++){
            test50.innerHTML += `<button class="test_option">${test50Arr[i]}</button>`;
        }
        for(let i=0;i<testTangoArr.length;i++){
            testTango.innerHTML += `<button class="test_option">${testTangoArr[i]}</button>`;
        }
        for(let i=0;i<testKaiwaArr.length;i++){
            testKaiwa.innerHTML += `<button class="test_option">${testKaiwaArr[i]}</button>`;
        }
        
        //確認區域是否開啟
        test_checkProgress();
    }
    xhr.open("get", "./test_showtest.php", true);
    xhr.send(null);
}

// ========== 檢查測驗區域是否開放 ========= //
function test_checkProgress(){

    let checktango = $_('test_tango');
    if(testTangoArr.length == 0){
        checktango.disabled = true;
    }else{
        checktango.disabled = false;
    };

    let checkKaiwa = $_('test_kaiwa');
    if(testKaiwaArr.length == 0){
        checkKaiwa.disabled = true;
    }else{
        checkKaiwa.disabled = false;
    };
};

export default test_check;