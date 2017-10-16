import './body.html';
import '../../components/header/header.js';
import '../../components/footer/footer.js';

Template.App_body.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.preScrollPosition = new ReactiveVar(0);
});

Template.App_body.events({
    'scroll window'(event, instance) {
        var iCurScrollPos = event.target.scrollTop;
        if (iCurScrollPos > instance.preScrollPosition) {
            $('footer').hide();
            // $('.layout-container').css('height','-moz-calc(100% - (0px + 60px))');
            // $('.layout-container').css('height','-webkit-calc(100% - (0px + 60px))');
            // $('.layout-container').css('height','-o-calc(100% - (0px + 60px))');
            // $('.layout-container').css('height','calc(100% - (0px + 60px))');
        } else {
            $('footer').show();
            // $('.layout-container').css('height','-moz-calc(100% - (80px + 60px))');
            // $('.layout-container').css('height','-webkit-calc(100% - (80px + 60px))');
            // $('.layout-container').css('height','-o-calc(100% - (80px + 60px))');
            // $('.layout-container').css('height','calc(100% - (80px + 60px))');
        }
        instance.preScrollPosition = iCurScrollPos;
    },

    'click footer'(event, instance) {
        $('footer').hide();
        // $('.layout-container').css('height','-moz-calc(100% - (0px + 60px))');
        // $('.layout-container').css('height','-webkit-calc(100% - (0px + 60px))');
        // $('.layout-container').css('height','-o-calc(100% - (0px + 60px))');
        // $('.layout-container').css('height','calc(100% - (0px + 60px))');
    }
});
