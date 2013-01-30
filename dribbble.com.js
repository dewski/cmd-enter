$(document).on('keydown', '#add-comment', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $('#post-comment-btn').click()
  }
})
