$('.tab-contents>div').hide();
$('.tab-contents>div').first().slideDown();
$('.tab-buttons li').click(function() {
  let thisclass = $(this).attr('class');
  $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
  $('.tab-contents>div').each(function() {
    if($(this).hasClass(thisclass)) {
      $(this).fadeIn(400);
    } else {
      $(this).hide();
    }
  });
  $('.tab-buttons li').each(function() {
    if($(this).hasClass(thisclass)) {
      $(this).css('opacity', '1');
      $(this).css('cursor', 'default');
    } else {
      $(this).css('opacity', '0.5');
      $(this).css('cursor', 'pointer');
    }
  });
});
