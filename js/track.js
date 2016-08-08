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
           
           };