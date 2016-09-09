(function(w){
	var Drag = function (id){
		this.box = document.getElementById(id);
		this.ddd = 	document.getElementsByTagName('input');
	}

	var Drag = function(options){
		this.ele = options.dragEle;
	
	}
	
	window.Drag = Drag;
})(window)
