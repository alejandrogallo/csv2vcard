# csv2vcard

This repository has been partially adapted from [here](http://github.com/michalbe/csv2vcard). This version of the program does not have as a dependency the csv-json package, which 
does not support email. I needed for my personal use support for email, so I simplified 
the project.


Usage:

```bash
$ git clone git@github.com:alejandrogallo/csv2vcard.git
$ cd csv2vcard
$ npm install
```

Then copy your `OutlookContacts.csv` file to `contacts.csv` and run
```bash
$ node index.js
```
This will print out all the vcards, you can save it just by doing:

```bash
$ node index.js > OutlookContacts.cvf
```



```javascript
// Outlook CSV schema:

// 0 Title
// 1 First Name
// 2 Middle Name
// 3 Last Name
// 4 Suffix
// 5 Given Name Yomi
// 6 Family Name Yomi
// 7 Home Street
// 8 Home City
// 9 Home State
// 10 Home Postal Code
// 11 Home Country
// 12 Company
// 13 Department
// 14 Job Title
// 15 Office Location
// 16 Business Street
// 17 Business City
// 18 Business State
// 19 Business Postal Code
// 20 Business Country
// 21 Other Street
// 22 Other City
// 23 Other State
// 24 Other Postal Code
// 25 Other Country
// 26 Assistant's Phone
// 27 Business Fax
// 28 Business Phone
// 29 Business Phone 2
// 30 Callback
// 31 Car Phone
// 32 Company Main Phone
// 33 Home Fax
// 34 Home Phone
// 35 Home Phone 2
// 36 ISDN
// 37 Mobile Phone
// 38 Other Fax
// 39 Other Phone
// 40 Pager
// 41 Primary Phone
// 42 Radio Phone
// 43 TTY/TDD Phone
// 44 Telex
// 45 Anniversary
// 46 Birthday
// 47 E-mail Address
// 48 E-mail Type
// 49 E-mail 2 Address
// 50 E-mail 2 Type
// 51 E-mail 3 Address
// 52 E-mail 3 Type
// 53 Notes
// 54 Spouse
// 55 Web Page
```
