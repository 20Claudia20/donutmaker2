const donutImage = document.querySelector("img");
const donutCountSpan = document.querySelector(".donut-count");
const autoClickerCostSpan = document.querySelector(".auto-clicker-cost");
const autoClickerCountSpan = document.querySelector(".auto-clicker-count");
const multiplierCostSpan = document.querySelector(".multiplier-cost");
const multiplierCountSpan = document.querySelector(".multiplier-count");
const donutClicker = new Donut();
const buyAutoClickerButton = document.querySelector('.buy-auto-clickers');

donutImage.addEventListener("click", () => {
  donutClicker.addDonut();
  donutCountSpan.innerText= donutClicker.donutCount;
});

activateAutoClicker(){
    setInterval ( () => {
        donutClicker.donutCount += donutClicker.autoClickerCount;
        donutCountSpan.innerText= donutClicker.donutCount;
    } , 1000 )
}


