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

/***** Password Validation *****/
const passwordPopUp = (event) => {
    const password = prompt('Please enter the password your teacher gave you.', '');
    if (password === 'FiRst') {
        console.log('correct');
    } else {
        if ($('#wrong-password').html() === '') {
            $('#wrong-password').html('Wrong Password. Click on your class to try again.');
        }
        event.preventDefault();
    }
}

class1.on('click', passwordPopUp);









window.onload = showGrades;