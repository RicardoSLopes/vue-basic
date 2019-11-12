// criar uma instancia do vue ( objeto em java script {} )
// do link CDN
var app = new Vue({
    // propriedades basicas
    // el = element
    el: '#app',
    data: {
        message: "Hello Vue!"
    }
});

//mvvm bi direcional, model att a view e a view att a model
// js (model) <-> html (view)