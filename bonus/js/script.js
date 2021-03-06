const app = new Vue({
    el: '#app',
    data: {
    counter: 0,
    img:[
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
    ],
    },
    methods: {
        next: function() {
            console.log('dopo');
            this.counter += 1;
            console.log(this.counter);
            if(this.counter > this.img.length -1){
                this.counter = 0;
            }
        },
        prev: function() {
            console.log('prima');
            this.counter -= 1;
            console.log(this.counter);
            if(this.counter < 0){
                this.counter = this.img.length -1;
            }
        },
        // slide pallini sincronizzato con foto
    slideDown: function (index) {
        this.counter = index;
    },
     // timer scorrimento foto 3 secondi
    timing() {
        this.timer = setInterval(this.next,3000);
        },
        // stop scorrimento foto
        stop(){
            clearInterval(this.timer);
        } 
    },
    created() {
        this.timing();
    }

});
