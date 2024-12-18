
<!--the alert -->
function showalert(){
    alert("Mussy and Samantha want to give you the code Fall2024 for 15% off")
}
<!--the countdown -->


const NationalNailPolishDay = new Date("Jun 1, 2025  00:00:00").getTime();

const n = setInterval(function() {
    const rightnow = new Date().getTime();
    const distance = NationalNailPolishDay - rightnow;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes until national nail polish day!!!";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
