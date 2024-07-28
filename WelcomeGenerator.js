/* welcome generator will have afew moving parts: 
a random number generator 

a set of conditions for each number 6 different types




*/


const welcomeMessage = () => {
    randNum = Math.floor(Math.random() * 7)
    switch (randNum) {
        case 0: 
        console.log(`Sup bro!`);
        break;
        case 1:
        console.log(`Suck a Nut today!`);
        break;
        case 2: 
        console.log(`What you bussing to today?`);
        break;
        case 3:
            console.log(`Remember to say FUCK SAMMY today!`);
        break;
        case 4:
            console.log(`Welcome back!`);
        break;
        case 5:
            console.log(`Hello Master! <3`);
        break;
        case 6:
            console.log(`Fuck you bro, why are you even here rn??`);
        break;
        default:
            console.log(`You done broke the mesage.`)
    };
    
}



welcomeMessage();

