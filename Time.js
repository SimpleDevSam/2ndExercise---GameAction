export class Time {
    actualDay=1;
    turn;
    totalDays;
    turnName;


    constructor (totalDays){
        this.actualDay = this.actualDay;
        this.totalDays = totalDays;
        this.turn = 1;
        this.turnName = "Morning";
    }
    get dailyStatus(){
        return console.log("\nDay " + this.actualDay+ " by "+ this.turnName);
    }
    dayAfter (){
        let turnName = ""
        this.actualDay = this.actualDay + 1;
        this.turn = 1;
        if (this.turn === 1) {
            turnName = "Morning";
        } else {
            turnName = "Evening";
        }

        return console.log("One day passed :) Now we're on day " + this.actualDay+" by " + turnName);
        
    }

    passTurn () {
        if (this.turn===1){
            this.turn = 2;
            this.turnName = "Evening";
    } else {
        this.turn = 1;
            this.turnName = "Morning";
    }

}
}