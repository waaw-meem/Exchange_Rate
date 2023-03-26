// Target DOM Element
const currencyOne = document.getElementById('currency-one')
const currencyTwo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const flipValue = document.getElementById('flip');
const rate = document.getElementById('rate');


// Function for Calculate
function calculate(){
    const currencyCodeOne = currencyOne.value;
    const currencyCodeTwo = currencyTwo.value;

    console.log(currencyCodeOne,currencyCodeTwo)

    // Fetch API
    fetch(`https://v6.exchangerate-api.com/v6/6904b92c9e28161376839bd3/pair/${currencyCodeOne}/${currencyCodeTwo}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    
    //  amountOne = data.conversion_rate;
    console.log(amountOne.value*(data.conversion_rate))
    amountTwo.value = amountOne.value*(data.conversion_rate).toFixed(2)
    let amountTwoValue = amountTwo.value
       console.log(amountTwoValue)
       rate.innerText = `${currencyCodeOne} ${amountOne.value} = ${currencyCodeTwo} ${amountTwoValue}`
   //  const currencyNumberFormat = new Intl.NumberFormat('en-US')
   //  amountTwo.value = currencyNumberFormat.format()
    })

}

// Event Listener

// Recalculate exchange rate when amount and rate change for one
currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
// Recalculate exchange rate when amount and rate change for two
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)

// Click Event for swaping code 
flipValue.addEventListener('click', () =>{
   const temp = currencyOne.value;
   currencyOne.value = currencyTwo.value;
   currencyTwo.value = temp;

   calculate()

})

// Calling function
calculate()

