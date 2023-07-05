import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    docker,
    styled,
    webpack,
    vue,
    tusur,
    udemy,
    practicum,
    jungle,
    messenger,
    portfolio,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Styled components ",
        icon: styled,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Webpack",
        icon: webpack,
    },
    {
        name: "Docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Bachelor's degree",
        company_name: "TUSUR",
        icon: tusur,
        iconBg: "#383E56",
        date: "Sept 2015 - Jun 2019",
        points: [
            "Faculty of Computer systems.",
            "Bachelor's program Informatics and Computer Engineering | Code: 09.03.01",
            "Specialization: Computer-aided design systems.",
            "Mobile applications development.",
            "Programming complex for analyzing, processing and storing the results of microwave measurement.",
        ],
    },
    {
        title: "Master's degree",
        company_name: "TUSUR",
        icon: tusur,
        iconBg: "#E6DEDD",
        date: "Sept 2019 - Jun 2021",
        points: [
            "Faculty of Computer systems.",
            "Master's program Informatics and Computer Engineering | Code: 09.04.01",
            "Specialization: Dataware for Hardware and Software Complexes",
            "Optimization methods.",
            "Modern concepts of database organization.",
            "Design of microprocessor and computer systems.",
        ],
    },
    {
        title: "Complete JavaScript + React",
        company_name: "UDEMY",
        icon: udemy,
        iconBg: "#383E56",
        date: "Sept 2019 - Feb 2020",
        points: [
            "Learning AJAX, JSON technologies.",
            "Exploring the React and Redux Library.",
            "Basics of programming and algorithms.",
            "Working with npm, Babel, Browserify, Webpack, Heroku and Firebase.",
        ],
    },
    {
        title: "WEB Developer",
        company_name: "UDEMY",
        icon: udemy,
        iconBg: "#E6DEDD",
        date: "Mar 2020 - Jun 2020",
        points: [
            "Learning the basics of web development.",
            "Working with version control systems Git and GitHub.",
            "Using the BEM methodology and the Scss preprocessor.",
            "Creation of mobile adaptation of sites and applications.",
        ],
    },
    {
        title: "Modern JavaScript + Vue",
        company_name: "UDEMY",
        icon: udemy,
        iconBg: "#383E56",
        date: "Aug 2020 - Dec 2020",
        points: [
            "Working with third-party API.",
            "Basics of the VueJS framework.",
            "The basics of End to End testing using Cypress and the basics of testing on Jest.",
            "Learning asynchronous JavaScript, the Event Loop, AJAX, Promises, and Async/Await.",

        ],
    },
    {
        title: "Middle Frontend Developer",
        company_name: "YA.PRACTICUM",
        icon: practicum,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Jun 2023",
        points: [
            "Web messenger project.",
            "Working with Canvas API.",
            "Team project: web application game.",
            "Basics and complex concepts of TypeScript.",
            "Working with security: CSRF, XSS, CSP and Clickjacking",
            "Working with the use of component and modular approaches.",
            "Data storage using Redux, Redux-Thunk, as well as Reselect and Sequelize.",
            "Backend implementation: databases (MongoDB and PostgreSQL), Node.js and billing."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Jungle Danger",
        description:
            "A web application with a 2D platform game, in addition to the game itself, implemented using the Canvas API, a whole structure was created with a personal user profile, a full-fledged forum, a leaderboard, data to which is transferred based on the results of the game.",
        tags: [
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "canvas",
                color: "green-text-gradient",
            },
            {
                name: "styled components",
                color: "pink-text-gradient",
            },
        ],
        image: jungle,
        source_code_link: "https://github.com/24-team-09/arcade-2d-game/tree/main",
    },
    {
        name: "Messenger",
        description:
            "A functional messenger based on pure JavaScript with a full transition to TypeScript in the process of development. Third-party frameworks were not used in the project. The work additionally used the Handlebars template engine and linters to ensure the cleanliness of the code.",
        tags: [
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "handlebars",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: messenger,
        source_code_link: "https://github.com/alheym/middle.messenger.praktikum.yandex",
    },
    {
        name: "Portfolio",
        description:
            "The old version of the portfolio site. The site is implemented in pure JavaScript using the Canvas API to implement interactive animations. There is also a feedback form on the site, for which its own service for sending letters is implemented.",
        tags: [
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "canvas",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/alheym/portfolio",
    },
];

export { services, technologies, experiences, testimonials, projects };
