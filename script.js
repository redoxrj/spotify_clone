let turnmusic = new Audio('ting.mp3')
let gameovermusic = new Audio('gameover.mp3')
let music = new Audio('music.mp3')


let turn ="X"
let gameover =false

const changeTurn=()=>{
    if(turn=="X"){
        return "0"
    }
    else{
        return "X"
    }

}
let boxText = Array.from(document.getElementsByClassName("box"))

const checkWin= ()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach((e)=>{
        // console.log(e)
       if((box[e[0]].innerText ===box[e[1]].innerText) && (box[e[1]].innerText ===box[e[2]].innerText) &&  (box[e[0]].innerText !=="") ) {
        gameover = true;
        document.querySelector('.info').innerText = turn +" won Congrats!"
        gameovermusic.play()
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width= '220px'
        


       }
        
    })

}


let box = Array.from(document.getElementsByClassName('box'))

box.forEach((element)=>{
    // let boxText = element.querySelector('.boxText')
    element.addEventListener('click', (e)=>{
        music.volume=0.1
        music.play()
        // console.log( typeof e.target.innerText)
        
        if(e.target.innerText == "" ){
            e.target.innerText=turn
            turnmusic.play()
            checkWin()
           
             

           if(!gameover){

                turn =changeTurn()
                document.querySelector('.info').innerText ="Turn for :    "+ turn
            }
        }
        
    })
})
document.getElementById('reset').addEventListener('click',()=>{
    boxText.forEach((e)=>{
        e.innerHTML =""
    })
    document.querySelector('.info').innerText = `Turn for : X`
    gameover = false
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width= 0


})


