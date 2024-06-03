let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>
{
    box.addEventListener("click",() =>
        {
            if(turno){
                box.innerText='o';
                turno=false;
            }
            else{
                box.innerText='x';
                turno=true;
            }
            box.disabled=true;
            count++;
            let winner=checkwinner();
            if(count===9 && !winner)
                {
                    gameDraw();
                }           
        }
    );
});

const checkwinner =()=>{
    for(let pattern of winpatterns){
        
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
            {
                if(pos1===pos1 && pos2===pos3)
                    {
                        showWinner(pos3);
                        return true;
                    }
            }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const resetGame=()=>
    {
        turnO=true;
        count=0;
        enableboxes();
        msgContainer.classList.add("hide");
    }
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

const gameDraw = () => 
    {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableboxes();
    };

const disableboxes=()=>
        {
            for(let box of boxes)
            {
                box.disabled=true;
            }
        }
        
const enableboxes=()=>
        {
            for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
        }    