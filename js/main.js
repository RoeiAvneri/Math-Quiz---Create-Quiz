let difficulty = 1;
let timer = 90;
let i = 0;
let x = 0;
let y = 0;
let audio  = new Audio("./assest/sound/tick.mp3");
let rightAnswer = 0;
let timerstart = false;
let lefttime = 0;
let isCreateFunction = false;
let answerRightQuestion = [] //The Idea is that every time user amswer right the meshin push "true" and every time user answer wrong the meshin push "false".
//Use that way the showEndInfoAnswerRight work.

//Level 1
let questionsLevel1 = [
    "Solve the question 10 + 5", //1
    "Solve the question 20 + 6", //2
    "Solve the question 70 + 12", //3
    "Solve the question 7 + 5", //4
    "Solve the question 15 + 2", //5
    "Solve the question 20 + 0", //6
    "Solve the question 12 + 5", //7
    "Solve the question 89 + 1", //8
    "Solve the question 12 + 5", //9
    "Solve the question 17 + 3" //10
];

let Level1AnswerA = ["15", "12", "70", "12", "11", "21", "19", "90", "18", "24"];
let Level1AnswerB = ["14", "24", "82", "6", "10", "25", "14", "95", "17", "20"];
let Level1AnswerC = ["10", "26", "45", "17", "18", "30", "17", "100", "10", "50"];
let Level1AnswerD = ["89", "11", "90", "3", "17", "20", "12", "98", "12", "25"];

let asnwerToQuestionsLevel1 = [
    "15",
    "26",
    "82",
    "12",
    "17",
    "20",
    "17",
    "90",
    "17", 
    "20", 
]

let questionsLevel2 = [
    "Solve the question 10 * 5", ////
    "Solve the question 20 * 6", ////
    "Solve the question 70 * 12", ////
    "Solve the question 7 * 5", ////
    "Solve the question 15 * 2", ////
    "Solve the question 20 * 0", ////
    "Solve the question 12 * 5", ////
    "Solve the question 89 * 1", ////
    "Solve the question 13 * 5", ////
    "Solve the question 17 * 3" ////
];

let Level2AnswerA = ["40", "120", "840", "32", "30", "0.20", "89", "89", "90", "60"];
let Level2AnswerB = ["50", "100", "820", "34", "23", "4", "59", "80", "65", "51"];
let Level2AnswerC = ["25", "60", "846", "30", "31", "2", "60", "90", "60", "62"];
let Level2AnswerD = ["10", "90", "800", "35", "312", "0", " 12", "98", "63", "65"];

let asnwerToQuestionsLevel2 = [
    "50",
    "120",
    "840",
    "35",
    "30",
    "0",
    "60",
    "89",
    "65", 
    "51", 
]
//Level 2

//Level 3
let questionsLevel3 = [
    "Solve the question 10 + 5 * 12", ////
    "Solve the question 20 + 6 * 90", ////
    "Solve the question 7 + 12 * (11 + 0)", ////
    "Solve the question 7 + 12 - 9", ////
    "Solve the question 15 + 2 * (10 - 12)", ////
    "Solve the question 20 + 0 : 90", //
    "Solve the question 12 + 5 * 0", //
    "Solve the question 89 + 12 + 1", //
    "Solve the question 12 + 5 + 90", //
    "Solve the question 17 + 3 + 1 - 12" 
];

let Level3AnswerA = ["70", "650", "140", "19", "10.5", "12", "12", "92", "170", "90"];
let Level3AnswerB = ["7", "500", "139", "9", "19", "25", "15", "95", "107", "12"];
let Level3AnswerC = ["69", "560", "193", "10", "10", "30", "13", "102", "102", "23"];
let Level3AnswerD = ["90", "500", "93", "12", "11", "20", "10", "98", "106", "9"];

let asnwerToQuestionsLevel3 = [
    "70", //A
    "560", //C
    "139", //B
    "10", //C
    "11", //D
    "20", //D
    "12", //A
    "102", //C
    "107", //B
    "9", //D
]
//Level 3

function hideElements(elementId) {document.getElementById(elementId).style.display = "none"}
function showElements(elementId) {document.getElementById(elementId).style.display = "block"}
function deleteElements(elementId) {let elem = document.getElementById(elementId); elem.parentNode.removeChild(elem);}

