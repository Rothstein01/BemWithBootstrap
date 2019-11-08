//This is 1 version plugin + my change for button effect
/* $(document).ready(function() {
  $('.button[filter = "wd"]').click(function() {
    if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".filter > div").hide(300);
      $('.filter > div[filter="wd"]').show(300);
      // You need change this properties (background and color) in style as !important because jquery style over native style and add style for button[filter = "all"]. Need find out about it.
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
}); */

//This is 2 version plugin
$(document).ready(function() {
  $(".button[filter]").click(function() {
    if ($(this).attr("filter") == "all") {
      if ($(this).attr("val") == "off") {
        $(".button[filter]").attr("val", "off");
        $(this).attr("val", "on");
        //Version author for button effect (work for me only set 2 class(exp. .button.focused but not .focused because style overlaps))
        $(".button[filter]").removeClass("focused");
        $(this).addClass("focused");
        //
        $(".filter > div").show(300);
        // my version change for button effect
        /*$(".button[filter]").css("background", "inherit");
        $(this).css("background", "#00897b");
        $(".button[filter]").css("color", "black");
        $(this).css("color", "white"); */
      }
    } else if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      //Version author for button effect (work for me only set 2 class(exp. .button.focused but not .focused because style overlaps))
      $(".button[filter]").removeClass("focused");
      $(".button[filter='all']").removeClass("all");
      $(this).addClass("focused");
      //
      $(".filter > div").hide(300);
      var filter = $(this).attr("filter");
      $(".filter > div[filter=" + filter + "]").show(300);
      // my version change for button effect
      /*$(".button[filter]").css("background", "inherit");
      $(this).css("background", "#00897b");
      $(".button[filter]").css("color", "black");
      $(this).css("color", "white"); */
    }
  });
  //Slider
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style'
  });
});
