var placeholderData = '%data%';

var bio = {
    name: 'Piyush Ravi',
    role: 'Full Stack Engineer',
    contacts: {
        mobile: '702-891-0047',
        email: 'mails4ipiyush@gmail.com',
        github: 'https://github.com/ecpro',
        location: 'Pune IN',
        blog : 'http://www.medium.com/ecpro'
    },
    welcomeMessage: 'When something is important enough, you do it even if the odds are not in favour',
    skills: ['Java', , 'Javascript', 'C', 'NodeJs', 'Web Services', 'MongoDB', 'Spring'],
    bioPic: 'images/myPic.PNG',

    display: function display() {
        
        var fHTMLheaderName = HTMLheaderName.replace(placeholderData, this.name);
        var fHTMLheaderRole = HTMLheaderRole.replace(placeholderData, this.role);
        $('#header').prepend(fHTMLheaderRole);
        $('#header').prepend(fHTMLheaderName);


        var fContacts = [];

        fContacts.push(HTMLmobile.replace(placeholderData, this.contacts.mobile));
        fContacts.push(HTMLemail.replace(placeholderData, this.contacts.email));
        fContacts.push(HTMLgithub.replace(placeholderData, this.contacts.github));
        fContacts.push(HTMLblog.replace(placeholderData, this.contacts.blog));
        fContacts.push(HTMLlocation.replace(placeholderData, this.contacts.location));

        for(var index in fContacts) {
            $("#topContacts").append(fContacts[index]);
            $("#footerContacts").append(fContacts[index]);
        }

        var fHTMLbioPic = HTMLbioPic.replace(placeholderData, this.bioPic);
        $('#header').append(fHTMLbioPic);   

        var fHTMLwelcomeMsg = HTMLwelcomeMsg.replace(placeholderData, this.welcomeMessage);
        $('#header').append(fHTMLwelcomeMsg);

        $('#header').append(HTMLskillsStart);

        for(var index in bio.skills) {
            var skillElement = HTMLskills.replace(placeholderData, bio.skills[index]);
            $('#skills').append(skillElement);
        }

    }
};

var education = {
    schools: [
        {
            name: 'West Bengal University of Technology',
            location: 'Kolkata',
            degree: 'Bachelor of Technology',
            majors: ['Electronics', 'Communication Systems'],
            dates: '2010-2014',
        }, {
            name: 'Sunshine Prep/High School',
            location: 'Muzaffarpur',
            degree: 'High School',
            majors: ['Physics', 'Chemistry', 'Mathematics'],
            dates: '2009-2010',
        }],
    onlineCourses: [
        {
            title: 'Building Software Applications',
            school: 'Coursera',
            dates: '2015-2016',
            url: 'https://www.coursera.org/account/accomplishments/specialization/58CVR9GCCVS4'
        },
        {
            title: 'Full Stack Software Development',
            school: 'Coursera',
            dates: '2016-2017',
            url: 'https://www.coursera.org/account/accomplishments/records/XDCE5GB68LBC'
        }],
    display: function display() {

    }

};

var work = {
    jobs: [{
        employer: 'Automatic Data Processing',
        title: 'Member Technical',
        location: 'Pune India',
        dates: 'In progress',
        description: 'I work in R & D department',
    },
    {
        employer: 'Tech Mahindra',
        title: 'Software Engineer',
        location: 'Pune India',
        dates: '2014-2016',
        description: 'Backend developer',
    }],
    display: function display() {

    }
};

var projects = {
    projects: [{
        title: 'Order Management System',
        dates: '2014-2016',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        images: ''
    },
    {
        title: 'Contrary to popular belief',
        dates: '2016-2017',
        description: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model',
        images: ''
    }],
    display: function display() {

    }
};

bio.display();