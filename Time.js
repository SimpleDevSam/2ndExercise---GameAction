export class Time {
    actualDay=1;
    turn;
    totalDays;

    constructor (totalDays){
        this.actualDay = this.actualDay;
        this.totalDays = totalDays
        this.turn = 1
    }

    dayAfter (){
        
        this.day = this.day + 1;
        this.turn = 1;
        if (this.turn === 1) {
            let turnName = "Morning";
        } else {
            let turnName = "Evening";
        }

        return console.log("One day passed :) Now we're on day " + this.day+" by " + turnName);
        
    }

    passTurn () {
        this.turn = 2;
    }

}