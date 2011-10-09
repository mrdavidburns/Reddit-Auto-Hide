$(window).scroll(function() {
    var link = $('#siteTable .hide-button a:eq(0)')
    var thing = link.closest('.thing');
    trackHideLink(thing, link);
});

function trackHideLink(thing, link) {
  var div = thing.offset().top + thing.height();
  var pos = div - $(window).scrollTop();
  if ( pos <= 0 ) {
    var data = thing.attr('data-fullname');
    var hide = "div[data-fullname=" + data + "] .hide-button span a";
    $(hide).click();
    $("div[data-fullname=" + data + "]").remove();
    $('html,body').animate({
        scrollTop: $("#siteTable:first").offset().top
    }, 0);
  } 
}