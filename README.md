===============formBuilder===================================

//This creates an array of the created elements, iterate through them, dynamically build key/value pairs that refer to the element, store the object. That way, any of the form's elements can be easily referred to. See the comments in formObjectManager.js for more information on how to call specific elements.

//call function:
// formBuilder.buildForm: function (wrapperType, title, keysArray, valuesArray, typesArray, id, arrayOptionsArray)

// The following must be passed to the form builder call function:

// wrappperType = type of wrapper that the form will be displayed in (div, fieldset, ect.)

// let title = "Form Builder Function Test"

// let id = id for form

// let wrapperType = type of wrapper for form

// let keysArray = array of keys associated with each input in the form.

// let valuesArray = array of values associated with each input in the form.

// let typesArray = array of types of inputs to create.

// let arrayOptionsArray = array of arrays containing options. Ideally, these should come from an API database containing those options, and should arrive as an array in the order they appear in the databese. That array should be pushed to this array to create an array of arrays.

// One of each much be defined for EVERY input. If one of the above are not valid, enter "undefined" for that entry.

//ID style guide:
//Whole Form ("form"--id)
//wrapper for each item ("wrapper"--id--type)
//label for each item ("label"--id--type--key--optionId(if multiple))
//field item ("field"--id--type--key--optionId(if multiple))

//Title - defined title.
// id - id of data object.
// type - type of input
// key - name of item in data.

//A reference to the object needs to be made inside the button's event listener. Makes it easy to access.

//One can easily set up a form to be created by using formBuilder.(setWrapper(element type), set title(title string), addKey(key string), addValue(value string), addType(input type string), setId(id integer), addOptions(array of options)). Then, one call the form with formBuilder.createForm (no arguments needed). Store the returned form in a variable and access the form with nameOfFormVariable[0] and the object with nameOfFormVariable[1].

==============formObject Manager===================

// To call a specific input element, use this template(where "key" is the key of the input originally defined in the keysArray):

// referenceVariableContainingObject.key

// To get the label of that input:

// referenceVariableContainingObject.keyLabel

// To get the container around the label and input:

// referenceVariableContainingObject.keyContainer.

//To get a specific option from a select element:

//referenceVariableContainingObject.keyid (where id is the numbered position of the option in the list of options, starting with 0).

// Each form object has methods for adding new elements to the form. Each has specific data that needs to be passed, so examine the structure of the object constructor defined in formObject.js. Of note, however, is the "target" attribute which defines which element the new element will be appended to.

==========API Manager ========================
getALL: Gets all items from specified API list.
getOne: Gets the specified object from the API.
Post: Posts an objec to the specified list in the API.
delete: delete's specified object from API.

========Dom Manager=====================
postToDom: Posts specified item to the display dom element.
clearElement: Clears specified element of all chidlren.
removeElement: Removes specified element from the Dom.

=====htmLBuilder=================================
buildElement(type, id, content, value): builds an element from the speficied strings passed to it.