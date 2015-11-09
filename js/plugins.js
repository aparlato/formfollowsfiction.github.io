// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// ISOTOPE

$(window).load(function() {

    // color theme buttons
    var $themes = $('.theme');

    $themes.each(
      function(i) {
            $(this).css("background-color", Please.make_color());
        }
      );

  // init Isotope
  var $container = $('.grid').isotope({
    itemSelector: '.item',
    filter: '.theme',
    layoutMode: 'masonry',
    masonry: {
        gutter: 15
    }
  });

   $('#main').on( 'click', 'button', function() {
    var filterText = document.getElementById("filters");
    if(filterText.innerHTML == "about"){
      var filterValue = '.name';
      filterText.innerHTML = "by";
      $container.isotope({ filter: filterValue });
    } else {
      var filterValue = '.theme';
      filterText.innerHTML = "about";
      $container.isotope({ filter: filterValue });
    }

  });
  
});
