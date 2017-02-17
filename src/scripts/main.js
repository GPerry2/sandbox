//A sample main js file. Use this as a starting point for your app.

$(document).ready(function () {

  //some sample es6 stuff:
  const one = 1; //const!
  [one, 2, 3].map(n => n + 1); //anonymous arrow functions (they don't have 'this')!
  function createCotForm(id = 'myForm') { //default arguments!
    return new cot_form({"id": id});
  }

  let bigString = `you can write 
  multiline strings!`; //also see use of let instead of var!
  let json = {
    prop: 'value',
    blob: {
      deepProp: 'deepValue'
    }
  };
  let {prop, blob: {deepProp}} = json; //destructuring to pull values out of objects!
  console.log(prop, deepProp); //logs value and deepValue

  let newjson = {prop, deepProp}; //easier object literal creation!
  //end sample es6 stuff


  const app = new cot_app("My WRP App");

  //sample code below to create a form
  function createForm(introText = bigString) {
    let f = createCotForm();
    let s1 = f.addSection(new cot_section({
      "id": "intro",
      "title": "Some intro text" + newjson.prop,
      "class": "panel-info"
    }));
    s1.addRow(new cot_row([
      {
        "id": "introText",
        "title": "",
        "type": "html",
        "html": introText
      }
    ]));
    let s2 = f.addSection(new cot_section({
      "id": "sectiontwo",
      "title": "Samples"
    }));
    s2.addRow(new cot_row([
      {
        "id": "firstName",
        "title": "Enter your first name",
        "required": true,
        "placeholder": "John"
      }
    ]));
    s2.addRow(new cot_row([
      {
        "id": "phone",
        "title": "Telephone number",
        "required": true,
        "validationtype": "Phone",
        "placeholder": "###-###-####"
      }
    ]));
    s2.addRow(new cot_row([
      {
        "id": "countries", "title": "Countries you've visited", "type": "multiselect", "multiple": true,
        "choices": [
          {"text": "Canada", "value": "can"},
          {"text": "USA", "value": "usa"},
          {"text": "France", "value": "fra"},
          {"text": "Australia", "value": "aus"}],
        "options": {
          "includeSelectAllOption": false,
          "numberDisplayed": 3,
          "selectAllValue": "ALL",
          "nonSelectedText": "Select countries",
          "allSelectedText": "All"
        }
      }
    ]));
    s2.addRow(new cot_row([
      {
        "id": "location",
        "title": "City you live in",
        "required": true,
        "type": "dropdown",
        "choices": [
          {
            "text": "Please select the city you live in...",
            "value": ""
          }, {
            "text": "Toronto",
            "value": "toronto"
          }, {
            "text": "Hamilton",
            "value": "hamilton"
          }, {
            "text": "Other", "value": "other"
          }
        ]
      },
      {
        "id": "other",
        "title": "Other",
        "required": false
      }
    ]));
    s2.addRow(new cot_row([
      {
        "id": "frenchfries",
        "title": "Do you like french fries?",
        "required": true,
        "type": "radio",
        "choices": [{"text": "Yes", "value": "Yes"}, {"text": "No", "value": "No"}],
        "orientation": "horizontal"
      },
      {
        "id":"date",
        "title":"What is today's date?",
        "required":true,
        "type":"datetimepicker",
        "options":{format:'YYYY-MM-DD'}
      }
    ]));
    s2.addRow(new cot_row([
      {
        "id":"daterange",
        "title":"Pick a date range",
        "required":false,
        "type":"daterangepicker",
        "options":{}
      }
    ]));
    return f;
  }

  app.setBreadcrumb([
    {"name": "My WRP App", "link": "#"}
  ]);
  app.render(function () {
    $('#app-content-top').html("");
    createForm().render({"target": "#app-content-top"});
  });
});
