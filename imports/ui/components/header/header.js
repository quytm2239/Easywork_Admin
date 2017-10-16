import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.helpers({
   
});

Template.header.events({
    'mouseenter #products'(event, instance) {
        $('.products').slideDown( "slow");
    },
    'mouseenter #downloads'(event, instance) {
        $('.downloads').slideDown( "slow");
    },
    'mouseenter #applications'(event, instance) {
        $('.project').slideDown( "slow");
    },
    'mouseenter #project'(event, instance) {
        $('.project').slideDown( "slow");
    },
    'mouseenter #freeware'(event, instance) {
        $('.freeware').slideDown( "slow");
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