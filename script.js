const maleOption = document.getElementById('male')
const femaleOption = document.getElementById('female')
const genderInput = document.getElementById('gender')
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const submitBtn = document.getElementById('submit')
const result = document.getElementById('result')

function genderChange(gender) {
    genderInput.value = gender

    if (gender === 'male') {
        maleOption.classList.add("active")
        femaleOption.classList.remove('active')
    }

    else {
        maleOption.classList.remove("active")
        femaleOption.classList.add('active')
    }

    console.log(genderInput.value)
}



maleOption.addEventListener('click', () => {
    genderChange('male')
})

femaleOption.addEventListener('click', () => {
    genderChange('female')
})

function calculateBmi() {
    const bmi =Math.round (10000 * weightInput.value / (heightInput.value * heightInput.value));
    const gender = genderInput.value
    if (gender === 'male') {
        if(bmi < 20){
            result.innerHTML = `BMI kamu kurang ${bmi} , berat badan kamu kurang :(`
        } else if (bmi > 20 && bmi <= 25.9) {
            result.innerHTML =  `BMI kamu ${bmi} , berat badan kamu ideal :D`
        } else {
            result.innerHTML =  `BMI kamu kelebihan ${bmi} , berat badan kamu berlebihan!`
        }
    } else {
        if(bmi < 18.5){
            result.innerHTML = `BMI kamu kurang ${bmi} , berat badan kamu kurang :(`
        } else if (bmi > 18.5 && bmi <= 24.9) {
            result.innerHTML =  `BMI kamu ${bmi} , berat badan kamu ideal :D`
        } else {
            result.innerHTML =  `BMI kamu kelebihan ${bmi} ,berat badan kamu berlebihan!`
        }
    }

    
}

submitBtn.addEventListener('click', (Event) => {
    Event.preventDefault()
    if(!genderInput.value || !heightInput.value || !weightInput.value){
        alert('Isis semua data terlebih dahulu!')
        return
    }
    calculateBmi()
    
})