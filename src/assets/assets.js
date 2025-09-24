import user_image from './u.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_image.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
];

export const projectsData = [
    {
        id: 1,
        title: "Social Media App",
        slug: "social-media-app",
        img: ["/workn.png", '/work-1.png'],
        techUsed: ["Next.js", "Prisma", "MySQL", "Clerk.js", "Tailwind CSS", "Zod", "Svix"],
        category: "fullstack",
        description: "A full-stack social media platform with dynamic user interactions, scalable architecture, and modern UX.",
        features: [
            "Secure user authentication and profile management using Clerk.js",
            "Follow/unfollow, block/unblock, and manage follow requests",
            "Create posts with images, comment, and like/unlike functionality",
            "Instagram-style stories that auto-expire after 24 hours",
            "Optimized server actions for posting, liking, and commenting",
            "Enhanced UX with React Suspense, useOptimistic, and useFormStatus",
            "Validated user input with Zod for data integrity",
            "Real-time notifications powered by Svix",
            "Responsive and modern UI styled with Tailwind CSS",
        ],
        githupRepo: "https://github.com/Ahmed1492/full-stack-social-media-app", // replace with actual link
        liveDemo: null,
        recordDemo: "https://www.linkedin.com/posts/activity-7284177306414178305-v6gh?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 2,
        title: "E-Commerce App",
        slug: "e-commerce-app",
        img: [
            '/projects/next-ecommerce/1.png',
            '/projects/next-ecommerce/2.png',
            '/projects/next-ecommerce/3.png',
            '/projects/next-ecommerce/4.png',
            '/projects/next-ecommerce/5.png',
            '/projects/next-ecommerce/6.png',
            '/projects/next-ecommerce/7.png',
            '/projects/next-ecommerce/8.png',
            '/projects/next-ecommerce/9.png',

        ],
        techUsed: ["Next.js", "Tailwind CSS", "Zustand", "Wix SDK", "Node.js", "MySQL"],
        category: "fullstack",
        description: "A full-featured e-commerce platform with dynamic product listings, secure checkout, and responsive design.",
        features: [
            "Secure login/register system with user profile updates using Wix Members API",
            "Cart system with add/update/remove functionality powered by Zustand",
            "Orders page with order status, items, and totals",
            "Advanced search and filtering: price range, sort by price/date, and category filters",
            "Product reviews with user comments and ratings",
            "Secure checkout flow with address collection and order processing",
            "Responsive UI styled with Tailwind CSS",
            "Integration with Wix Stores and Members SDK for real product and member data",
            "Custom Node.js APIs for reviews, order processing, and checkout logic",
            "Optimized routing and performance with Next.js App Router",
            "Scalable components with improved UX through filtering logic and state handling",
        ],
        githupRepo: "https://github.com/Ahmed1492/full-stack-ecommerce-app",
        liveDemo: null,
        recordDemo: "https://www.linkedin.com/posts/activity-7342732677650812928-Jbv-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-hKsAB1QXZ1eSyBx8nGWP48RuYiBX5Bdg"
    },
    {
        id: 3,
        title: "Task Manager App",
        slug: "task-manager-app",
        img: ["/workn.png", '/work-1.png'], techUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        category: "fullstack",
        description: "A full-stack task management application to help users organize and track tasks efficiently with secure authentication and CRUD functionality.",
        features: [
            "Secure user authentication using JWT with token storage in localStorage",
            "Full CRUD functionality for tasks: create, read, update, and delete",
            "Task filtering by status: Completed, Pending, In Progress, Deferred, and Deployed",
            "Auto logout and secure route protection for enhanced security",
            "Responsive UI styled with Tailwind CSS and smooth navigation with React Router",
            "API communication with Axios and token handling using jwt-decode",
            "Backend built with Express.js and MongoDB (via Mongoose) for scalable data management",
            "User data secured with bcrypt password hashing and dotenv environment configuration",
            "Strengthened full-stack skills through integration of secure APIs and efficient state management"
        ],
        githupRepo: "https://github.com/Ahmed1492/react-node-task-manager", // add your repo link
        liveDemo: null,
        recordDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7326820125855080449/" // add your video/demo link
    }
    ,
    {
        id: 6,
        title: "ECommerce App",
        slug: "ecommerce-app",
        img: ["/workn.png", '/work-1.png'], techUsed: ["React.js", "Sass (SCSS)", "React Router", "Redux Toolkit"],
        category: "frontend",
        description: "A simple eCommerce application with product listings, category filtering, single product pages, and responsive design.",
        features: [
            "Product listing with all available items",
            "Category filter for Men's, Women's, and Beauty products",
            "Single product page with detailed view",
            "Responsive design using Sass (SCSS) for styling",
            "Navigation between pages powered by React Router",
            "State management with Redux Toolkit"
        ],
        githupRepo: "https://github.com/Ahmed1492/E-commerce-React-App", // add your repo link
        liveDemo: "https://ahmed1492.github.io/E-commerce-React-App/",
        recordDemo: null
    }
    ,
    {
        id: 7,
        title: "Product Listing and Search Application",
        slug: "product-listing-app",
        img: ["/workn.png", '/work-1.png'], techUsed: ["React.js", "Tailwind CSS", "localStorage"],
        category: "frontend",
        description: "A product management application with search, filtering, sorting, pagination, and add product functionality, styled with Tailwind CSS.",
        features: [
            "Product listing with name, price, category, and description",
            "Search functionality to find products by name or category",
            "Category filtering to narrow down results",
            "Pagination to navigate through products easily",
            "Sorting by name and price",
            "Add product form with immediate updates in product list",
            "Error handling and validation for form inputs",
            "Responsive design using Tailwind CSS for seamless user experience"
        ],
        githupRepo: "https://github.com/Ahmed1492/product-listing-app", // add your repo link
        liveDemo: "https://ahmed1492.github.io/product-listing-app/",
        recordDemo: null
    }
    ,
    {
        id: 8,
        title: "Travel Destination Website",
        slug: "travel-destination-website",
        img: ["/workn.png", '/work-1.png'], techUsed: ["HTML", "CSS", "Tailwind CSS"],
        category: "ui",
        description: "A responsive travel destination landing page showcasing destinations, services, and customer testimonials with a modern UI design.",
        features: [
            "Fully responsive design for all devices",
            "Visually appealing UI highlighting top travel destinations",
            "Dedicated sections for best services, destinations, and customer testimonials",
            "Easy navigation for flights, hotels, and bookings"
        ],
        githupRepo: "https://github.com/Ahmed1492/travel-destination-website",
        liveDemo: "https://ahmed1492.github.io/travel-destination-website/src/",
        recordDemo: null
    }
    ,
    {
        id: 20,
        title: "Easy-Edit",
        slug: "easy-edit",
        img: ["/workn.png", '/work-1.png'], techUsed: ["HTML", "CSS", "Bootstrap"],
        category: "ui",
        description: "A professional and responsive website template tailored for finance, cryptocurrency, and digital currency platforms, adaptable across industries.",
        features: [
            "Designed for finance, cryptocurrency, and digital currency platforms",
            "Built with Bootstrap for responsive layout and cross-device compatibility",
            "Adaptable for industries like digital marketing, corporate, and business websites",
            "Clean design with intuitive navigation and modular structure for easy customization",
            "Optimized for fast loading and SEO-friendly markup",
            "Ideal for landing pages, product showcases, and service portfolios"
        ],
        githupRepo: "https://github.com/Ahmed1492/EasyEdit",
        liveDemo: "https://ahmed1492.github.io/EasyEdit/"
    }

];




export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'HTI  in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];