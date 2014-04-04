# gaffa-textbox

textbox view for gaffa

## Install:

    npm i gaffa-textbox

## Add to gaffa:

    gaffa.registerConstructor(require('gaffa-textbox'));

# API

## Properties (instanceof Gaffa.Property)

### value (get and set)

    The rendered elements value.

    when the rendered element triggers a change event, it will set the elements value into this binding.

    The event which causes the element to set the value can be overriden by assigning an event name to 'updateEventName':

        textbox.updateEventName = 'keyup';

### type (get)

    The rendered elements type attribute.

### maxLength (get)

    The rendered elements maxLength attribute.

### placeholder (get)

    The rendered elements placeholder attribute.

### disabled (get)

    The rendered elements disabled attribute.

    The value recieved is truthy checked, and either sets the disabled attribute to disabled, or removes the disabled attribute.

### required (get)

    The rendered elements required attribute.

    The value recieved is truthy checked, and either sets the required attribute to required, or removes the required attribute.