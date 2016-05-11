var parse = require('csv-parse');
var fs = require('fs');

var file = 'contacts.csv';
var vcardContact;
var path;

fs.readFile(file, 'utf8', function(err, output) {
  parse(output, function(err, parsedCSV){
    parsedCSV.forEach(function(contact, number) {
      // positions from Outlook contacts schema in the README file of
      if (contact[1] && contact[3]) {
        vcardContact = {};
        vcardContact.firstName = contact[1];
        vcardContact.lastName = contact[3];
        vcardContact.cellPhone = contact[37];
        vcardContact.emailAdress = contact[47];

        var VCARD="BEGIN:VCARD\n";
        VCARD+="VERSION:4.0\n";
        VCARD+="FN:"+vcardContact.firstName+" "+vcardContact.lastName+"\n";
        VCARD+="N:"+vcardContact.lastName+";"+vcardContact.firstName+";;;\n";
        VCARD+="TEL;TYPE=CELL:"+vcardContact.cellPhone+"\n";
        if (vcardContact.emailAdress) {
          VCARD+="EMAIL;TYPE=INTERNET:"+vcardContact.emailAdress+"\n";
        }
        VCARD+="REV:2016-05-11T11:23\n";
        VCARD+="END:VCARD\n";

        console.log(VCARD);
      }
    });
  });
});
