import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'
import course4 from '../assets/course4.png'
import course5 from '../assets/course5.png'
import course6 from '../assets/course6.png'
import course7 from '../assets/course7.png'
import course8 from '../assets/course8.png'
import course9 from '../assets/course9.png'
import course10 from '../assets/course10.png'
import course11 from '../assets/typeScript.png'
import course12 from '../assets/figma.png'
import course13 from '../assets/SQL.png'
import course14 from '../assets/git.png'
import course15 from '../assets/english.png'
import course16 from '../assets/backend.png'
import course17 from '../assets/python.png'
import course18 from '../assets/network.png'
import course19 from '../assets/api.png'
import course20 from '../assets/fullStack.png'


export interface Course {
    id :number 
    title : string
    category : string
    instructor : string
    image : string
    duration : string
    students : number
    price : number
    isFeatured:boolean
    description:string
    overview:string
    level: string
    lessons: number
    quizzes: number
    oldPrice: number
}


const courses = [
    {
        id: 1,
        title: "The Complete HTML & CSS Course",
        category: "Development",
        instructor: "John Smith",
        image: course1,
        duration: "6 Weeks",
        students: 156,
        price: 29,
        isFeatured: true,
        description: "Learn HTML and CSS to build responsive websites.",
        overview:
        "Welcome to The Complete HTML & CSS Course, a practical introduction to the essential technologies behind modern websites. You will learn how to structure web pages using HTML and style them with CSS to create attractive, professional designs. You will explore headings, paragraphs, images, links, lists, forms, colors, typography, backgrounds, borders, margins, and padding. You will also understand the CSS box model, learn how to arrange page elements using Flexbox, and create responsive layouts with media queries. Through practical exercises and website-building projects, you will develop the skills to create websites that work across desktop computers, tablets, and mobile devices. By the end of this course, you will have a strong foundation in frontend development and be ready to continue learning JavaScript and modern web technologies.",
        level: "All levels",
        lessons: 20,
        quizzes: 3,
        oldPrice: 59,

    },
    {
        id: 2,
        title: "JavaScript for Beginners",
        category: "Development",
        instructor: "Sarah Johnson",
        image: course2,
        duration: "8 Weeks",
        students: 210,
        price: 35,
        isFeatured: true,
        description:
        "Learn JavaScript fundamentals and interactive web development.",
        overview:
        "Welcome to JavaScript for Beginners, a step-by-step course designed to help you understand programming and bring websites to life. You will learn variables, data types, operators, conditions, loops, functions, arrays, and objects. You will discover how JavaScript works with HTML and CSS to create interactive web experiences. The course introduces the Document Object Model (DOM), event handling, form validation, and dynamic content updates. You will also practice writing reusable functions, solving programming problems, and debugging common errors. Through hands-on exercises and small projects, you will create interactive features and strengthen your logical thinking. By the end of the course, you will have a solid JavaScript foundation and be ready to explore advanced concepts and frontend libraries such as React.",
        level: "Beginner",
        lessons: 24,
        quizzes: 4,
        oldPrice: 49,

    },
    {
        id: 3,
        title: "React.js for Beginners",
        category: "Development",
        instructor: "Sarah Miller",
        image: course3,
        duration: "10 Weeks",
        students: 320,
        price: 45,
        isFeatured: true,
        description:
        "Learn React.js and build modern, interactive web applications.",
        overview:
        "Welcome to React.js for Beginners, a practical course that introduces you to one of the most popular libraries for building modern user interfaces. You will learn how to create reusable components, organize application structure, and use JSX to combine JavaScript with interface elements. You will explore props, state, event handling, conditional rendering, and rendering lists of data. The course also introduces React Hooks, including useState and useEffect, and explains how they help components respond to user interactions and changing data. Through practical examples, you will build interactive components and learn how to organize your code into maintainable pieces. By the end of the course, you will be able to create structured React interfaces and have the foundation needed to explore routing, API integration, and more advanced application development.",
        level: "Beginner",
        lessons: 30,
        quizzes: 5,
        oldPrice: 65,
    },
    {
        id: 4,
        title: "UI/UX Design for Beginners",
        category: "Design",
        instructor: "Emma Wilson",
        image: course4,
        duration: "6 Weeks",
        students: 185,
        price: 30,
        isFeatured: false,
        description:
        "Learn UI/UX design principles and create user-friendly website interfaces using Figma.",
        overview:
        "Welcome to UI/UX Design for Beginners, a course that introduces you to the principles of creating useful, attractive, and user-friendly digital experiences. You will learn the difference between user interface design and user experience design, and discover how research, planning, and visual organization influence the way people interact with websites and applications. You will explore layout, color theory, typography, spacing, visual hierarchy, and consistency. You will also learn how to understand user needs, organize content, create wireframes, and design interactive prototypes using Figma. Through practical design exercises, you will practice turning ideas into interface concepts and improving them with usability in mind. By the end of the course, you will understand the basic design process and be able to create a website or mobile app design that balances visual appeal with ease of use.",
        level: "Beginner",
        lessons: 18,
        quizzes: 3,
        oldPrice: 45,
    },
    {
        id: 5,
        title: "Digital Marketing for Beginners",
        category: "Marketing",
        instructor: "Olivia Martin",
        image: course5,
        duration: "6 Weeks",
        students: 275,
        price: 35,
        isFeatured: true,
        description:
        "Learn digital marketing fundamentals, social media marketing, SEO, and content marketing strategies.",
        overview:
        "Welcome to Digital Marketing for Beginners, a practical introduction to promoting products, services, and brands through online channels. You will learn how businesses use websites, search engines, social media, email, and online content to reach their audiences. The course introduces search engine optimization (SEO), content marketing, social media strategies, and the basics of online advertising. You will explore how to identify a target audience, plan engaging content, choose suitable marketing channels, and understand performance indicators such as reach, clicks, engagement, and conversions. Through practical examples, you will learn how to develop a simple digital marketing plan and evaluate the effectiveness of campaigns. By the end of the course, you will have a foundation for improving brand visibility, connecting with customers, and planning digital marketing activities.",
        level: "All levels",
        lessons: 22,
        quizzes: 4,
        oldPrice: 50,
    },
    {
        id: 6,
        title: "Photography for Beginners",
        category: "Videography",
        instructor: "David Wilson",
        image: course6,
        duration: "4 Weeks",
        students: 190,
        price: 20,
        isFeatured: true,
        description:
        "Learn photography basics, camera settings, lighting, composition, and photo editing techniques.",
        overview:
        "Welcome to Photography for Beginners, a hands-on course designed to help you understand how to capture clear, creative, and visually appealing photographs. You will explore the fundamentals of photography, including camera types, lenses, focus, exposure, and the relationship between aperture, shutter speed, and ISO. You will learn how lighting affects an image and how to use natural light to create different moods. The course also covers composition techniques, framing, perspective, color, and selecting interesting subjects. You will practice taking photographs in different environments and learn the basics of editing images to improve brightness, contrast, and overall appearance. By the end of the course, you will understand how to make more intentional photographic choices and develop the confidence to capture better photos for personal projects or creative work.",
        level: "Beginner",
        lessons: 15,
        quizzes: 2,
        oldPrice: 30,
    },
    {
        id: 7,
        title: "Node.js for Beginners",
        category: "Development",
        instructor: "James Anderson",
        image: course9,
        duration: "7 Weeks",
        students: 220,
        price: 35,
        isFeatured: false,
        description:
        "Learn Node.js fundamentals, modules, asynchronous programming, APIs, and how to build server-side applications with JavaScript.",
        overview:
        "Welcome to Node.js for Beginners, a practical introduction to using JavaScript outside the browser to build server-side applications. You will learn what Node.js is, how its runtime works, and how to set up a development environment. The course covers modules, npm packages, file handling, environment variables, and asynchronous programming with callbacks, promises, and async/await. You will explore how to create a basic server, handle incoming requests, and return appropriate responses. You will also learn the foundations of building APIs and organizing backend code into reusable modules. Through guided exercises, you will develop a clearer understanding of how server-side applications operate and communicate with clients. By the end of the course, you will have the skills needed to build simple Node.js applications and continue toward backend and full-stack development.",
        level: "Beginner",
        lessons: 21,
        quizzes: 4,
        oldPrice: 49,
    },
    {
        id: 8,
        title: "English for Beginners",
        category: "Communication",
        instructor: "Emma Wilson",
        image: course15,
        duration: "8 Weeks",
        students: 340,
        price: 30,
        isFeatured: false,
        description:
        "Learn basic English vocabulary, grammar, pronunciation, and everyday conversation skills.",
        overview:
        "Welcome to English for Beginners, a supportive course designed to help you develop confidence in using English in everyday situations. You will build your vocabulary around common topics such as introductions, family, work, shopping, travel, food, and daily routines. You will study essential grammar, including sentence structure, pronouns, common verbs, present and past forms, and how to ask and answer questions. The course also focuses on pronunciation, listening comprehension, and useful expressions for everyday conversations. Through practical examples, short dialogues, and guided exercises, you will practice introducing yourself, describing experiences, asking for information, and expressing simple ideas clearly. By the end of the course, you will have a stronger foundation in English and be better prepared to communicate in daily life, study, and beginner-level professional situations.",
        level: "Beginner",
        lessons: 25,
        quizzes: 5,
        oldPrice: 45,
    },
    {
        id: 9,
        title: "Redux Toolkit for Beginners",
        category: "Development",
        instructor: "Emily Johnson",
        image: course8,
        duration: "5 Weeks",
        students: 165,
        price: 30,
        isFeatured: false,
        description:
        "Learn Redux Toolkit, create a central store, manage application state, and use slices and reducers in React applications.",
        overview:
        "Welcome to Redux Toolkit for Beginners, a practical course that teaches you how to manage shared application state in React projects. You will understand when local component state is sufficient and when a centralized state management solution can make an application easier to maintain. You will learn how to configure a Redux store, create slices, define an initial state, and write reducers to update application data. The course explains how to use actions, dispatch, and selectors to connect React components to the store. You will also practice integrating Redux Toolkit with React Redux and organizing state logic into clear, reusable modules. Through guided examples, you will manage shared data and build predictable interactions between components. By the end of the course, you will understand the essential Redux Toolkit workflow and be able to apply it to real React applications.",
        level: "Intermediate",
        lessons: 16,
        quizzes: 3,
        oldPrice: 40,
    },
    {
        id: 10,
        title: "TypeScript for Beginners",
        category: "Development",
        instructor: "Alex Johnson",
        image: course11,
        duration: "6 Weeks",
        students: 230,
        price: 30,
        isFeatured: false,
        description:
        "Learn TypeScript fundamentals, data types, interfaces, functions, and how to write safer JavaScript code for modern applications.",
        overview:
        "Welcome to TypeScript for Beginners, a course designed to help you write more reliable and maintainable JavaScript applications. You will learn how TypeScript adds static typing to JavaScript and how its type system helps identify common mistakes during development. The course covers primitive types, arrays, objects, functions, interfaces, type aliases, optional properties, and union types. You will also explore how TypeScript infers types and how to work with typed parameters and return values. Practical examples will help you understand how to describe the shape of data and create reusable types for application logic. You will learn how TypeScript fits into modern frontend development and how it can improve code clarity in React projects. By the end of the course, you will be able to use the core TypeScript features to build safer and easier-to-maintain applications.",
        level: "Beginner",
        lessons: 18,
        quizzes: 3,
        oldPrice: 42,
    },
    {
        id: 11,
        title: "Figma UI Design for Beginners",
        category: "Design",
        instructor: "Olivia Davis",
        image: course12,
        duration: "5 Weeks",
        students: 175,
        price: 28,
        isFeatured: false,
        description:
        "Learn Figma fundamentals, frames, components, prototyping, and how to design modern website and mobile app interfaces.",
        overview:
        "Welcome to Figma UI Design for Beginners, a practical course that introduces you to designing digital interfaces using Figma. You will learn how to navigate the workspace, create frames, arrange layers, and work with shapes, text, images, colors, and typography. The course explains how spacing, alignment, and visual hierarchy help create clean and consistent designs. You will explore reusable components, variants, and styles to make your design process more efficient. You will also learn how to connect screens into interactive prototypes and preview the experience of navigating a website or mobile application. Through practical exercises, you will design interface elements and assemble them into a complete screen layout. By the end of the course, you will be able to create polished Figma designs and prototypes that can be presented to others or handed over for development.",
        level: "Beginner",
        lessons: 20,
        quizzes: 3,
        oldPrice: 38,
    },
    {
        id: 12,
        title: "SQL for Beginners",
        category: "Development",
        instructor: "Daniel Wilson",
        image: course13,
        duration: "6 Weeks",
        students: 205,
        price: 32,
        isFeatured: false,
        description:
        "Learn SQL basics, database tables, queries, filtering, sorting, and how to manage and retrieve data from relational databases.",
        overview:
        "Welcome to SQL for Beginners, a course that introduces you to working with relational databases and retrieving information efficiently. You will learn how databases organize data into tables containing rows and columns, and how relationships help connect different sets of information. The course covers essential SQL commands for selecting, inserting, updating, and deleting records. You will practice filtering results, sorting data, using comparison operators, and combining conditions to find specific information. You will also explore aggregate functions, grouping, and basic joins to retrieve related information from multiple tables. Through practical exercises, you will develop confidence in writing queries and understanding how applications store and access structured data. By the end of the course, you will have a solid foundation in SQL and be prepared to use databases in web development, reporting, and other data-driven projects.",
        level: "Beginner",
        lessons: 19,
        quizzes: 4,
        oldPrice: 45,
    },
    {
        id: 13,
        title: "Git & GitHub for Beginners",
        category: "Development",
        instructor: "Lucas Martin",
        image: course14,
        duration: "3 Weeks",
        students: 260,
        price: 20,
        isFeatured: false,
        description:
        "Learn Git basics, repositories, commits, branches, merging, and how to collaborate on projects using GitHub.",
        overview:
        "Welcome to Git & GitHub for Beginners, a practical course that teaches you how to track code changes and collaborate on software projects. You will learn the difference between Git, a version control system, and GitHub, a platform for hosting and sharing repositories. The course covers creating repositories, staging files, making commits, checking project history, and using branches to work on changes safely. You will practice merging branches, understanding common conflicts, and keeping your local project synchronized with a remote repository. You will also learn how to publish projects to GitHub, write useful commit messages, and contribute to collaborative workflows. Through guided exercises, you will build habits that help protect your work and make development more organized. By the end of the course, you will be able to manage your own repositories and use essential Git and GitHub workflows in everyday development.",
        level: "Beginner",
        lessons: 12,
        quizzes: 2,
        oldPrice: 29,
    },
    {
        id: 14,
        title: "Backend Development for Beginners",
        category: "Development",
        instructor: "Michael Davis",
        image: course16,
        duration: "8 Weeks",
        students: 290,
        price: 40,
        isFeatured: false,
        description:
        "Learn backend development fundamentals, server-side programming, REST APIs, databases, and how to build the logic behind web applications.",
        overview:
        "Welcome to Backend Development for Beginners, a course that explains the server-side systems that power modern websites and applications. You will learn how browsers and frontend interfaces communicate with servers, how requests and responses work, and how backend logic processes information. The course introduces server-side programming, routing, data validation, error handling, and the fundamentals of REST API design. You will explore how databases store application data and how backend services retrieve and update records. You will also learn about environment configuration, basic security practices, and organizing server code into manageable modules. Through practical examples, you will develop a clearer understanding of how to build services that support real user interactions. By the end of the course, you will have a foundation for creating backend features and connecting them to frontend applications.",
        level: "Intermediate",
        lessons: 26,
        quizzes: 5,
        oldPrice: 60,
    },
    {
        id: 15,
        title: "Tailwind CSS for Beginners",
        category: "Development",
        instructor: "Sophia Taylor",
        image: course10,
        duration: "4 Weeks",
        students: 195,
        price: 25,
        isFeatured: true,
        description:
        "Learn Tailwind CSS utility classes, responsive design, layouts, colors, spacing, and how to build modern user interfaces.",
        overview:
        "Welcome to Tailwind CSS for Beginners, a hands-on course that teaches you how to style modern interfaces using a utility-first CSS framework. You will learn how Tailwind utility classes control layout, spacing, colors, typography, borders, shadows, and other visual properties directly within your markup. The course introduces Flexbox, responsive breakpoints, hover states, focus states, and reusable styling patterns. You will practice building navigation bars, buttons, cards, forms, and complete page sections while keeping your interface consistent and responsive. You will also learn how to approach component styling and how to organize utility classes for readability. Through practical exercises, you will turn design ideas into working interfaces more efficiently. By the end of the course, you will be able to use Tailwind CSS to create responsive, polished layouts and apply it confidently in modern React and Next.js projects.",
        level: "Beginner",
        lessons: 14,
        quizzes: 2,
        oldPrice: 35,
    },
    {
        id: 16,
        title: "Python for Beginners",
        category: "Development",
        instructor: "James Wilson",
        image: course17,
        duration: "8 Weeks",
        students: 250,
        price: 35,
        isFeatured: false,
        description:
        "Learn Python programming from scratch, including variables, data types, conditions, loops, functions, and basic programming concepts.",
        overview:
        "Welcome to Python for Beginners, an introductory course designed to help you develop programming skills from the ground up. You will learn how to install and use Python, write your first programs, and understand essential concepts such as variables, data types, operators, and user input. The course explains how to make decisions with conditions, repeat tasks with loops, and organize reusable logic into functions. You will also explore lists, dictionaries, strings, and basic error handling. Through simple exercises and small projects, you will practice breaking problems into manageable steps and writing code that is easy to understand. You will learn how to test your programs, identify common mistakes, and improve your problem-solving approach. By the end of the course, you will have a strong foundation in Python and be ready to explore automation, data analysis, and other areas of programming.",
        level: "Beginner",
        lessons: 22,
        quizzes: 4,
        oldPrice: 49,
    },
    {
        id: 17,
        title: "Cybersecurity for Beginners",
        category: "Development",
        instructor: "Michael Wilson",
        image: course18,
        duration: "6 Weeks",
        students: 240,
        price: 35,
        isFeatured: false,
        description:
        "Learn the basics of cybersecurity, online safety, common threats, password protection, and security best practices.",
        overview:
        "Welcome to Cybersecurity for Beginners, a course that introduces you to the principles of protecting digital information, devices, and online accounts. You will learn why cybersecurity matters and explore common threats such as phishing, malware, social engineering, and weak passwords. The course explains practical ways to strengthen account security, use multi-factor authentication, recognize suspicious messages, and protect personal information online. You will also explore basic network security concepts, software updates, safe browsing habits, and the importance of backups. Through realistic examples, you will practice identifying potential risks and choosing safer responses to common online situations. The course emphasizes responsible behavior and defensive security practices that help reduce exposure to threats. By the end, you will understand essential cybersecurity concepts and have practical knowledge for improving your digital safety at home, at school, and at work.",
        level: "Beginner",
        lessons: 17,
        quizzes: 3,
        oldPrice: 45,
    },
    {
        id: 18,
        title: "Next.js for Beginners",
        category: "Development",
        instructor: "Daniel Smith",
        image: course7,
        duration: "8 Weeks",
        students: 280,
        price: 40,
        isFeatured: false,
        description:
        "Learn Next.js fundamentals, App Router, layouts, dynamic routes, data fetching, and how to build modern web applications.",
        overview:
        "Welcome to Next.js for Beginners, a practical course for developers who want to build modern React applications with a powerful web framework. You will learn how to create a Next.js project, understand its folder structure, and build pages and reusable components using the App Router. The course covers layouts, navigation, nested routes, dynamic route segments, and the differences between server and client components. You will explore how to display data, handle loading and error states, and work with forms and interactive features. You will also learn the basics of integrating APIs and organizing application code for maintainability. Through hands-on exercises, you will build a small multi-page application and understand how its different parts fit together. By the end of the course, you will have a foundation for creating responsive Next.js websites and continuing toward more advanced full-stack features.",
        level: "Beginner",
        lessons: 24,
        quizzes: 4,
        oldPrice: 55,
    },
    {
        id: 19,
        title: "API Development for Beginners",
        category: "Development",
        instructor: "Daniel Miller",
        image: course19,
        duration: "5 Weeks",
        students: 180,
        price: 30,
        isFeatured: false,
        description:
        "Learn API fundamentals, HTTP methods, REST APIs, request and response handling, and how frontend applications communicate with backend services.",
        overview:
        "Welcome to API Development for Beginners, a course that explains how applications exchange information through structured interfaces. You will learn what an API is, how clients and servers communicate, and how HTTP requests and responses carry data between systems. The course introduces common HTTP methods, status codes, headers, query parameters, and JSON data formats. You will explore the principles of REST API design and learn how endpoints represent resources and available operations. You will also practice testing requests, interpreting responses, handling errors, and understanding basic validation and authentication concepts. Through practical examples, you will see how a frontend application can retrieve information from a service and submit data to a server. By the end of the course, you will understand the core API workflow and be prepared to integrate APIs into web applications or continue learning backend development.",
        level: "Intermediate",
        lessons: 16,
        quizzes: 3,
        oldPrice: 42,
    },
    {
        id: 20,
        title: "Full Stack Web Development for Beginners",
        category: "Development",
        instructor: "Alex Morgan",
        image: course20,
        duration: "12 Weeks",
        students: 310,
        price: 50,
        isFeatured: true,
        description:
        "Learn full stack web development by exploring frontend technologies, backend fundamentals, APIs, databases, and how to build complete web applications.",
        overview:
        "Welcome to Full Stack Web Development for Beginners, a comprehensive introduction to building complete web applications from the user interface to the server and database. You will begin with frontend fundamentals, learning how HTML, CSS, and JavaScript work together to create interactive and responsive websites. You will explore component-based development and understand how frontend applications communicate with backend services through APIs. The course introduces server-side programming, routing, data validation, and the role of databases in storing and retrieving application information. You will also learn about version control with Git, organizing project files, debugging common issues, and connecting different parts of an application into one working system. Through practical exercises and a guided project, you will develop an understanding of the complete web development workflow. By the end of the course, you will have the foundation to build a simple full-stack application and continue learning more advanced frontend and backend technologies.",
        level: "All levels",
        lessons: 36,
        quizzes: 6,
        oldPrice: 75,
    },
];

export default courses;
