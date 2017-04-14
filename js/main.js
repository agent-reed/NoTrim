// Written by Andrew Gentry on April 14 2017 @ Trident Coffee Shop

var idAdded = false;

function showSig () {
    var e=document.querySelector(".aH1");

    // Courtesy of the TrickGmail Bookmarklet:
	e&&e.click();
	var l=document.querySelector("div.gmail_signature"),o=document.querySelector("input[name='composeid']");
	l&&o&&(l.innerHTML+="<br><small style='color:#fff'>Ref #"+o.value+"</small>");
	//
	idAdded = true;
}

$(function(){
	document.addEventListener("click", function(){
		var visibleSend = $( "div[data-tooltip*='Send']" ).is(':visible');
  		if (visibleSend && !idAdded) {
  			showSig();
  		} else if (!visibleSend && idAdded) {
  			idAdded = false;
  		}
	});
});