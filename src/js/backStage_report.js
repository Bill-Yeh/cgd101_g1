let admin_report_com= Vue.component("component-back-report", {

    props:['error_id','member_id','error_title','error_txt','error_file','error_status','error_datetime'],
    methods:{
        show(e){
            document.querySelector('.backStage_lightBox').style.display = 'flex';

            let _this=e.target.id
            let allInfo=report.reporterInfo
            let userInfo=new Array();

            allInfo.map(function(e){
                if(_this==e.error_id){
                    userInfo.push(e)
                }
            })

            report.thisInfo=userInfo
        },

        insertStatus(e){
            let errorId=e.target.id.split("-")[1]
            let errorStatus=e.target.value
            let xhr = new XMLHttpRequest();
            xhr.open("get",`backStage_insertErrorStatus.php?id=${errorId}&status=${errorStatus=="unsolved"? 0: 1}`,true);
            xhr.send(null);
            
        }
    },
    template:
    `<tr class="table_data_row odd">
        <td>{{error_id}}</td>
        <td>{{error_datetime}}</td>
        <td>{{member_id}}</td>
        <td>{{error_title}}</td>
        <td>
            <select name="" id="error_status" :id='"status-"+error_id' @change="insertStatus">
                <option :value= 'error_status==0? "unsolved":"solved"'>{{error_status==0? "未處理" :"已處理"}}</option>
                <option :value= 'error_status==0? "solved":"unsolved"'>{{error_status==0?  "已處理":"未處理"}}</option>
            </select>
        </td>
        <td><button class="lightBox_btn edit_btn" :id=error_id  @click="show">檢視</button></td>
    </tr> `
}
);

let reportInfo=Vue.component("component-back-reportInfo", {
    props:['error_id','member_id','error_title','error_txt','error_file','error_status','error_datetime'],

    methods:{
        openPage(e){
            window.open(e.target.src)
        }
    },
    
    template:
    ` <div class="backStage_lightBox_main_content">
        <form action="" >
            <div class="course_sm_block item_sm_block article_sm_block report_sm_block">
                <label for="report_sm">通報編號</label>
                <input type="text" id="report_sm" :value=error_id readonly>
            </div>
            <div class="course_sm_block item_sm_block article_sm_block report_time_block">
                <label for="report_time">通報時間</label>
                <input type="text" id="report_time" :value=error_datetime readonly>
            </div>
            <div class="course_img_block item_img_block member_sm_block">
                <label for="member_sm">會員編號</label>
                <input type="text" id="member_sm" :value=member_id readonly>
            </div>
            <div class="course_title_block item_title_block member_title_block report_content_block">
                <label for="report_content">通報內容</label>
                <input type="text" id="report_content" :value=error_txt readonly>
            </div>
            <div class="course_price_block item_price_block article_type_block report_solve_block">
                <label for="report_solve">處理進度</label>
                <input type="text" id="report_solve" :value='error_status==1 ? "已處理":"未處理" ' readonly>
            </div>
            <div class="errorImg">
                <img :src=error_file alt="" @click='openPage'>
            </div>
        </form>                          
    </div>`
}
);



let report = new Vue({
    el:'#backStageID',
    data:{
        reporterInfo:[],
        thisInfo:[]
    },
    created() {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            
            let data= JSON.parse(xhr.responseText);
            for(i=0;i<data.length;i++){
                data[i].error_datetime=data[i].error_datetime.split(".")[0]
            }

            
            report.reporterInfo=data
        }
        xhr.open("get","backStage_reportInfo.php",true);
        xhr.send(null);
    },
    methods:{
        hide(){
            document.querySelector('.backStage_lightBox').style.display = 'none';
        },
        
    }
})
