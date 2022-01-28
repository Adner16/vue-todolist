console.log('js ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        todo: [
            {text: 'fare la spesa', done: true},
            {text: 'andare in palestra', done: false},
            {text: 'portare fuori il cane', done: false},
            {text: 'pulire casa', done: false},
            {text: 'fare benzina', done: false},
        ]
    },
    methods:{
       deleteItem(index){
           this.todo.splice(index,1);
        },
        addItem(){}
    }
})
