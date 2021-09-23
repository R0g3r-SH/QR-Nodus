
const regirterbtn = document.querySelector('#regisrterbtn');
const registermodal = document.querySelector('#registermodal');
const pagarbtn = document.querySelector('#pagarbtn');
const cancelbtn = document.querySelector('#cancelbtn');
const closebtn = document.querySelector('#closebtn');
const qrcode = document.querySelector('#qrcode');
const loader = document.querySelector('#loader');

const logo = document.querySelector('#logo');

//form
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const fechaR = document.querySelector('#fechaR');
const HoraS= document.querySelector('#HoraS');
const Serv = document.querySelector('#Serv');
const Total = document.querySelector('#Total');


pagarbtn.addEventListener('click', () => {
    generateqr();

    loader.classList.add("loader")
    setTimeout( function(){
        loader.classList.remove("loader")
        registermodal.classList.toggle('is-active')
     }, 2500);
     
});


regirterbtn.addEventListener('click', e => {
    registermodal.classList.toggle('is-active')
});

cancelbtn.addEventListener('click', () => {
    registermodal.classList.toggle('is-active')
});

closebtn.addEventListener('click', () => {
    registermodal.classList.toggle('is-active')
});

Serv.addEventListener('change',e=>{

    if(e.target.value=="Servicio A"){
        Total.innerHTML=" "
        Total.innerHTML="1,000.00"
        Total.value="1,000.00"
    }
    else if(e.target.value=="Servicio B"){
        Total.innerHTML=" "
        Total.innerHTML="40,000.00"
        Total.value="40,000.00"
    }
    else if(e.target.value=="Servicio C"){
        Total.innerHTML=" "
        Total.innerHTML="100,000.00"
        Total.value="100,000.00"
    }

})


function generateqr() {
    let size = "400x400";
    let nameval = name.value;
    let emailval =email.value;
    let fechaRval = fechaR.value;
    let HoraSval= HoraS.value;
    let SErvval= Serv.value;
    let Totalval = Total.value;

    let data = encodeURI(`Nombre: ${nameval}\nEmail:${emailval}\nFecha de recervacion: ${fechaRval}\nHora de Reservacion: ${HoraSval}\nServicio: ${SErvval}\nTotal: $${Totalval} MXN`)
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/"
    let url = `${baseURL}?data=${data}&size=${size}`
    qrcode.src = url;
}