var ansContainer = "";
let tabAnsFlag = false;
let catAnsFlag = false;
let mapAnsFlag = false;
const successAudio = document.querySelector("#success-audio");
const worngAudio = document.querySelector("#wrong-audio");
$("document").ready(() => {
  $("#loading").fadeOut(500);
});
$("#dummy-btn").click(() => {
  $(".layer").css("display", "block");
  $("#main-page").css("display", "none");
  $("#help-section").css("display", "none");
  $("#dummy-section").css("display", "block");
});
$("#help-btn").click(() => {
  $(".layer").css("display", "block");
  $("#main-page").css("display", "none");
  $("#help-section").css("display", "block");
  $("#dummy-section").css("display", "none");
});
$(".close-btn").click(() => {
  $(".layer").css("display", "none");
  $("#main-page").css("display", "block");
  $("#help-section").css("display", "none");
  $("#dummy-section").css("display", "none");
});
$("#showAnsBtn").click(() => {
  $(".hidden").css("visibility", "visible");
  $(".correct").css("visibility", "visible");
  $("#showAnsBtn").addClass("disabled border-0");
  ansContainer = "";
  $("#btnP").removeClass("bg-info");
  $("#btnP").addClass("disabled");
  $("#btnA").removeClass("bg-info");
  $("#btnA").addClass("disabled");
  console.log(ansContainer);
});
$("#resetAnsBtn").click(() => {
  $(".hidden").css("visibility", "hidden");
  $("#tap span").addClass("hidden");
  $("#cat span").addClass("hidden");
  $("#map span").addClass("hidden");
  $(".correct").css("visibility", "hidden");
  $("#showAnsBtn").removeClass("disabled border-0");
  ansContainer = "";
  $("#btnP").removeClass("bg-info");
  $("#btnA").removeClass("bg-info");
  console.log(ansContainer);
});
$("#btnA").click(() => {
  $("#btnA").toggleClass("bg-info");
  $("#btnP").removeClass("bg-info");
  if (ansContainer === "p" || ansContainer === "") {
    ansContainer = "a";
  } else {
    ansContainer = "";
  }
  console.log(ansContainer);
});
$("#btnP").click(() => {
  $("#btnP").toggleClass("bg-info");
  $("#btnA").removeClass("bg-info");
  if (ansContainer === "a" || ansContainer === "") {
    ansContainer = "p";
  } else {
    ansContainer = "";
  }
  console.log(ansContainer);
});
$("#tap").click(() => {
  if (!tabAnsFlag) {
    if (ansContainer === "a") {
      $("#tap span").removeClass("hidden");
      $("#tap").removeClass("cursor-pointer");
      $("#tap .correct").css("visibility", "visible");
      tabAnsFlag = true;
      successAudio.play();
    } else if (ansContainer === "p") {
      worngAudio.play();
      $("#tap .wrong").fadeIn(1000);
      $("#tap .wrongAns").fadeIn(1000);
      setTimeout(() => {
        $("#tap .wrong").fadeOut(500);
        $("#tap .wrongAns").fadeOut(500);
      }, 1500);
    } else if (ansContainer === "") {
      return;
    }
  }
  isDone()
});
$("#map").click(() => {
  if (!mapAnsFlag) {
    if (ansContainer === "a") {
      $("#map span").removeClass("hidden");
      $("#map").removeClass("cursor-pointer");
      $("#map .correct").css("visibility", "visible");
      mapAnsFlag = true;
      successAudio.play();
    } else if (ansContainer === "p") {
      worngAudio.play();
      $("#map .wrong").fadeIn(1000);
      $("#map .wrongAns").fadeIn(1000);
      setTimeout(() => {
        $("#map .wrong").fadeOut(500);
        $("#map .wrongAns").fadeOut(500);
      }, 1500);
    } else if (ansContainer === "") {
      return;
    }
  }
  isDone()
});
$("#cat").click(() => {
  if (!catAnsFlag) {
    if (ansContainer === "p") {
      $("#cat span").removeClass("hidden");
      $("#cat").removeClass("cursor-pointer");
      $("#cat .correct").css("visibility", "visible");
      catAnsFlag = true;
      successAudio.play();
    } else if (ansContainer === "a") {
      worngAudio.play();
      $("#cat .wrong").fadeIn(1000);
      $("#cat .wrongAns").fadeIn(1000);
      setTimeout(() => {
        $("#cat .wrong").fadeOut(500);
        $("#cat .wrongAns").fadeOut(500);
      }, 1500);
    }
  }
  isDone()
});
function isDone(){
  if(catAnsFlag && mapAnsFlag && tabAnsFlag){
    $("#showAnsBtn").addClass("disabled border-0");
  }
}