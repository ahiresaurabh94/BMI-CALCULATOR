function calculateBMI(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    let age = parseInt(document.querySelector("#age").value)

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);


    if(age < 2 || age > 120){
        
        result.innerHTML = `Please provide an age between 2 and 120`;
    }
    else if (weight === NaN){
        result.innerHTML = 'Positive numbers only'
    }
    else{
        if (bmi < 16){
            result.innerHTML = `BMI = ${bmi} (Severe Thinness)`;
        }
        else if ( (bmi >= 16) && (bmi < 17) ){
            result.innerHTML = `BMI = ${bmi} (Moderate Thinness)`;
        }
        else if ( (bmi >= 17) && (bmi < 18.5) ){
            result.innerHTML = `BMI = ${bmi} (Mild Thickness)`;
        }
        else if ( (bmi >= 18.5) && (bmi < 25) ){
            result.innerHTML = `BMI = ${bmi} (Normal)`;
        }
        else if ((bmi >= 25) && (bmi < 30) ){
            result.innerHTML = `BMI = ${bmi} (Overweight)`;
        }
        else if ( (bmi >= 30) && (bmi < 35) ){
            result.innerHTML = `BMI = ${bmi} (Obese Class I)`;
        }
        else if ( (bmi >= 35) && (bmi < 40) ){
            result.innerHTML = `BMI = ${bmi} (Obese Class II)`;
        }
        else if (bmi > 40){
            result.innerHTML = `BMI = ${bmi} (Obese Class III)`;
        }
    }
}
