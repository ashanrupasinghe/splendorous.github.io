jQuery(Document).ready(function() {
    "use strict"
    $("#slider-carousle").carouFredSel({
        responsive: true,
        width: "100%",
        circular: true,
        prev: "#prev",
        next: "#next",
        scroll: {
            items: 1,
            duration: 500,
            pouseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }
    }
    );

    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("header").addClass("secondary");
        } else if ($("header").hasClass("secondary")) {
            $("header").removeClass("secondary");
        }
    });

    $("#menu").slicknav({
        label: '',
    });
});