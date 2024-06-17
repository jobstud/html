// 전역변수
let endCount = 0;   // 완성빙고 몇개?
let play분 = 0; // 빙고 진행 시간 - 분
let play초 = 0; // 빙고 게임 진행 시간 - 초
let time = 0; // setInterval 의 핸들값
let bingo = []; // 25개 숫자를 저장할 빈 배열 선언

$(function(){
    $("#start").click(start);
    });
function bingoCheck(){
    $(this).css('background','black');
    $(this).css('color','white');

    var idx = $(".num").index(this);
    bingo[idx]=0;
    console.log(bingo);

    var 가로=0;
    var end=0;
    var 세로=0;
    var 대각선1=0;
    var 대각선2=0;

    for(var i=0; i<5; i++){
        for(var k=0; k<5; k++){
            if(bingo[i*5+k]==0) 가로++;
            if(bingo[k*5+i]==0) 세로++;
        }
        if(bingo[i*6]==0) 대각선1++;
        if(bingo[i*4+4]==0) 대각선2++;
        if(대각선1==5) end++;
        if(대각선2==5) end++;
        if(가로==5) end++;
        if(세로==5) end++;
        가로=0;
        세로=0;
    }
    endCount=end;
    $("#ok").text(endCount);
    if(endCount==5){
        alert("빙고 완성!!");
        endGame();
    }
    else if(endCount>5){
        alert("게임 오버!!!");
        endGame();
    }
}
function endGame(){
    $(".num").off();
    clearInterval(time);
}
function start(){
    $(".num").click(bingoCheck);
    $(this).hide();
    $("#screen").show();
    $("#ok").text(endCount);

    $("#playTime").text('00:00');
    time = setInterval(function(){
        play초++;
        if(play초 == 60){
           play분++;
           play초=0;
        }
        var 초Text = play초<=9 ? '0'+play초 : play초 ;
        var 분Text = play분<=9 ? '0'+play분 : play분 ;

        var timeText = `${분Text}:${초Text}`;
        
        $("#playTime").text(timeText);
    }, 1000);

    init();
    draw();
}

function init(){
    while(bingo.length!=25){
        var tmp = Math.floor(Math.random()*100)+1;
        if(bingo.indexOf(tmp) ==-1)
            bingo.push(tmp);
    }
}
function draw(){
    var td = $(".num");
    console.log(td);
    for(var i=0; i<td.length; i++){
        td.eq(i).text(bingo[i]);
    }
};