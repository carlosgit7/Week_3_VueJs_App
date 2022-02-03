const app ={
    data(){
        return{
            title: "Inventory App",
            newProduct: "",
            products: [
                {
                    id: 0,
                    name: "Apples",
                    qty: 3,
                },
                {
                    id: 1,
                    name: "Oranges",
                    qty: 5,
                },
            ],
        };
    },
    computed:{
        total(){
            let sum = 0;
            this.products.forEach((product) => {
                sum += product.qty;
            });
            return sum;
        },
    },
    methods: {
        addProduct(){
            if(this.newProduct.length > 0){
                this.products.push({
                    id: new Date().toISOString,
                    name: this.newProduct,
                    qty: 0,
                });
                this.newProduct ="";
            }
        },
    },

};
Vue.createApp(app).mount("#app");