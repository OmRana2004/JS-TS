const form = document.querySelector('form')

form.addEventListener('submit', ((e) => {
    e.preventDefault()

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
}else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
} else {
    const bmi = weight / ((height * height) / 10000);
    let category;

    if (bmi < 18.6) {
        category = 'UNDERWEIGHT';
    } else if (bmi <= 24.9) {
        category = 'NORMAL WEIGHT';
    } else {
        category = 'OVERWEIGHT';
    }

    results.innerHTML = `<span>BMI: ${bmi.toFixed(2)} — ${category}</span>`;
}

}))


