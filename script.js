const imgs = document.querySelectorAll('.img')
const background = document.querySelector('.background')

imgs.forEach(function(img){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].setAttribute('index', i)
    }
    img.addEventListener('click', function(){
        const index = img.getAttribute
        imgs[index].classList.add('active')
        background.classList.add('active')
    })
});
background.addEventListener('click', function(){
    background.classList.remove('active')
})