import './body.html';
import '../../components/header/header.js';
import '../../components/footer/footer.js';

Template.App_body.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.preScrollPosition = 0;
    this.isScrollDown = false;
    this.isBigFooter = true;
});

function updateFooterAndLayoutContainer(isScrollDown) {
    if (isScrollDown) {
        $('footer').height(30);
        // $('footer .footer-container').css('padding-top',0);
        // $('footer .footer-container').css('padding-bottom',0);

        // Update Main layout container
        $('.layout-container').css('height','-moz-calc(100% - (30px + 60px))');
        $('.layout-container').css('height','-o-calc(100% - (30px + 60px))');
        $('.layout-container').css('height','-webkit-calc(100% - (30px + 60px))');
        $('.layout-container').css('height','calc(100% - (30px + 60px))');
    } else {
        $('footer').height(60);
        // $('footer .footer-container').css('padding-top',10);
        // $('footer .footer-container').css('padding-bottom',10);

        // Update Main layout container
        $('.layout-container').css('height','-moz-calc(100% - (60px + 60px))');
        $('.layout-container').css('height','-o-calc(100% - (60px + 60px))');
        $('.layout-container').css('height','-webkit-calc(100% - (60px + 60px))');
        $('.layout-container').css('height','calc(100% - (60px + 60px))');
    }
}

$(function () {
    $( window ).resize(function() {
            changeLayout();
    });
});

function changeLayout () {
    if (parseInt($(window).width()) <= 800) {

    } else {

    }
}

Template.App_body.events({
    'scroll .layout-container'(event, instance){
        var currentPosition = event.target.scrollTop;
        if (currentPosition > instance.preScrollPosition) {
            // ScrollDown
            if (instance.isScrollDown != true) {
                updateFooterAndLayoutContainer(true);
                instance.isScrollDown = true;
                instance.isBigFooter = false;
            }
        } else {
            if (instance.isScrollDown != false) {
                updateFooterAndLayoutContainer(false);
                instance.isScrollDown = false;
                instance.isBigFooter = true;
            }
        }
        instance.preScrollPosition = currentPosition;
    },

    'click footer'(event, instance) {
        if (instance.isBigFooter == false) {
            instance.isBigFooter = true;
            updateFooterAndLayoutContainer(false);
        } else {
            instance.isBigFooter = false;
            updateFooterAndLayoutContainer(true);
        }
    }
});
