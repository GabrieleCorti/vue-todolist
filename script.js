const app = new Vue({
    el: "#root",
    data: {
        list: ["fare compiti", "studiare", "suonare"],
        toDo: ""
    },
    methods: {
        cancel: function(index){
            this.list.splice(index, 1);
        },
        addToDo: function(){
            if (this.toDo != "") {

                this.list.push(this.toDo);
                this.toDo = "";
                
            }
        }
    }
})