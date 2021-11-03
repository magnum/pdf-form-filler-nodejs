let pdfFiller  = require('pdffiller-aws-lambda');
let path_source = "test/input_form.pdf";
let path_destination =  "test/output.pdf";

let firstname = "Antonio";
let lastname = "Molinari";
let sign_location = "Cremona";
let sign_date = new Date().toLocaleString().split(",")[0];

let data = {
    "firstname" : firstname,
    "lastname" : lastname,
    "company": "Incode",
    "residence_city": "Ostiano",
    "sign_location_and_date" : `${sign_location}, ${sign_date}`,
    "firstname_and_lastname": `${firstname} ${lastname}`,
    "sign_location": sign_location,
    "sign_date": sign_date
};
 
pdfFiller.fillForm( path_source, path_destination, data, function(err) {
    if (err) throw err;
    console.log("In callback (we're done).");
});
 
