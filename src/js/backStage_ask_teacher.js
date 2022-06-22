let ask_user_com= Vue.component("component-back-chat", {

    props:['ask_src','member_name','member_id','read_or_not','member_id','new_msg','role'],
    template:
    `<div class="message_list_img_name" :id=member_id>
        <div class="list_img">
            <img :src=role alt="">
        </div>
        <div class="list_name">
            <span>{{member_name}}</span>
        </div>
        <div class="new_message" v-if='new_msg!==0'>
            <span v-if='new_msg!==0'>{{new_msg}}</span>
        </div>
    </div>`
});



let chatroom = Vue.component("component-back-chatroom", {

    props:['ask_content','ask_time','ask_src','member_name','read_or_not','member_id','role'],
    template:
    `<div :class='ask_src==1? "backStage_chat_student":"backStage_chat_teacher"'>
        <div class="student_img" v-if='ask_src==1'>
            <img :src=role alt="" v-if='ask_src==1'>
        </div>
        <div :class='ask_src==1? "student_chat":"teacher_chat"'>
            <p>{{ask_content}}</p>
        </div>
        <div class="ask_time">
            {{ask_time}}
        </div>
    </div> `
})


let thisUser = Vue.component("component-back-chat-thisUser", {

    props:['ask_content','ask_src','member_name','read_or_not','member_id','role'],
    template:
    `<div class="backStage_student_name">
    <div class="backStage_student_head">
        <img :src=role alt="">
    </div>
    <div :id=member_id class="student_name_level" >
        <span>{{member_name}}</span>
    </div>
</div> `
})


let ask_tr = new Vue({
    el:'#message_list_img_name',
    data:{
        chatRows:[],
        userInfo:[],
    },
    methods: {
        dataImport: function(event){
            //取得點擊到的userId
            let _this=event.target;
            while(_this.className != "message_list_img_name"){
                _this=_this.parentNode
            }
            let thisUser=_this.id

            //請求對話紀錄
            let xhr = new XMLHttpRequest();
            xhr.onload = () =>{
                ask_tr.chatRows = JSON.parse(xhr.responseText);
            }
            xhr.open("get",`backStage_askLog.php?memid=${thisUser}`,true);
            xhr.send(null);

            //送出已讀訊息
            let xhrRead = new XMLHttpRequest();
            xhrRead.open("get", `backStage_checkReply.php?memid=${thisUser}`,true);
            xhrRead.send();

            //消除未讀標記
            // ask_tr.userInfo
            for(i=0;i<ask_tr.userInfo.length;i++){
                if(ask_tr.userInfo[i].member_id==thisUser){
                    ask_tr.userInfo[i].new_msg=0
                }
            }

            setTimeout(()=>{
                let bar=document.querySelector(".chat_message_block")
                console.log(bar.scrollHeight)
                bar.scrollTop=bar.scrollHeight
            },50)

        },

        reply: function(){
            if(document.querySelector('#inputTxt').value==""){
                alert("欄位不可為空白，請輸入資料")
            }
            else{

                let xhr = new XMLHttpRequest();
                    xhr.onload = function(){
                        let result= JSON.parse(xhr.responseText)
                        console.log(result)
                    }
                    xhr.open("post", "backstage_insertAsk.php",true);
                    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

                    let newAsk=`ask=${document.querySelector('#inputTxt').value}&user=${document.querySelector('.student_name_level').id}`
                    xhr.send(newAsk);	


                //建立使用者訊息
                let txt=document.querySelector("#inputTxt")
                let user=document.querySelector('.student_name_level')
                let userName=document.querySelector('.student_name_level > span')


                let reply={
                    ask_content: txt.value,
                    ask_src:2,
                    member_id: user.id,
                    member_name:userName.innerText,
                    read_or_not:0,

                }

                ask_tr.chatRows.push(reply)


                //清空輸入欄位
                document.querySelector('#inputTxt').value=""
            }
            

        }
    },
    created() {
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            let result = JSON.parse(xhr.responseText);
            for(b=0;b<result.length;b++){
               result[b].new_msg=0;
            }
            let user=new Array(result[result.length-1]);
            for(i=result.length-2;i>=0;i--){
                let a=0
                for(j=0;j<user.length;j++){
                    if(user[j].member_id ==result[i].member_id){
                        a++
                    }
                }
                if(a==0){
                    user.push(result[i])
                }
            }
            for(i=0;i<user.length;i++){
                for(j=0;j<result.length;j++){
                    if(user[i].member_id==result[j].member_id && result[j].ask_src==1 && result[j].read_or_not==0){
                        user[i].new_msg++
                    }
                }
            }
            console.log(user)
            ask_tr.userInfo=user
            
        }
        xhr.open("get","backStage_askUser.php",true);
        xhr.send(null);
    },
})





