let admin_report_com= Vue.component("component-back-report", {

    props:['error_id','member_id','error_title','error_txt','error_file','error_status','error_datetime'],
    template:
    `<tr class="table_data_row odd">
        <td>{{error_id}}</td>
        <td>{{error_datetime}}</td>
        <td>{{member_id}}</td>
        <td>{{error_title}}</td>
        <td>
            <select name="" id="error_status">
                <option :value= 'error_status==0? "unsolved":"solved"'>{{error_status==0? "未處理" :"已處理"}}</option>
                <option :value= 'error_status==0? "solved":"unsolved"'>{{error_status==0?  "已處理":"未處理"}}</option>
            </select>
        </td>
        <td><button class="lightBox_btn edit_btn" :id=error_id @click="show">檢視</button></td>
    </tr> `
});

let report = new Vue({
    el:'#errorApp',
    data:{
        reporterInfo:[],
    },
    methods:{
        show: function(e){
            let id=this.id
            console.log(id)
            document.querySelector(".backStage_lightBox").style="block"
        }
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

    }
})