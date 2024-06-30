// var myImage = document.querySelector('img');


// document.addEventListener('mousemove' ,function (e) {
//     myImage.style.left = e.clientX + 'px';
//     myImage.style.top = e.clientY + 'px';
  
// })


var imgList = Array.from(document.querySelectorAll('img'));
var boxContainer = document.getElementById('boxContainer');
var boxLight = document.getElementById('boxLight');
var currentSlideImg ;
var closeBtn =  document.getElementById('closeBtn');
var leftBtn =  document.getElementById('leftBtn');
var rightBtn =  document.getElementById('rightBtn');



for(var i = 0 ; i < imgList.length ; i++){
    imgList[i].addEventListener('click', function(e){
        boxContainer.classList.remove('d-none');
        console.log(boxContainer);
        var currentImg = e.target.getAttribute('src');
        currentSlideImg = imgList.indexOf(e.target)
        console.log(currentSlideImg);
      boxLight.style.backgroundImage =`url(${currentImg})`;
       
    })
}

function nextSlide() {
    currentSlideImg++;
    if( currentSlideImg > imgList.length-1){
        currentSlideImg = 0;
    }
   var nextImg =  imgList[currentSlideImg].getAttribute('src');
    boxLight.style.backgroundImage =`url(${nextImg})`;
}
rightBtn.addEventListener('click', nextSlide)

function prevSlide() {
    currentSlideImg--;
    if( currentSlideImg < 0){
        currentSlideImg = imgList.length-1;
    }
   var nextImg =  imgList[currentSlideImg].getAttribute('src');
    boxLight.style.backgroundImage =`url(${nextImg})`;
}
leftBtn.addEventListener('click', prevSlide)






closeBtn.addEventListener('click', closeBox);
function closeBox() {
    boxContainer.classList.add('d-none');
    
}