function startTimer() {
    document.getElementById("button-ofmenu").setAttribute("disabled", "true");
    var seconds = timer;
    timerstart = true;
    let timerData = setInterval(function() {
        document.getElementById("timer").innerHTML = seconds-- + "s";
        if(document.getElementById("finish-game").textContent == "Game Over")
        {
            lefttime = document.getElementById("timer").textContent;
            console.log(document.getElementById("timer").textContent)
            clearInterval(timerData);
            //seconds = 0;
            document.getElementById("timer").innerHTML = seconds + "s";
            document.getElementById("lefttimer").innerHTML = lefttime
            return lefttime;
        }
        if(seconds <= -1){
            seconds = 0;
            audio.pause(); 
            document.getElementById("finish-game").style.display = "block";
            document.getElementById("finish-game").style.color = "black";
            document.getElementById("finish-game").innerHTML = "Time Is Up!";
            document.getElementById("score-opinion").style.display = "block";
            document.getElementById("score-opinion").innerHTML = "You Failed, Try Again";
            document.getElementById("question-of").style.display = "none";
            hideElements("question");
            document.getElementById("lefttimer").innerHTML = 0;
            document.getElementById("check-btn-text").innerHTML = "Try Again";
            document.getElementById('b1-che-btn').onclick = function() {
                try {
                    window.location.reload();
                }
                catch {
                    console.log("Error")
                }
            }
            //Because User Failed, The Show End Info Don;t Pop-Up.
            return true;
        }
        else if(seconds <= 9){
            audio.play()
        }

    }, 1000);
}
function nextAndLoad(){
    showElements("question");
    hideElements("finish-game");
    hideElements("score-right-wrong");
    document.getElementById("b1-che-btn").removeAttribute("disabled");
    document.getElementById("b1-nex").setAttribute("disabled", "true");
    let question = document.getElementById("question-of");
    let optionOne = document.getElementById("optionOne");
    let optionTwo = document.getElementById("optionTwo");
    let optionThree = document.getElementById("optionThree");
    let optionFour = document.getElementById("optionFour");
    question.innerHTML = questionsInUse[i];
    optionOne.innerHTML = AnswerA[i];
    optionTwo.innerHTML = AnswerB[i];
    optionThree.innerHTML = AnswerC[i];
    optionFour.innerHTML = AnswerD[i];
    if(i == 10){
        if(rightAnswer <= 4){document.getElementById("score-opinion").innerHTML = "Bad Result, Try Again";}else if(rightAnswer <= 8 ){document.getElementById("score-opinion").innerHTML = "Good, But Not Enought"}else if(rightAnswer >= 10){document.getElementById("score-opinion").innerHTML = "Well Done"}
        document.getElementById("finish-game").style.display = "block";
        document.getElementById("finish-game").style.color = "black";
        document.getElementById("finish-game").innerHTML = "Game Over";
        try{
            document.getElementById("container-input-request").style.display = "block";
            document.getElementById("container-input-request-b1").style.display = "block";
            showEndInfo();
        }
        catch(e){
            console.error("Error To Run The Function");
        }
        //document.getElementById("score-right-wrong").innerHTML = "Answered correctly " +  rightAnswer + "/10";
        //if(difficulty == 1 && rightAnswer == 10){alert("Try to do the quiz with a higher level of difficulty")}else if(difficulty == 2 && rightAnswer == 10){alert("Try to do the quiz with a higher level of difficulty")}else if(difficulty == 3 && rightAnswer <= 5){alert("Try to do the quiz with a lower level of difficulty")}else if(difficulty == 2 && rightAnswer <= 5){alert("Try to do the quiz with a lower level of difficulty")}
        hideElements("question-of");
        hideElements("question");
        showElements("score-opinion");
        if(timerstart == false){
            alert("Do The Quiz Next Time With Timer")
        }
        document.getElementById("check-btn-text").innerHTML = "Try Again";
        document.getElementById('b1-che-btn').onclick = function() {
            try {
                window.location.reload();
            }
            catch {
                console.log("Error")
            }
        }
        return true;
    }
    i++;
}

function check(){
    document.getElementById("b1-che-btn").setAttribute("disabled", "true");
    let itemA = AnswerA[x];
    let itemB = AnswerB[x];
    let itemC = AnswerC[x];
    let itemD = AnswerD[x];
    let asnwerToQuestions;
    if(difficulty == 1){asnwerToQuestions = asnwerToQuestionsLevel1[y];}
    if(difficulty == 2){asnwerToQuestions = asnwerToQuestionsLevel2[y];}
    if(difficulty == 3){asnwerToQuestions = asnwerToQuestionsLevel3[y];}
    
    let optionNum1 = document.getElementById("op1");
    let optionNum2 = document.getElementById("op2");
    let optionNum3 = document.getElementById("op3");
    let optionNum4 = document.getElementById("op4");

    if(optionNum1.checked == true) {currectAnswerValue = document.getElementById("optionOne");}
    if(optionNum2.checked == true) {currectAnswerValue = document.getElementById("optionTwo");}
    if(optionNum3.checked == true) {currectAnswerValue = document.getElementById("optionThree");}
    if(optionNum4.checked == true) {currectAnswerValue = document.getElementById("optionFour");}
    if(currectAnswerValue.textContent == asnwerToQuestions){
        document.getElementById("finish-game").style.display = "block";
        document.getElementById("finish-game").style.color = "green";
        document.getElementById("finish-game").innerHTML = "Successful!";
        hideElements("question");
        document.getElementById("b1-nex").removeAttribute("disabled");
        answerRightQuestion.push("true");
        rightAnswer++;
    }
    else{
        document.getElementById("finish-game").style.display = "block";
        document.getElementById("finish-game").style.color = "red";
        document.getElementById("finish-game").innerHTML = "This Is Not The Correct Answer ";
        hideElements("question");
        document.getElementById("b1-nex").removeAttribute("disabled");
        answerRightQuestion.push("false");
    }
    console.log(answerRightQuestion)
    x++;
    y++;
}

