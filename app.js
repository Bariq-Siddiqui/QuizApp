var userName = sessionStorage.getItem("Name")
var wel = document.getElementById('wel')
wel.innerHTML = userName;

var quiz=[
    {
        question:"1) The term 'Computer' is derived from _____?",
        choice:{
            a:"Latin",
            b:"German",
            c:"French",
            d:"Arabic"
        },
        correctAnswer:"Latin",
    },
    {
        question:"2) Who is the father of Computer?",
        choice:{
            a:"Allen Turing",
            b:"Charles Babbage",
            c:"Simur Cray",
            d:"Augusta Adaming"
        },
        correctAnswer:"Charles Babbage",
    },
    {
        question:"3) The basic operations performed by a computer are__________?",
        choice:{
            a:"Arithmetic operation",
            b:"Logical operation",
            c:"Storage and relative",
            d:"All the above"
        },
        correctAnswer:"All the above",
    },
    {
        question:"4) WWW stands for___________?",
        choice:{
            a:"World Whole Web",
            b:"Wide World Web",
            c:"Web World Wide",
            d:"World Wide Web"
        },
        correctAnswer:"World Wide Web",
    },
    {
        question:"5) Which technology is used in compact disks?",
        choice:{
            a:"Mechanical",
            b:"Electrical",
            c:"Electro Magnetic",
            d:"Laser"
        },
        correctAnswer:"Laser",
    },
    {
        question:"6) The brain of any computer system is___________?",
        choice:{
            a:"ALU",
            b:"Memory",
            c:"CPU",
            d:"Control unit"
        },
        correctAnswer:"CPU",
    },
    {
        question:"7) The computer that process both analog and digital is called____________?",
        choice:{
            a:"Analog computer",
            b:"Digital computer",
            c:"Hybrid computer",
            d:"Mainframe computer"
        },
        correctAnswer:"Hybrid computer",
    },
    {
        question:"8) WAN stands for___?",
        choice:{
            a:"Wap Area Network",
            b:"Wide Area Network",
            c:"Wide Array Net",
            d:"Wireless Area Network"
        },
        correctAnswer:"Wide Area Network",
    },
    {
        question:"9) Gigabyte is equal to ____________?",
        choice:{
            a:"1024 megabytes",
            b:"1024 kilobytes",
            c:"1000 megabytes",
            d:"1024 bits"
        },
        correctAnswer:"1024 megabytes",
    },
    {
        question:"10) You can organize files by storing them in__________?",
        choice:{
            a:"Archives",
            b:"Folders",
            c:"Indexes",
            d:"Lists"
        },
        correctAnswer:"Folders",
    }
]

var questionFromindex=document.getElementById("question");
var option1=document.getElementById("option1");
var option2=document.getElementById("option2");
var option3=document.getElementById("option3");
var option4=document.getElementById("option4");

var subBtn=document.getElementById("subBtn");

var count=0;

var b = document.getElementsByClassName('selected');
var score = 0;
var correctAnswers = 0;

window.onload = function (){
    questionFromindex.innerText = quiz[count].question;
    option1.innerText = quiz[count].choice.a;
    option2.innerText = quiz[count].choice.b;
    option3.innerText = quiz[count].choice.c;
    option4.innerText = quiz[count].choice.d;
}
function optionSelect(e){
   var a = document.getElementsByTagName('li');
   a[0].classList.remove('selected');
   a[1].classList.remove('selected');
   a[2].classList.remove('selected');
   a[3].classList.remove('selected');
   e.classList.add('selected');
}
function next() {
    if (document.getElementsByClassName('selected')[0] != undefined) {
    count++
      if(b[0].innerText == quiz[count-1].correctAnswer) {
        b[0].classList.add('answerCorrect');
        score += 10;
        correctAnswers = correctAnswers + 1;
        console.log(score);
        console.log(correctAnswers);
        
      } else {
        b[0].classList.add('answerWrong');
      }
      b[0].classList.remove('answerCorrect', 'selected', 'answerWrong')
        
      if(count < quiz.length-1 && count != quiz.length) {
        questionFromindex.innerText = quiz[count].question;
        option1.innerText = quiz[count].choice.a;
        option2.innerText = quiz[count].choice.b;
        option3.innerText = quiz[count].choice.c;
        option4.innerText = quiz[count].choice.d;
      } else if ( count < quiz.length) {
        questionFromindex.innerText = quiz[count].question;
        option1.innerText = quiz[count].choice.a;
        option2.innerText = quiz[count].choice.b;
        option3.innerText = quiz[count].choice.c;
        option4.innerText = quiz[count].choice.d;
        subBtn.value = "Submit";
        subBtn.setAttribute('onClick', 'submit(this)');
      }
    }
}
      function submit(e){
        location.href = "indexend.html"
        sessionStorage.setItem("Score",score)
        sessionStorage.setItem("answerCorrect",correctAnswers)
        count++
       if(b[0].innerText == exam[count-1].correctAnswer) {
       b[0].classList.add('answerCorrect');
       score = score + 10;
       correctAnswers = correctAnswers + 1;
       console.log(correctAnswers);
        console.log(score);

      } else {
       b[0].classList.add('answerWrong');
       }
      }
  
function optionSelect(e){
    var a = document.getElementsByTagName('li');
    a[0].classList.remove('selected');
    a[1].classList.remove('selected');
    a[2].classList.remove('selected');
    a[3].classList.remove('selected');
    e.classList.add('selected');
 }



 
//  var total_seconds = 30 * 1;
//  var c_minutes = parseInt(total_seconds / 60);
//  var c_seconds = parseInt(total_seconds % 60);
//  var timer;
 
//  function CheckTime() {
//    document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';
 
//    if (total_seconds <= 0) {
//      score();
//    } else {
//      total_seconds = total_seconds - 1;
//      c_minutes = parseInt(total_seconds / 60);
//      c_seconds = parseInt(total_seconds % 60);
//      timer = setTimeout(CheckTime, 1000); 
//    }
//  }
//  timer = setTimeout(CheckTime, 1000);
//  function timer(){
//   msec++;
//   msecHead.innerHTML=msec;
//   if(msec == 100){
//       sec--;
//       secHead.innerHTML=sec;
//       msec=00;
//   }
//   if(sec == 00){
//       min--;
//       minHead.innerHTML=min;
//       sec=60;
//       if( min < 0){
//           reset();
//           document.write("Time is Over")
//       }
//   }
// }


var min=1;
var sec=00;
var msec=00;
var interval;
var minHead=document.getElementById("min");
minHead.innerHTML=min;
var secHead=document.getElementById("sec");
secHead.innerHTML=sec;
var msecHead=document.getElementById("msec");
msecHead.innerHTML=msec;
function timer(){
    msec++;
    msecHead.innerHTML=msec;
    if(msec == 100){
        sec--;
        secHead.innerHTML=sec;
        msec=00;
    }
    if(sec == 00){
        min--;
        minHead.innerHTML=min;
        sec=60;
        if( min < 0){
            reset();
            location.href = "indexend.html"
              sessionStorage.setItem("Score",score)
              sessionStorage.setItem("answerCorrect",correctAnswers)
        }
    }
}
function start(){
    interval=setInterval(timer,10)
}
function pause(){
    clearInterval(interval);
}
function reset(){
    msec=00;
    sec=00;
    min=00;
    msecHead.innerHTML=msec;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
    pause();
}
start(); 