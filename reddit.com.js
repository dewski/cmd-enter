$(document).on('keydown', '.usertext-edit textarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $(this).parents('form').submit()
  }
})
