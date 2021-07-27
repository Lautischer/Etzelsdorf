

/* DOM elements */

let input_name = document.getElementById('name');
let error_name = document.getElementById('error-name');
let error_n = true;

let input_insta = document.getElementById('insta');
let error_insta = document.getElementById('error-insta');
let error_i = true;

let input_name2 = document.getElementById('name2');
let error_name2 = document.getElementById('error-n2');
let error_n2 = true;

let input_pw = document.getElementById('password');
let error_pw = document.getElementById('error-pw');
let error_p = true;

let term = document.getElementById('agree-term');
let term_error = document.getElementById('error-term');

let sign = document.getElementById('submit');


let val1;
let signSubmit;
let final = document.getElementById('signup-form');

/* Event listener */
input_name.addEventListener('keyup', validateName);
input_insta.addEventListener('keyup', validateInsta);
input_name2.addEventListener('keyup', validateName_2);
input_pw.addEventListener('keyup', validatePW);

sign.addEventListener('click', signIn);

sign.style.opacity = '0.5';


/* SignIn Challange */

function checkSignIn() {

    if (error_n || error_i || error_n2 || error_p) {
        sign.style.opacity = '0.5';
        signSubmit = false;
    }
    if (error_n == false && error_i == false && error_n2 == false && error_p == false) {
        signSubmit = true;
        sign.style.opacity = '1';
        console.log('true');
    }
}

/* Function declaration */

function validateName() {

    let val = input_name.value;
    if (val.length <= 2) {
        error_name.style.display = 'block';
        error_name.innerHTML = 'Min. 3 Zeichen';
        error_n = true;
    } else {
        error_name.style.display = 'none';
        error_n = false;
    } checkSignIn();
    let finaltext =""
}

function validateInsta() {

    let val = input_insta.value;

    if (val.length <= 4 || val.includes('@') == false) {

        error_insta.style.display = 'block';
        error_insta.innerHTML = 'Es muss ein "@" enthalten sein und am besten du gibst dein Main-Acc an Z.B.: @tim.baier';
        error_i = true;

    } else {
        error_insta.style.display = 'none';
        error_i = false;

    } checkSignIn();
}

function validateName_2() {

    let val = input_name2.value;
    if (val.includes('Tim') == false && val.includes('Sebastian') == false &&  val.includes('Oli') == false && val.includes('Andi') == false && val.includes('Jari') == false && val.includes('Jien') == false && val.includes('Simsi') == false && val.includes('Leni') == false && val.includes('Lini') == false && val.includes('Lea Rager') == false && val.includes('Lea Habermayr') == false && val.includes('Lara') == false && val.includes('Zoey') == false) {
        
        error_name2.style.display = 'block';
        error_name2.innerHTML = 'Einfach die Person die dich eingeladen hat hinschreiben Z.B.: "Simsi"';
        error_n2 = true;
    
    } else {
        error_name2.style.display = 'none';
        error_n2 = false;
    } checkSignIn();
}

function validatePW() {

    val1 = input_pw.value;

    if (val1.length <= 7) {
        error_pw.style.display = 'block';
        error_pw.innerHTML = 'Tipp: Sollte dir der Gastgeber oder der der dich eingeladen hat zur Nachrict dazu geschrieben haben';
        error_p = true;
    } else {
        error_pw.style.display = 'none';
        error_p1 = false;
    } checkSignIn();
}










let myObjekt = { users: [] };

class BatmanUser{
    constructor(name,email,passwort){
        this.name = name;
        this.email = email;
        this.passwort = passwort;
    }
}

function signIn() {
    if (signSubmit) {
        console.log('ok')
        if (term.checked == false) {
            term_error.style.display = 'block';
            term_error.innerHTML = 'Please agree all terms of services';

        } else {
            
           let newUser = new BatmanUser(input_name.value,input_email.value,input_pw1.value);
           myObjekt.users.push(newUser);
           console.log(myObjekt.users);

            input_name.value = '';
            input_email.value = '';
            input_pw1.value = '';
            input_pw2.value = '';

        }


    }
}