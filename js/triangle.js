
var sideSum1 = function(firstvalue, secondvalue) {
    return firstvalue + secondvalue;
   };

   var sideSum2 = function(secondvalue, thirdvalue) {
    return secondvalue + thirdvalue;
   };

   var sideSum3 = function(firstvalue, thirdvalue) {
    return firstvalue + thirdvalue;
   };
   function check(){
       var array=['Equilateral','Isoscele','Scalene']
    var firstvalue=document.getElementById('one').value;
    var secondvalue=document.getElementById('two').value;
    var thirdvalue=document.getElementById('three').value;
    var text;
     if(sideSum1(firstvalue,secondvalue) <= thirdvalue || sideSum2(secondvalue,thirdvalue) <= firstvalue || sideSum3(firstvalue,thirdvalue) <= secondvalue){
        text="it is not a triangle"
    }
    else if(firstvalue === secondvalue && secondvalue === thirdvalue){
        text = array[0];
    }
     //Equivalent Triangle

    else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
        text=array[1];
    }
    //Isoscele Triangle
    else if(firstvalue!==secondvalue && firstvalue!==thirdvalue &&secondvalue!==thirdvalue){
        text=array[2];
    }
    //Scalene Triangle
    document.getElementById('Result').innerHTML = text;
  }
