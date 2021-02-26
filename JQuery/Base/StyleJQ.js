let check = function (){
    let pass1 = $("#password1").val();
    let pass2 = $("#password2").val();
    if (pass1 === "")
        $("#check").css("background-color", "red").html("Заполните все поля!");
    else if (pass2 === "")
        $("#check").css("background-color", "red").html("Заполните все поля!");
    else if (pass1 === pass2)
        $("#check").css("background-color", "green").html("Пароли совпадают!");
    else
        $("#check").css("background-color", "red").html("Пароли не совпадают!")
}
$(document).ready(function (){
    $("#password1, #password2").keyup(check);
})