function showEndInfo() {

    while(document.getElementById("name-re").value == ""){document.getElementById("error-not-fill-name").style.display = "block";return true;}
    if(document.getElementById("name-re").value != ""){hideElements("error-not-fill-name"); document.getElementById("send-start-data").disabled = true;}
    if(document.getElementById("dif1").checked == true){difficulty = 1; timer = 90;}
    else if(document.getElementById("dif2").checked == true){difficulty = 2; timer = 60;}
    else if(document.getElementById("dif3").checked == true){difficulty = 3; timer = 30;}
    let asnwerToQuestions;


    if(difficulty == 1){
        level = 1;
        asnwerToQuestions = asnwerToQuestionsLevel1;
        questionsInUse = questionsLevel1;
        AnswerA = Level1AnswerA;
        AnswerB = Level1AnswerB;
        AnswerC = Level1AnswerC;
        AnswerD = Level1AnswerD;
    }
    else if(difficulty == 2){
        level = 2;
        questionsInUse = questionsLevel2;
        asnwerToQuestions = asnwerToQuestionsLevel2;
        AnswerA = Level2AnswerA;
        AnswerB = Level2AnswerB;
        AnswerC = Level2AnswerC;
        AnswerD = Level2AnswerD;
    }
    else if(difficulty == 3){
        level = 3;
        questionsInUse = questionsLevel3;
        asnwerToQuestions = asnwerToQuestionsLevel3;
        AnswerA = Level3AnswerA;
        AnswerB = Level3AnswerB;
        AnswerC = Level3AnswerC;
        AnswerD = Level3AnswerD;
    }

    let ques1 = document.getElementById("1Question").innerHTML = questionsInUse[0];
    let ques2 = document.getElementById("2Question").innerHTML = questionsInUse[1];
    let ques3 = document.getElementById("3Question").innerHTML = questionsInUse[2];
    let ques4 = document.getElementById("4Question").innerHTML = questionsInUse[3];
    let ques5 = document.getElementById("5Question").innerHTML = questionsInUse[4];
    let ques6 = document.getElementById("6Question").innerHTML = questionsInUse[5];
    let ques7 = document.getElementById("7Question").innerHTML = questionsInUse[6];
    let ques8 = document.getElementById("8Question").innerHTML = questionsInUse[7];
    let ques9 = document.getElementById("9Question").innerHTML = questionsInUse[8];
    let ques10 = document.getElementById("10Question").innerHTML = questionsInUse[9];

    let answerCur1 = document.getElementById("1answerCur").innerHTML = asnwerToQuestions[0];
    let answerCur2 = document.getElementById("2answerCur").innerHTML = asnwerToQuestions[1]
    let answerCur3 = document.getElementById("3answerCur").innerHTML = asnwerToQuestions[2];
    let answerCur4 = document.getElementById("4answerCur").innerHTML = asnwerToQuestions[3];
    let answerCur5 = document.getElementById("5answerCur").innerHTML = asnwerToQuestions[4];
    let answerCur6 = document.getElementById("6answerCur").innerHTML = asnwerToQuestions[5];
    let answerCur7 = document.getElementById("7answerCur").innerHTML = asnwerToQuestions[6];
    let answerCur8 = document.getElementById("8answerCur").innerHTML = asnwerToQuestions[7];
    let answerCur9 = document.getElementById("9answerCur").innerHTML = asnwerToQuestions[8];
    let answerCur10 = document.getElementById("10answerCur").innerHTML = asnwerToQuestions[9];

    let answwerRight1 = document.getElementById("1answerRight").innerHTML = answerRightQuestion[0];
    let answwerRight2 = document.getElementById("2answerRight").innerHTML = answerRightQuestion[1];
    let answwerRight3 = document.getElementById("3answerRight").innerHTML = answerRightQuestion[2];
    let answwerRight4 = document.getElementById("4answerRight").innerHTML = answerRightQuestion[3];
    let answwerRight5 = document.getElementById("5answerRight").innerHTML = answerRightQuestion[4];
    let answwerRight6 = document.getElementById("6answerRight").innerHTML = answerRightQuestion[5];
    let answwerRight7 = document.getElementById("7answerRight").innerHTML = answerRightQuestion[6];
    let answwerRight8 = document.getElementById("8answerRight").innerHTML = answerRightQuestion[7];
    let answwerRight9 = document.getElementById("9answerRight").innerHTML = answerRightQuestion[8];
    let answwerRight10 = document.getElementById("10answerRight").innerHTML = answerRightQuestion[9];

    let rightanswerb1 = document.getElementById("rightanswer").innerHTML = rightAnswer + " / 10"
    if(timerstart == false) {
        document.getElementById("lefttimer").innerHTML = "Timer Not Used"
    }

}

