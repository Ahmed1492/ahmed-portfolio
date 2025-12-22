import user_image1 from './personal-image/2.jpg';
import user_image2 from './personal-image/2.jpg';
import user_image3 from './personal-image/2.jpg';
import user_image4 from './personal-image/4.jpg';
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
import react_icon from './react-icon.png';
import responsive_icone from './responsive-icone.png';
import next_icon from './next-icon.png';
import node_icon from './node-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    user_image1,
    user_image2,
    user_image3,
    user_image4,
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
    react_icon,
    responsive_icone,
    next_icon,
    node_icon,
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
    {
        icon: assets.react_icon,
        title: 'React.js Development',
        description: 'Building interactive, component-based front-end applications with React.js.',
        link: ''
    },
    {
        icon: assets.responsive_icone,
        title: 'Responsive Design',
        description: 'Creating mobile-friendly and adaptive layouts with Tailwind CSS.',
        link: ''
    },
    {
        icon: assets.next_icon,
        title: 'Next.js Full-Stack Development',
        description: 'Developing full-stack web applications with server-side rendering, APIs, and dynamic routing.',
        link: ''
    },
    {
        icon: assets.node_icon,
        title: 'Node.js Development',
        description: 'Building back-end logic, REST APIs, and server-side functionality using Node.js.',
        link: ''
    },
];


export const profileImage = [
    '/public/personal-image/1.jpg ',
    '/public/personal-image/2.jpg ',
    '/public/personal-image/3.jpg ',
    '/public/personal-image/4.jpg ',
];

