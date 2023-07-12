

const productImages = document.querySelectorAll(".product-images img");
const productImageSlider = document.querySelector(".image-slider");

let  activeImageSlider = 0;
productImages.forEach((item, i) => {

item.addEventListener('click', () =>{
productImages[ activeImageSlider].classList.remove('active');
item.classList.add('active'); 
productImageSlider.style.backgroundImage = `url('${item.src }')`;
activeImageSlider = i;



})

} )

