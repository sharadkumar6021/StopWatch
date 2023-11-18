let on=document.getElementById("on");
        let off=document.getElementById("off");
        let res=document.getElementById("res");
        var hour =0;
        var sec=0;
        var min=0;
        var mili=0;
   //========================================Function-Logical=>Codes============================
        function time(){
          mili++;
          mili_second.innerHTML =mili;
          if(mili ==100){
          sec++;
          mili=0;
          second.innerHTML =sec;
          if(sec==60){
            min++;
            sec=0;
            minute.innerHTML = min;
            if(min == 60){
              hour++;
              min=0;
              hours.innerHTML = hour;
            }
            }
          }
        }
    //============================================================================================    

    // ==================================Function-Start=>Code=====================================    
        let x;
        function start(){
        x= setInterval(time, 10);
        document.getElementById("on").disabled = true;
        document.getElementById("off").disabled = false;
        document.getElementById("res").disabled = false;
      }
   //=============================================================================================
   
   //====================================Function-Stop=>Code======================================
      function stop(){
        clearInterval(x)
        document.getElementById("off").disabled = true;
        document.getElementById("on").disabled = false;
        document.getElementById("res").disabled = false;
      }
   //=============================================================================================
   
   //====================================Function-Reset=>Code=====================================
      function reset(){
        clearInterval(x);
        hours.innerHTML='00';
        minute.innerHTML='00';
        second.innerHTML='00';
        mili_second.innerHTML='00';
        document.getElementById("res").disabled = true;
        document.getElementById("on").disabled = false;
        document.getElementById("off").disabled = false;
         hour =0;
         sec=0;
         min=0;
         mili=0;
      }