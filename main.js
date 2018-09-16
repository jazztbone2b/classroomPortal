//Hamburger menu
const hamburgerMenu = (x) => {
    let menu = document.querySelector('#menu');

    if (menu.style.width === '') {
        if (screen.width <= 350){
            menu.style.width = '250px';
        } else {
            menu.style.width = '275px';
        }
    } else if (menu.style.width === '0px') {
        if (screen.width <= 350){
            menu.style.width = '250px';
        } else {
            menu.style.width = '275px';
        }
    } else {
        menu.style.width = '0px';
        $('#resources').slideUp();
    }

    menu.style.transition = '0.4s';
    x.classList.toggle('change');
}

/****** Side Menu HTML ******/
const sideMenu = document.querySelector('#menu');

const menuHTML = `
<li><a href="index.html">Home</a></li>
<li id="toggle-resources" onclick="toggleResources()">Spanish Resources</li>
    <ul id="resources">
        <li id="reslist"><a href="levelsOfProficiency.html">Levels of proficiency</a></li>
        <li><a href="canDo.html">Can-do Statements</a></li>
        <li><a href="expectations.html">Program Expectations</a></li>
        <li><a href="spanish-enrichment.html">Spanish Enrichment</a></li>
        <li><a href="imp-second-lang.html">Importance of Second Language Learning</a></li>
        <li><a href="spanish-websites.html">Cool websites to practice Spanish</a></li>
    </ul>
<li><a href="esl-resources.html">ESL Resources</a></li>
<li><a href="grading.html">Grading</a></li>
<li><a href="famCommunication.html">Communication with families</a></li>
<li><a href="https://www.youtube.com/channel/UCIs6o8SEFuIYOgd7E-LCwgg" target="_blank">YouTube Channel</a></li>
<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc9e36lTpNLNHUyQZkG3TLqZkOSNGpf2KJGNzOApmuWa0OMcQ/viewform" target="_blank">YouTube Channel proposals</a></li>
<li><a href="music-and-videos.html">Music and Videos</a></li>
<li><a href="missions.html">Missions</a></li>
<li><a href="student-of-the-month.html">Student of the month</a></li>
<li><a href="student-jobs.html">Class Job Postings and Interview Process</a></li>
<li>Summer in Peru</li>
<li><a href="about-me.html">About Me</a></li>
<li><a href="contact.html">Contact</a></li>`;

const fillMenu = () => {
    sideMenu.innerHTML = menuHTML;
}

const toggleResources = () => {
    $('#resources').slideToggle();
}

////////////////////// variables ///////////////////////////////
const grade1 = $('.box1');
const grade2 = $('.box2');
const grade3 = $('.box3');
const grade4 = $('.box4');
const grade5 = $('.box5');
const grade6 = $('.box6');
const gradeEsl = $('.esl'); 

const class1 = $('.first-grade');
const class2 = $('.second-grade');
const class3 = $('.third-grade');
const class4 = $('.fourth-grade');
const class5 = $('.fifth-grade');
const class6 = $('.sixth-grade');

const back = $('#back-button');

////////////////////////////////////////////////////////////////

let arrayOfGrades = [grade1, grade2, grade3, grade4, grade5, grade6, gradeEsl];

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
const first = $('.first');
const second = $('.second');
const third = $('.third');
const fourth = $('.fourth');
const fifth = $('.fifth');
const sixth = $('.sixth');
const esl = $('.eslClass');

const gradeArray = [first, second, third, fourth, fifth, sixth, esl];

const passwords = {
    firstgrade: '1',
    secondgrade: '2',
    thirdgrade: '3',
    fourthgrade: '4',
    fifthgrade: '5',
    sixthgrade: '6',
    eslClass: 'esl'
};

const passwordPopUp = (event) => {
    let gradeLevel = $(event.target).attr('class');
    console.log(gradeLevel);
    const password = prompt('Please enter the password your teacher gave you.', '');

    if (gradeLevel === 'first' && password === passwords.firstgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'second' && password === passwords.secondgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'third' && password === passwords.thirdgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'fourth' && password === passwords.fourthgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'fifth' && password === passwords.fifthgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'sixth' && password === passwords.sixthgrade) {
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else if (gradeLevel === 'eslClass' && password === passwords.eslClass){
        passwordCorrect();
        setTimeout(deleteLoginText, 1000);
    } else {
        if ($('#wrong-password').html('')) {
            $('#wrong-password').html('Wrong Password. Click on the button above to try again.');
        }
        event.preventDefault();
        $('#show-content').html('Try Again');
        $('#card-container').hide();
    }
}

const requirePassword = () => {
    for (classPassword of gradeArray) {
        classPassword.on('click', passwordPopUp);
    }
}

const passwordCorrect = () => {
    $('#wrong-password').html('Login Successful!');
    $('#wrong-password').css('color', 'black');
    $('#card-container').show();
    $('#show-content').hide();
}

const hideModules = () => {
    $('#card-container').hide();
}

const deleteLoginText = () => {
    $('#wrong-password').fadeOut();
}
/////////////////////////////////////////////////////////////////////

/***** Module Pages ******/
const [m1, m2, m3, m4, m5] = [$('.m-1'), $('.m-2'), $('.m-3'), $('.m-4'), $('.m-5')];
const [mod1, mod2, mod3, mod4, mod5] = [$('.module-1'), $('.module-2'), $('.module-3'), $('.module-4'), $('.module-5')]

const arrayOfModules = [m1, m2, m3, m4, m5];
const showModules = [mod1, mod2, mod3, mod4, mod5];

const getModule = () => {
    for (mods of arrayOfModules) {
        mods.on('click', (event) => {
            let text = $(event.target).attr('class');
            if (text === 'm-1'){
                mod1.toggle();
                hideInactiveModules(m1);
            } else if (text === 'm-2') {
                mod2.toggle();
                hideInactiveModules(m2);
            } else if (text === 'm-3') {
                mod3.toggle();
                hideInactiveModules(m3);
            } else if (text === 'm-4') {
                mod4.toggle();
                hideInactiveModules(m4);
            } else if (text === 'm-5') {
                mod5.toggle();
                hideInactiveModules(m5);
            }
        });
    }
}

const hideInactiveModules = (x) => {
    for (hideMods of arrayOfModules) {
        if (hideMods !== x){
            hideMods.toggle();
        }
    }
}

/****** Toggle Spanish Websites ******/
const [vocab, classProjects] = [$('#vocab'), $('#class-projects')];
const [vocabCard, projectCard] = [$('.vocab-card'), $('.project-card')];

vocabCard.click(() => vocab.slideToggle(500));
projectCard.click(() => classProjects.slideToggle(500));

window.onload = fillMenu(), showGrades(), requirePassword(), hideModules(), getModule();