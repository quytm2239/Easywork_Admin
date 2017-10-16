import './body.html';
import '../../components/header/header.js';
import '../../components/footer/footer.js';

Template.App_body.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.preScrollPosition = new ReactiveVar(0);
    this.toggle = 1;
});

Template.App_body.events({
    'click footer'(event, instance) {
        if (instance.toggle == 1) {
            $('footer').height(40);
            instance.toggle = 0;
        } else {
            $('footer').height(80);
            instance.toggle = 1;
        }
    }
});
