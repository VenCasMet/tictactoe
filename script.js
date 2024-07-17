let boxes=document.querySelectorAll(".box");

let scored=0;
let scorex=0;
let scoreo=0;
let turn="X";
let isgameover=false;
let iswin=false;
document.querySelector("#results").innerHTML=turn+" to move";
boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click",()=>{
        if(!isgameover && e.innerHTML === ""){
            e.innerHTML = turn;
            checkwin();
            checkdraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn="O";
        document.querySelector(".bg").style.left="85px";
    }
    else{
        turn="X";
        document.querySelector(".bg").style.left="0";
    }
    document.querySelector("#results").innerHTML=turn+" to move";
}

function checkwin(){
    let wincond=[
        [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    for(let j=0;j<wincond.length;j++){
        let v0=boxes[wincond[j][0]].innerHTML;
        let v1=boxes[wincond[j][1]].innerHTML;
        let v2=boxes[wincond[j][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            if(turn==="X"){
                scorex += 1;
                scoreX.innerHTML="X:- " + scorex;
            }
            else{
                scoreo += 1;
                scoreO.innerHTML="O:- " + scoreo;
            }
            isgameover=true;
            document.querySelector("#result").innerHTML=turn+" Win";
            document.querySelector("#play-again").style.display="inline";

            for(i=0;i<3;i++){
                boxes[wincond[j][i]].style.backgroundColor="#08d9d6";
                boxes[wincond[j][i]].style.color="#000";
            }
            iswin=true;
            
        }
    }
}

function checkdraw(){
    if(!isgameover){
        let isDraw=true;
        boxes.forEach(e=>{
            if(e.innerHTML==="") isDraw=false;
        })

        if(isDraw){
            isgameover=true;
            document.querySelector("#result").innerHTML="Draw";
            document.querySelector("#play-again").style.display="inline";
            scored += 1;
            scoreD.innerHTML = "DRAW:- " + scored;
        }
    }
}

document.querySelector("#play-again").addEventListener("click",()=>{
    if(iswin===true){
        if(turn==="X"){
            turn="O";
            document.querySelector(".bg").style.left="85px";
        }
        else{
            turn="X";
            document.querySelector(".bg").style.left="0";
        }
    }
    // if(isDraw===true){
    //     if(turn==="X"){
    //         turn="X";
    //         document.querySelector(".bg").style.left="0";
    //     }
    //     else{
    //         turn="O";
    //         document.querySelector(".bg").style.left="85px";
    //     }
    // }
    isgameover=false;
    iswin=false;
    document.querySelector("#result").innerHTML="";
    document.querySelector("#results").innerHTML=turn+" to move";
    document.querySelector("#play-again").style.display="none";

    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeProperty("background-color");
        e.style.color="#fff";
    })
})