var app = new Vue({
    el:'#app',
    data:{
        message:'1111',
        lists:[
        {content:'123'},
            {content:'123hh'},
            {content:'123fgd'},
            {content:'123ss'},
            {content:'1fgfd'},

        ],
        isShow: true,
    },
    methods:{
        clickMe: function(){
            if( this.isShow === true){
                this.isShow = false
            }else{
                this.isShow = true
            }
            console.log(this.isShow)
        }
    }
})