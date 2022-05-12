//VARIABLES

const url = "https://rolz.org/api/?1d20.json"


// ELEMENT REFERENCES


//EVENT LISTENERS
$("#fight-button").on("click", function (event) {
    if ($("#batman-model").is(":visible") && $("#joker-model").is(":hidden")) {
        $("#joker-model").show();
        $("#joker-model").css({ "margin-left": "500px" });
        $(".closet").hide();
        $("#fight-button").hide();
    } if ($("#joker-model").is(":visible") && $("#batman-model").is(":hidden")) {
        $("#batman-model").show();
        $("#batman-model").css({ "margin-left": "500px" });
        $(".closet").hide();
        $("#fight-button").hide();
    }
});

$("#pick-me-batman").on("click", function (event) {
    $("#batman-model").toggle();
    $("#joker-model").hide();
    $(".wear").hide();
});

$("#pick-me-joker").on("click", function (event) {
    $("#joker-model").toggle();
    $("#batman-model").hide();
    $(".wear").hide();
});


$("#dress-b1").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress1").toggle();
        $(".wear:not(#b-dress1)").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress1").toggle();
        $(".wear:not(#j-dress1)").hide();
    }
});

$("#dress-b2").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress2").toggle();
        $(".wear:not(#b-dress2)").hide()
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress2").toggle();
        $(".wear:not(#j-dress2)").hide();
    }
});

$("#dress-b3").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress3").toggle();
        $(".wear:not(#b-dress3)").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress3").toggle();
        $(".wear:not(#j-dress3)").hide();
    }
});

$("#dress-b4").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress4").toggle();
        $(".wear:not(#b-dress4)").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress4").toggle();
        $(".wear:not(#j-dress4)").hide();
    }
});

$("#dress-b5").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress5").toggle();
        $(".wear:not(#b-dress5)").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress5").toggle();
        $(".wear:not(#j-dress5)").hide();
    }
});

$("#dress-b6").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-dress6").toggle();
        $(".wear:not(#b-dress6)").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-dress6").toggle();
        $(".wear:not(#j-dress6)").hide();
    }
});

$("#top-b1").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top1").toggle();
        $(".tops:not(#b-top1)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top1").toggle();
        $(".tops:not(#j-top1)").hide();
        $(".dresses").hide();
    }
});

$("#top-b2").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top2").toggle();
        $(".tops:not(#b-top2)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top2").toggle();
        $(".tops:not(#j-top2)").hide();
        $(".dresses").hide();
    }
});

$("#top-b3").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top3").toggle();
        $(".tops:not(#b-top3)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top3").toggle();
        $(".tops:not(#j-top3)").hide();
        $(".dresses").hide();
    }
});

$("#top-b4").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top4").toggle();
        $(".tops:not(#b-top4)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top4").toggle();
        $(".tops:not(#j-top4)").hide();
        $(".dresses").hide();
    }
});

$("#top-b5").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top5").toggle();
        $(".tops:not(#b-top5)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top5").toggle();
        $(".tops:not(#j-top5)").hide();
        $(".dresses").hide();
    }
});

$("#top-b6").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-top6").toggle();
        $(".tops:not(#b-top6)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-top6").toggle();
        $(".tops:not(#j-top6)").hide();
        $(".dresses").hide();
    }

});

$("#skirt-b1").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt1").toggle();
        $(".skirts:not(#b-skirt1)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt1").toggle();
        $(".skirts:not(#j-skirt1)").hide();
        $(".dresses").hide();
    }
});

$("#skirt-b2").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt2").toggle();
        $(".skirts:not(#b-skirt2)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt2").toggle();
        $(".skirts:not(#j-skirt2)").hide();
        $(".dresses").hide();
    }
});

$("#skirt-b3").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt3").toggle();
        $(".skirts:not(#b-skirt3)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt3").toggle();
        $(".skirts:not(#j-skirt3)").hide();
        $(".dresses").hide();
    }
});

$("#skirt-b4").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt4").toggle();
        $(".skirts:not(#b-skirt4)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt4").toggle();
        $(".skirts:not(#j-skirt4)").hide();
        $(".dresses").hide();
    }
});

$("#skirt-b5").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt5").toggle();
        $(".skirts:not(#b-skirt5)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt5").toggle();
        $(".skirts:not(#j-skirt5)").hide();
        $(".dresses").hide();
    }
});

$("#skirt-b6").on("click", function (event) {
    if ($("#joker-model").is(":hidden") && $("#batman-model").is(":visible")) {
        $("#b-skirt6").toggle();
        $(".skirts:not(#b-skirt6)").hide();
        $(".dresses").hide();
    } if ($("#batman-model").is(":hidden") && $("#joker-model").is(":visible")) {
        $("#j-skirt6").toggle();
        $(".skirts:not(#j-skirt6)").hide();
        $(".dresses").hide();
    }
});



//FUNCTIONS
function whoIsCuter(event) {
    $.ajax(url).then(
        function (data) {
            $("#dice-roll1").html(`${data.result}`)
        }
    );
}