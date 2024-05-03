import inquirer from "inquirer"

const answers = await inquirer.prompt ([{
    message: "Enter Your weight in Kilograms:", type: "number", name: "weight"
},
{
    message: "Enter your height in Centimeters:", type: "number", name: "height"
} 
])

const convertFromCentimeterToMeters = answers.height / 100;

let calculation = answers.weight / (convertFromCentimeterToMeters * convertFromCentimeterToMeters);

console.log("Your BMI Is:", calculation);

if (calculation < 18.5) {
    console.log("Your BMi indicates that you are under-weight")
}
else if (calculation >= 18.5 && calculation < 25) {
    console.log("Your BMI indicates that you are normal weight");
}
else if (calculation >= 25  && calculation < 30){
    console.log("Your BMI indicates that you are OverWeight");
}
else{
    console.log("Your BMI indicates that you are Orbese");
}
