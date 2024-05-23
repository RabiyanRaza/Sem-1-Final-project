// HOME SEC START

$(document).ready(function () {
  $("#project-btn-2").click(function () {
    $("#project-btn-2").css({ "background-color": "#4F9DDC", color: "white" });
    $(
      "#project-btn-1,#project-btn-3,#project-btn-4,#project-btn-5,#project-btn-6"
    ).css({ "background-color": "transparent", color: "#bdb4b4" });
  });

  $("#project-btn-1").click(function () {
    $("#project-btn-1").css({ "background-color": "#4F9DDC", color: "white" });
    $(
      "#project-btn-2,#project-btn-3,#project-btn-4,#project-btn-5,#project-btn-6"
    ).css({ "background-color": "transparent", color: "#bdb4b4" });
  });

  $("#project-btn-3").click(function () {
    $("#project-btn-3").css({ "background-color": "#4F9DDC", color: "white" });
    $(
      "#project-btn-1,#project-btn-2,#project-btn-4,#project-btn-5,#project-btn-6"
    ).css({ "background-color": "transparent", color: "#bdb4b4" });

    $("#project-btn-4").click(function () {
      $("#project-btn-4").css({
        "background-color": "#4F9DDC",
        color: "white",
      });
      $(
        "#project-btn-1,#project-btn-2,#project-btn-3,#project-btn-5,#project-btn-6"
      ).css({ "background-color": "transparent", color: "#bdb4b4" });

      $("#project-btn-5").click(function () {
        $("#project-btn-5").css({
          "background-color": "#4F9DDC",
          color: "white",
        });
        $(
          "#project-btn-1,#project-btn-2,#project-btn-3,#project-btn-4,#project-btn-6"
        ).css({ "background-color": "transparent", color: "#bdb4b4" });
      });

      $("#project-btn-6").click(function () {
        $("#project-btn-6").css({
          "background-color": "#4F9DDC",
          color: "white",
        });
        $(
          "#project-btn-1,#project-btn-2,#project-btn-3,#project-btn-4,#project-btn-5"
        ).css({ "background-color": "transparent", color: "#bdb4b4" });
      });
    });
  });
});

$(document).ready(function () {
  $("#nav-btn").click(function () {
    $("#icn-box").css({
      "margin-top": "20px",
      "margin-bottom": "20px",
      position: "relative",
      left: "0",
    });
    $(".nav-txt").css("color", "#A8B1B6");
    $(".nav-icn").css("color", "#A8B1B6");
    $("#navigation").toggleClass("navi");
  });
});

// HOME SEC END

// CONTACT SEC START

$(document).ready(function () {
  $(".map-btn").click(function () {
    $(".MAP").slideToggle(500);
  });
});

// CONTACT SEC END

// SERVICE SEC START

$(document).ready(function () {
  $("#sm-car-btn").click(function () {
    $("#sm-car-btn").css({ "background-color": "#4F9DDC", color: "white" });
    $("#lg-car-btn,#md-car-btn").css({
      "background-color": "transparent",
      color: "#4F9DDC",
    });
  });

  $("#md-car-btn").click(function () {
    $("#md-car-btn").css({ "background-color": "#4F9DDC", color: "white" });
    $("#sm-car-btn,#lg-car-btn").css({
      "background-color": "transparent",
      color: "#4F9DDC",
    });
  });
  $("#lg-car-btn").click(function () {
    $("#lg-car-btn").css({ "background-color": "#4F9DDC", color: "white" });
    $("#md-car-btn,#sm-car-btn").css({
      "background-color": "transparent",
      color: "#4F9DDC",
    });
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $("#navigation").css({
        "background-color": "white",
        transition: ".4s",
        "box-shadow": "0px 3px 1px #F4F4F4",
      });
      $(".nav-txt").css({ color: "#A8B1B6" });
      $(".nav-icn").css({ color: "#A8B1B6" });
    } else {
      $("#navigation").css({
        "background-color": "transparent",
        "box-shadow": "none",
      });
      $(".nav-txt").css({ color: "#ffffffb6" });
      $(".nav-icn").css({ color: "#ffffffb6" });
    }
  });
});

// SERVICE SEC END

// ABOUT SEC START

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 995) {
      $("#progress-bar-1").css({ width: "50%", "background-color": "#4F9DDC" });
      $("#progress-bar-2").css({ width: "70%", "background-color": "#4F9DDC" });
      $("#progress-bar-3").css({
        width: "100%",
        "background-color": "#4F9DDC",
      });
    } else {
      $("#progress-bar-1").css({ width: "0%" });
      $("#progress-bar-2").css({ width: "0%" });
      $("#progress-bar-3").css({ width: "0%" });
    }
  });
});

$(document).ready(function () {
  $("#ques-2").click(function () {
    $("#ans-2").slideDown(500);
    $("#ans-1").slideUp(500);
    $("#ans-3").slideUp(500);
    $("#ans-4").slideUp(500);
    $("#icn-2").css("transform", "rotate(90deg)");
    $("#icn-1").css("transform", "none");
    $("#icn-3").css("transform", "none");
    $("#icn-4").css("transform", "none");
  });

  $("#ques-1").click(function () {
    $("#ans-1").slideDown(500);
    $("#ans-2").slideUp(500);
    $("#ans-3").slideUp(500);
    $("#ans-4").slideUp(500);
    $("#icn-1").css("transform", "rotate(90deg)");
    $("#icn-2").css("transform", "none");
    $("#icn-3").css("transform", "none");
    $("#icn-4").css("transform", "none");
  });

  $("#ques-3").click(function () {
    $("#ans-3").slideDown(500);
    $("#ans-2").slideUp(500);
    $("#ans-1").slideUp(500);
    $("#ans-4").slideUp(500);
    $("#icn-3").css("transform", "rotate(90deg)");
    $("#icn-1").css("transform", "none");
    $("#icn-2").css("transform", "none");
    $("#icn-4").css("transform", "none");
  });

  $("#ques-4").click(function () {
    $("#ans-4").slideDown(500);
    $("#ans-2").slideUp(500);
    $("#ans-3").slideUp(500);
    $("#ans-1").slideUp(500);
    $("#icn-4").css("transform", "rotate(90deg)");
    $("#icn-1").css("transform", "none");
    $("#icn-3").css("transform", "none");
    $("#icn-2").css("transform", "none");
  });
});

// ABOUT SEC END
