
       var tracker = function(firstvalue, secondvalue, thirdvalue) {

         var firstvalue = parseInt(document.getElementById("one").value);
         var secondvalue = parseInt(document.getElementById("two").value);
         var thirdvalue = parseInt(document.getElementById("three").value);

         var sides = [];
         sides.push(firstvalue);
         sides.push(secondvalue);
         sides.push(thirdvalue);

         if ((firstvalue + secondvalue> thirdvalue && firstvalue + thirdvalue > secondvalue && secondvalue + thirdvalue > firstvalue)
         && (firstvalue=== secondvalue && secondvalue === thirdvalue)) {
         document.getElementById("results").innerHTML = "Its an Equilateral Triangle of sides <br> " + sides + "";
         document.getElementById("img").src= "images/equ.jpg"
         } else if ((firstvalue + secondvalue > thirdvalue && firstvalue + thirdvalue > secondvalue && secondvalue + thirdvalue > firstvalue)
          && ((firstvalue === secondvalue && secondvalue !== thirdvalue) ||
         (firstvalue === thirdvalue && thirdvalue !== secondvalue) || (secondvalue=== thirdvalue && secondvalue !== firstvalue))) {
           document.getElementById("results").innerHTML = "Its an Isoscele Triangle of sides <br> " + sides + "";
            document.getElementById("img").src= "images/isoseles.jpg"
         } else if ((firstvalue + secondvalue > thirdvalue && firstvalue + thirdvalue > secondvalue && secondvalue + thirdvalue > firstvalue)
          && (firstvalue !== secondvalue && secondvalue !== thirdvalue && firstvalue !== thirdvalue)) {
           document.getElementById("results").innerHTML = "Its a Scalene Triangle of sides <br> " + sides + "";
           document.getElementById("img").src= "images/sca.png"
         } else if (!firstvalue || !secondvalue || !thirdvalue) {
           document.getElementById("results").innerHTML = "Enter all the sides and try again";
         } else {
           document.getElementById("results").innerHTML = " It is not a triangle!";
           document.getElementById("img").src= "images/not.png"

         }
       }
