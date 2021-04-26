function photoSlider() {  ////Phase One
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
  var image1 = document.createElement("IMG");
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
  var image2 = document.createElement("IMG");
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
  var image3 = document.createElement("IMG");
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
  var image4 = document.createElement("IMG");
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
  var image5 = document.createElement("IMG");
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
  var image6 = document.createElement("IMG");
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
  var image7 = document.createElement("IMG");
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
  var image8 = document.createElement("IMG");
  var title8 = document.createElement("H4");
  div8.appendChild(image8)
  div8.appendChild(title8)
  div8.firstElementChild.id = 'photo8';
  div8.lastElementChild.id = 'title8';
  ///// Phase 2
  //---Display Title----//
  var productNames = Object.keys(window.theme.recentlyViewed.recent);
  var titleDoms = [];
  var title1 = document.getElementById("title1");
  var title2 = document.getElementById("title2");
  var title3 = document.getElementById("title3");
  var title4 = document.getElementById("title4");
  var title5 = document.getElementById("title5");
  var title6 = document.getElementById("title6");
  var title7 = document.getElementById("title7");
  var title8 = document.getElementById("title8");
  titleDoms.push(title1, title2, title3, title4, title5, title6, title7, title8);
  for (i = 0; i < titleDoms.length; i++) {
    titleDoms[i].innerHTML = productNames[i]
  }
  //---Display Photo----//
  var photoDoms = [];
  var photo1 = document.getElementById("photo1");
  var photo2 = document.getElementById("photo2");
  var photo3 = document.getElementById("photo3");
  var photo4 = document.getElementById("photo4");
  var photo5 = document.getElementById("photo5");
  var photo6 = document.getElementById("photo6");
  var photo7 = document.getElementById("photo7");
  var photo8 = document.getElementById("photo8");

  photoDoms.push(photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8);
  var productImages = Object.values(window.theme.recentlyViewed.recent);
  function displayProduct() {
    for (i = 0; i < photoDoms.length; i++) {
      photoDoms[i].src = productImages[i].featuredImage.replace('{width}', '300');
    }
  }
  displayProduct();
  ////// Phase 3
  //---- Styling ----////
  function setWidth() {
    photoCar.style.display = 'flex';
    photoCar.style.width = '100%';
    photoCar.style.justifyContent = 'space-between';
    photoCar.style.overflow = 'hidden';
    photoCar.style.marginRight = '50px';
    photoCar.style.marginLeft = '50px;'
    div1.style.margin = '0px 5px 0px 5px';
    div2.style.margin = '0px 5px 0px 5px';
    div3.style.margin = '0px 5px 0px 5px';
    div4.style.margin = '0px 5px 0px 5px';
    div5.style.margin = '0px 5px 0px 5px';
    div6.style.margin = '0px 5px 0px 5px';
    div7.style.margin = '0px 5px 0px 5px';
    div8.style.margin = '0px 5px 0px 5px';
    for (i = 0; i < photoDoms.length; i++) {
      photoDoms[i].style.height = '250px';
      photoDoms[i].style.width = '100px';
      photoDoms[i].style.objectFit = 'cover'
      photoDoms[i].style.margin = '5px 5px 5px 5px';
    }
  }
  setWidth();
  createButton();
  function createButton(){
    var buttonPar = document.createElement('DIV');
    el.appendChild(buttonPar);
    el.lastElementChild.id = 'button-parent';
    var buttonDiv = document.getElementById('button-parent');
    var buttonFor = document.createElement('BUTTON');
    var buttonBack = document.createElement('BUTTON');
    buttonDiv.style.background = 'white';
    buttonDiv.style.margin = '0 -0.5rem 0 -o.5rem';
    buttonDiv.style.float = 'right';
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'center';
    buttonDiv.appendChild(buttonBack);
    buttonDiv.appendChild(buttonFor);
    buttonBack.textContent ='Previous';
    buttonFor.textContent = 'Next';
    buttonDiv.firstElementChild.id = 'backward';
    buttonDiv.lastElementChild.id = 'forward';
    var rightShift = document.getElementById('forward');
    var leftShift = document.getElementById('backward');
    rightShift.style.border = '0.125em solid black';
    rightShift.style.cursor = 'pointer';
    leftShift.style.border = '0.125em solid black';
    leftShift.style.cursor = 'pointer';
    
  }
  var rightShift = document.getElementById('forward');
  var leftShift = document.getElementById('backward');
  var counter = 1;
  var size1 = div1.clientWidth;
  var size2 = div1.clientWidth;
  var size3 = div1.clientWidth;
  var size4 = div1.clientWidth;
  var size5 = div1.clientWidth;
  var size6 = div1.clientWidth;
  var size7 = div1.clientWidth;
  var size8 = div1.clientWidth;

  leftShift.addEventListener('click', function animate() {
    if(counter>1){
      div1.style.transition = "transform 0.1s ease-in-out";
      div2.style.transition = "transform 0.1s ease-in-out";
      div3.style.transition = "transform 0.1s ease-in-out";
      div4.style.transition = "transform 0.1s ease-in-out";
      div5.style.transition = "transform 0.1s ease-in-out";
      div6.style.transition = "transform 0.1s ease-in-out";
      div7.style.transition = "transform 0.1s ease-in-out";
      div8.style.transition = "transform 0.1s ease-in-out";
      counter--;    
      div1.style.transform = 'translateX(' + (-size1*counter) + 'px)';
      div2.style.transform = 'translateX(' + (-size2*counter) + 'px)';
      div3.style.transform = 'translateX(' + (-size3*counter) + 'px)';
      div4.style.transform = 'translateX(' + (-size4*counter) + 'px)';
      div5.style.transform = 'translateX(' + (-size5*counter) + 'px)';
      div6.style.transform = 'translateX(' + (-size6*counter) + 'px)';
      div7.style.transform = 'translateX(' + (-size7*counter) + 'px)';
      div8.style.transform = 'translateX(' + (-size8*counter) + 'px)';
    }  
  });
  rightShift.addEventListener('click', function animate() {
      div1.style.transition = "transform 0.1s ease-in-out";
      div2.style.transition = "transform 0.1s ease-in-out";
      div3.style.transition = "transform 0.1s ease-in-out";
      div4.style.transition = "transform 0.1s ease-in-out";
      div5.style.transition = "transform 0.1s ease-in-out";
      div6.style.transition = "transform 0.1s ease-in-out";
      div7.style.transition = "transform 0.1s ease-in-out";
      div8.style.transition = "transform 0.1s ease-in-out";
      counter++;    
      div1.style.transform = 'translateX(' + (-size1*counter) + 'px)';
      div2.style.transform = 'translateX(' + (-size2*counter) + 'px)';
      div3.style.transform = 'translateX(' + (-size3*counter) + 'px)';
      div4.style.transform = 'translateX(' + (-size4*counter) + 'px)';
      div5.style.transform = 'translateX(' + (-size5*counter) + 'px)';
      div6.style.transform = 'translateX(' + (-size6*counter) + 'px)';
      div7.style.transform = 'translateX(' + (-size7*counter) + 'px)';
      div8.style.transform = 'translateX(' + (-size8*counter) + 'px)';
      
  });

  //---Animation---//
  function showButton(x) {
    if (x.matches) { // If media query matches
      rightShift.style.display = 'block';

    } else {
      rightShift.style.display = 'none';
    }
  }

  var x = window.matchMedia("(max-width: 700px)")
  showButton(x)
  x.addListener(showButton)
}