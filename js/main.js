;(function($){

	$(function(){
		$(window).load(function(){

			var acc = document.getElementsByClassName("ba-comment__accordion");
			var i;

			for (i = 0; i < acc.length; i++) {
				acc[i].onclick = function(){
					this.classList.toggle("active");

					this.nextElementSibling.classList.toggle("show");
				}
			}

		})

		$('.ba-tabs-control__link').on('click', function(event){
			event.preventDefault();
			var tabItem = $(this).closest('.ba-tabs-control__item'),
				contentItem = $('.ba-tabs-item'),
				itemPosition = tabItem.index();

			contentItem.eq(itemPosition)
				.add(tabItem)
				.addClass('active')
				.siblings()
				.removeClass('active');


		});
	});

})(jQuery);
