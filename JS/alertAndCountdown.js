
<!--the alert -->
function showalert(){
    alert("Mussy and Samantha want to give you the code Fall2024 for 15% off")
}
<!--the countdown -->
const NationalNailPolishDay = new Date("Jun 1, 2025 00:00:00").getTime();

const n = setInterval(function() {
    const rightnow = new Date().getTime();
    const distance = NationalNailPolishDay - rightnow;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = days + " days until National Nail Polish Day!!!";


  if (distance < 0) {
    clearInterval(n);
    document.getElementById("demo").innerHTML = "It is National Nail Polish Day";
  }
}, 1000);




