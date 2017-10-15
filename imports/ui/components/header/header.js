import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.helpers({
   
});

Template.header.events({
    'mouseenter #project'(event, instance) {
        $('.project').show();
    },
    'mouseleave #project'(event, instance) {
        $('.project').hide();
    }

});