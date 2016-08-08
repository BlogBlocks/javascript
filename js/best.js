

do {
      function GetBox () {
        var div = document.getElementById ("myraright");
            if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
              var rect = div.getBoundingClientRect ();
              mx = rect.left;
              my = rect.top;
              mw = rect.right - rect.left;
              mh = rect.bottom - rect.top;
              mmt = my+58;
              mxt= mx + 194;
              document.getElementById("left").innerHTML = (" Left: " + mxt + "\n Top: " + mmt + "\n Width: " + mw + "\n Height: " + mh);
            }
            else {
              alert ("Your browser does not support this example!");
            }             //document.querySelector('#myraright').innerHTML = mmt;
      }


      

          function GetFish () {
           var div = document.getElementById ("image1");
            if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
              var rect = div.getBoundingClientRect ();
              gx = rect.left;
              gy = rect.top;
              w = rect.right - rect.left;
              h = rect.bottom - rect.top;
              var  mt = gy+165;
              rightLip =  gx + (mt + 155) 
              document.getElementById("right").innerHTML = (" Right: " + gx + "\n Top: " + mt + "\n Width: " + w + "\n Height: " + h);
             
              if (mxt == gx && mmt == mt) {
                tempAlert("<h1> KISS ! </h1>",2000);


                function tempAlert(msg,duration)
                {
                 var el = document.createElement("div");
                 el.setAttribute("style","position:absolute;top:40%;left:25%;background-image:url('img/heart.png');background-repeat: no-repeat;");
                 el.innerHTML = msg;
                 setTimeout(function(){
                  el.parentNode.removeChild(el);
                 },duration);
                 document.body.appendChild(el);
                }

            //   confirm("KISS KISS");


  //  var element = document.getElementById("hearts");
  //  element.style.left = parseInt(element.style.left) gx + 'px';
               
                
              }

            }
            else {
              alert ("Your browser does not support this example!");
            }
          }
       // get the fish position
            setInterval(GetFish, 1);
            setInterval(GetBox, 1);
            }
            while(mxt != gx && mmt != mt){
           
           }
      </script>
<script>
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
