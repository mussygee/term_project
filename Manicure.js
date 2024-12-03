


const regularPrice = 25;
const gelPrice = 35;
const powderPrice = 45;
const hardgelPrice = 60;
const russiangelPrice = 45;



document.getElementById("regular").onchange = TotalCost;
document.getElementById("gel").onchange = TotalCost;
document.getElementById("powder").onchange = TotalCost;
document.getElementById("hardgel").onchange = TotalCost;
document.getElementById("russiangel").onchange = TotalCost;

document.getElementById("design").onchange = TotalCost;
document.getElementById("french").onchange = TotalCost;
document.getElementById("gems").onchange = TotalCost;
document.getElementById("tips").onchange =  TotalCost;

document.getElementById("massageminutes").onchange =  TotalCost;




function TotalCost() {
    let manicuretypecost  = 0;
    let addonPrice = 0;
    let massagecost= 0;

    if (document.getElementById("design").checked) addonPrice += 10;
    if (document.getElementById("french").checked) addonPrice += 10;
    if (document.getElementById("gems").checked) addonPrice += 7;
    if (document.getElementById("tips").checked) addonPrice += 5;


    let Regularamount = parseInt(document.getElementById("regular").value) || 0;
    let Gelamount = parseInt(document.getElementById("gel").value)|| 0;
    let Powderamount = parseInt(document.getElementById("powder").value)|| 0;
    let HardGelamount = parseInt(document.getElementById("hardgel").value)|| 0;
    let RussianGelamount = parseInt(document.getElementById("russiangel").value)|| 0;
    manicuretypecost = (Regularamount * regularPrice) + (Gelamount * gelPrice) + (Powderamount * powderPrice) + (HardGelamount * hardgelPrice) + (RussianGelamount * russiangelPrice);

    let massageminute = parseInt(document.getElementById("massageminutes").value) || 0;
    massagecost = massageminute;

    let totalcost = manicuretypecost + addonPrice + massagecost;
document.getElementById("cost").innerText =  "$" + totalcost;


}








