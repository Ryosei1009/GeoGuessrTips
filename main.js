$(window).on('load', function() {
	var hash = location.hash;
	if(hash) {
		$('body,html').scrollTop(0);
		setTimeout(function() {
			var target = $(hash);
			var scroll = target.offset().top;
			$('body,html').animate({scrollTop:scroll},500);
		}, 100);
	}
});

$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});