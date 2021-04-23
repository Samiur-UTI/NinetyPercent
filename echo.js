////Phase One
var slider = document.createElement("DIV");
var el = document.getElementById('shopify-section-footer-promotions');
el.appendChild(slider)
el.firstElementChild.id = 'caraousel';
var photoCar = document.getElementById("caraousel");
//One
var one = document.createElement("DIV");
photoCar.appendChild(one)
photoCar.firstChild.id = 'first-one';
var div1 = document.getElementById('first-one');
var image1 = document.createElement("IMG");​
var title1 = document.createElement("H4");
div1.appendChild(image1)
div1.appendChild(title1)
div1.firstChild.id = 'photo1';
div1.lastChild.id = 'title1';
//Two
var two = document.createElement("DIV");
photoCar.appendChild(two)
photoCar.lastElementChild.id = 'second-one';
var div2 = document.getElementById('second-one');
var image2 = document.createElement("IMG");​
var title2 = document.createElement("H4");
div2.appendChild(image2)
div2.appendChild(title2)
div2.firstElementChild.id = 'photo2';
div2.lastElementChild.id = 'title2';
//Three
var three = document.createElement("DIV");
photoCar.appendChild(three)
photoCar.lastElementChild.id = 'third-one';
var div3 = document.getElementById('third-one');
var image3 = document.createElement("IMG");​
var title3 = document.createElement("H4");
div3.appendChild(image3)
div3.appendChild(title3)
div3.firstElementChild.id = 'photo3';
div3.lastElementChild.id = 'title3';
//Four
var four = document.createElement("DIV");
photoCar.appendChild(four)
photoCar.lastElementChild.id = 'fourth-one';
var div4 = document.getElementById('fourth-one');
var image4 = document.createElement("IMG");​
var title4 = document.createElement("H4");
div4.appendChild(image4)
div4.appendChild(title4)
div4.firstElementChild.id = 'photo4';
div4.lastElementChild.id = 'title4';
/////Five
var five = document.createElement("DIV");
photoCar.appendChild(five)
photoCar.lastElementChild.id = 'fifth-one';
var div5 = document.getElementById('fifth-one');
var image5 = document.createElement("IMG");​
var title5 = document.createElement("H4");
div5.appendChild(image5)
div5.appendChild(title5)
div5.firstElementChild.id = 'photo5';
div5.lastElementChild.id = 'title5';
//Six
var six = document.createElement("DIV");
photoCar.appendChild(six)
photoCar.lastElementChild.id = 'sixth-one';
var div6 = document.getElementById('sixth-one');
var image6 = document.createElement("IMG");​
var title6 = document.createElement("H4");
div6.appendChild(image6)
div6.appendChild(title6)
div6.firstElementChild.id = 'photo6';
div6.lastElementChild.id = 'title6';
//Seven
var seven = document.createElement("DIV");
photoCar.appendChild(seven)
photoCar.lastElementChild.id = 'seventh-one';
var div7 = document.getElementById('seventh-one');
var image7 = document.createElement("IMG");​
var title7 = document.createElement("H4");
div7.appendChild(image7)
div7.appendChild(title7)
div7.firstElementChild.id = 'photo7';
div7.lastElementChild.id = 'title7';
//Eight
var eight = document.createElement("DIV");
photoCar.appendChild(eight)
photoCar.lastElementChild.id = 'eighth-one';
var div8 = document.getElementById('eighth-one');
var image8 = document.createElement("IMG");​
var title8 = document.createElement("H4");
div8.appendChild(image8)
div8.appendChild(title8)
div8.firstElementChild.id = 'photo8';
div8.lastElementChild.id = 'title8';
///// Phase 2 
var productNames = Object.keys(window.theme.recentlyViewed.recent);
var titleDoms = [];
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var title4 = document.getElementById("title4");
titleDoms.push(title1,title2,title3,title4);
for(i=0;i<titleDoms.length;i++){
    titleDoms[i].innerHTML = productNames[i]
}
var photoDoms = [];
    var photo1 = document.getElementById("photo1");
    var photo2 = document.getElementById("photo2");
    var photo3 = document.getElementById("photo3");
    var photo4 = document.getElementById("photo4");
  photoDoms.push(photo1,photo2,photo3,photo4);
  var productImages = Object.values(window.theme.recentlyViewed.recent);
  var imageURL = [];
  function fetchImage(url){
      if(!url.length){
        for(i=0;i<productImages.length;i++){
            fetch(productImages[i].featuredImage)
            .then(response => response.blob())
            .then(data =>  url.push(URL.createObjectURL(data)))
            .then(url => console.log(url))
            .catch(err => console.error(err))
        }
       } else {
           return url;
       }
    
    }
    function displayImmages(){
        
    }
    fetchImage(imageURL)
    
