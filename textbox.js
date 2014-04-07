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

module.exports = Textbox;