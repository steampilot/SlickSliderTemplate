/**
 * Created by jerome.roethlisberge on 30.08.2016.
 */
$(document).ready(function () {
	$(".slider").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: "unslick"
			}
		]
	});
});