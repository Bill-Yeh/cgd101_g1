let backStage = new Vue({
    el:'#backStageID',
    data:{
        rows:[  //文章管理組件
            {
                id:'1',
                articleNum:'1',
                memNum:'1',
                memtitle:'周阿倫',
                aticleType:'50音',
                aticleTitle:'如何背50音',
                like:'8',
                reply:'1',
                report:'0'
            },
            {
                id:'2',
                articleNum:'2',
                memNum:'2',
                memtitle:'陳小明',
                aticleType:'單字',
                aticleTitle:'如何背單字',
                like:'5',
                reply:'2',
                report:'0'
            },
        ],
        // contents:[ //文章燈箱組件
        //     {
        //         id:'1',
        //         articleNum:'1',
        //         memNum:'1',
        //         memtitle:'周阿倫',
        //         aticleType:'50音',
        //         aticleTitle:'如何背50音',
        //         articleContent:'請問各位大大知道怎麼快速背好五十音嗎QQ',
        //         like:'8',
        //         reply:'1',
        //         report:'0'
        //     }
        // ]
    },
    methods: {
        show(){
            document.querySelector('.backStage_lightBox').style.display = 'flex';
        },
        hide(){
            document.querySelector('.backStage_lightBox').style.display = 'none';
        },
    },
})