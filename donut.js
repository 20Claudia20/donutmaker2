class Donut {
  constructor() {
    this.donutCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
    this.multiplierCount = 0;
    this.multiplierCost = 10;
  }

  addDonut() {
    this.donutCount += Math.pow(1.2, this.multiplierCount);
  }

  buyAutoClicker(){
      if (this.donutCount >= this.autoClickerCost){
          this.donutCount -= this.autoClickerCost;
          this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
          this.autoClickerCount += 1;
      }
  }

  buyMultiplier(){
        if (this.donutCount >= this.multiplierCost){
            this.donutCount -= this.multiplierCost;
            this.multiplierCost = Math.round(this.multiplierCost * 1.1);
            this.multiplierCount += 1;
        }
  }

}
