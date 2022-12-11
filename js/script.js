const visor = document.querySelector('#vs-cronometro');
let segundo = 0;
let tmp = null;

const getTime = (time) => {
    const data = new Date(time * 1000);

    return data.toLocaleTimeString('pt-br', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
};

document.addEventListener('click', (e) => {
    const element = e.target;

    if(element.classList.contains('btn-iniciar')) {
        tmp = setInterval(function() {
            segundo++;
            visor.textContent = getTime(segundo);
            visor.classList.remove('color-visor-padrao');
            visor.classList.remove('color-visor-parar');
            visor.classList.add('color-visor-iniciar');
        }, 1000);
    }

    if(element.classList.contains('btn-parar')) {
        clearInterval(tmp);
        visor.classList.remove('color-visor-padrao');
        visor.classList.remove('color-visor-iniciar');
        visor.classList.add('color-visor-parar');
    }  
    
    if(element.classList.contains('btn-zerar')) {
        clearInterval(tmp);
        segundo = 0;
        visor.textContent = '00:00:00';
        visor.classList.remove('color-visor-parar');
        visor.classList.remove('color-visor-iniciar');
        visor.classList.add('color-visor-padrao');
    }
});