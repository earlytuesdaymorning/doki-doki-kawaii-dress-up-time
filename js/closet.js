//VARIABLES


//ELEMENT REFERENCES (jQuery variables)


//EVENT LISTENERS

$("#pick-me-batman").on("click", function (event) {
    $("#batman-model").toggle();
    $("#joker-model").hide();
});

$("#pick-me-joker").on("click", function (event) {
    $("#joker-model").toggle();
    $("#batman-model").hide();
});

$("#dress-b1").on("click", function (event) {
    $("#b-dress1").toggle();
    $(".dresses:not(#b-dress1)").hide();
});

$("#dress-b2").on("click", function (event) {
    $("#b-dress2").toggle();
    $(".dresses:not(#b-dress2)").hide();
});

$("#dress-b3").on("click", function (event) {
    $("#b-dress3").toggle();
    $(".dresses:not(#b-dress3)").hide();
});

$("#dress-b4").on("click", function (event) {
    $("#b-dress4").toggle();
    $(".dresses:not(#b-dress4)").hide();
});

$("#dress-b5").on("click", function (event) {
    $("#b-dress5").toggle();
    $(".dresses:not(#b-dress5)").hide();
});

$("#dress-b6").on("click", function (event) {
    $("#b-dress6").toggle();
    $(".dresses:not(#b-dress6)").hide();
});

$("#top-b1").on("click", function (event) {
    $("#b-top1").toggle();
    $(".tops:not(#b-top1)").hide();
    $(".dresses").hide();
});

$("#top-b2").on("click", function (event) {
    $("#b-top2").toggle();
    $(".tops:not(#b-top2)").hide();
    $(".dresses").hide();
});

$("#top-b3").on("click", function (event) {
    $("b-top3").toggle();
    $(".tops:not()").hide();
    $(".dresses").hide();
});

$("#top-b4").on("click", function (event) {
    $("#b-top4").toggle();
    $(".tops:not(#b-top4)").hide();
    $(".dresses").hide();
});

$("#top-b5").on("click", function (event) {
    $("#b-top5").toggle();
    $(".tops:not(#b-top5)").hide();
    $(".dresses").hide();
});

$("#top-b6").on("click", function (event) {
    $("#b-top6").toggle();
    $(".tops:not(#b-top6)").hide();
    $(".dresses").hide();
});

$("#skirt-b1").on("click", function (event) {
    $("b-skirt1").toggle();
    $(".skirts:not(#b-skirt1)").hide();
    $(".dresses").hide();
});

$("#skirt-b2").on("click", function (event) {
    $("#b-skirt2").toggle();
    $(".skirts:not(#b-skirt2)").hide();
    $(".dresses").hide();
});

$("#skirt-3").on("click", function (event) {
    $("#b-skirt3").toggle();
    $(".skirts:not(#b-skirt3)").hide();
    $(".dresses").hide();
});

$("#skirt-b4").on("click", function (event) {
    $("#b-skirt4").toggle();
    $(".skirts:not(#b-skirt4)").hide();
    $(".dresses").hide();
});

$("#skirt-b5").on("click", function (event) {
    $("#b-skirt6").toggle();
    $(".skirts:not(#b-skirt5)").hide();
    $(".dresses").hide();
});

$("#skirt-b6").on("click", function (event) {
    $("#b-skirt6").toggle();
    $(".skirts:not(#b-skirt5)").hide();
    $(".dresses").hide();
});


//FUNCTIONS

