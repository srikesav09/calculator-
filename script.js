 display= document.getElementById("display");

       function fun(input){
        display. value += input;
       }
       function ac(){
        display.value =""
       }

       function cal(){
        try{
        display.value=eval(display.value);
       }
       catch(error){
        display.value= "error"
       }
    }