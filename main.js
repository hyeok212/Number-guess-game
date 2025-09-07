// 랜덤번호 지정
let computerNum = 0
let playButton =document.getElementById("play-button")
let userInput =document.getElementById("user-input")
let resultArea= document.getElementById("result-area")
playButton.addEventListener("click",play)

function pickRandomNum(){
 computerNum =Math.floor(Math.random()*100+1) 
 console.log("정답",computerNum) 
}

function play(){
 let userValue = userInput.value
 if(userValue<computerNum){
    resultArea.textContent = "더 위다!"
 }else if(userValue>computerNum){
    resultArea.textContent = "더 아래다!"
 }else{
    resultArea.textContent = "제법이군.."
 }
}
pickRandomNum()
