// const { shuffle } = require("gsap");

// *-----------題庫---------* //
let testArr_a = new Array(
    new Array("ああ","aa","aka","sata","hana"),
    new Array("なか","naka","kaya","tana","naka"),
    new Array("たま","tama","kana","nata","sama"),
    new Array("はさ","hasa","rasa","naka","wana"),
    new Array("らや","raya","an","sara","tana"),
    new Array("はま","hama","nata","awa","haha"),
    new Array("たん","tan","han","nan","an"),
    new Array("なあ","naa","nia","taa","kaya"),
    new Array("はは","haha","han","hasa","haya"),
    new Array("わあ","waa","nama","aka","kaha"),
    new Array("さわ","sawa","sata","nama","tara"),
    new Array("たな","tana","kaha","naka","aka"),
    new Array("やら","yara","waka","raya","rata"),
    new Array("かま","kama","kaha","rawa","aka"),
    new Array("まは","yaha","maha","kana","haha"),
    new Array("さら","sara","tana","rasa","hasa"),
    new Array("やん","yan","han","ran","wan"),
    new Array("さや","saya","raya","nata","yan"),
    new Array("らわ","rawa","an","sara","yawa"),
    new Array("たや","taya","waka","tana","kaha"),
);
let testArr_i = new Array(
    new Array("いき","iki","ishi","kini","chiki"),
    new Array("にし","nishi","hini","chishi","kichi"),
    new Array("ちみ","chimi","richi","shimi","shichi"),
    new Array("きに","kini","chini","shini","kiri"),
    new Array("いし","ishi","ihi","iri","ichi"),
    new Array("ひり","hiri","niki","michi","hishi"),
    new Array("いみ","imi","shimi","chiki","iri"),
    new Array("きち","kichi","chiki","kini","richi"),
    new Array("ひみ","himi","shini","iki","kini"),
    new Array("りき","riki","shichi","richi","chimi"),
    new Array("にひ","nihi","chii","nishi","nichi"),
    new Array("しち","shichi","ichi","kini","kichi"),
    new Array("にき","niki","iki","nichi","kini"),
    new Array("りし","rishi","shiki","iri","shichi"),
    new Array("しひ","shihi","chimi","rimi","hini"),
    new Array("りち","richi","shichi","iki","himi"),
    new Array("みひ","mihi","nihi","himi","nishi"),
    new Array("ちき","chiki","hii","shichi","kimi"),
    new Array("いい","ii","yaya","mimi","nini"),
    new Array("みい","mii","nii","kii","rii"),
);
let testArr_u = new Array(
    new Array("うぬ","unu","uru","tsusu","kunu"),
    new Array("くす","kusu","sunu","kutsu","nuu"),
    new Array("つう","tsuu","suu","nutsu","kusu"),
    new Array("ぬむ","numu","kumu","tsunu","suku"),
    new Array("する","suru","kusu","tsusu","suru"),
    new Array("ゆす","yusu","numu","yuu","rufu"),
    new Array("ふく","fuku","tsuru","uku","nufu"),
    new Array("すむ","sumu","kunu","tsusu","sunu"),
    new Array("くる","kuru","tsunu","nufu","kusu"),
    new Array("つぬ","tusnu","uyu","unu","ruyu"),
    new Array("るう","ruu","kunu","tsuu","mutsu"),
    new Array("むふ","mufu","nuu","tsuku","umu"),
    new Array("うゆ","uyu","tsumu","nutsu","tsuku"),
    new Array("くつ","kutsu","rufu","nuku","kunu"),
    new Array("ぬふ","nufu","nutsu","suku","sunu"),
    new Array("つる","tsuru","numu","tsuru","suku"),
    new Array("ゆう","yuu","nutsu","tsuu","sumu"),
    new Array("むつ","mutsu","utsu","usu","kunu"),
    new Array("るふ","rufu","yusu","kusu","mutsu"),
    new Array("うむ","umu","suku","nutsu","unu"),
);
let testArr_e = new Array(
    new Array("えて","ete","neke","see","kese"),
    new Array("けへ","kehe","teke","sene","hete"),
    new Array("ねせ","nese","eke","mehe","kene"),
    new Array("てえ","tee","sete","nese","kete"),
    new Array("めね","mene","ete","rese","nese"),
    new Array("れせ","rese","eke","rene","kere"),
    new Array("ねけ","neke","seme","sene","hete"),
    new Array("へえ","hee","teke","sene","kehe"),
    new Array("てめ","teme","kese","mere","tene"),
    new Array("せめ","seme","nere","sene","sene"),
    new Array("へて","hete","nese","ehe","kese"),
    new Array("てけ","teke","neke","tehe","eke"),
    new Array("せえ","see","kese","ehe","sene"),
    new Array("ねれ","nere","meke","ete","mene"),
    new Array("せて","sete","teke","sene","eke"),
    new Array("えけ","eke","sete","ete","neke"),
    new Array("ねせ","nese","sene","nehe","sere"),
    new Array("めて","mete","hete","kese","nese"),
    new Array("けれ","kere","nere","kehe","nese"),
    new Array("れね","rene","nete","rese",",mere"),
);
let testArr_o = new Array(
    new Array("のこ","noko","koo","oso","soho"),
    new Array("もお","moo","soto","hoo","kono"),
    new Array("とこ","toko","koo","noto","ono"),
    new Array("のと","noto","kono","noo","soto"),
    new Array("そも","somo","oso","soto","komo"),
    new Array("のろ","noro","noto","yoso","koro"),
    new Array("こも","komo","koro","mono","koo"),
    new Array("おそ","oso","homo","ono","yoko"),
    new Array("とよ","toyo","yoro","toko","moyo"),
    new Array("ほも","homo","somo","soto","tono"),
    new Array("よろ","yoro","toko","koo","noto"),
    new Array("ほお","hoo","oso","horo","soo"),
    new Array("おの","ono","too","oyo","rono"),
    new Array("そと","soto","oso","noto","komo"),
    new Array("ろを","rowo","royo","too","moyo"),
    new Array("そを","sowo","sono","yoko","hoo"),
    new Array("その","sono","hono","yoro","soro"),
    new Array("もの","mono","toko","kono","noko"),
    new Array("よそ","yoso","yoso","somo","oso"),
    new Array("よほ","yoho","homo","hoo","koto"),
);


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

