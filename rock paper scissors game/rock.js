let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
 
let us=document.querySelector("#user-score");
let comps=document.querySelector("#comp-score");
let btn=document.querySelector("#reset")
btn.addEventListener("click",()=>
{
    
    us.innerText=0;
    comps.innerText=0;
    userScore=0;
    compScore=0;
    msg.innerText="Play agin"
    msg.style.backgroundColor="brown"

})




   let compGenGame=()=>
    {
        let choiceArr=["rock","paper","scissors"];
       let index= Math.floor(Math.random()*3);
        return choiceArr[index];
    }


    const drawGame=()=>
        {
            console.log("game was draw");
            msg.innerText="Game Was draw! Play Agin";
            msg.style.backgroundColor="blue";
        }
         

    let showWinner=(userWin,userChoice,compChoice)=>
        {
            if(userWin===true )
            {
        
                userScore++;
                us.innerText=userScore;
                console.log("You Win the Game");
                msg.innerText=`You won! your ${userChoice} beat ${compChoice}`;
                msg.style.backgroundColor="green";
            
            }
            else
            {
                compScore++;
                comps.innerText=compScore;
                console.log("You lose  the game")
               
                msg.innerText=`You los! ${compChoice} beats ${userChoice}`;
                msg.style.backgroundColor="red";
            }
        }

 const playGame=(userChoice)=>
     {
        console.log( `user choice is : ${userChoice}`);
        let compChoice= compGenGame();
        console.log(`computer choice is :  ${compChoice}`);
   
        if(userChoice===compChoice)
            {
                drawGame();
            }
            else 
            {
                let userWin=true;
                if(userChoice==="rock") //scissor,paper
                {
                    userWin=compChoice==="paper"? false : true;

                }
                else if(userChoice==="paper") //scissor,rock
                {
                    userWin=compChoice==="scissors" ? false : true;
                }
                else 
                {
                    userWin=compChoice==="rock"? false :true;
                }
                showWinner(userWin,userChoice,compChoice);

            }
           
    }






choices.forEach((choice) =>
{
    
    choice.addEventListener("click",() =>
    {
        const userChoice=choice.getAttribute("id")
        // console.log(userChoice);
        playGame(userChoice);
    })
});

