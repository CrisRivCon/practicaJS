const ctx = document.getElementById('myChart');
var chartBtn = document.getElementById('crearGrafica');
var inputNum = document.getElementById('inputNumber');

function random (min, max){ //funcion para crear los numeros aleatorios.
    return Math.floor(Math.random() * (max - min) + min);
};
//funcion para crear array para labels del rango del numero de valores.
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
        

chartBtn.addEventListener('click', event =>{
    let arrayLength = Number(inputNum.value);
    if(arrayLength<=20&&arrayLength>=5){
        if (window.data) { //limpiar la grafica.
            window.data.clear();
            window.data.destroy();
        };
        let dataNum=[];  

        let labels = range(1, arrayLength, 1);

        for (let n = 0; n<=arrayLength;n++){ //crear array de num aleatorios.
            let randomNum = random(1, 100);
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