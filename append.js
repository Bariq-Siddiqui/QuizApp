var stdname = document.getElementById("stdname");
let user_Name = sessionStorage.getItem("Name");
stdname.innerHTML = user_Name;
var fname = document.getElementById("fname");
let f_Name = sessionStorage.getItem("fname");
fname.innerHTML = f_Name;
var emailname = document.getElementById("email");
let email = sessionStorage.getItem("email");
emailname.innerHTML = email;


var marks = document.getElementById("marks");
let user_Score = sessionStorage.getItem("Score");
marks.innerHTML = user_Score;

var correct=document.getElementById("correct");
let userCorrect = sessionStorage.getItem("answerCorrect");
correct.innerHTML = userCorrect;



var per=document.getElementById("per");
per.innerHTML = user_Score +"%";



var remark = document.getElementById("remarks")
if(user_Score >= 40){
    remark.innerHTML = "Congratulation"
}else{
    remark.innerHTML = "Need More Practice"
}
