const button = document.querySelector('#btnMenu');
  const menuOpen = document.querySelector('#mobileMenu');
  button.addEventListener("click",(e)=>{
    e.preventDefault();
    menuOpen.classList.toggle('hidden');
  })
  console.log(button)