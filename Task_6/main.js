const calculate = () => {
    const inputwork1 = parseInt(document.querySelector('#work-1').value);
    const inputwork2 = parseInt(document.querySelector('#work-2').value);
    const inputwork3 = parseInt(document.querySelector('#work-3').value);
    const inputwork4 = parseInt(document.querySelector('#work-4').value);
    const inputcost1 = parseInt(document.querySelector('#cost-1').value);
    const inputcost2 = parseInt(document.querySelector('#cost-2').value);
    const inputcost3 = parseInt(document.querySelector('#cost-3').value);
    const inputcost4 = parseInt(document.querySelector('#cost-4').value);

if ( isNaN(inputwork1) || isNaN(inputwork2) || isNaN(inputwork3) || isNaN(inputwork4) || isNaN(inputcost1) || isNaN(inputcost2) || isNaN(inputcost3) || isNaN(inputcost4)){
    alert("Заполните все поля");
    return;
}

let constSum = inputcost1 + inputcost2 + inputcost3 + inputcost4;
let WorkSum = (inputwork1 * inputcost1) + (inputwork2 * inputcost2) + (inputwork3 * inputcost3) + (inputwork4 * inputcost4);

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
<p>Общее количество работ: ${constSum}<p>
<p>Общая стоимость работ: ${WorkSum}<p>
`;
}