import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.helpers({
   
});

var IS_MOBILE = navigator.userAgent.match(/android/i) != null || navigator.userAgent.match(/iPhone/i) != null;
   
Template.header.onCreated( function headerOnCreated(){
});

Template.header.onRendered(function () {
    if (IS_MOBILE) {
        $('#menu-icon').css('display','block');
        $('#menu-icon').css('position','fixed');
        $('#cbp-hrmenu').hide();
        $('#cbp-hrmenu').css('position','static');
        $('#cbp-hrmenu').css('margin-left','2em');
    }
    console.log(IS_MOBILE);
});

function changeLayout () {
    console.log($(window).width());
    if (parseInt($(window).width()) <= 700) {
        $('#menu-icon').css('display','block');
        $('#menu-icon').css('position','fixed');
        $('#cbp-hrmenu').hide();
        $('#cbp-hrmenu').css('position','static');
        $('#cbp-hrmenu').css('margin-left','4em');
    } else {
        $('#menu-icon').hide();
        $('#menu-icon').css('display','none');
        $('#cbp-hrmenu').show();
        $('#menu-icon').removeClass("on");
        $('#cbp-hrmenu').css('position','fixed');
        $('#cbp-hrmenu').css('margin-left','auto');
    }
}

$(function () {
    $( window ).resize(function() {
            changeLayout();
    });
});

Template.header.events({
    // menu-icon
    'click #menu-icon'(event, instance) {
        if ($( "#menu-icon" ).hasClass( "on" )) {
          $('#cbp-hrmenu').hide();
          $('#menu-icon').removeClass("on");
        } else {
          $('#cbp-hrmenu').show();
          $('#menu-icon').addClass("on");
        }
    },
    'mouseenter #products'(event, instance) {
        $('.products').slideDown(300);
    },
    'mouseenter #downloads'(event, instance) {
        $('.downloads').slideDown(300);
    },
    'mouseenter #applications'(event, instance) {
        $('.project').slideDown(300);
    },
    'mouseenter #project'(event, instance) {
        $('.project').slideDown(300);
    },
    'mouseenter #freeware'(event, instance) {
        $('.freeware').slideDown(300);
    },

    //leave mouse
    'mouseleave #products'(event, instance) {
        $('.cbp-hrsub').hide();
    },
    'mouseleave #downloads'(event, instance) {
        $('.cbp-hrsub').hide();
    },
    'mouseleave #project'(event, instance) {
        $('.cbp-hrsub').hide();
    },
    'mouseleave #applications'(event, instance) {
        $('.cbp-hrsub').hide();
    },
    'mouseleave #freeware'(event, instance) {
        $('.cbp-hrsub').hide();
    }

});