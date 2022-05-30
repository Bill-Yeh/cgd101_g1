let backStage = new Vue({
    el:'#backStageID',
    methods: {
        show(){
            document.querySelector('.backStage_lightBox').style.display = 'flex';
        },
        hide(){
            document.querySelector('.backStage_lightBox').style.display = 'none';
        },
    },
})