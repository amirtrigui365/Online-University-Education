var PanelExamples = document.getElementsByClassName('ms-PanelExample');
for (var i = 0; i < PanelExamples.length; i++) {
	(function(){
		var PanelExampleButton = PanelExamples[i].querySelector('.ms-Button');
		var PanelExamplePanel = PanelExamples[i].querySelector('.ms-Panel');
		PanelExampleButton.addEventListener('click', function(i){
			new fabric['Panel'](PanelExamplePanel);
		});
	})();
}
