/* 
Program Name:   Fruit Benefits
Developer:      Royal Raynold
Date:           30th November, 2022
FileType:       JavaScript
*/
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const mName = document.getElementById("name");
const fruit = document.getElementById("fruit");
const mText = document.getElementById("text");
let element = document.body;

let pos = 0;
const fruitList = [
    {
        fPath: "./img/Red-Apple.png",
        fImg: "Apple",
        fName: "Apples are an incredibly nutritious fruit that offers multiple health benefits. They're rich in fiber and antioxidants. Eating them is linked to a lower risk of many chronic conditions, including diabetes, heart disease, and cancer. Apples may also promote weight loss and improve gut and brain health.",
        bgColor: "red"
    },
    {
        fPath: "./img/Orange.png",
        fImg: "Orange",
        fName: "Oranges are a nutritional powerhouse, packed with vitamins and minerals. The most noteworthy of these is vitamin C, a water-soluble antioxidant that prevents cell damage.",
        bgColor: "orange"
    },
    {
        fPath: "./img/Black-Grapes.png",
        fImg: "Grapes",
        fName: "A diet that is rich in fruits and vegetables has been linked to a reduced risk of various conditions, including heart disease, diabetes, cancer, and obesity. Like other fruits and vegetables, grapes are a good source of fiber and water",
        bgColor: "purple"
    },
    {
        fPath: "./img/Banana.png",
        fImg: "Bananas",
        fName: "Potassium in bananas helps the body to flush out extra sodium in the urine, and eases tension in blood vessel walls. Bananas, rich in potassium and fiber and low in sodium, are an important component of heart-healthy diets like DASH (Dietary Approaches to Stop Hypertension) that aims for about 4,700 mg dietary potassium daily.",
        bgColor: "yellow"
    },
    {
        fPath: "./img/watermelon-clipart.png",
        fImg: "Watermelon",
        fName: "Watermelons are rich in an amino acid called citrulline that may help move blood through your body and can lower your blood pressure. Your heart also enjoys the perks of all the lycopene watermelon contains. Studies show that it may lower your risk of heart attacks.",
        bgColor: "lred"
    }
]

btnLeft.addEventListener("click", () =>{
    if(pos > 0){
        pos -= 1;
        element.classList.remove(fruitList[pos+1].bgColor);
        element.classList.add(fruitList[pos].bgColor);
        Refresh();
    }
});

btnRight.addEventListener("click", () =>{
    if(pos < fruitList.length-1){
        pos += 1;
        element.classList.remove(fruitList[pos-1].bgColor);
        element.classList.add(fruitList[pos].bgColor);
        Refresh();
    }
});
function Refresh(){
    fruit.src = fruitList[pos].fPath;
    mName.innerText = fruitList[pos].fImg;
    mText.innerText = fruitList[pos].fName;
}