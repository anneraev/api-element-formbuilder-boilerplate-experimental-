import formBuilder from "./formBuilder";

const formObject = function (wholeForm, elementArray, submitButton) {
    this.form = wholeForm;
    this.elements = elementArray;
    this.button = submitButton;
    this.referenceFormElements = function () {
        //array of just the inputs for easy access by the script.
        const inputsArray = [];
        //all the various form inputs are indentified by their key value (the same as the key value that was originall passed to them when the formBuilder function called--they keys stored in the keysArray variable) The keys are also used to identify their label and container. Calling them in this way allows easy access to manipulate the attributes of these elements.
        this.elements.forEach(element => {
            const id = element.id;
            const idArray = id.split("--");
            const key = idArray[3];
            const containerKey = `${key}Container`;
            const labelKey = `${key}Label`;
            this[key] = element;
            this[containerKey] = this[key].parentNode;
            this[labelKey] = this[containerKey].firstChild;
            if (element.tagName.match(/^(INPUT|SELECT|TEXTAREA)$/)) {
                console.log("element", element.tagName);
                inputsArray.push(element);
            }
        })
        this.inputs = inputsArray
    };
    //these methods allow the user to easily add new elements to the form object, as well as the DOM.
    this. newHeader = function (tag, id, type, key, target) {
        const header = formBuilder.buildHeader(tag, id, type, key);
        target.appendChild(header);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = header;
        this[containerKey] = target
        this[labelKey] = target.firstChild

    }
    this.newTextArea = function (type, key, id, target) {
        const textArea = formBuilder.buildTextArea(type, key, id);
        target.appendChild(textArea);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = textArea;
        this[containerKey] = target
        this[labelKey] = target.firstChild

    };
    this.newdropDown = function (type, key, id, value, optionsArray, target) {
        const dropDown = formBuilder.buildDropdown(type, key, id, value, optionsArray)
        target.appendChild(dropDown);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = dropDown;
        this[containerKey] = this[key].parentNode;
        this[labelKey] = this[containerKey].firstChild

    };
    this.newRadio = function (option, optionIndex, id, key, target) {
        const radio = formBuilder.buildOption(option, optionIndex, "radio", id, key)
        target.appendChild(radio);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = radio;
        this[containerKey] = this[key].parentNode;
        this[labelKey] = this[containerKey].firstChild

    };
    this.newCheckbox = function (option, optionIndex, id, key, target) {
        const checkbox = formBuilder.buildOption(option, optionIndex, "checkbox", id, key)
        target.appendChild(checkbox);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = checkbox;
        this[containerKey] = target
        this[labelKey] = this[containerKey].firstChild

    };
    this.newInput = function (type, key, id, value, target) {
        const input = formBuilder.buildInput(type, key, id, value)
        target.appendChild(input);
        const containerKey = `${key}Container`;
        const labelKey = `${key}Label`;
        this[key] = input;
        this[containerKey] = this[key].parentNode;
        this[labelKey] = this[containerKey].firstChild

    };
    this.newButton = function (id, name, targetElement) {
        const button = formBuilder.buildButton(id, name)
        targetElement.appendChild(button);
        const key = `button${name}`
        this[key] = button;
        this[containerKey] = this[key].parentNode;
    };
}

export default {
    createFormObject: function (form, elementArray, submitButton) {
        const newFormObject = new formObject(form, elementArray, submitButton);
        return newFormObject;
    }
}