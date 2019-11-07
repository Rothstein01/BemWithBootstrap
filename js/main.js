$(document).ready(function() {
  $('.button[filter = "wd"]').click(function() {
    if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".filter > div").hide(300);
      $('.filter > div[filter="wd"]').show(300);
      // You need change this properties (background and color) in style as !important because jquery style over native style. Need find out about it.
      $(".button[filter]").css("background", "inherit");
      $(this).css("background", "#00897b");
      $(".button[filter]").css("color", "black");
      $(this).css("color", "white");
    }
  });

  $('.button[filter = "ui"]').click(function() {
    if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".filter > div").hide(300);
      $('.filter > div[filter="ui"]').show(300);
      //
      $(".button[filter]").css("background", "inherit");
      $(this).css("background", "#00897b");
      $(".button[filter]").css("color", "black");
      $(this).css("color", "white");
    }
  });

  $('.button[filter = "moc"]').click(function() {
    if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".filter > div").hide(300);
      $('.filter > div[filter="moc"]').show(300);
      //
      $(".button[filter]").css("background", "inherit");
      $(".button[filter]").css("color", "black");
      $(this).css("background", "#00897b");
      $(this).css("color", "white");
    }
  });

  $('.button[filter = "all"]').click(function() {
    $(".button[filter]").attr("val", "off");
    $(".filter > div[filter]").show(300);
    //
    $(".button[filter]").css("background", "inherit");
    $(this).css("background", "#00897b");
    $(".button[filter]").css("color", "black");
    $(this).css("color", "white");
  });
});
