/**************************************
* glCarousel  - a jQuery plugin
*
* Author: Dave Bui
* Last Updated: Apr 2013
*
**************************************/

 (function($){

	$.fn.glCarousel = function(options) {
	
		var $carousel, $carouselItems, $carouselContainer, $controls, $pagination, itemWidth, itemsCount, currentPage, pixelsToScroll, maxPage, currentInterval;
		
		options = jQuery.extend({ 
			itemsToScroll: 1,
			scrollTime: 400,
			loop: false,
			interval: 0,
			pagination: false
		}, options);
		
		var setupStage = function() {
			$carouselContainer = $carousel.wrap('<div class="gl-carousel" />').parent();
			$carouselContainer.width($carouselContainer.parent().width());
			$carouselItems = $carousel.children();
			itemWidth = $carouselItems.outerWidth(true); // including margin
			itemsCount = $carouselItems.size();
			currentPage = 1;
			maxPage = Math.ceil(itemsCount / options.itemsToScroll);
			pixelsToScroll = itemWidth * options.itemsToScroll;
			$carousel.width(itemWidth * itemsCount);
		};

		var initAutoPlay = function() {
			clearInterval(currentInterval);
			currentInterval = setInterval(function() {
				goToNextPage();
			}, options.interval);
		};

		var goToNextPage = function() {
			if (currentPage < maxPage) 
				currentPage++
			else if (options.loop)
				currentPage = 1;
			if (!options.loop) {
				if (currentPage == maxPage) $controls.find('a.next').addClass("disabled");
				if (currentPage == 2) $controls.find("a.prev").removeClass("disabled");
			}
			$carousel.stop().animate({left: -(currentPage - 1)*pixelsToScroll}, options.scrollTime);
			if (options.pagination) updatePagination();
		};
		
		var goToPrevPage = function() {
			if (currentPage > 1)
				currentPage--;
			else if (options.loop)
				currentPage = maxPage;
			if (!options.loop) {
				if (currentPage == 1) $controls.find('a.prev').addClass("disabled");
				if (currentPage == (maxPage - 1)) $controls.find("a.next").removeClass("disabled");
			}
			$carousel.stop().animate({left: -(currentPage - 1)*pixelsToScroll}, options.scrollTime);
			if (options.pagination) updatePagination();
		};
		
		var injectControls = function() {
			$controls = $('<ul class="gl-carousel-controls"><li><a class="prev' + ((options.loop) ? '' : ' disabled') + '" href="#" title="Previous"><span>Previous</span></a></li><li><a class="next" href="#" title="Next"><span>Next</span></a></li></ul>');
			
			$carouselContainer.after($controls);
			$("a", $controls).click(function(e) {
				if ($(this).is(":not(.disabled)")) {
					if ($(this).hasClass("next"))
						goToNextPage();
					else if ($(this).hasClass("prev"))
						goToPrevPage();
					if (options.interval > 0) initAutoPlay(); // reset the interval when user clicks next/prev
					resetYoutubeIframes();
				}
				e.preventDefault();
			});
		};

		var injectPagination = function() {
			$pagination = $('<ul class="gl-carousel-pagination"></ul>');
			for (var i = 0; i < maxPage; i++) {
				var $thisItem = $('<li><span>' + (i+1) + '</span></li>');
				$('a', $thisItem).click(function(e) {
					e.preventDefault();
				});
				if (i == 0) $thisItem.addClass('active');
				$pagination.append($thisItem);
			}
			$carouselContainer.after($pagination);
		};

		var updatePagination = function() {
			$pagination.children().removeClass('active').eq(currentPage-1).addClass('active');
		};

		var resetYoutubeIframes = function() {
			$carouselItems.eq(currentPage-1).find('iframe').each(function() {
				var $temp = $('<span></span>');
				$(this).after($temp).detach();
				$temp.after($(this)).remove();
			});
		};
		
		return this.each(function(index, element) {
			$carousel = $(this);
			setupStage();
			if (maxPage > 1) {
				injectControls(); // only adding controls if there are more than one "page"
				if (options.pagination) injectPagination();			
			}
			if (options.interval > 0) initAutoPlay();
		});

	}

})(jQuery);