$(document).on('keydown', 'textarea#wmd-input, form[id^="add-comment-"] textarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $(this).parents('form').submit();
  }
})
