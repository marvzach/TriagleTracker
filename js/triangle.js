var sideSum1 = function(firstvalue, secondvalue) {
    return firstvalue + secondvalue;
   };

   var sideSum2 = function(secondvalue, thirdvalue) {
    return secondvalue + thirdvalue;
   };

   var sideSum3 = function(firstvalue, thirdvalue) {
    return firstvalue + thirdvalue;
   };
   function triger(){
    var array=['Its an Equilateral Triangle','Its an Isoscele Triangle','Its a Scalene Triangle']
    var firstvalue=document.getElementById('one').value;
    var secondvalue=document.getElementById('two').value;
    var thirdvalue=document.getElementById('three').value;
    var text;
    if(sideSum1(firstvalue,secondvalue) <= thirdvalue || sideSum2(secondvalue,thirdvalue) <= firstvalue || sideSum3(firstvalue,thirdvalue) <= secondvalue){
        text="It is not a triangle!"
        document.getElementById("img").src= "images/not.png"
    }
    else if(firstvalue === secondvalue && secondvalue === thirdvalue){
        text = array[0];
         document.getElementById("img").src= "images/equ.jpg"
    }
     //Equivalent Triangle
     else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
         text=array[1];
         document.getElementById("img").src= "images/isoseles.jpg"
     }
     //Isoscele Triangle
