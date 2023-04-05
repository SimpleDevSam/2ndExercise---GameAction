//Importing librarys and classes

import prompt from 'prompt-sync';
import { Player } from "./Player.js";
import { Time } from "./Time.js";

const input = prompt();

//Printing welcome

console.log("Welcome to the Daily Workout Simulator!\n---------------------------------------");
console.log("For start, we're gonna need you to enter your info's below:");

//Getting user values and validating the shape options

let validShapeInput = true;

let name = input("Your name:");
let age = input("Your age:");
console.log("Please type your current shape:\n [T] to 'Thin'\n [M] to 'Medium'\n [L] to 'Large'");
let shape = input("Type here:").toString().toUpperCase();

if (shape !== "M" && shape!== "T" && shape!=="L"){
    validShapeInput = false;
}

while (validShapeInput===false) {
    console.log("You haven't typed correctly, please type as below:\n [T] to 'Thin'\n [M] to 'Medium'\n [L] to 'Large'");
    let shape = input("Type here:").toString().toUpperCase();
    if (shape !== "M" && shape!== "T" && shape!=="L"){
        validShapeInput = false;
    } else{
        validShapeInput = true;
    }
    
}

//Creating player1 and time objects

const player1 = new Player (name,age,shape);

const daysSimulated = Number(input("Now, plase enter here how many days do you wanna simulate?"));

const timePassing = new Time(daysSimulated);

console.log("Good Job! Let's get started!");

console.log("You're gonna have 2 oportunities per day to pick some training, the training will be:\n");
console.log("Arms | Chest | Glutes | Legs\n");
console.log("Based on what was your choice, you're gonna be stronger!");

//Starting the game based on how many days will be

let i = 1;
let keepPlaying = true;
while (i<=timePassing.totalDays && keepPlaying ===true){
    let day = timePassing.actualDay;
    let shift = timePassing.turnName;
    
    for (let j=1;j<=timePassing.turn;j++) {

        //Getting the daily status

            timePassing.dailyStatus;

        //Asking and validating wich training will be done by the morning

            console.log("Plase type wich training do you want for now:\n[A] Arms \n[C] Chest \n[G] Glutes  \n[L] Legs");

            //Picking which train will be
            let chosenTraining = input("Type Here:").toString().toUpperCase();
            let checkchosenTraining = true;
            if(chosenTraining !== "A" && chosenTraining !== "C" && chosenTraining !== "G" && chosenTraining !== "L"){
                checkchosenTraining = false;
            } else {
                checkchosenTraining = true;
            }

            while (checkchosenTraining === false) {
                console.log("Please type one of these below:\n[A] Arms \n[C] Chest \n[G] Glutes  \n[L] Legs");
                chosenTraining = input("Type here:").toString().toUpperCase();
                if(chosenTraining !== "A" && chosenTraining !== "C" && chosenTraining !== "G" && chosenTraining !== "L"){
                    checkchosenTraining = false;
                } else {
                    checkchosenTraining = true;
                }
            }


            //Picking the training intensity

            console.log("Please type the training intensity:\n[L] Light \n[H] Heavy");
            let chosenIntensity = input("Type here:").toString().toUpperCase();
            let checkChosenIntensity = true;
            if(chosenIntensity !== "L" && chosenIntensity !== "H"){
                checkChosenIntensity = false;
            } else{
                checkChosenIntensity = true
            }

            while (checkChosenIntensity === false) {
                console.log("Please type the training intensity:\n[L] Light \n[H] Heavy");
                chosenIntensity = input("Type here:").toString().toUpperCase();
                if(chosenIntensity !== "L" && chosenIntensity !== "H"){
                    checkChosenIntensity = false;
                } else{
                    checkChosenIntensity = true
                }
            }

            if (chosenTraining === "A") {
                player1.armsTraining(chosenIntensity);
            } else if (chosenTraining === "C") {
                player1.chestTraining(chosenIntensity);
            }else if (chosenTraining === "G") {
                player1.glutesTraining(chosenIntensity);
            }else if (chosenTraining === "L") {
                player1.legsTraining(chosenIntensity);
            }
            timePassing.passTurn();
        }
        console.log("\nDaily Summary until Day " + timePassing.actualDay + ":\n");
        player1.status;
        console.log("\n");
        timePassing.dayAfter();
        console.log("\n");

        let checkKeepPlayingInput = true;
        keepPlaying = input("Hey, "+ player1.name + "! Do you wanna keep playing? Please Type [Y] Yes or [N] No:").toString().toUpperCase()
        if (keepPlaying !== "Y"  && keepPlaying !== "N") {
            checkKeepPlayingInput = false;
        }
        while (checkKeepPlayingInput ===false) {
            keepPlaying = input("Please enter a valid answer (Y or N):").toString().toUpperCase()
            if (keepPlaying !== "Y"  && keepPlaying !== "N") {
                checkKeepPlayingInput = false;
        } else {
            checkKeepPlayingInput = true;
        }
    }
}
console.log("\nOk, "+ name + " you've finished your journey on the Workout Simulator! Thanks!")
console.log("\nHere is your final status:");
player1.status;
console.log("\nSee you!");