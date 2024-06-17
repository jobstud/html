// notice.js
// 키보드 누르면 눌렀다 신호만 전달
// 키보드를 떼야 키값 전달
// 눌렀다 신호가 여러 번 전달되면 입력 처리로 변경

$(function(){
    $("#detail").keydown(function(){
        // 5자 이상 입력해야 버튼 활성화
        if( $("#detail").val().length>=5){
            $("#save").removeAttr('disabled');
        }else{
            $("#save").attr('disabled','disabled');
        }
    });

    // $("#save").on('click',function(){ })
    $("#save").click(function(){
        let text = $("#detail").val();
        addList(text); // input태그에 입력값 ul에 넣기

        // input 태그에 아무것도 입력하지 않았다면??
        // if(text === ''){ // input 태그가 비어있다
        //     alert("내용을 입력하세요");
        //     $("#detail").focus();
        //     return; // 함수 강제 종료를 위해
        // }
    });
}); // $(function) END

function addList(text){
    $("#list").append('<li>'+text+'</li>');
}   // 자바스크립트로 작성하면 복잡해지는데 jQuery로 작성하면 간단해진다