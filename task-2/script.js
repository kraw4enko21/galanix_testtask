let imgs= document.querySelectorAll('[data-set]');
let imgsShow = document.querySelectorAll('.foto__show')
let data = document.querySelector('.data')
let amount = document.querySelector('.amout')
let modalOne = document.querySelector('.modal-1')
let modalTwo = document.querySelector('.modal-2')
let btnCloseOne = document.querySelector('.btn-close')
let btnCloseTwo = document.querySelector('.btn-close-2')
let day = new Date();


amount.innerText = imgs.length;
data.innerText= `${day.getDate()}.${(day.getMonth() + 1)}.${day.getFullYear()}  ${day.getHours()}:${day.getMinutes()}`;


btnCloseOne.addEventListener('click',()=>{
    modalOne.classList.add('close');
})
imgs.forEach((item)=>{
    item.addEventListener('click',function(){
        modalTwo.classList.remove('close')
        let content = document.querySelector('#'+this.dataset.set);
        content.classList.remove('close');
        btnCloseTwo.addEventListener('click',()=>{
            imgsShow.forEach(item => item.classList.add('close'));
            modalTwo.classList.add('close')
        })

    })
 })

