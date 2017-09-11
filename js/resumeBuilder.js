var placeholderData = '%data%';

var bio = {
    name: 'Piyush Ravi',
    role: 'Full Stack Engineer',
    contacts: {
        mobile: '702-891-0047',
        email: 'mails4ipiyush@gmail.com',
        github: 'https://github.com/ecpro',
        location: 'Pune IN',
        blog: 'http://www.medium.com/ecpro'
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

        for (var index in fContacts) {
            $("#topContacts").append(fContacts[index]);
            $("#footerContacts").append(fContacts[index]);
        }

        var fHTMLbioPic = HTMLbioPic.replace(placeholderData, this.bioPic);
        $('#header').append(fHTMLbioPic);

        var fHTMLwelcomeMsg = HTMLwelcomeMsg.replace(placeholderData, this.welcomeMessage);
        $('#header').append(fHTMLwelcomeMsg);

        $('#header').append(HTMLskillsStart);

        for (var index in bio.skills) {
            var skillElement = HTMLskills.replace(placeholderData, bio.skills[index]);
            $('#skills').append(skillElement);
        }

    }
};

bio.display();

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

        $('#education').append(HTMLschoolStart);

        for (var index in education.schools) {
            $('.education-entry').append(HTMLschoolName.replace(placeholderData, education.schools[index].name));
            $('.education-entry').append(HTMLschoolDates.replace(placeholderData, education.schools[index].dates));
            $('.education-entry').append(HTMLschoolDegree.replace(placeholderData, education.schools[index].degree));
            $('.education-entry').append(HTMLschoolMajor.replace(placeholderData, education.schools[index].majors.join(' ')));
            $('.education-entry').append(HTMLschoolLocation.replace(placeholderData, education.schools[index].location));

        }

         $('#education').append(HTMLonlineClasses);
         $('#education').append(HTMLschoolStart);
        for(var index in education.onlineCourses) {
            $('.education-entry').append(HTMLonlineTitle.replace(placeholderData, education.onlineCourses[index].title));
            $('.education-entry').append(HTMLonlineSchool.replace(placeholderData, education.onlineCourses[index].school));
            $('.education-entry').append(HTMLonlineDates.replace(placeholderData, education.onlineCourses[index].dates));
            $('.education-entry').append(HTMLonlineURL.replace(placeholderData, education.onlineCourses[index].url));
        }

    }

};

education.display();

var work = {
    jobs: [{
        employer: 'Automatic Data Processing',
        title: 'Member Technical',
        location: 'Pune India',
        dates: '2017 - In progress',
        description: 'I work in Rished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when loo & D department',
    },
    {
        employer: 'Tech Mahindra',
        title: 'Software Engineer',
        location: 'Pune India',
        dates: '2014-2016',
        description: 'Backend like readable English. Many desktop publish be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layouing packages and web page editors now use Lorem Ipsum as their defdeveloper',
    }],
    display: function display() {
        $('#workExperience').append(HTMLworkStart);

        for (var index in work.jobs) {
            var job = work.jobs[index];
            $('.work-entry').append(HTMLworkEmployer.replace(placeholderData, job.employer));
            $('.work-entry').append(HTMLworkTitle.replace(placeholderData, job.title));
            $('.work-entry').append(HTMLworkDates.replace(placeholderData, job.dates));
            $('.work-entry').append(HTMLworkLocation.replace(placeholderData, job.location));
            $('.work-entry').append(HTMLworkDescription.replace(placeholderData, job.description));
        }

    }
};

work.display();

var project = {
    projects: [{
        title: 'Order Management System',
        dates: '2014-2016',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        images: ''
    },
    {
        title: 'Contrary to popular belief',
        dates: '2016-2017',
        description: 'it look like readable English. Many desktop publish be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layouing packages and web page editors now use Lorem Ipsum as their default model',
        images: ''
    }],
    display: function display() {

        var HTMLprojectStart = '<div class="project-entry"></div>';
        var HTMLprojectTitle = '<a href="#">%data%</a>';
        var HTMLprojectDates = '<div class="date-text">%data%</div>';
        var HTMLprojectDescription = '<p><br>%data%</p>';
        var HTMLprojectImage = '<img src="%data%">';

        $('#projects').append(HTMLprojectStart);

        var projects = project.projects;

        for (var index in projects) {

            $('.project-entry').append(HTMLprojectTitle.replace(placeholderData, projects[index].title));
            $('.project-entry').append(HTMLprojectDates.replace(placeholderData, projects[index].dates));
            $('.project-entry').append(HTMLprojectDescription.replace(placeholderData, projects[index].description));
            $('.project-entry').append(HTMLprojectImage.replace(placeholderData, projects[index].images));

        }



    }
};

project.display();