var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
var maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]; 

var dateInput = prompt ("Enter date of birth;");

var birthDate = new Date('2022-10-08');

var dateYenyewe = birthDate.getDay();

var genderFemale = femaleNames[dateYenyewe];

var genderMale = maleNames[dateYenyewe];