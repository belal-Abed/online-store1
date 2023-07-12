const creatNav = ()=> {


    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
       <div class="nav">
        <img src="img/dark-logo.png " class="brand-logo" alt="">
        <div class="nav-items">
            <div class="sertch">
            <input type="text" class="seratch-box" placeholder="sertch brand" >
            <button class="seartch-btn" > sertch</button>
            </div>
       <a href="#"><img src="img/user.png" alt=""></a>
              <a href="#"><img src="img/cart.png" alt=""></a>
       
        </div>
    </div>
 <ul class="links-containers">
<li class="link-itens"  ><a href="#" class="link">home </a></li>
<li class="link-itens"  ><a href="#" class="link">home </a></li>
<li class="link-itens"  ><a href="#" class="link">home </a></li>
<li class="link-itens"  ><a href="#" class="link">home </a></li>
<li class="link-itens"  ><a href="#" class="link">home </a></li>

 </ul>
    
    `;
} 
creatNav();