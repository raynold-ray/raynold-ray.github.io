/* 
Program Name:   Dictionary App
Developer:      Royal Raynold
Date:           5th December, 2022
FileType:       JavaScript  
*/
const btnSearch = document.getElementById("btnSearch");
const sWord = document.getElementById("sWord");
const inf = document.getElementById("inf");
const definition = document.getElementById("definition");
const speak = document.getElementById("speak");
const result = document.getElementById("result");
const Example = document.getElementById("example");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let snd = document.createElement("audio");
let firstDef = "";
let firstEg = "";
let sString1 = "";
let sString12 = "";

btnSearch.addEventListener("click", () => {
    let Word = document.getElementById("word").value;

    //Get data 
    fetch(`${url}${Word}`).then((response) => response.json()).
    then((data) => {
        Example.style.background = "#fafafa";
        speak.style.color = "#ff6f6f";
        document.getElementById("word").value = "";
        inf.innerText = data[0].meanings[0].partOfSpeech + " " + data[0].phonetic;
        sWord.innerText = Word;

        firstDef = "1. " + data[0].meanings[0].definitions[0].definition;

        //Check for undefined values
        if(data[0].meanings[0].definitions[0].example == undefined){
            firstEg = "";
        }else{
            firstEg = "~ " + data[0].meanings[0].definitions[0].example;
        }
        if(data[0].meanings.length > 1){
            for(i = 1; i < data[0].meanings.length; i++){
                firstDef = firstDef + "\n" + parseInt(i+1) +". " + data[0].meanings[i].definitions[0].definition;
                //Check for undefined values
                if((data[0].meanings[i].definitions[0].example) == undefined){
                    firstEg = "";
                }else{
                    firstEg = firstEg + "\n" + "~ " + data[0].meanings[i].definitions[0].example || "";
                }
            }
            definition.innerText = firstDef
            Example.innerText = firstEg;
        }else{
            definition.innerText = firstDef
            Example.innerText = firstEg
        }
        snd.setAttribute("src", data[0].phonetics[0].audio);
        console.log(data[0].meanings[0].definitions[0].example);
        if(result.classList.contains("hidden")){
            result.classList.toggle("hidden")
        };
    }).catch( () => {
        if(result.classList.contains("hidden")){
            result.classList.toggle("hidden")
        };
        sWord.innerText = "Word Not Found!";
        inf.innerText = "";
        definition.innerText = "";
        Example.innerText = "";
        Example.style.background = "#fff";
        speak.style.color = "#fff";
    });
    firstDef = "";
    firstEg = "";
    sString1 = "";
    sString12 = "";
})
function play(){
    snd.play();
}