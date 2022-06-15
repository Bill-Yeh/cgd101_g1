//測驗用變數
let score = 0;
let test_question_num;
let test_choose;
let test_choose_arr = new Array();
let draw_option = new Array(0,1,2,3);
let add_point_num = 10;


//亂數抽題
let testA_num;
let draw_question;
function test_randomDraw(){
    testA_num = test_choose_arr.length;
    draw_question = new Array();
    let num;
    let draw = 1;
    do{
        num = (Math.trunc(Math.random()*testA_num));

        if(draw_question.indexOf(num) == -1){
            draw_question.push(num);
        };
        draw++;
    }while(draw_question.length < 10);
};

//打亂陣列方程式
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}


////////////////////////////////////
function testStart(e){

    let add_point = document.getElementById('test_add_point');
    window.addEventListener('mousemove', mousemove);
    function mousemove(e){
        add_point.innerText = `+${add_point_num}`;
        add_point.style.top = `${e.clientY}px`;
        add_point.style.left = `${e.clientX + 10}px`;
    };

    //-----產生亂數選項-----//
    shuffleArray(draw_option);


    //-----是否正確-----//
    if(e.target.innerText == test_choose_arr[draw_question[(test_question_num-1)]][1]){
        add_point.innerText = `+${add_point_num}`;
        add_point.style.opacity = '1';
        add_point.style.top = `${e.clientY}px`;
        add_point.style.left = `${e.clientX + 10}px`;
        add_point.classList.add('animate__bounceOutUp');
        score += 10;
        // console.log(test_question_num);
        // console.log(score);
    }else{
        e.target.classList.add('test_wrong_option');
        e.target.classList.add('animate__shakeX');
        // console.log(test_question_num);
        // console.log('wrong');
    }

    //-----換下一題-----//
    //移除動畫與紅背景
    setTimeout(function(){
        add_point.classList.remove('animate__bounceOutUp');
        add_point.style.opacity = '0';
        e.target.classList.remove('test_wrong_option');
        e.target.classList.remove('animate__shakeX');
    },500);
    //顯示下一題的題目
    setTimeout(toNextQuestion,500);

    //解決手機板按鈕點了之後會一直處於hover狀態的狀況
    //強制更改背景顏色
    // setTimeout(function(){
    //     e.target.style.backgroundColor = "#f9bb4d";
    // },500);
}


//-----換下一題-----//
function toNextQuestion(){
    let test_score_now_wrap = document.getElementById('test_score_now_wrap');
    let test_question = document.getElementById('test_progress');
    let test_question_title = document.getElementById('test_title');
    let test_ifPass =document.getElementById('test_ifPass');
    let test_score =document.getElementById('test_score');
    let test_getCoin =document.getElementById('test_getCoin');
    let test_question_option = document.querySelectorAll('.test_question_option');
    if(test_question_num == 10){
        test_score_now_wrap.style.display = 'none';
        test_question.style.display = 'none';
        test_progress_now.style.width = `100%`;
        test_progress_chara.style.left = `90%`;
        test_lightBox_question.style.display = 'none';
        test_lightBox_result.style.display = 'block';
        if(score>=60){
            test_ifPass.innerText= "通過";
            test_getCoin.innerText= score;
        }else{
            test_ifPass.innerText= "未通過";
            test_ifPass.style.color="red";
            test_getCoin.innerText=0;
        }
        test_score.innerText= score;

    }else{
        test_question_title.innerText = test_choose_arr[draw_question[test_question_num]][0];
        for(let x = 1; x<=4; x++){
            test_question_option[draw_option[x-1]].innerText = test_choose_arr[draw_question[test_question_num]][x];
            // console.log('題目編號',draw_option[x-1]);
        };
        test_question_num += 1 ;
        test_progress_now.style.width = `${(test_question_num-1)*10}%`;
        test_progress_chara.style.left = `${((test_question_num-1)*10)-10}%`;
    }
    //-----目前分數-----//
    test_score_now.innerText = score;
}

