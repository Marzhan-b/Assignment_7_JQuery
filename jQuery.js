///Task 0
$(document).ready(function () {
    console.log("jQuery is ready!");
});


///Task 1
    $("#main_phrase")
        .text("There is no such thing as a failure!")
        .css("color", "whight");
    $(".all_sub_topics")
        .html("<em>It's just the life thay trying to move us in another direction</em>")
        .css("font-style", "italic")
    $("h3").text("Oprah Winfrey").css({
        "color": "green",
        "font-size": "18px"
    });


///Task 2
    $("#hide").click(function () {
        $("#text_show").hide("1000");
    });
    $("#show").click(function () {
        $("#text_show").show("1000");
    });
    $("#toggle").click(function () {
        $("#text_show").toggle("slow");
    });


///Task 3
    $("#btn-In").click(function () {
        $("#photo_W").fadeIn(1000);
    });

    $("#btn-Out").click(function () {
        $("#photo_W").fadeOut(1000);
    });

    $("#btn-Tog").click(function () {
        $("#photo_W").fadeToggle(1000);
    });


///Task 4
    $("#btnDown").click(function () {
        $("#panel").slideDown("slow");
    });
    $("#btnUp").click(function () {
        $("#panel").slideUp("slow");
    });
    $("#btnToggle").click(function () {
        $("#panel").slideToggle("slow");
    });


///Task 5
    $("#btn-1").click(function () {
        $("ul").append("<li>Appended item</li>");
    });
    $("#btn-2").click(function () {
        $("ul").prepend("<li>Prepended item</li>");
    });
    $("#btn-3").click(function () {
        $("ul li:last").remove();
    });


///Task 6
    $("#vinetka").click(function () {
        $("#Vinetka-Image").attr("src", "photos/peekaboo.jpg");
    });
    $("#lms").click(function () {
        $("#link").attr("href", "https://du.astanait.edu.kz/");
        $("#link").text("DU AstanaIT");
    });


///Task 7
    $("#name").on("input", function () {
        let nameValue = $(this).val();
        $("#display-name").text(nameValue);
    });
    $("#email").on("input", function () {
        let emailValue = $(this).val();
        $("#display-email").text(emailValue);
    });
///Task 8
    $("#animateBtn").click(function(){
      $("#square").animate({
        width: "200px",
        height: "200px",
        right: "100px",
        top: "50px"
    }, 1000); 
   });

///Task 9
    $("#start9").click(function(){
        $("#box9")
            .animate({ left: "200px" }, 800)   
            .animate({ top: "150px" }, 800)   
            .animate({ width: "50px", height: "50px" }, 800)
            .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 800); 
    });


//Task 10
    $("#start10").click(function(){
        $("#box10").animate({
            left: "150px",
            top: "100px",
            width: "150px",
            height: "150px",
            opacity: 0.3
        }, 1200);
    });

///Task 11
    $(".thumb").click(function(){
        let src = $(this).attr("src");
        $("#modalImg").attr("src", src);
        $("#modal").fadeIn();
    });

    $("#modal").click(function(){
        $(this).fadeOut();
    });

