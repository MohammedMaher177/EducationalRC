$("document").ready(()=>{
    $("#loading").fadeOut(500);
})

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
$("#showAnsBtn").click(()=>{
  $(".hidden").css("visibility","visible")
  $(".correct").css("visibility","visible")
  $("#showAnsBtn").addClass("disabled border-0")
})
$("#resetAnsBtn").click(()=>{
  $(".hidden").css("visibility","hidden")
  $(".correct").css("visibility","hidden")
  $("#showAnsBtn").removeClass("disabled border-0")
})
