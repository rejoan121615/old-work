$(function(){
  'use static';
  // for nav bar

  $("#responsive_nav").click(function(){
    $("#mainNav").slideToggle("fast");
  });
  // animation for website
// full body loding
setTimeout( function () {

  // body animation
  $("body").fadeIn(1000);
  // heading animation
    setTimeout(function() {
      $(".main_container .main_nav_bar").animate({opacity: "1",paddingTop: "0px"},1000);
      $("#top_section").animate({opacity: "1", padding: "0px"},1000);
      $("#main_highlight h1").animate({opacity: "1",lineHeight: "55px"},1200);
      $("#main_highlight #para").animate({opacity: "1",lineHeight: "20px"},1400);
        // why us
            $("#why_us_wrapper").mouseover(function(){
              $('#why_us_container .why_us_top h1').animate({opacity: "1",padding: "0px"},1000);
              $("#why_us_container .why_us_top p").animate({opacity: "1", lineHeight: "35px",paddingTop: "0px"},1000);
              $("#why_us_bottom").animate({opacity: "1"},1000);
              $("#why_us_bottom p").animate({marginTop: "20px"},1000);
            });

            // loremipsum
            $("#why_us_container").mouseover(function(){
              $("#left_right_container").animate({opacity: "1", paddingTop: "0px"},1000);
            });




    },"slow");



} ,"fast");

});






























//
