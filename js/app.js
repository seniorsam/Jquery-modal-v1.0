(function(){
	var modalContainer = {

		modalBox:$('.modal-container'),

		modalStage:$('.modal-stage'),

		init:
			function(){
				$('.modal-item').on('click', function(){
					$('<img/>',{
						src:$(this).data('photo'),
						alt:'empty'
					})
						.appendTo(modalContainer.modalStage);
						modalContainer.show();
				});
			},

		show:
			function(){
				modalContainer.close.call( $('.exitbut') );
				modalContainer.modalBox.fadeIn(300);
			},	

		close:
			function(){
				this.on('click',function(){
					// hide the container
					modalContainer.modalBox.fadeOut(300);
					// remove the picture
					setTimeout(function(){modalContainer.modalStage.find('img').remove();},300);
				});
			}

	}; 

	modalContainer.init();
}());