// todo.js
($function(){
    $("#save").click(function(){
        let text = $("#detail").val();
        addList(text);
    });
}

function addList(text){
    $("#todo1").append('<li>'+text+'</li>');
}