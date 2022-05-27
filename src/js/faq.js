window.addEventListener('load', function() {
    //faq 選單
    let course = document.getElementsByTagName('h2'); 
    
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

    // ================文章按讚===================

    // 空心愛心
    let emptyHeart = document.querySelectorAll('.bi-heart');

    // // 實心愛心
    let fillHeart = document.querySelectorAll('.bi-heart-fill');

    // // 按讚數量
    let heartQuantity = document.querySelectorAll('.heart_quantity');


        for(let i = 0; i<emptyHeart.length; i++){
            emptyHeart[i].addEventListener('click',function(){
                emptyHeart[i].style.display = 'none';
                fillHeart[i].style.display = 'block';
                heartQuantity[i].style.display = 'block';
            })
        }
        for(let j = 0; j<fillHeart.length; j++){
            fillHeart[j].addEventListener('click',function(){
                fillHeart[j].style.display = 'none';
                emptyHeart[j].style.display = 'block';
                heartQuantity[j].style.display = 'none';
            })
        }



    // ================我要發文燈箱===================

    // 我要發文btn(平版以上)
    let postBtn = document.getElementById('faq_desktop_btn');

    // 我要發文btn(手機版)
    let postBtnRwd = document.getElementById('postRwdBtn');

    // 關閉按鈕
    let postClose = document.getElementById('post_close_id');

    // 燈箱
    let postLightBox = document.getElementById('faq_post');

    postBtn.addEventListener('click',function(){
        postLightBox.style.display = 'flex';
    })

    postBtnRwd.addEventListener('click',function(){
        postLightBox.style.display = 'flex';
    })
    
    postClose.addEventListener('click',function(){
        postLightBox.style.display = 'none';
    })


    // ================檢舉燈箱===================

    // // 檢舉文字
    let faqReport = document.querySelectorAll('.user_report');

    // // 檢舉燈箱
    let reportLightBox = document.getElementById('faq_report');

    // 燈箱關閉icon
    let reportClose = document.getElementById('report_close_id');

    // 開啟燈箱
    for(let i = 0; i<faqReport.length; i++){
        faqReport[i].addEventListener('click',function(){
            reportLightBox.style.display = 'flex';
        })
    }

    // 關閉燈箱
    reportClose.addEventListener('click',function(){
        reportLightBox.style.display = 'none';
    })

    // =============學員留言介面===================

    // 文章標題
    let faqTitle = document.querySelectorAll('.article_title');

    // 留言icon
    let messageIcon = document.querySelectorAll('.bi-chat');

    // 留言燈箱
    let messageLightBox = document.getElementById('faq_message');

    // 燈箱關閉icon
    let messageClose = document.getElementById('message_close_id');

    // 點標題開啟燈箱
    for(let i = 0; i<faqTitle.length; i++){
        faqTitle[i].addEventListener('click',function(e){
            messageLightBox.style.display = 'flex';
            e.stopPropagation();
        })
    }

    // 點留言icon開啟燈箱
    for(let i = 0; i<messageIcon.length; i++){
        messageIcon[i].addEventListener('click',function(){
            messageLightBox.style.display = 'flex';
        })
    }

    // 關閉燈箱
    messageClose.addEventListener('click',function(){
        messageLightBox.style.display = 'none';
    })

    // =============發文驗證===================

    // 發文表單
    // let postArticle = document.getElementById('article_post');

    // 標題
    let articleTitle = document.getElementById('post_article_title');

    // 內文
    let artilceParagragh = document.getElementById('paragragh');

    // 發文btn
    let articleBtn = document.getElementById('post_article-btn');

    // 欄位不能為空值得驗證
    articleBtn.addEventListener('click',function(){
        if(articleTitle.value == '' || artilceParagragh.value == ''){
            alert('標題和內文不可為空白');
        }
    })

    // =============檢舉驗證===================

    // let reportViolence = document.getElementById('violence');
    // let reportAds = document.getElementById('ads');
    // let reportPorn = document.getElementById('porn');
    // let reportTrash = document.getElementById('trash');
    // let reportTerrorism = document.getElementById('terrorism');

    // // 檢舉送出btn
    // let reportBtn = document.getElementById('report_submit');
});
