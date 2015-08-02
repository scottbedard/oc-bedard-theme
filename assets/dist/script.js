(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
$(function() {

    var mobileNavigation = require('./components/mobile-navigation');
    $('a[data-component="mobile-navigation"]').mobileNavigation();

})

},{"./components/mobile-navigation":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3YW1wXFx3d3dcXHNjb3R0YmVkYXJkLm5ldFxcdGhlbWVzXFxvYy1iZWRhcmQtdGhlbWVcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L3dhbXAvd3d3L3Njb3R0YmVkYXJkLm5ldC90aGVtZXMvb2MtYmVkYXJkLXRoZW1lL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS1uYXZpZ2F0aW9uLmpzIiwiQzovd2FtcC93d3cvc2NvdHRiZWRhcmQubmV0L3RoZW1lcy9vYy1iZWRhcmQtdGhlbWUvYXNzZXRzL2pzL2Zha2VfMjc2OGE3MDguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy9cbiAgICAvLyBNb2JpbGUgbmF2aWdhdGlvblxuICAgIC8vXG4gICAgdmFyIE1vYmlsZU5hdmlnYXRpb24gPSBmdW5jdGlvbihlbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi4kZWwgPSAkKGVsKTtcbiAgICAgICAgc2VsZi4kdWwgPSAkKGVsKS5wYXJlbnQoKS5maW5kKCd1bCcpLmZpcnN0KCk7XG5cbiAgICAgICAgc2VsZi4kZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZU5hdmlnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmhpZGVOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gVG9nZ2xlIHRoZSBuYXZpZ2F0aW9uIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgLy9cbiAgICBNb2JpbGVOYXZpZ2F0aW9uLnByb3RvdHlwZS50b2dnbGVOYXZpZ2F0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJHVsLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBIaWRlIHRoZSBuYXZpZ2F0aW9uIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkIG9yIHNjcm9sbGVkXG4gICAgLy9cbiAgICBNb2JpbGVOYXZpZ2F0aW9uLnByb3RvdHlwZS5oaWRlTmF2aWdhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiR1bC5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBOb24tY29uZmxpY3RpbmcgalF1ZXJ5IHBsdWdpblxuICAgIC8vXG4gICAgdmFyIG9sZCA9ICQuZm4ubW9iaWxlTmF2aWdhdGlvbjtcbiAgICAkLmZuLm1vYmlsZU5hdmlnYXRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTW9iaWxlTmF2aWdhdGlvbih0aGlzKTsgfVxuICAgICQuZm4ubW9iaWxlTmF2aWdhdGlvbi5Db25zdHJ1Y3RvciA9IE1vYmlsZU5hdmlnYXRpb247XG4gICAgJC5mbi5tb2JpbGVOYXZpZ2F0aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuZm4ubW9iaWxlTmF2aWdhdGlvbiA9IG9sZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59KHdpbmRvdy5qUXVlcnkpO1xuIiwiJChmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2JpbGVOYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21vYmlsZS1uYXZpZ2F0aW9uJyk7XG4gICAgJCgnYVtkYXRhLWNvbXBvbmVudD1cIm1vYmlsZS1uYXZpZ2F0aW9uXCJdJykubW9iaWxlTmF2aWdhdGlvbigpO1xuXG59KVxuIl19
