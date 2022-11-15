/

/* begin Layout */
jQuery(function () {
     var c = jQuery('div.art-content');
    if (c.length !== 1) return;
    var s = c.parent().children('.art-layout-cell:not(.art-content)');

    jQuery(window).bind('resize', function () {
        c.css('height', 'auto');
        var innerHeight = 0;
        jQuery('#art-main').children().each(function() {
            if (jQuery(this).css('position') != 'absolute')
                innerHeight += jQuery(this).outerHeight(true);
        });
        var r = jQuery('#art-main').height() - innerHeight;
        if (r > 0) c.css('height', r + c.parent().height() + 'px');
    });

    if (jQuery.browser.msie && parseInt(jQuery.browser.version) < 8) {
        jQuery(window).bind('resize', function() {
            var w = 0;
            c.hide();
            s.each(function() { w += this.clientWidth; });
            c.w = c.parent().width(); c.css('width', c.w - w + 'px');
            c.show();
        });
    }

    jQuery(window).trigger('resize');
});/* end Layout */

/* begin VMenu */
jQuery(function() {
    if (!jQuery('html').hasClass('ie7')) return;
    jQuery('ul.art-vmenu li:not(:first-child),ul.art-vmenu li li li:first-child,ul.art-vmenu>li>ul').each(function () { jQuery(this).append('<div class="art-vmenu-separator"> </div><div class="art-vmenu-separator-bg"> </div>'); });
});


/* end VMenu */

/* begin VMenuItem */


jQuery(function() {
    jQuery('ul.art-vmenu a').click(function () {
        var a = jQuery(this);
        a.parents('ul.art-vmenu').find("ul, a").removeClass('active');
        a.parent().children('ul').addClass('active');
        a.parents('ul.art-vmenu ul').addClass('active');
        a.parents('ul.art-vmenu li').children('a').addClass('active');
    });
});
/* end VMenuItem */

/* begin Button */
function artButtonSetup(className) {
    jQuery.each(jQuery("a." + className + ", button." + className + ", input." + className), function (i, val) {
        var b = jQuery(val);
        if (!b.parent().hasClass('art-button-wrapper')) {
            if (b.is('input')) b.val(b.val().replace(/^\s*/, '')).css('zoom', '1');
            if (!b.hasClass('art-button')) b.addClass('art-button');
            jQuery("<span class='art-button-wrapper'><span class='art-button-l'> </span><span class='art-button-r'> </span></span>").insertBefore(b).append(b);
            if (b.hasClass('active')) b.parent().addClass('active');
        }
        b.mouseover(function () { jQuery(this).parent().addClass("hover"); });
        b.mouseout(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().removeClass('active'); });
        b.mousedown(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().addClass('active'); });
        b.mouseup(function () { var b = jQuery(this); if (!b.hasClass('active')) b.parent().removeClass('active'); });
    });
}
jQuery(function() { artButtonSetup("art-button"); });

/* end Button */