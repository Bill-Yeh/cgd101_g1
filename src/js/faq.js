window.addEventListener('load', function() {
    //faq 選單
    let course = document.getElementsByTagName('h2'); 
    
    course[0].style.color = '#fff';
    for(let i = 0; i<course.length; i++){
        course[i].addEventListener('click',function(){
            course[i].style.color = '#fff';
            for(let j=0; j<course.length; j++){
                if(i != j){
                    course[j].style.color = '#F37420';
                }
            }
        });
    };

    // =============發文驗證===================

    // 發文表單
    let postArticle = document.getElementById('article_post');

    // 標題
    let articleTitle = document.getElementById('post_article_title');

    // 內文
    let artilceParagragh = document.getElementById('paragragh');

    // 類別
    let articleType = document.getElementById('article_type_select');

    // 發文btn
    let articleBtn = document.getElementById('post_article-btn');

    // 欄位不能為空值得驗證
    // articleBtn.addEventListener('click',function(){
    //     if(articleTitle.value == '' || artilceParagragh.value == '' || articleType.value == ''){
    //         alert('標題和內文不可為空白');
    //     }
    // })

    // =============檢舉驗證===================

    // let reportViolence = document.getElementById('violence');
    // let reportAds = document.getElementById('ads');
    // let reportPorn = document.getElementById('porn');
    // let reportTrash = document.getElementById('trash');
    // let reportTerrorism = document.getElementById('terrorism');

    // // 檢舉送出btn
    // let reportBtn = document.getElementById('report_submit');


    // let memName = document.getElementById('memName');
    // let messageSend =document.getElementById('message_send');
    // messageSend.addEventListener('click',function(){
    //     if(memName.innerText = ''){
    //         alert('請登入帳號');
    //         return;
    //     }
    // })
});
