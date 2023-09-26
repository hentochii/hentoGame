let score = 0
let updating = 1
function if1 () {
  if (score < -1) {
 alert("Вы проиграли, так-как вы превысили лимит кредита");
 location.reload()
 }
 }
monsterImg.onclick=function() { 
score = score + updating;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}


btnLvl1.onclick=function update() {
  updating += 1;
  score = score - 100; document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  document.getElementsByTagName("h2")[0].firstChild.data = 'Level : ' + updating;
  if1();
 }

btnLvl2.onclick=function update1() {
  score = score - 150;
  updating += 2;
   document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
   document.getElementsByTagName("h2")[0].firstChild.data = 'Level : ' + updating;
  if1();

  }

  btnLvl3.onclick=function update2() {
    score = score - 250;
    updating += 3;
     document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
     document.getElementsByTagName("h2")[0].firstChild.data = 'Level : ' + updating;
    if1();
  
    }

    btnLvl4.onclick=function update3() {
      score = score - 500;
      updating += 10;
       document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
       document.getElementsByTagName("h2")[0].firstChild.data = 'Level : ' + updating;
      if1();
    
      }
      function plusauto () {
        score += updating;
        document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
        setTimeout("auto1()", 1000);
       }
       function auto1 () {
        score += updating;
        setTimeout("plusauto()", 1000);
        document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
       }
      btnAuto.onclick=function auto() {
        score = score - 10000;
        document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
        if1();
         setTimeout("plusauto()", 1000);
        }

