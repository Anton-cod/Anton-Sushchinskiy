$(document).ready(function (){
    $(".slideUP").on("click", function (){
        $(this).slideUp(10)
        $("button").html("Показать скрытые строки")
    })
    $("button").click(function (){
        $(".slideUP").slideDown(10)
        $(this).html("Нет скрытых строк")
    })
})