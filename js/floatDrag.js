    $(document).ready(function(){
    animateDiv();
 });
function float(){
    // Using lesson: Getting Window Dimensions
var h = $(window).height() - 35;
var w = $(window).width() - 35; 

// Use var h and w defined for a specific area of float
  //  var h = 100;
  //  var w = 200;
  

  //The +200 and +500 is to set them apart yet facing each other without too much overlap 
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = float();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};


function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .03;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}


    $(document).ready(function(){
    animateDivm();
 });
function float1(){
    // if you wish  Window - viewport dimensions
 //   var h = $(window).height() - 35;
//    var w = $(window).width() - 35;  

    var hm = 100;
    var wm = 200;
   
    var nhm = Math.floor(Math.random() * hm);
    var nwm = Math.floor(Math.random() * wm);
    
    return [nhm,nwm];    
  
}


function animateDivm(){
    var myral = float1();
    var oldq = $('.b').offset();
    var speed = calcSpeed2([oldq.top, oldq.left], myral);
        $('.b').animate({ top: myral[0], left: myral[1] }, speed, function(){
      animateDivm();        
    });
};

function calcSpeed2(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .01;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
$(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('body').css('background-position', x + 'px 0');
        }, 300);
    })
      window.addEventListener("keydown", function(e) {
      // space and arrow keys
           if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
           e.preventDefault();
           }
     }, false);
  var ie=document.all;
  var nn6=document.getElementById&&!document.all;
  var isdrag=false;
  var x,y;
  var dobj;
  function movemouse(e)
  {
    if (isdrag)
    {
      dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x;
      dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y;
      return false;
    }
  }

  function selectmouse(e) 
  {
    var fobj       = nn6 ? e.target : event.srcElement;
    var topelement = nn6 ? "HTML" : "BODY";

    while (fobj.tagName != topelement && fobj.className != "dragme")
    {
      fobj = nn6 ? fobj.parentNode : fobj.parentElement;
    }

    if (fobj.className=="dragme")
    {
      isdrag = true;
      dobj = fobj;
      tx = parseInt(dobj.style.left+0);
      ty = parseInt(dobj.style.top+0);
      x = nn6 ? e.clientX : event.clientX;
      y = nn6 ? e.clientY : event.clientY;
      document.onmousemove=movemouse;
      return false;
    }
  }

  document.onmousedown=selectmouse;
  document.onmouseup=new Function("isdrag=false");


  $("button").click(function(){
    var x = $("heart").position();
    alert("Top: " + x.top + " Left: " + x.left);
  }); 

  function leftArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
  }
  function rightArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
  }
  function upArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
  }
  function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
  }
  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
      case 38:
      upArrowPressed();
      break;
      case 40:
      downArrowPressed();
      break;
    }
  };

  function docReady()
  {

    window.addEventListener('keydown', moveSelection);
  }