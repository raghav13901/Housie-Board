var no=[];
var count =0;
function getNumber(){
  if(count!=90){
  var randomNumber = Math.ceil(Math.random()*90);
  if(!(no.includes(randomNumber))){
    no.push(randomNumber);
    $("td.notSelect")[randomNumber-1].style.color="white";
    $(".1").html("");
    $(".2").html("");
    $(".3").html("");
    $("h1").html($("td.notSelect")[randomNumber-1].textContent);
    count++;
    var x = $("td.notSelect")[randomNumber-1].textContent;
    switch(x){
      case '5' : $(".2").html("Star");break;
      case '6' : $(".2").html("Sixer!!!");break;
      case '7' :{ $(".2").html("007 James");
                  $(".3").html("Bond");
                  break;
                }
      case '10' : {$(".2").html("Dus");
                   $(".3").html("Numbri");
                   break;
                  }
      case '13' : $(".2").html("Unlucky 13");break;
      case '14' : {$(".2").html("Valentine's");
                   $(".3").html("Day");
                   break;
                  }
      case '16' : $(".2").html("Sweet 16");break;
      case '17' : $(".2").html("KHATRA!");break;
      case '55' : {$(".2").html("Umar 55");
                   $(".3").html("❤ Bachpan");
                   break;
                  }
      case '80' : {$(".2").html("Bhudapa");
                   $(".3").html("👴👵");
                   break;
                  }
      case '90' : $(".2").html("Temp-High!");break;
      default :   {$(".2").html("");
                  $(".3").html("");
                }
               }
  }else{
    getNumber();
  }
  }else{
    $(".1").html("Thank you");
    $(".2").html("For");
    $(".3").html("Playing");
    $("h1").html("");
    $(".btn").toggle();
  }
}

function reset(){
  $("td.notSelect").css("color","#284184");
  $(".1").html("Click");
  $(".2").html('"Number"');
  $(".3").html("to Start.");
  $(".btn").toggle();
  count=0;
  no=[];
}
window.onbeforeunload = function() {
  return "You will lost your all unsaved data";
};
