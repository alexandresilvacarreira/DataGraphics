dataModule.directive("isotopeContainer", function ($timeout) {
	return {
		restrict: "A",
		// scope: true,
		link: function (scope, elem, attrs) {

			var $grid = $(".grid").isotope({
				itemSelector: ".grid-item",
				// layoutMode: "fitRows"
				masonry: {
					columnWidth: ".grid-item"
				}
			})

			// >>>>>>>>>> Make AngularJS & Isotope compatible >>>>>>>>>>
			scope.$watch('items', function () {
                    $timeout(function () {
						elem.isotope('reloadItems').isotope({
							itemSelector: ".grid-item",
							masonry: {
								columnWidth: ".grid-item"
							}
						});

						// >>>>>>>>>> Toggle Size >>>>>>>>>>
						$(".grid-item").on("click", function() {
							$(this).toggleClass("col-sm-6 col-md-6 col-lg-6");
							$grid.isotope("layout");
						})
						// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                    });
                }, true);
			// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

			$grid.imagesLoaded(function() {
				$grid.isotope("layout");
			})

			// angular.element(window.document).on("scroll", function() {
			// 	$grid.isotope("shuffle");
			// })
		}
	}
})