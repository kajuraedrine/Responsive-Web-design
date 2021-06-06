const menu = document.querySelector('.menu');
console.log(menu);
 menu.addEventListener('click',()=>{
    const list=document.querySelector('.list');
    const close=document.querySelector('.close')
    list.style.transform ='scale(1)';
    close.addEventListener("click",()=>{
    list.style.transform ='scale(0)';
    })

})