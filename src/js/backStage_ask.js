let admin_ask_user_com= Vue.component("component-admin-back-chatList", {

    props:['ask_src','member_name','member_id','read_or_not','role','ask_time'],
    template:
    ` <tr class="table_data_row even" :id=member_id>
        <td>{{member_id}}</td>
        <td>{{member_name}}</td>
        <td>{{ask_time}}</td>
    </tr>`
});



let admin_thisUser = Vue.component("component-admin-back-chat-thisUser", {

    props:['ask_content','ask_src','member_name','read_or_not','member_id','role','ask_time'],
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


let admin_chatroom = Vue.component("component-admin-back-chatroom", {

    props:['ask_content','ask_time','ask_src','member_name','read_or_not','member_id','role'],
    template:
    `<div :class='ask_src==1? "backStage_chat_student":"backStage_chat_teacher"'>
        <div :class='ask_src==1? "student_chat":"teacher_chat"'>
            <p>{{ask_content}}</p>
        </div>
        <div class="ask_time">
            {{ask_time}}
        </div>
    </div> `
})




let ask_admin = new Vue({
    el:'#admin_app',
    data:{
        chatRows:[],
        userInfo:[],
    },
    methods:{
        dataImport: function(event){
            //取得點擊到的userId
            let _this=event.target;
            let list=document.querySelectorAll('.table_data_row')

            for(i=0;i<list.length;i++){
                list[i].style.backgroundColor='#fff'
            }
            

            while(_this.className != "table_data_row even"){
                _this=_this.parentNode
                // console.log(_this.className)
            }
            let thisUser=_this.id
            console.log(thisUser)

            _this.style.backgroundColor='#FAE6B8'



            //請求對話紀錄
            let xhr = new XMLHttpRequest();
            xhr.onload = () =>{
                ask_admin.chatRows = JSON.parse(xhr.responseText);
            }
            xhr.open("get",`backStage_askLog.php?memid=${thisUser}`,true);
            xhr.send(null);

            

            setTimeout(()=>{
                let bar=document.querySelector(".chatroom_wrapper")
                bar.scrollTop=bar.scrollHeight
            },50)

        },
        show(){
            document.querySelector('.backStage_lightBox').style.display = 'flex';
        },
        hide(){
            document.querySelector('.backStage_lightBox').style.display = 'none';
        },

    },
    created() {
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            let result = JSON.parse(xhr.responseText);

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
                user[i].ask_time=user[i].ask_time.split(" ")[0]
            }
           
            ask_admin.userInfo=user
            console.log(ask_admin.userInfo)

            
        }
        xhr.open("get","backStage_askUser.php",true);
        xhr.send(null);
    },
})





