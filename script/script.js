let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let res = document.querySelector("#res");
let addBtn5 = document.querySelector("#add5");
let addBtn10 = document.querySelector("#add10");
let addBtn15 = document.querySelector("#add15");
let addBtn20 = document.querySelector("#add20");

addBtn5.onclick = proc5;
addBtn10.onclick = proc10;
addBtn15.onclick = proc15;
addBtn20.onclick = proc20;
let sum;


function proc5() {
    Math.ceil(((Number(input1.value) * 5) / 100 * Number(input2.value)))
    res.textContent = "Сумма на каждого по: " + sum + " грн";
    showTime();
    console.log(res.textContent)
}

function proc10() {
    Math.ceil(((Number(input1.value) * 10) / 100 * Number(input2.value)))
    res.textContent = "Сумма на каждого по: " + sum + " грн";
    showTime();
}

function proc15() {
    Math.ceil(((Number(input1.value) * 15) / 100 * Number(input2.value)))
    res.textContent = "Сумма на каждого по: " + sum + " грн";
    showTime();
}

function proc20() {
    Math.ceil(((Number(input1.value) * 20) / 100 * Number(input2.value)))
    res.textContent = "Сумма на каждого по: " + sum + " грн";
    showTime();
}

showTime = () => {
    res.className = ("new");
    setTimeout(function () { res.className = res.className.replace("new", ""); }, 3000);
}
