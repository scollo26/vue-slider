const app = new Vue({
    el: '#app',
    data: {
    counter: 0,
    img:[
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
    ]
    },
    methods: {
        next: function() {
            console.log('dopo');
        },
        prev: function() {
            console.log('prima');
        }
    }
   
})
