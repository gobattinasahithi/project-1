import React,{useState,useEffect}from "react";
import EmojiCard from"./EmojiCard";
import"./App.css";
const emojisList=[
{id:1,emoji:"😀"},
{id:2,emoji:"😂"},
{id:3,emoji:"😍"},
{id:4,emoji:"😋"},
{id:5,emoji:"😎"},
{id:6,emoji:"🤩"},
{id:7,emoji:"😙"},
{id:8,emoji:"😚"},
{id:9,emoji:"🤗"},
{id:10,emoji:"🤨"},
{id:11,emoji:"🤐"},
{id:12,emoji:"😴"},
{id:13,emoji:"😴"},
{id:14,emoji:"😜"},
{id:15,emoji:"🤤"},
{id:16,emoji:"😮"},
{id:17,emoji:"😤"},
{id:18,emoji:"😰"},
{id:19,emoji:"😵"},
{id:20,emoji:"🥴"},
{id:21,emoji:"😇"},
{id:22,emoji:"🥳"},
{id:23,emoji:"🧐"},
{id:24,emoji:"🤭"},
{id:25,emoji:"🤕"},
{id:26,emoji:"😷"},
{id:27,emoji:"🦋"},
{id:28,emoji:"🦚"},
{id:29,emoji:"🙃"},
{id:30,emoji:"🤠"}
];
function App(){
const[clickedEmojis,setClickedEmojis]=useState([]);
const[score,setScore]=useState(0);
const[bestScore,setBestScore]=useState(0);
const[gameStatus,setGameStatus]=
useState("playing");
const[emojis,setEmojis]=useState(emojisList);
//Load best score from localStroage
useEffect(()=>{
const savedScore=
localStorage.getItem("bestScore");
if(savedScore){
setBestScore(Number(savedScore));
}
},[]);
//Save best score to localStroage
useEffect(()=>{
localStorage.setItem("bestScore",bestScore);
},[bestScore]);
const shuffleEmojis=(list)=>{
return[...list].sort(()=>Math.random()-0.5);
};
const handleClick=(id)=>{
if(clickedEmojis.includes(id)){
 setGameStatus("lost");
if(score>bestScore){
 setBestScore(score);
}
}else{
 const newScore=score+1;
 setClickedEmojis([...clickedEmojis,id]);
 setScore(newScore);
 setEmojis(shuffleEmojis(emojis));
 if(newScore===emojisList.length){
 setGameStatus("won");
 if(newScore>bestscore){
  setBestScore(newScore);
   }
 } 
 }
};
const restartGame=()=>{
 setClickedEmojis([]);
 setScore(0);
 setGameStatus("playing");
 setEmojis(shuffleEmojis(emojisList));
};
return(
<div className="container">
<h1>Emoji Memory Game🎮</h1>
<div className="score-board">
 <p>Score:{score}</p>
 <p>Best Score:{bestScore}</p>
</div>

{gameStatus==="playing"&&(
 <div className="emoji-grid">
 {emojis.map((item)=>(
 <EmojiCard
 Key={item.id}
 emoji={item.emoji}
 id={item.id}
 handleClick={handleClick}
/>
))}
</div>
)}
{gameStatus==="won"&&(
 <div className="result">
 <h2>🎉You Won!</h2>
 <button on Click={restartGame}>Play Again</button>
</div>
)}
{gameStatus==="lost"&&(
<div className="result">
<h2>😥Game Over</h2>
 <button on Click={restartGame}>Try Again</button>
</div>
)}
</div>
);
}
export default App;