const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault() //form ki value server pr na chali jae is leay hum is ko roktay hain k hum nay apna abhi kam krna hay

    const height = parseInt(document.querySelector('#height').value) //because we get the value in the string
    const weight = parseInt(document.querySelector('#weight').value) //because we get the value in the string
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight} `
    } else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        //show in the result
        results.innerHTML = `<span>${BMI}</span>`
        const newDiv = results.insertAdjacentElement('afterend',document.createElement('div'))
        if(BMI <  18.6){
            newDiv.innerHTML = "Under Weight"
        }else if(BMI == 18.6 || BMI <= 24.9){
            newDiv.innerHTML = "Normal Range"
        }else if(BMI > 24.9){
            newDiv.innerHTML = "Overweight"
        }
    }

})