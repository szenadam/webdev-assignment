/*
  Jelenleg CSS-sel nem lehet a <details> tag-et kinyitni ha ki szeretném nyomtatni
  az oldalt (https://github.com/w3c/csswg-drafts/issues/2084).
  Ezért kell egy kis javascript hozzá.
  (https://stackoverflow.com/questions/19646684/force-open-the-details-summary-tag-for-print-in-chrome)
 */
var beforePrint = function() {
  $("details").attr("open", "");
};
var afterPrint = function() {
  $("details").removeAttr("open");
};

// Webkit
if (window.matchMedia) {
  var mediaQueryList = window.matchMedia("print");
  mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
      beforePrint();
    } else {
      afterPrint();
    }
  });
}

// IE, Firefox
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;
