//Hamburger menu animation
const hamburgerMenu = (x) => {
    let menu = document.querySelector('#menu');
    if (menu.style.width === '') {
        menu.style.width = '300px';
    } else if (menu.style.width === '0px') {
        menu.style.width = '300px';
    } else {
        menu.style.width = '0px';
    }

    menu.style.transition = '0.6s';
    x.classList.toggle('change');
}

////////////////////// variables ///////////////////////////////
const grade1 = $('.box1');
const grade2 = $('.box2');
const grade3 = $('.box3');
const grade4 = $('.box4');
const grade5 = $('.box5');
const grade6 = $('.box6');

const class1 = $('.first-grade');
const class2 = $('.second-grade');
const class3 = $('.third-grade');
const class4 = $('.fourth-grade');
const class5 = $('.fifth-grade');
const class6 = $('.sixth-grade');

const back = $('#back-button');

////////////////////////////////////////////////////////////////

let arrayOfGrades = [grade1, grade2, grade3, grade4, grade5, grade6];

let arrayOfClasses = [class1, class2, class3, class4, class5, class6];

const checkClasses = (x) => {
    for (classes of arrayOfClasses) {
        if (classes === x) {
            console.log(classes);
            classes.fadeIn(500);
            back.fadeIn(500);
        } else {
            for (grades of arrayOfGrades) {
                grades.hide();
            }
        }
    }
}

const revealClassList = (event) => {
    let text = $(event.target).attr('class');
    console.log(text);

    if (text === 'box1') {
        checkClasses(class1);
    } else if (text === 'box2') {
        checkClasses(class2);
    } else if (text === 'box3') {
        checkClasses(class3);
    } else if (text === 'box4') {
        checkClasses(class4);
    } else if (text === 'box5') {
        checkClasses(class5);
    } else if (text === 'box6') {
        checkClasses(class6);
    }
}

const showGrades = () => {
    for (grades of arrayOfGrades) {
        grades.on('click', revealClassList);
    }
}

const backButton = () => {
    back.hide();
    $('#wrong-password').html('');
    for (classes of arrayOfClasses) {
        classes.hide();
    }
    for (grades of arrayOfGrades){
        grades.show();
    }
}

$('#back-button').on('click', backButton);

/****************** Password Validation ******************/
const first = $('.grade1');
const second = $('.grade2');
const third = $('.grade3');
const fourth = $('.grade4');
const fifth = $('.grade5');
const sixth = $('.grade6');

const gradeArray = [first, second, third, fourth, fifth, sixth];

const passwords = {
    firstgrade: 'FirstGrade',
    secondgrade: 'SecondgrAde',
    thirdgrade: 'tHirdgRade',
    fourthgrade: 'foUrtHgradE',
    fifthgrade: 'FiThgrAdE',
    sixthgrade: 'SiXThgRade'
};

const passwordPopUp = (event) => {
    let gradeLevel = $(event.target).attr('class');

    const password = prompt('Please enter the password your teacher gave you.', '');

    if (gradeLevel === 'grade1' && password === passwords.firstgrade) {
        console.log('correct');
    } else if (gradeLevel === 'grade2' && password === passwords.secondgrade) {
        console.log('correct');
    } else if (gradeLevel === 'grade3' && password === passwords.thirdgrade) {
        console.log('correct');
    } else if (gradeLevel === 'grade4' && password === passwords.fourthgrade) {
        console.log('correct');
    } else if (gradeLevel === 'grade5' && password === passwords.fifthgrade) {
        console.log('correct');
    } else if (gradeLevel === 'grade6' && password === passwords.sixthgrade) {
        console.log('correct');
    } 
    else {
        if ($('#wrong-password').html() === '') {
            $('#wrong-password').html('Wrong Password. Click on your class to try again.');
        }
        event.preventDefault();
    }
}

const requirePassword = () => {
    for (classPassword of gradeArray) {
        classPassword.on('click', passwordPopUp);
    }
}
/////////////////////////////////////////////////////////////////////



window.onload = showGrades, requirePassword();