const ctx = document.getElementById('myChart');
let chartBtn = document.getElementById('crearGrafica');
let inputNum = document.getElementById('inputNumber');
let mediaCard = document.getElementById('media_card');
let mediaCardBody = document.getElementById('media_card_body');
let arrayLength;
let dataNum=[]; 
let labels=[];

let randomNum;

const random =  (min, max) => { //funcion para crear los numeros aleatorios.
    return Math.floor(Math.random() * (max - min) + min);
};
const media=()=>{
    let suma = 0;
    let numValores = arrayLength;
    for (const key in labels) {
        suma += dataNum[key];
    };
    return (suma/numValores);
 };
//funcion para crear array para labels del rango del numero de valores.
//const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
//labels = range(1, arrayLength, 1);
//for (let n = 0; n<=arrayLength;n++){ //crear array de num aleatorios.
    //    let randomNum = random(1, 100);
    //    dataNum.push(randomNum);
//};

chartBtn.addEventListener('click', event =>{
    arrayLength = Number(inputNum.value);
    if(arrayLength<=20&&arrayLength>=5){
        if (window.data) { //limpiar la grafica.
            dataNum = [];
            labels=[];
            window.data.clear();
            window.data.destroy();
        }; 

        for (let n = 0; n<=arrayLength;n++){
            labels.push(n)
        };

        for (const key in labels){ //asignar valores aleatorios
            randomNum = random(1, 100);
            dataNum.push(randomNum);
        };

        window.data = new Chart (ctx, { //crear grafica
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Valores',
                    data: dataNum,
                    fill: false,
                    borderColor: '#17a2b8',
                    tension: 0.1
                }]
            },
        });
        mediaCardBody.innerHTML=`La media de valores es: ${media().toFixed(2)}`;
        mediaCard.classList.remove('d-none');
        mediaCard.classList.add('d-block');

    }else{ //alerta de numero fuera de rango.
        let invalidNum = document.getElementById('invalid_num_text');
        invalidNum.classList.remove('d-none');
        invalidNum.classList.add('d-block');
        inputNum.classList.add('is-invalid');
        setTimeout(function(){
            invalidNum.classList.remove('d-block');
            invalidNum.classList.add('d-none');
            inputNum.classList.remove('is-invalid');
        }, 2000);
    };
});