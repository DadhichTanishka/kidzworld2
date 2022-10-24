var carts = document.getElementsByClassName('button');
var cart = document.getElementById("cart");
// // onclick
var kid = [];
// var cc = document.getElementsByClassName("add");
var cartValue = document.getElementById("cart-value");

//debugger;
for (let i=0;i<carts.length;i++){
    //debugger;
   carts[i].onclick=(e)=>{
    item[i].quantity++;
    updateCart();
   };
}

// }
// function cartIncrease(){
//     cartValue.innerHTML = parseInt(cartValue.innerHTML)+1;    
// }
var item=[
    {
        name:"This was our pact",
        quantity:0,
        dollars:7,
        cents:49,
    },
    {
        name:"The famous five",
        quantity:0,
        dollars: 4,
        cents:59,

    }
    ,
    {
        name:"Matlida",
        quantity:0,
        dollars:6,
        cents:80,

    },
    {
        name:"Harry Potter",
        quantity:0,
        dollars:10,
        cents:0, 
    },
    {
        name:"For Young Readers",
        quantity:0,
        dollars:7,
        cents:29, 

    },
    {
        name:"Wimpy Kid - DIY",
        quantity:0,
        dollars:4,
        cents:99,
    }
]
function updateCart(){
    let cart=0;
    for(i=0;i<item.length;i++)
    {
        cart=cart+item[i].quantity;
    }
    cartValue.innerHTML=cart;
}
var totalDollars=0;
var totalCents=0;
function totalPrice(){
    var totalInCents=0;
    for(i=0;i<item.length;i++){
        totalInCents+=item[i].quantity*(item[i].dollars*100 + item[i].cents);
    }
    totalDollars=(totalInCents/100);
    totalCents=(totalInCents%100)

}
cart.onclick=()=>{
    console.log("cart");
    totalPrice();

    for(i=0;i<item.length;i++)

    {
        if(item[i].quantity !=0 )
        {   
            console.log(item[i].name,item[i].quantity,);
           
        }
     }
     console.log(totalDollars+totalCents)
}