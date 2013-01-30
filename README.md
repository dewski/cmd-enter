# cmd-enter

Every textarea should let you submit comments by pressing cmd-enter or ctrl-enter.
For every site that doesn't support it, a kitten weeps. Here's to fixing that.

## Requirements

- [dotjs](https://github.com/defunkt/dotjs)

## Supported Sites

- [dribbble](cmd-enter/dribbble.com.js)
- [hackernews](cmd-enter/news.ycombinator.com.js)
- [reddit](cmd-enter/reddit.com.js)
- [twitter](cmd-enter/twitter.com.js)

## Contributing

Say for example reddit.com is giving you issues and you want to use cmd-enter to submit comments,
just create a reddit.js.com file and add the JavaScript required to submit comments (example below).
jQuery is available from dotjs regardless if the target site has it or not.

Here is an example file:

```js
$(document).on('keydown', '.usertext-edit textarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $(this).parents('form').submit()
  }
})
```

Hints:

- `.usertext-edit textarea` is the selector for all textareas we are listening to.
- `e.keyCode == 13` - 13 here is the enter key.
- `(e.metaKey || e.ctrlKey)` is either the command key or ctrl key.

## Note on Patches/Pull Requests

- Fork the project.
- Add the cmd-enter behavior to a site.
- Send me a pull request.
