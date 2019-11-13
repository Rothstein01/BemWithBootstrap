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
// I delete delay from hide() and show() because in my opinion it is not beautiful
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
        $(".filter > div").show();
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
      $(".filter > div").hide();
      var filter = $(this).attr("filter");
      $(".filter > div[filter=" + filter + "]").show();
      // my version change for button effect
      /*$(".button[filter]").css("background", "inherit");
      $(this).css("background", "#00897b");
      $(".button[filter]").css("color", "black");
      $(this).css("color", "white"); */
    }
  });
  /* Slider */
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: "dots-style",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* Menu */
  $('ul.menu a[href^="#"').click(function() {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      500
    );
    $('ul.menu a[href^="#"').css({ color: "#212121" });
    $(this).css({ color: "#004bee" });
    return false;
  });
  /* Mobile menu */
  $(".menu-icon").click(function() {
    $("nav").slideToggle(500);
    $("ul.menu").css({
      display: "flex",
      "flex-direction": "column"
    });
    if ($(".menu-icon").html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });
  /* Button Up */
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) $("#toTop").fadeIn();
    else $("#toTop").fadeOut();
  });
  $("#toTop").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      800
    );
  });
});
