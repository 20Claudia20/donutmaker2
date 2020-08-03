const donutClicker = new Donut();
const donutImage = document.querySelector("img");
const donutCountSpan = document.querySelector(".donut-count");
const autoClickerCostSpan = document.querySelector(".auto-clicker-cost");
const autoClickerCountSpan = document.querySelector(".auto-clicker-count");
const multiplierCostSpan = document.querySelector(".multiplier-cost");
const multiplierCountSpan = document.querySelector(".multiplier-count");
const buyAutoClickerButton = document.querySelector(".buy-auto-clicker");
const buyMultiplierButton = document.querySelector(".buy-multiplier");
const resetButton = document.querySelector(".reset");

donutImage.addEventListener("click", () => {
  donutClicker.addDonut();
  donutCountSpan.innerText = Math.round (donutClicker.donutCount);
});

setInterval(() => {
  donutClicker.donutCount += donutClicker.autoClickerCount * Math.pow(1.2, donutClicker.multiplierCount);
  donutCountSpan.innerText = Math.round (donutClicker.donutCount);
}, 1000);

buyAutoClickerButton.addEventListener("click", () => {
  donutClicker.buyAutoClicker();
  donutCountSpan.innerText = Math.round (donutClicker.donutCount);
  autoClickerCountSpan.innerText = donutClicker.autoClickerCount;
  autoClickerCostSpan.innerText = donutClicker.autoClickerCost;
});

buyMultiplierButton.addEventListener("click", () => {
  donutClicker.buyMultiplier();
  donutCountSpan.innerText = Math.round (donutClicker.donutCount);
  multiplierCostSpan.innerText = donutClicker.multiplierCost;
  multiplierCountSpan.innerText = donutClicker.multiplierCount;
});

resetButton.addEventListener("click", () => {
    location.reload();
})


