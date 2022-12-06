/*=============== SLIDER ===============*/
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
   {
      id: 1,
      title: "Air Force",
      desc: "From sanded leather to classic coloring with a satin sheen, this Air Force 1 High '07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let your shoe game shine. The padded, high-cut collar with classic hook-and-loop closure adds heritage comfort while perforations in the toe keep you cool.",
      price: 119,
      colors: [
         {
            code: "black",
            img: "/assets/img/air.png",
         },
         {
            code: "darkblue",
            img: "/assets/img/air2.png",
         },
      ],
   },
   {
      id: 2,
      title: "Air Jordan",
      desc: "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details.",
      price: 149,
      colors: [
         {
            code: "lightgray",
            img: "/assets/img/jordan.png",
         },
         {
            code: "green",
            img: "/assets/img/jordan2.png",
         },
      ],
   },
   {
      id: 3,
      title: "Blazer",
      desc: "In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning.",
      price: 109,
      colors: [
         {
            code: "lightgray",
            img: "/assets/img/blazer.png",
         },
         {
            code: "green",
            img: "/assets/img/blazer2.png",
         },
      ],
   },
   {
      id: 4,
      title: "Crater",
      desc: "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter. Made from at least 25% recycled material by weight, it brings in unique design choices that reduces waste when compared with traditional methods––like an embroidered swoosh, efficient overlays and of course its Crater foam midsole.",
      price: 129,
      colors: [
         {
            code: "black",
            img: "/assets/img/crater.png",
         },
         {
            code: "lightgray",
            img: "/assets/img/crater2.png",
         },
      ],
   },
   {
      id: 5,
      title: "Hippie",
      desc: "Space Hippie is a story of trash transformed. From the upper to the outsole, Space Hippie 04 is made of at least 25% recycled material by weight. Not only is it the most lightweight silhouette within the collection, it also has the lowest carbon footprint. Its ‘Space Waste Yarn’ upper includes about 75% recycled content.",
      price: 99,
      colors: [
         {
            code: "gray",
            img: "/assets/img/hippie.png",
         },
         {
            code: "black",
            img: "/assets/img/hippie2.png",
         },
      ],
   },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
   item.addEventListener("click", () => {
      /* Change the current slide */
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      /* Change the choosen product */
      choosenProduct = products[index];

      /* Change text of currentProduct, price, description */
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
      currentProductDesc.textContent = choosenProduct.desc;

      /* Assing new colors */
      currentProductColors.forEach((color, index) => {
         color.style.backgroundColor = choosenProduct.colors[index].code;
      });
   });
});

/* Changing img of the shooes when click on the color */
currentProductColors.forEach((color, index) => {
   color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
   });
});

/* Changing sizes */
currentProductSizes.forEach((size, index) => {
   size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
         size.style.backgroundColor = "whitesmoke";
         size.style.color = "#111";
      });
      size.style.backgroundColor = "#111";
      size.style.color = "whitesmoke";
   });
});

/*=============== PAYMENT ===============*/
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
   payment.style.display = "flex";
});

close.addEventListener("click", () => {
   payment.style.display = "none";
});
