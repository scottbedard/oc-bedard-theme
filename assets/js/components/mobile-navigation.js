module.exports = function($) { 'use strict';

    //
    // Mobile navigation
    //
    var MobileNavigation = function(el) {
        var self = this;

        self.$el = $(el);
        self.$ul = $(el).parent().find('ul').first();

        self.$el.on('click', function() {
            self.toggleNavigation();
        });

        $(window).on('resize scroll', function() {
            self.hideNavigation();
        });
    }

    //
    // Toggle the navigation when the button is clicked
    //
    MobileNavigation.prototype.toggleNavigation = function() {
        this.$ul.slideToggle('fast');
    }

    //
    // Hide the navigation when the window is resized or scrolled
    //
    MobileNavigation.prototype.hideNavigation = function() {
        this.$ul.slideUp('fast');
    }

    //
    // Non-conflicting jQuery plugin
    //
    var old = $.fn.mobileNavigation;
    $.fn.mobileNavigation = function () { return new MobileNavigation(this); }
    $.fn.mobileNavigation.Constructor = MobileNavigation;
    $.fn.mobileNavigation.noConflict = function () {
        $.fn.mobileNavigation = old;
        return this;
    }

}(window.jQuery);
