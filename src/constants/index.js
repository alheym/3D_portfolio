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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tusur,
    udemy,
    practicum,
    carrent,
    jobit,
    tripguide,
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
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Bachelor's degree",
        company_name: "TUSUR",
        icon: tusur,
        iconBg: "#383E56",
        date: "Sept 2015 - June 2019",
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
        date: "Sept 2019 - June 2021",
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
        date: "Mar 2020 - June 2020",
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
        date: "Aug 2020 - Dec 2020",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
