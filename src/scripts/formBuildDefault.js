import formBuilder from "./formBuilder.js";
import apiManager from "./apiManager";
const display = document.getElementById("display-container")


//(title, keysArray, valuesArray, typesArray, id)

//select and textarea are tags on their own and not input types, but the code will understand and build the proper element. Checkbox and radio options are defined each individually, but again the code is set up to understand that.

//The intent with the form builder is that the function that its called within will pull its keys, original values and IDs from information passed from either the function that its called from, or from the data the information from the form will eventually be written to. The function will build all the associated arrays and pass them to the form builder function.

//The other intent is that it simplifies and standardizes creating inputs, as well as their IDs. Class declarations for styling purposes are still to be done outside the code, which is why the form builder returns the form instead of appending it to the dom itself.

//Other improvements: Optional boolean to disable creating a fieldset, or perhaps another passed attribute to indicate the wrapper element.

const title = "Form Builder Function Test"
let id
let wrapperType = "fieldset"
let keysArray = [];
let valuesArray = [];
let typesArray = [];
let arrayOptionsArray = []

apiManager.getOne("Places", 1).then(data => {
    for (const entry of Object.entries(data)){
        console.log(entry);
        if (entry[0] = "id"){
            id = entry[1];
            continue
        }
        keysArray.push(entry[0]);
        valuesArray.push(entry[1]);
        if (entry[0].match(/(id$|ID$|Id$)/)){
            typesArray.push("dropdown")
            const selectSourceArray = entry[0].split("I")
            const optionsArray = [];
            apiManager.getAll(selectSourceArray[0]).then(data => {
                data.forEach(item => {
                    optionsArray.push(item.id)
                })
            })
            arrayOptionsArray.push(optionsArray);
        }
        else if (typeof entry[1] === "boolean"){
            typesArray.push("checkbox");
        }else if (entry[1].match(/\d\d[-/]\d\d[-/]\d\d\d\d/)){
            typesArray.push("date");
        }
    }
})
// const formArray = formBuilder.buildForm(wrapperType, title, keysArray, valuesArray, typesArray, id, arrayOptionsArray)
// const form = formArray[0];
// console.log(formArray[1]);

// display.appendChild(form);