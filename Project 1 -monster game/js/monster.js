function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}



 Vue.createApp({
    data(){
        return{
            monsterhealth: 100,
            playerhealth: 100,
            currentround:0,
            winner:null,
            logmessage:[]
        };
    },
    computed:{
        monsterbarstyle(){
            if(this.monsterhealth < 0){
                return {width : '0%'};
            }
            return {width: this.monsterhealth + '%'};

        },
        playerbarstyle(){
            if(this.playerhealth <0){
                return {width : '0%'};
            }
            return  {width: this.playerhealth + '%'};
        },
        usecurrentround(){
            return this.currentround % 3 !==0;
        }
    },
    watch:{
        playerhealth(value){
            if(value <= 0 && this.monsterhealth <=0){
                this.winner='draw';
            }else if(value <=0){
                this.winner = 'monster'
            }

        },
        monsterhealth(value){
            if(value <=0 && this.playerhealth <=0){
                this.winner ='draw';
            }else if(value <=0){
                this.winner='player'
            }

        }

    },
    methods:{
        attackmonster(){
            this.currentround++;
            const attackvalue=getRandomValue(5,12);
            this.monsterhealth -= attackvalue;
            this.addlogMessage('player','attack','attackvalue');
            this.attackplayer();

        },
        attackplayer(){
            const attackvalue = getRandomValue(8,15);
            this.playerhealth -= attackvalue;
            this.addlogMessage('monster','attack','attackvalue');
        },
        specialattackmonster(){
            this.currentround++;
            const attackvalue = getRandomValue(10,25);
            this.monsterhealth -= attackvalue;
            this.addlogMessage('player','attack','attackvalue');
            this.attackplayer();
        },
        healplayer(){
            this.currentround++;
            const healvalue=getRandomValue(8,20);
            if(this.playerhealth + healvalue >100){
                this.playerhealth=100;
            }else{
                this.playerhealth+=healvalue;
            }
            this.addlogMessage('player','heal','healvalue');
            this.attackplayer();

        },
        startgame(){
            this.monsterhealth=100;
            this.playerhealth=100;
            this.winner=null;
            this.currentround=0;
            this.logmessage = [];
        },
        surrender(){
            this.winner='monster';
        },
        addlogMessage(who,what,value){
            this.logmessage.unshift({
                actionBy :who,
                actionType:what,
                actionValue : value
            })

        }


    }

}).mount('#game');