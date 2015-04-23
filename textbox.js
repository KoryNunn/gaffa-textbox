var Gaffa = require('gaffa'),
    FormElement = require('gaffa-formelement');

function Textbox(){}
Textbox = Gaffa.createSpec(Textbox, FormElement);
Textbox.prototype._type = 'textbox';

Textbox.prototype.render = function(){
    FormElement.prototype.render.call(this);
};

Textbox.prototype.maxLength = new Gaffa.Property(function(view, value){
    if(value != null){
        view.formElement.setAttribute('maxlength', value);
    }else{
        view.formElement.removeAttribute('maxlength');
    }
});

Textbox.prototype.min = new Gaffa.Property(function(view, value){
    if(value != null) {
        view.formElement.setAttribute('min', value);
    } else {
        view.formElement.removeAttribute('min');
    }
});
Textbox.prototype.max = new Gaffa.Property(function(view, value){
    if(value != null) {
        view.formElement.setAttribute('max', value);
    } else {
        view.formElement.removeAttribute('max');
    }
});

module.exports = Textbox;