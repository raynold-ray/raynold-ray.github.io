/* 
Program Name:   Word Counter
Developer:      Royal Raynold
Date:           15th October, 2022
FileType:       JavaScript
*/
function CountVowels(){
    var String = document.getElementById("SomeText").value;
    let vcount = 0;
    let ccount = 0;
    let wcount = 0;
    let xx = 0;
    let spaces = 0;
    let j = 0;
    String = String.toLowerCase();
    let String2 = String;
    for(let i = 0; i<String.length; i++){
      if("aeiou".indexOf(String[i])>-1){
        vcount += 1;
      }else if("bcdfghjklmnpqrstvwxyz".indexOf(String[i])>-1){
        ccount += 1;
      }else{
        if(String[i] === " "){
          spaces += 1;
        }else{
            xx += 1;
            String2 = String2.replace(String[i], " ")
        }
      }
    }
    String2 = String2.replace(/\s+/g, " ").trim();
    String2 = String2.split(" ");
    for (let i = 0; i < String2.length; i++){
      if (String2[i] === ""){
        String2.splice(i, 1);
      }
    }
    //alert(String2);
    document.getElementById("wordCount").innerHTML = String2.length;
    document.getElementById("xsterCount").innerHTML = String.length;
    document.getElementById("vowels").innerHTML = vcount;
    document.getElementById("consonants").innerHTML = ccount;
    document.getElementById("xster").innerHTML = xx;
    document.getElementById("spaces").innerHTML =  spaces;
  }
l