//測驗用變數
let score;
let test_question_num;
let test_choose;
let test_choose_arr;
let draw_option = new Array(0,1,2,3);
let add_point_num = 10;


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
        console.log(test_question_num);
        console.log(score);
    }else{
        e.target.classList.add('test_wrong_option');
        e.target.classList.add('animate__shakeX');
        console.log(test_question_num);
        console.log('wrong');
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
    
}

//-----換下一題-----//
function toNextQuestion(){
    let test_question_title = document.getElementById('test_title');
    let test_ifPass =document.getElementById('test_ifPass');
    let test_score =document.getElementById('test_score');
    let test_getCoin =document.getElementById('test_getCoin');
    let test_question_option = document.querySelectorAll('.test_question_option');
    if(test_question_num == 10){
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
}

// *-----------基本燈箱設定---------* //
function init(){
    //-----DOM-----//
    //選了哪個測驗
    let test_option = document.querySelectorAll('.test_option');
    //測驗進度條
    let test_progress_now =document.getElementById('test_progress_now');
    let test_progress_chara =document.getElementById('test_progress_chara');
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

            test_choose = test_option[c].innerText;
            
            //-----開啟測驗-----//
            if(test_choose == 'あ'){
                test_choose_arr = testArr_a;
            }else if(test_choose == 'い'){
                test_choose_arr = testArr_i;
            }else if(test_choose == 'う'){
                test_choose_arr = testArr_u;
            }else if(test_choose == 'え'){
                test_choose_arr = testArr_e;
            }else if(test_choose == 'お'){
                test_choose_arr = testArr_o;
            }

            //-----亂數抽題-----//
            test_randomDraw();
            console.log(draw_question);
            console.log(test_choose);
            //-----分數與題數歸零-----//
            score = 0;
            test_question_num = 1;
            test_progress_now.style.width = `0%`;
            test_progress_chara.style.left = `-10%`;

            

            test_question_title.innerText = test_choose_arr[draw_question[0]][0];

            for(let j = 0; j < test_question_option.length; j++){
                test_question_option[j].innerText = test_choose_arr[draw_question[0]][j+1];
            };
            //-----按下選項_開始測驗-----//
            for(let i = 0; i < test_question_option.length; i++){
                test_question_option[i].addEventListener('click',testStart,false);
            };
        


            
        });
    };

    

    // *-----------關閉燈箱---------* //
    let test_lightBox_close = document.querySelector('.test_lightBox_close');
    let testing = document.querySelector('.test_lightBox_bg');

    // *------點叉叉關閉-----* //
    test_lightBox_close.addEventListener('click',function(){
        let ifClose = '是否需要中斷測驗？(測驗結果不會保存)'
        if (confirm(ifClose) == true) {
            testing.style.display = 'none';
            test_lightBox_question.style.display = 'block';
            test_lightBox_result.style.display = 'none';
            score = 0;
            test_question_num = 1;
        }
    });

    // *------點旁邊關閉-----* //
    testing.addEventListener('click',function(e){
        if (e.target==this) {
            let ifClose = '是否需要中斷測驗？(測驗結果不會保存)'
            if (confirm(ifClose) == true) {
                testing.style.display = 'none';
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
        test_lightBox_question.style.display = 'block';
        test_lightBox_result.style.display = 'none';
        score = 0;
        test_question_num = 1;
        // location.reload();
    });
}

window.addEventListener('load',init,false);