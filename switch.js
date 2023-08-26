const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})

/*funcion del menu*/
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}