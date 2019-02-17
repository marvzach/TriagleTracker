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
