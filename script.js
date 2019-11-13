// componente todo-item, manipula o propriedade no tipo text 
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
}) 


// criar uma instancia do vue ( objeto em java script {} )
// do link CDN
var app = new Vue({
    // propriedades basicas
    // el = element
    el: '#app',
    data: {
        message: "Hello Vue!",
        lista: [
            {id: 0, text: 'tomate'},
            {id: 1, text: 'laranja'},
            {id: 2, text: 'ovo'},
        ]
    }
});

//mvvm bi direcional, model att a view e a view att a model
// js (model) <-> html (view)