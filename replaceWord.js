(function() {
  function replaceTwitterWord() {
    var tweetContent = document.querySelectorAll(".tweet-text");

    [].slice.call(tweetContent).forEach(function(el){
      var newContent = el.innerHTML.replace(/OLD_WORD_NO_QUOTATION_MARKS/g,"NEW_WORD_IN_QUOTATION MARKS");
      if (newContent != el.innerHTML) {
        el.innerHTML = newContent;
      }
    });
  }

  function tick() {
    replaceTwitterWord();
    window.setTimeout(tick, 5000);
  }

  tick();
})();
