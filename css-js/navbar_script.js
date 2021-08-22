/*   SHOW AND HIDE NAVBAR   */
_geid("nb-btn").onclick = function() {
	if(_geid("n-menu").offsetWidth > 0 || _geid("n-menu").offsetHeight > 0)
		_geid("n-menu").style.display = "none";
	else
		_geid("n-menu").style.display = "block";
};

/*   SHORTCUT FUNCTIONS   */
function _geid(id) { return document.getElementById(id); }