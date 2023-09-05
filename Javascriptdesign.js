 var i = 0;
 var images = [];
 var time = 3000;

 images [0] = 'images1.jpg';
 images [1] = 'images2.jpg';
 images [2] = 'images3.jpg';
 images [3] = 'images4.jpg';

 function ChangeImg() {

document.slide.src = images[i];

if(i < images.length - 1){

i++;

}else{
	i = 0;
}

setTimeout("ChangeImg", time);


 }

window.onload = ChangeImg;
