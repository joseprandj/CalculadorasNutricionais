
function calcIMC() {
    let pushPeso = document.getElementById('peso').value;
    let pushAltura = document.getElementById('altura').value;
    pushAltura = pushAltura**2;
    let calc = (pushPeso / pushAltura).toFixed(2);

    let resultText = document.getElementById('resultIMC');
    resultText.innerHTML = `<p> Seu IMC: ${calc} Kg/m² </p>`

    if(calc < 18.5){
        resultText.innerHTML += `<p> Classificação: Abaixo do Peso</p>`
    }
        else if(calc < 24.9){
        resultText.innerHTML += `<p> Classificação: Normal</p>`
        }

        else if(calc < 29.9){
            resultText.innerHTML += `<p> Classificação: Sobrepeso</p>`
        }

        else if(calc < 34.9){
            resultText.innerHTML += `<p> Classificação: Obesidade I</p>`
        }

        else if(calc < 39.9){
            resultText.innerHTML += `<p> Classificação: Obesidade II</p>`
        }

        else if(calc >= 40){
            resultText.innerHTML += `<p> Classificação: Obesidade III ou Mórbida</p>`
        }
        
    for(i=false; i == pushPeso; true){
        resultText.innerHTML = `<p> Por favor, digite o Peso e a Altura</p>`
        break
    }

    for(i=false; i == pushAltura; true){
        resultText.innerHTML = `<p> Por favor, digite o Peso e a Altura</p>`
        break
    }

};

function calcTMB() {
    const age = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    let peso = document.getElementById('pesoTMB').value
    let resultText = document.getElementById('resultTMB');
    
    if(sexo == "M" && age == "crianca1"){
       let calc = ((60.9*peso)-54).toFixed(2)
        resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`  
    }
        else if (sexo == "M" && age == "crianca2"){
            let calc = ((22.7*peso)+495).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "M" && age == "adolescente"){
            let calc = ((17.5*peso)+651).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "M" && age == "adulto1"){
            let calc = ((15.3*peso)+679).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "M" && age == "adulto2"){
            let calc = ((11.6*peso)+879).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "M" && age == "idoso"){
            let calc = ((13.5*peso)+487).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }

    if(sexo == "F" && age == "crianca1"){
        let calc = ((61*peso)-51).toFixed(2)
        resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`  
    }
        else if (sexo == "F" && age == "crianca2"){
            let calc = ((22.5*peso)+499).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "F" && age == "adolescente"){
            let calc = ((12.2*peso)+746).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "F" && age == "adulto1"){
            let calc = ((14.7*peso)+496).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "F" && age == "adulto2"){
            let calc = ((8.7*peso)+829).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }
        else if (sexo == "F" && age == "idoso"){
            let calc = ((10.5*peso)+596).toFixed(2)
            resultText.innerHTML = `<p> Sua TMB: ${calc} Kcal/dia</p>`
        }

    for(i=false; i == peso; 0){
        resultText.innerHTML = `<p> Por favor, digite o Peso </p>`
        break
    }
};

function addItemList() {
    let atf = document.getElementById('nameAtf').value;
    let time = document.getElementById('timeAtf').value;
    let intense = document.getElementById('intenseAtf');
    let option = intense.children[intense.selectedIndex];
    let texto = option.textContent; 
    let addList = document.getElementById('tableAtf');
    let templatAtf= `<tr>
                        <td>${atf}</td>
                        <td name="timeHors">${time}</td>
                        <td name="intensidade" headers="${intense.value}">${texto}</td>
                        <td><img onclick="deleteListItem(this.parentNode.parentNode.rowIndex)" src="./assets/trashIcon.svg"></td>
                    </tr>`;

    if(atf,time == 0){
        let tableErro = document.getElementById('tableErro');
        tableErro.innerHTML= `<p>Por favor, preencha todos os campos</p>`
    } else{
        tableErro.innerHTML = null;
        addList.innerHTML += templatAtf;
    }
    
}

function deleteListItem(i) {
    document.getElementById('tableAtf').deleteRow(i);
};

function calcFat() {
    let intense = document.getElementsByName('intensidade');
    let number = document.getElementsByName('timeHors');
    let total = 0;
    for(i=0; i<number.length; i++){
        total += parseFloat( (number[i].innerText)) * parseFloat ( (intense[i].headers))
        console.log(total);
    };

    let hoursDay = (total/24).toFixed(2);
    let resultFat = document.getElementById('resultAtf');
    resultFat.innerHTML = `<p> Seu FAT: ${hoursDay}</p>`

    if(hoursDay<=0){
        resultFat.innerHTML = `<p>Por favor, preencha a tabela corretamente</p>`
    }
};

function calcGET() {
    let pushTMB = document.getElementById('getTMB').value;
    let pushFAT = document.getElementById('getFAT').value;
    let calcGET = (pushTMB * pushFAT)
    let resultGET = document.getElementById('resultGET');

    if(calcGET == 0){
        resultGET.innerHTML = `<p>Por favor, digite a TMB e o FAT.</p>`
    }
    else(
        resultGET.innerHTML = `
        <p>Seu GET: ${calcGET.toFixed(2)} Kcal/dia</p>
        <div class='perdarEganho'>
        <h1>Manter Peso: ${(calcGET).toFixed(2)} Kcal/dia</h1>
        </div>
        <div class='perdarEganho'>
            <h1>Para Perder Peso:</h1>
            <p> 1 Kg/mês: ${(calcGET-256).toFixed(2)} Kcal/dia</p>
            <p> 2 Kg/mês: ${(calcGET-512).toFixed(2)} Kcal/dia</p>
            <p> 3 Kg/mês: ${(calcGET-768).toFixed(2)} Kcal/dia</p>
            <p> 4 Kg/mês: ${(calcGET-1024).toFixed(2)} Kcal/dia</p>
        </div>
        <div class='perdarEganho'>
            <h1>Para Ganhar Peso:</h1>
            <p> 1 Kg/mês: ${(calcGET+256).toFixed(2)} Kcal/dia</p>
            <p> 2 Kg/mês: ${(calcGET+512).toFixed(2)} Kcal/dia</p>
            <p> 3 Kg/mês: ${(calcGET+768).toFixed(2)} Kcal/dia</p>
            <p> 4 Kg/mês: ${(calcGET+1024).toFixed(2)} Kcal/dia</p>
        </div>`
    )
    
};

function calcH2O() {
    let peso = document.getElementById('pesoH2O').value;
    let calc = parseFloat((peso*35)/1000).toFixed(1)
    let resultText = document.getElementById('resultH2O');
   
    resultText.innerHTML = `<p> Consumir: ${calc} Litros/dia</p>`

    if (calc<2){
        resultText.innerHTML = `<p> Consumo Mínimo: 2 Litros/dia</p>`
    }

    for(i=false; i == peso; true){
        resultText.innerHTML = `<p> Por favor, digite o Peso </p>`
        break
    }
    
}

function backTop() {
    const backTop = document.getElementById("backTop");
    backTop.addEventListener('click', () => window.scrollTo({top, behavior: "smooth"}));
};