// *-----------抓會員---------* //
function test_getMemberInfo(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let member = JSON.parse(xhr.responseText);
        if(member.member_name){    
            document.getElementById('test_result_save').innerText = '儲存紀錄';
            document.getElementById('test_getCoin_line').style.display = 'block';
            // test_result_save.addEventListener('click',function(){
            //     alert('test');
            // });
            console.log(JSON.parse(xhr.responseText));
            console.log('會員');
        }else{
            document.getElementById('test_result_save').innerText = '關閉';
            document.getElementById('test_getCoin_line').style.display = 'none';
            console.log('訪客');
        }
    }
    xhr.open("get", "./front_getMemberInfo.php", true);
    xhr.send(null);
}

// *-----------紀錄測驗資料---------* //
function test_record(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let member = JSON.parse(xhr.responseText);
    }
    xhr.open("get", "./front_getMemberInfo.php", true);
    xhr.send(null);
}

// *-----------基本設定---------* //
function init(){
    test_getMemberInfo();
    //-----DOM-----//
    //選了哪個測驗
    let test_option = document.querySelectorAll('.test_option');
    let test_input = document.getElementById('test_input');
    //確認是否進行測驗
    let test_confirm_box = document.getElementById('test_confirm_box');
    let test_choose_text = document.getElementById('test_choose');
    let test_start = document.getElementById('test_start');
    let test_cancel = document.getElementById('test_cancel');
    //進行測驗(測驗燈箱)
    let test_lightBox = document.getElementById('test_lightBox');
    let test_score_now_wrap = document.getElementById('test_score_now_wrap');
    let test_question = document.getElementById('test_progress');
    //關閉燈箱
    let test_lightBox_close = document.querySelector('.test_lightBox_close');
    let testing = document.querySelector('.test_lightBox_bg');
    //測驗進度條與分數
    let test_progress_now =document.getElementById('test_progress_now');
    let test_progress_chara =document.getElementById('test_progress_chara');
    let test_score_now =document.getElementById('test_score_now');
    //測驗問題介面
    let test_lightBox_question =document.getElementById('test_lightBox_question');
    let test_question_title = document.getElementById('test_title');
    let test_question_option = document.querySelectorAll('.test_question_option');
    //測驗結果介面
    let test_lightBox_result =document.getElementById('test_lightBox_result');
    //儲存測驗結果
    let test_result_save =document.getElementById('test_result_save');


    // *-----------開啟燈箱---------* //
    for(let c = 0; c < test_option.length; c++){
        test_option[c].addEventListener('click',function(){
            testing.style.display = 'block';
            //確認是點到哪個測驗
            test_choose = test_option[c].innerText;
            //把變數傳入input中(之後傳去php用)
            test_choose_text.innerText = test_choose;
            switch (test_choose){
                case 'あ':
                    test_input.value = 1;
                    break;
                case 'い':
                    test_input.value = 2;
                    break;
                case 'う':
                    test_input.value = 3;
                    break;
                case 'え':
                    test_input.value = 4;
                    break;
                case 'お':
                    test_input.value = 5;
                    break;
            }

            //從後端抓資料
            let xhr = new XMLHttpRequest();
            console.log(test_input.value);
            var url = "./test_getquestion.php?test_input=" + test_input.value;
            xhr.open("get", url, true);
            xhr.send(null);
            //把抓到的資料放到js陣列裡
            xhr.onload = function(){
                let test_data = JSON.parse(xhr.responseText);
                for(let i=0;i<test_data.length;i++){
                    test_choose_arr[i] = new Array();
                    test_choose_arr[i][0] = test_data[i].txt;
                    test_choose_arr[i][1] = test_data[i].ans;
                    test_choose_arr[i][2] = test_data[i].option_content1;
                    test_choose_arr[i][3] = test_data[i].option_content2;
                    test_choose_arr[i][4] = test_data[i].option_content3;
                }
                console.log(test_choose_arr);
            };
        });
    };

    //確認是否進行測驗
    test_start.addEventListener('click',test_conent_start);
    test_cancel.addEventListener('click',function(){
        testing.style.display = 'none';
        test_lightBox_question.style.display = 'block';
        test_lightBox_result.style.display = 'none';
        score = 0;
        test_question_num = 1;
    });


    function test_conent_start(){
        test_confirm_box.style.display = 'none';
        test_lightBox.style.display = 'flex';
        
        //-----開啟測驗-----//
        // if(test_choose == 'あ'){
        //     test_choose_arr = testArr_a;
        // }else if(test_choose == 'い'){
        //     test_choose_arr = testArr_i;
        // }else if(test_choose == 'う'){
        //     test_choose_arr = testArr_u;
        // }else if(test_choose == 'え'){
        //     test_choose_arr = testArr_e;
        // }else if(test_choose == 'お'){
        //     test_choose_arr = testArr_o;
        // }

        //-----目前分數-----//
        test_score_now.innerText = score;

        //-----亂數抽題-----//
        test_randomDraw();
        // console.log(draw_question);
        // console.log(test_choose);

        //-----分數與題數歸零-----//
        score = 0;
        test_question_num = 1;
        test_progress_now.style.width = `0%`;
        test_progress_chara.style.left = `-10%`;
        test_score_now_wrap.style.display = 'block';
        test_question.style.display = 'flex';


        test_question_title.innerText = test_choose_arr[draw_question[0]][0];

        for(let j = 0; j < test_question_option.length; j++){
            test_question_option[j].innerText = test_choose_arr[draw_question[0]][j+1];
        };
        //-----按下選項_開始測驗-----//
        for(let i = 0; i < test_question_option.length; i++){
            test_question_option[i].addEventListener('click',testStart,false);
        };
    }

    // *------點叉叉關閉-----* //
    test_lightBox_close.addEventListener('click',function(){
        let ifClose = '是否需要中斷測驗？(測驗結果不會保存)'
        if (confirm(ifClose) == true) {
            testing.style.display = 'none';
            test_confirm_box.style.display = 'block';
            test_lightBox.style.display = 'none';
            test_lightBox_question.style.display = 'block';
            test_lightBox_result.style.display = 'none';
            score = 0;
            test_question_num = 1;
        }
    });

    // *------點旁邊關閉-----* //
    testing.addEventListener('click',function(e){
        if (e.target==this) {
            let ifClose = '是否需要中斷測驗？'
            if (confirm(ifClose) == true) {
                testing.style.display = 'none';
                test_confirm_box.style.display = 'block';
                test_lightBox.style.display = 'none';  
                test_lightBox_question.style.display = 'block';
                test_lightBox_result.style.display = 'none';
                score = 0;
                test_question_num = 1;
              }
        } 
    }, false);

    // *------測驗結束關閉燈箱----* //
    test_result_save.addEventListener('click',function(){
        testing.style.display = 'none';
        test_confirm_box.style.display = 'block';
        test_lightBox.style.display = 'none';
        test_lightBox_question.style.display = 'block';
        test_lightBox_result.style.display = 'none';
        score = 0;
        test_question_num = 1;

        //把成寫入資料庫
        // let xhr = new XMLHttpRequest();
        // xhr.open("get", "./test_getquestion.php", true);
        // xhr.send(null);
        // xhr.onload = function(){
        //     let test_data = JSON.parse(xhr.responseText);
        //     for(let i=0;i<test_data.length;i++){
        //         test_choose_arr[i] = new Array();
        //         test_choose_arr[i][0] = test_data[i].txt;
        //         test_choose_arr[i][1] = test_data[i].ans;
        //         test_choose_arr[i][2] = test_data[i].option_content1;
        //         test_choose_arr[i][3] = test_data[i].option_content2;
        //         test_choose_arr[i][4] = test_data[i].option_content3;
        //     }
        //     console.log(test_choose_arr);
        // };
    });
}

window.addEventListener('load',init,false);