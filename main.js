/*function total(){
  var final=document.getElementById('sttxt').innerHTML;
  var newA = object.values(final);
  var newL = newA.length;
  var select = document.getElementById('choices');
  var option= select.options[select.selectedIndex];
  return document.getElementById('totaltxt').innerHTML=eval(newL*option.value);
}*/
function movie(){
  var select = document.getElementById('choices');
  var option= select.options[select.selectedIndex];
  return document.getElementById('mvtxt').innerHTML = option.text;
}
function checked(){
    var Oyes=document.getElementById('yes1');
    if(Oyes.checked==true){
       return document.getElementById('sttxt').innerHTML +="A1";
    }
}
function ch2(){
   var ytes=document.getElementById('yes2');
   if(ytes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" +"A2";
    }
}
function ch3(){
   var ttes=document.getElementById('yes3');
   if(ttes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" + ttes.value;
    }
}
function ch4(){
   var trtes=document.getElementById('yes4');
   if(trtes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" + trtes.value;
    }
}
function ch5(){
   var ftes=document.getElementById('yes5');
   if(ftes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" + ftes.value;
    }
}
function ch6(){
   var fvtes=document.getElementById('yes6');
   if(fvtes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" + fvtes.value;
    }
}
function ch7(){
   var stes=document.getElementById('yes7');
   if(stes.checked==true){
     return document.getElementById('sttxt').innerHTML +=  "," +"" + stes.value;
    }
}
function ch8(){
  var svtes=document.getElementById('yes8');
  if(svtes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + svtes.value;
   }
}
function ch9(){
  var etes=document.getElementById('yes9');
  if(etes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + etes.value;
   }
}
function ch10(){
  var ntes=document.getElementById('yes10');
  if(ntes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + ntes.value;
   }
}
function ch11(){
  var nttes=document.getElementById('yes11');
  if(nttes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + nttes.value;
   }
}
function ch12(){
  var evtes=document.getElementById('yes12');
  if(evtes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + evtes.value;
   }
}
function ch13(){
  var tvtes=document.getElementById('yes13');
  if(tvtes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + tvtes.value;
   }
}
function ch14(){
  var trtes=document.getElementById('yes14');
  if(trtes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + trtes.value;
   }
}
function ch15(){
  var frtes=document.getElementById('yes15');
  if(frtes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + frtes.value;
   }
}
function ch16(){
  var fntes=document.getElementById('yes16');
  if(fntes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + fntes.value;
   }
}
function ch17(){
  var sttes=document.getElementById('yes17');
  if(sttes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + sttes.value;
   }
}
function ch18(){
  var sntes=document.getElementById('yes18');
  if(sntes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + sntes.value;
   }
}
function ch19(){
  var entes=document.getElementById('yes19');
  if(entes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + entes.value;
   }
}
function ch20(){
  var ntntes=document.getElementById('yes20');
  if(ntntes.checked==true){
    return document.getElementById('sttxt').innerHTML +=  "," +"" + ntntes.value;
   }
}
