
async function foo() {
    let userInput = await document.getElementById('user-Input').value;
    console.log(userInput);

    let covidCountry = await fetch(`https://api.covid19api.com/dayone/country/${userInput}`);
    let covidCountryData = await covidCountry.json();

    for(let i = 0; i < covidCountryData.length; i++){
        let covidConfirmed = covidCountryData[i].Confirmed;
        let covidCountryCode = covidCountryData[i].CountryCode;
        let covidDate = covidCountryData[i].Date;
        let covidRecovered = covidCountryData[i].Recovered;
        let covidDeath = covidCountryData[i].Deaths;
        console.log(`Country: ${userInput}
                     Country Code: ${covidCountryCode}
                     Date: ${covidDate}
                     Confirmed Cases: ${covidConfirmed}
                     Recovered Cases: ${covidRecovered}
                     Deaths: ${covidDeath}`);
        let div = document.createElement('div');
        div.innerHTML = `Country: ${userInput} <br>
        Country Code: ${covidCountryCode} <br>
        Date: ${covidDate} <br>
        Confirmed Cases: ${covidConfirmed} <br>
        Recovered Cases: ${covidRecovered} <br>
        Deaths: ${covidDeath} <br> <hr>`
        document.body.append(div);
    }
    
}