function createTable(){
    isCreateFunction = true;
    let level = 0;
    let username = document.getElementById("name-re").value //User Name Value.
    let wordToLetter = username.charAt(0).toUpperCase() + username.slice(1);
    let age = document.getElementById("input-request-age"); //Age Dropdown.
    let i = age.selectedIndex; //Get Selected From Age Dropdown.
    
    while(document.getElementById("name-re").value == ""){document.getElementById("error-not-fill-name").style.display = "block";return true;}
    if(document.getElementById("name-re").value != ""){hideElements("error-not-fill-name"); document.getElementById("send-start-data").disabled = true;}
    if(document.getElementById("dif1").checked == true){difficulty = 1; timer = 90;}
    else if(document.getElementById("dif2").checked == true){difficulty = 2; timer = 60;}
    else if(document.getElementById("dif3").checked == true){difficulty = 3; timer = 30;}


    if(difficulty == 1){
        level = 1;
        questionsInUse = questionsLevel1;
        AnswerA = Level1AnswerA;
        AnswerB = Level1AnswerB;
        AnswerC = Level1AnswerC;
        AnswerD = Level1AnswerD;
    }
    else if(difficulty == 2){
        level = 2;
        questionsInUse = questionsLevel2;
        AnswerA = Level2AnswerA;
        AnswerB = Level2AnswerB;
        AnswerC = Level2AnswerC;
        AnswerD = Level2AnswerD;
    }
    else if(difficulty == 3){
        level = 3;
        questionsInUse = questionsLevel3;
        AnswerA = Level3AnswerA;
        AnswerB = Level3AnswerB;
        AnswerC = Level3AnswerC;
        AnswerD = Level3AnswerD;
    }

    let elem = document.createElement("table");
    elem.id = "table-data-user";
    document.getElementById("table-ofdata").appendChild(elem);

    let headOfTitles = document.createElement("thead");
    headOfTitles.id = "table-titles-header";
    document.getElementById("table-data-user").appendChild(headOfTitles);

    let Tr = document.createElement("tr");
    Tr.id = "table-titles-tr";
    document.getElementById("table-titles-header").appendChild(Tr);

    let th_name = document.createElement("th");
    th_name.id = "table-titles-th";
    th_name.innerHTML = "Name";
    document.getElementById("table-titles-tr").appendChild(th_name);

    let th_age = document.createElement("th");
    th_age.id = "table-titles-th"
    th_age.innerHTML = "Age";
    document.getElementById("table-titles-tr").appendChild(th_age);

    let th_diff = document.createElement("th");
    th_diff.id = "table-titles-th"
    th_diff.innerHTML = "Difficulty";
    document.getElementById("table-titles-tr").appendChild(th_diff);

    let bodyOfTitles = document.createElement("tbody");
    bodyOfTitles.id = "table-body-body";
    document.getElementById("table-data-user").appendChild(bodyOfTitles);

    let Tr_body = document.createElement("tr");
    Tr_body.id = "table-body-tr";
    document.getElementById("table-body-body").appendChild(Tr_body);

    let td_name_value = document.createElement("td");
    td_name_value.id = "table-body-td";
    td_name_value.innerHTML = wordToLetter;
    document.getElementById("table-body-tr").appendChild(td_name_value);

    let td_age_value = document.createElement("td");
    td_age_value.id = "table-body-td"
    td_age_value.innerHTML = age.options[i].text;
    document.getElementById("table-body-tr").appendChild(td_age_value);

    let td_diff_value = document.createElement("td");
    td_diff_value.id = "table-body-td"
    td_diff_value.innerHTML = difficulty;
    document.getElementById("table-body-tr").appendChild(td_diff_value);

    document.getElementById("requestion-data-form").style.display = "block";
    document.getElementById("btn-menu").style.display = "block";
    nextAndLoad()
}
document.addEventListener("keypress", (event) => {var name = event.key;var code = event.code;if(name == "Enter"){if(isCreateFunction == false){try{createTable();}catch(e){console.error("There Was Problem While Run Function")}}}}, false);