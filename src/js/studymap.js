new Vue({
        el:'.village',
        data:{
            img: ['firstVillage','secondVillage','thirdVillage','fourthvillage','fifthVillage','sixthVillage','seventhVillage'] 
        },
        methods:{
            nextTo50(){
                location.href="studyMap_50village.html";
            },
            nextToFirst(){
                location.href="studyMap_word_lv1.html";
            },
            nextToSecond(){
                location.href="studyMap_dialouge_lv1.html";
            },
            nextToThird(){
                location.href="studyMap_word_lv2.html";
            },
        }
    })
// new Vue({
//         el:'.cloud',
//         data:{
//             img: ['background','1','2','3','4','5'] 
//         },
//         methods:{
            
//         }
       
//     })
//gsap雲動畫
    // gsap.to("#cloud1",{
    //     x:-10,
    //     y:3,
    //     repeat:Infinity,
    //     duration:9,
    //     yoyo:true,
    // });
    // gsap.to("#cloud2",{
    //     x:30,
    //     y:0,
    //     repeat:Infinity,
    //     duration:10,
    //     yoyo:true,
    // });
    // gsap.to("#cloud3",{
    //     x:40,
    //     y:-5,
    //     repeat:Infinity,
    //     duration:8,
    //     yoyo:true,
    // });
    // gsap.to("#cloud4",{
    //     x:-60,
    //     y:5,
    //     repeat:Infinity,
    //     duration:15,
    //     yoyo:true,
    // });
    // gsap.to("#cloud5",{
    //     x:50,
    //     y:10,
    //     repeat:Infinity,
    //     duration:10,
    //     yoyo:true,
    // });