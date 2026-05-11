const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "MyFinder.png",
        iconSize: "w-12 h-16",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Links", // was "Safari"
        icon: "MySafari.png",
        iconSize: "w-14 h-15",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "myGallery.png",
        iconSize: "w-15 h-15",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "MyContact.png",
        iconSize: "w-13 h-15",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "MyTerminal.png",
        iconSize: "w-15 h-15",
        canOpen: true,
    },
    // {
    //     id: "trash",
    //     name: "Archive", // was "Trash"
    //     icon: "MyTrash.png",
    //     iconSize: "w-13 h-17",
    //     canOpen: false,
    // },
];

const blogPosts = [
    {
        id: 1,
        title: "LinkedIn",
        subtext: "It's like social media but like...for work. Wanna connect?",
        image: "/images/linkedin2.jpg",
        link: "https://www.linkedin.com/in/joscelyn-cauley/",
    },
    {
        id: 2,
        title: "GitHub",
        subtext: "Yeah I build things here and there. Check it out if you dare! 👻",
        image: "/images/github.png",
        link: "https://github.com/Joscelync",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Responsive Design", "Cross-Browser Compatibility", "Component-Based Architecture" ],
    },
    {
        category: "Frameworks & Tools",
        items: ["Git", "GitHub", "CI/CD Concepts", "REST APIs", "WebSockets", "Figma", "Framer", "Adobe XD" ],
    },
    {
        category: "UX/UI & Accessibility",
        items: ["Wireframing", "Prototyping", "Design Systems", "Usability Testing", "WCAG Accessibility Standards", "SEO Best Practices" ],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/JavaScript-Mastery-Pro",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/jsmasterypro",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/food1.jpg",
    },
    {
        id: 2,
        img: "/images/mountains.jpg",
    },
    {
        id: 3,
        img: "/images/FoodPhoto2.jpg",
    },
    {
        id: 4,
        img: "/images/ocean.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Nike Ecommerce Website Application",
            icon: "/images/MyFolder1.png",
            folderSize: "w-20 h-20 object-contain",
            miniFolderSize: "w-4",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[10vh] left-240", // optional: Finder windows position
            children: [
                {
                    id: 1,
                    name: "Nike Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
                        "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                        "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                        "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "nike.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "nike.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "GSAP Website",
            icon: "/images/MyFolder2.png",
            kind: "folder",
            folderSize: "w-20 h-20 object-contain",
            miniFolderSize: "w-4",
            position: "top-52 right-80",
            windowPosition: "top-[35vh] left-280",
            children: [
                {
                    id: 1,
                    name: "GSAP Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "On my journey to becoming a stronger designer and front-end developer, I decided to explore the world of animation to create more engaging and interactive digital experiences.",
                        "I followed a tutorial by JavaScript Mastery where I learned the fundamentals of GSAP animation, motion principles, and how thoughtful interactions can elevate both usability and storytelling within a product.",
                        "Beyond animation itself, I also experimented with AI-assisted workflows using JetBrains Junie to help streamline asset creation, editing, and problem solving throughout development giving me hands-on experience integrating AI tools into a modern creative workflow.",
                        "This project strengthened my understanding of frontend development, timing, transitions, and user engagement while showing me how animation can transform a static interface into something far more immersive and memorable.",
                    ],
                },
                {
                    id: 2,
                    name: "GSAP-Website.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://gsap-mojito-ybmh.vercel.app",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "GSAP-Website.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/gsapWeb.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/MByXaI8pcleIbgTvsDat1X/Cocktail-GSAP-Website?node-id=2-2&t=wzNUobNv0NxCx0co-1",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Food Delivery App",
            icon: "/images/MyFolder3.png",
            kind: "folder",
            folderSize: "w-25 h-25 object-contain",
            miniFolderSize: "w-5",
            position: "top-10 left-80",
            windowPosition: "top-[55vh] left-250",
            children: [
                {
                    id: 1,
                    name: "Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our theater food ordering app is designed to make buying snacks and meals at the movies faster, easier, and less stressful for moviegoers on a time crunch.",
                        "Instead of waiting in long concession lines, users can pre-order food, customize their items, and track their order through a seamless mobile experience built around speed and convenience.",
                        "This was one of the first full-scale case studies I completed while earning the Google UX Design Professional Certificate to complement my Software Engineering degree, and it taught me a great deal about user research, accessibility, and designing with real user pain points in mind.",
                        "From defining user goals and conducting research to creating wireframes and interactive prototypes, I managed the project end-to-end and would love the opportunity to discuss the process and what I learned along the way.",
                    ],
                },
                {
                    id: 2,
                    name: "LowFi-ResearchPlan.pdf",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://docs.google.com/document/d/1qPaXU7Hl0MMWfIPRQcf5J6DkbTCIi9pUSODkTNpkQeU/edit?usp=sharing",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "HiFi-ResearchPlan.pdf",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://docs.google.com/document/d/10bqB9O8ZT2P1kP9Y10SVnPZGt-MXQZxdbwFIp4Ljc2w/edit?usp=sharing",
                    position: "top-20 left-50",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/deliveryAppPreview.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/LQEzutmeD7kqcSBirZirQJ/Google-Project?m=auto&t=b3c2AHujul47qf7e-1",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/JoscelynContact.jpg",
        },
        {
            id: 2,
            name: "Fav-Hobby.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/favHobby.jpg",
        },
        {
            id: 3,
            name: "big-smiles!.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/smile.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/JoscelynContact.jpg",
            description: [
                "I’m Joscelyn 👋, a UI/UX designer and developer who loves turning ideas into digital experiences that feel intuitive, thoughtful, and visually polished.",
                "I specialize in Figma, Framer, React, and front-end development and I’m especially drawn to the intersection of design, research, and problem-solving. I love figuring out why something works just as much as building it.",
                "I’m big on clean interfaces, smooth user experiences, and creating products that balance aesthetics with functionality (because pretty means nothing if it’s frustrating to use).",
                "Outside of work, you’ll probably find me doing my nails like they’re tiny art projects, reorganizing a layout for the tenth time “just to test something,” or going down a random research rabbit hole at 1AM 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };