import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.helpers({
   
});

Template.header.events({
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