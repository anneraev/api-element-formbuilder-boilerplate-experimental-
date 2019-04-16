An all in one API manager, element and form builder.

The following must be passed to the form builder call function:

const title = "Form Builder Function Test"

id = id for form

let wrapperType = type of wrapper for form

let keysArray = array of keys associated with each input in the form.

let valuesArray = array of values associated with each input in the form.

let typesArray = array of types of inputs to create.

let arrayOptionsArray = array of arrays containing options. 

One of each much be defined for EVERY input. If one of the above are not valid, enter "undefined" for that entry.

Along with the form itself, an object is created that contains a reference to every element within that form, including the inputs. This makes it easy to target them for styling, adding classes, removal, or (most importantly) for getting the values of the inputs. An array of all inputs is also a separate attribute of the form object (formObject.inputs).

To call a specific input element, use this template(where "key" is the key of the input originally defined in the keysArray):

referenceVariableContainingObject.key

To get the label of that input:

referenceVariableContainingObject.keyLabel

To get the container around the label and input:

referenceVariableContainingObject.keyContainer.

Each form object has methods for adding new elements to the form. Each has specific data that needs to be passed, so examine the structure of the object constructor defined in formObject.js. Of note, however, is the "target" attribute which defines which element the new element will be appended to.

Finally, an experimental default form maker is more or less functional, though missing some features. Not reccommended for use, though with many limitations it can potentially build out a form using the data from an API as a template to tell it form types to use. At this point, there are too many restrictions to make it terribly useful.
