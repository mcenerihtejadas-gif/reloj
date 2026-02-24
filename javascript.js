
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

function actualizarReloj() {
    let dia = new Date();
    
    let hh = dia.getHours();
    let mm = dia.getMinutes();
    let ss = dia.getSeconds();

    let hr_rotation = (30 * hh) + (mm / 2); 
    let min_rotation = 6 * mm;
    let sec_rotation = 6 * ss;

    hr.style.transform = `translateX(-50%) rotate(${hr_rotation}deg)`;
    mn.style.transform = `translateX(-50%) rotate(${min_rotation}deg)`;
    sc.style.transform = `translateX(-50%) rotate(${sec_rotation}deg)`;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();