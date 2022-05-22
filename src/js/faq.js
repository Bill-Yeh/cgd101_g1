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
});