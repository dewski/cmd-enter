$(document).on('keydown', '.tweet-box[contenteditable]', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $(this).parents('form').find('.tweet-action').click()
  }
})
