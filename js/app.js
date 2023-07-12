const prdouctContainers = [...document.querySelectorAll('.product-container')];


const nexBtn = [...document.querySelectorAll('.nxt-btn')];
const  perBtn = [...document.querySelectorAll('.per-btn')];
     prdouctContainers.forEach((item, i) => {

        let containerDiemnstion = item.getBoundingClientRect(); 
        let containerWidth = containerDiemnstion.width;
        
        nexBtn[i].addEventListener('click', () => {

            item.scrollLeft += containerWidth;
        })
        

          perBtn[i].addEventListener('click', ()=> {

            item.scrollLeft -= containerWidth;
        })
        
     }
     
     
     
     
     )