export const projectsData = [
    {
        id: 123,
        title: "Netflix Clone",
        slug: "netflix-clone",
        img: ["/netflix-clone/2.png", "/netflix-clone/1.png", "/netflix-clone/3.png", "/netflix-clone/4.png", "/netflix-clone/5.png", "/netflix-clone/6.png"],
        techUsed: [
            "React.js",
            "Tailwind CSS",
            "Firebase Authentication",
            "Firebase Firestore",
            "TMDB API",
            "React Router",
            "Vercel"
        ],
        category: "react",
        description: "A full-stack Netflix-style app with Firebase authentication and TMDB-powered movie browsing, trailers, and detailed pages.",
        features: [
            "User registration and secure login via Firebase Authentication",
            "Protected routes accessible after authentication",
            "Browse trending and popular movies from TMDB",
            "View individual movie details including trailer, release date, and description",
            "Search functionality to explore movies dynamically",
            "Real-time data fetching with optimized API requests",
            "Responsive Netflix-style UI built with Tailwind CSS",
            "Smooth navigation using React Router"
        ],
        githupRepo: null,
        liveDemo: "https://netflix-clone-lilac-pi-47.vercel.app/",
        recordDemo: null
    },
    {
        id: 122,
        title: "Blog Nest – Full-Stack Blog Publishing Platform",
        slug: "blog-nest",
        img: ["/blog-nest/1.png", "/blog-nest/2.png", "/blog-nest/3.png", "/blog-nest/4.png", "/blog-nest/5.png", "/blog-nest/6.png", "/blog-nest/7.png", "/blog-nest/8.png", "/blog-nest/9.png", "/blog-nest/10.png", "/blog-nest/11.png", "/blog-nest/12.png", "/blog-nest/13.png", "/blog-nest/14.png", "/blog-nest/15.png", "/blog-nest/16.png", "/blog-nest/17.png",],
        techUsed: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Multer",
            "ImageKit",
            "Google Gemini AI"
        ],
        category: "node&react",
        description: "Blog Nest is a modern full-stack blogging platform where admins can publish rich, long-form articles with AI-powered generation, while users enjoy a fast, responsive interface with clean Markdown-based rendering.",
        features: [
            "Browse all published blogs with responsive UI and smooth navigation",
            "View detailed blog pages with titles, dates, images, and rich formatted content",
            "Markdown-based rendering for clean and structured reading experience",
            "Secure admin authentication with JWT-protected routes",
            "Admin dashboard for creating, editing, and deleting blogs",
            "Rich text editor powered by Quill for blog publishing",
            "AI-powered blog auto-generation using Google Gemini",
            "SEO-friendly blog URLs generated via slugs",
            "Image uploads handled with Multer and optional ImageKit optimization",
            "Scalable content storage with MongoDB and Mongoose ORM",
            "Responsive UI styled with Tailwind CSS and enhanced with Motion animations",
        ],
        githupRepo: "https://github.com/Ahmed1492/blog-nest",
        liveDemo: null,
        recordDemo: "https://www.linkedin.com/posts/activity-blog-nest-demo"
    },
    {
        id: 121,
        title: "Full-Stack Food Ordering App",
        slug: "food-ordering-app",
        img: ["/food-flow/1.png", "/food-flow/2.png", "/food-flow/6.png", "/food-flow/7.png", "/food-flow/8.png", "/food-flow/9.png", "/food-flow/11.png", "/food-flow/12.png", "/food-flow/13.png",],
        techUsed: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "Multer"],
        category: "node&react",
        description: "A modern full-stack food ordering platform enabling customers to browse menus, manage carts, and securely pay, while administrators handle inventory and order tracking.",
        features: [
            "User account registration, login, and secure authentication with JWT",
            "Profile management with image upload, update, and removal",
            "Role-based access control ensuring secure user and admin routes",
            "Cart functionality to add, remove, and view items",
            "Stripe-powered secure checkout with test card support",
            "Automatic order creation and verification upon successful payment",
            "Admin food management: add, update, remove items with image uploads via Multer",
            "Order management: users view history, admins update statuses and monitor all orders",
            "Responsive UI styled with Tailwind CSS and managed with React Context API",
        ],
        githupRepo: "https://github.com/Ahmed1492/food-flow",
        liveDemo: null,
        recordDemo: "https://www.linkedin.com/posts/activity-7386867957064155136-ktGH?utm_source=share&utm_medium=member_android&rcm=ACoAAD-hKsAB1QXZ1eSyBx8nGWP48RuYiBX5Bdg"
    },
    {
        id: 1,
        title: "Social Media App",
        slug: "social-media-app",
        img: ["/social-media/1.png", "/social-media/2.png", "/social-media/3.png", "/social-media/13.png", "/social-media/5.png", "/social-media/6.png", "/social-media/7.png", "/social-media/8.png", "/social-media/10.png"],
        techUsed: ["Next.js", "Prisma", "MySQL", "Clerk.js", "Tailwind CSS", "Zod", "Svix"],
        category: "next",
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
        category: "next",
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
        img: ["/task-manger/1.png", "/task-manger/2.png", "/task-manger/3.png", "/task-manger/4.png", "/task-manger/5.png", "/task-manger/6.png", "/task-manger/7.png", "/task-manger/8.png", "/task-manger/9.png", "/task-manger/10.png",], techUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        category: "node&react",
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
        title: "QuickCart Store",
        slug: "quick-cart-store",
        img: ["/quick-cart-store/1.png", "/quick-cart-store/2.png", "/quick-cart-store/3.png", "/quick-cart-store/4.png", "/quick-cart-store/5.png", "/quick-cart-store/6.png", "/quick-cart-store/7.png", "/quick-cart-store/8.png",], techUsed: ["React.js", "Sass (SCSS)", "React Router", "Redux Toolkit"],
        category: "react",
        description: "A simple eCommerce application with product listings, category filtering, single product pages, and responsive design.",
        features: [
            "Dynamic product catalog with detailed single product pages",
            "Category-based filtering for Men's, Women's, and Beauty collections",
            "Global state management with Redux Toolkit for cart and product data",
            "Smooth navigation and routing powered by React Router",
            "Responsive, modern UI styled with Sass (SCSS)",
            "Optimized component structure for scalability and maintainability"

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
        img: ["/simple-product-list/1.png", "/simple-product-list/2.png", "/simple-product-list/3.png", "/simple-product-list/4.png", "/simple-product-list/5.png", "/simple-product-list/6.png", "/simple-product-list/7.png",], techUsed: ["React.js", "Tailwind CSS", "localStorage"],
        category: "react",
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
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: ' HTML, CSS, JavaScript, React.js, Next.js, Node.js, MongoDB' },
    {
        icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: `Bachelor in Computer Science at—
Higher Technological Institute (HTI), Egypt` },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Completed multiple web projects demonstrating modern, responsive, and scalable solutions.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];