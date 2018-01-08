(function(){
    var app = angular.module('store',[]);

    app.controller('StoreController',function(){
         this.products = gems;
    });

    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
        canPurchase:true,
    },
    {
        name: 'Dodecahedron 2',
        price: 22.95,
        description: '. . .',
        canPurchase:false,
    }
]
})();
