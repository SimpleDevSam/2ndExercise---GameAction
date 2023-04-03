export class Player {
    name;
    age;
    shape;
    chestlenght;
    armslenght;
    legslenght;
    gluteslenght;

//Defining constructor and logic to stablish lenght atributtes

    constructor(name,age,shape) {
        this.name = name;
        this.age = age;
        this.shape = shape;

        if (this.shape === "T") {
            this.chestlenght = 90;
            this.armslenght = 30;
            this.legslenght = 50;
            this.gluteslenght = 60;
        } else if (this.shape === "M"){
            this.chestlenght = 100;
            this.armslenght = 40;
            this.legslenght = 60;
            this.gluteslenght = 70;
        } else if (this.shape === "L"){
            this.chestlenght = 110;
            this.armslenght = 50;
            this.legslenght = 60;
            this.gluteslenght = 80;
        }
    }

    //Defining getter to retrieve player status

    get status () {
        return console.log([this.chestlenght, this.armslenght, this.legslenght, this.gluteslenght]);
    }

     //Creating the method which train chest and boost their chest status

    chestTraining(intensity){

        if (intensity !== "L" && intensity !=="H" ){
            return console.log("Sorry, you have to type\n [L] for Light \n [H] for Heavy");

        } else if (intensity == "L") {
            let previousLenght = this.chestlenght;
            this.chestlenght = (this.chestlenght * 1.002).toFixed(2);
            let sizeGained = (this.chestlenght*0.002).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+
             previousLenght +" \n Gained "+ sizeGained + 
            " of Chess Lenght! \n Now you have " + this.chestlenght +"cm²");

        } else {

            let previousLenght = this.chestlenght;
            this.chestlenght = (this.chestlenght * 1.005).toFixed(2);
            let sizeGained = (this.chestlenght*0.005).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+ previousLenght +" \n Gained "+ 
            sizeGained + 
            " of Chess Lenght! \n Now you have " + this.chestlenght +"cm²")
        }

    }

    //Creating the method which train arms and boost their chest status

    armsTraining(intensity){

        if (intensity !== "L" && intensity !=="H" ){
            return console.log("Sorry, you have to type\n [L] for Light \n [H] for Heavy");

        } else if (intensity == "L") {
            let previousLenght = this.armslenght;
            this.armslenght = (this.armslenght * 1.002).toFixed(2);
            let sizeGained = (this.armslenght*0.002).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+
             previousLenght +" \n Gained "+ sizeGained + 
            " of Chess Lenght! \n Now you have " + this.armslenght +"cm²");

        } else {
            
            let previousLenght = this.armslenght;
            this.armslenght = (this.armslenght * 1.005).toFixed(2);
            let sizeGained = (this.armslenght*0.005).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+ previousLenght +" \n Gained "+ 
            sizeGained + 
            " of Chess Lenght! \n Now you have " + this.armslenght +"cm²")
        }

    }
    glutesTraining(intensity){

        if (intensity !== "L" && intensity !=="H" ){
            return console.log("Sorry, you have to type\n [L] for Light \n [H] for Heavy");

        } else if (intensity == "L") {
            let previousLenght = this.gluteslenght;
            this.gluteslenght = (this.gluteslenght * 1.002).toFixed(2);
            let sizeGained = (this.gluteslenght*0.002).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+
             previousLenght +" \n Gained "+ sizeGained + 
            " of Chess Lenght! \n Now you have " + this.gluteslenght +"cm²");

        } else {
            
            let previousLenght = this.gluteslenght;
            this.gluteslenght = (this.armslenght * 1.005).toFixed(2);
            let sizeGained = (this.gluteslenght*0.005).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+ previousLenght +" \n Gained "+ 
            sizeGained + 
            " of Chess Lenght! \n Now you have " + this.gluteslenght +"cm²")
        }

    }
    legsTraining(intensity){

        if (intensity !== "L" && intensity !=="H" ){
            return console.log("Sorry, you have to type\n [L] for Light \n [H] for Heavy");

        } else if (intensity == "L") {
            let previousLenght = this.legslenght;
            this.legslenght = (this.legslenght * 1.002).toFixed(2);
            let sizeGained = (this.legslenght*0.002).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+
             previousLenght +" \n Gained "+ sizeGained + 
            " of Chess Lenght! \n Now you have " + this.legslenght +"cm²");

        } else {
            
            let previousLenght = this.legslenght;
            this.legslenght = (this.armslenght * 1.005).toFixed(2);
            let sizeGained = (this.legslenght*0.005).toFixed(2);

            return console.log("\nYou've chosen to train Chest! Good for you!\n Previous Lenght :"+ previousLenght +" \n Gained "+ 
            sizeGained + 
            " of Chess Lenght! \n Now you have " + this.legslenght +"cm²")
        }

    }

    }

