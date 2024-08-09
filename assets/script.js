$(document).ready(function(){
    $(".navOpenBtn").click(function(){
        $("nav").css("right",0)
    })
    $(".navCloseBtn").click(function(){
        $("nav").css("right",'-100%')
    })
})