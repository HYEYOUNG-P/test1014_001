
$(document).ready(function(){ // 실행틀 시작



  // 전체메뉴

  $(".all-wrap").hide();
  
 
  $(".sitemap").click(function(){
    $(".all-wrap").fadeIn();
  });

  
  $(".all-close").click(function(){
    $(".all-wrap").fadeOut();
  });

  // 전체메뉴 끝


  //검색영역
  
  $(".search").hide();
  $(".btn-search").click(function(){
    $(".search").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search").fadeOut();
  });

  //언어설정
  $(".language ul").hide();
  $(".language").click(function(){
    $(".arrow").toggleClass("active");
    $(this).children("ul").slideToggle();
  });


  //.depth2,.depth2_bg

  $(".depth2, .depth2-bg").hide();

 

  $(".gnb > li").mouseenter(function(){
    $(".depth2-bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function(){
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });


  //모바일 메뉴

  $(".ham").click(function(){
    $(".mgnb-wrap").animate({
      "left" : "0"
    });
  });

 
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({
      "left" : "100%"
    });

    $(".mdepth2").hide();
    
  });

  // 모바일 2차메뉴

  $(".mdepth2").hide();
  $(".mgnb > li").click(function(){
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  })


}); // 실행틀 끝


