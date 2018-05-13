(function($) {

    $(document).ready(function(e) {

        var carrousselDiv = $('div#carroussel');
        var imgs = carrousselDiv.children('.component');
        var index = 0;
        var previous = null;

        imgs.each(function(idx, elem) {

            if (idx != index) {

                $(elem).hide();

            } else {

                $(elem).show();
            }

        });

        (function(index) {

            setInterval(function(){

                if (index == imgs.length) {

                    index = 0;
                }


                if (previous != null) {

                    previous.fadeOut(3000);
                }

                $(imgs.get(index)).fadeIn(3500);
                previous = $(imgs.get(index));
                index++;

            }, 4500);
        })(index);
    });
})(jQuery);
