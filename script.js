var arr=[
    {
        name:"Zaveri pearls-Necklace",
        img:"https://assets.ajio.com/medias/sys_master/root/20210412/nw5X/6074436daeb269a9e38c0082/-473Wx593H-462292146-gold-MODEL2.jpg",
        price:"4100",
    },
    {
        name:"Tanishq-Earrings",
        img:"https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew221129-3_1.jpg",
       price:"1100",
    },
    {
        name:"Priyaasi-Chocker",
        img:"https://assets.ajio.com/medias/sys_master/root/20210412/waBF/60744563f997dd7b64ac447d/-473Wx593H-462292137-green-MODEL2.jpg",
       price:"20500",
    },
    {
        name:"Peora-angles",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wwTcDhdx-gw6TA7Ci-_zQCZo8xQvxSmVlw&usqp=CAU",
       price:"31500",
    },
    {
        name:"Panash-Ring",
        img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-497.33333333333337,/pub/media/catalog/product/z/a/zaveripearls-zpfk8386_1.jpg?rnd=20200526195200",
        price:"500",
    },
    {
        name:"Wembly-Butterfly necklace",
        img:"https://assets.ajio.com/medias/sys_master/root/20210622/ge3z/60d17d39f997ddb312e50398/-473Wx593H-462540337-pink-MODEL2.jpg",
       price:"1500",
    },
    {
      name:"Peora-Jwellery set",
      img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-304.46,/pub/media/catalog/product/p/f/pf26n1295r_1_046c48f3.jpg",
     price:"21500",
  },
  {
      name:"Tanishq-jwellery set",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdgT7iJAs73Hm4FI7L4QGzvf_gzWOQGDZzA&usqp=CAU",
      price:"5000",
  },
]
if(localStorage.getItem('arr')==null) {
    localStorage.setItem('arr',JSON.stringify(arr));
}

function show(a){

 let arr=a;
 let div=document.getElementById("main");
 div.innerHTML=null;

  arr.forEach(function(el){
      let div1=document.createElement("div");
      div1.setAttribute("class","prod");

     let  p_name=document.createElement("p");
      p_name.innerHTML=el.name;

     let img=document.createElement("img");
      img.src=el.img;
      img.setAttribute("class","zoom")

      let price=document.createElement("p");
      price.innerHTML=el.price;

      let btn = document.createElement("button");
      btn.innerHTML = "Add to Cart";
      btn.addEventListener("click", function () {
        addItems(el);
      });
      btn.setAttribute("class","addcart")

      div1.append(p_name,img,price,btn);
      div.append(div1)
  });
}

let a=JSON.parse(localStorage.getItem('arr'));
show(a);

  function high(){
let arr=JSON.parse(localStorage.getItem('arr'));
  arr=  arr.sort(function(a,b){
    return a.price-b.price;
    });

show(arr);

  }

  function low(){
    let arr=JSON.parse(localStorage.getItem('arr'));
      arr=  arr.sort(function(a,b){
        return b.price-a.price;
        });
    
    show(arr);
    
      }
      function filter(){
        let arr=JSON.parse(localStorage.getItem('arr'));
          arr=  arr.sort(function(a,b){
            return a.p_name-b.p_name;
            });
        
        show(arr);
        
          }

          
          function addItems(items) {
            
           let cart = localStorage.getItem("cart");
            if (cart == null) {
              cart= [];
            } else {
              cart = JSON.parse(localStorage.getItem("cart"));
            }
           cart.push(items);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
 