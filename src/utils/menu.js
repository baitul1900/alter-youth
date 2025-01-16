import Icon from "@/components/Icon";
import { HOW_IT_WORKS_PAGE, SCHOLARSHIP_PAGE, COLLABORATE_PAGE, LOGIN_PAGE, SCHOLARSHIP_POLICY_PAGE, SUPPORT_PAGE, HOME_PAGE, ABOUT_US_PAGE } from "./router";

export const menuItems = [
    {
        id: HOME_PAGE,
        name: "Home",
        routeName: '/',
        icon: <Icon name="MdOutlineOtherHouses" />,
        inLink: false,
    },
    {
        id: HOW_IT_WORKS_PAGE,
        name : "How It Works",
        routeName: '/how-it-works',
        icon: <Icon name="AiOutlineQuestionCircle" />,
        inLink: false,
    },
    {
        id: ABOUT_US_PAGE,
        name : "About",
        routeName: '/about',
        icon: <Icon name="AiOutlineExclamationCircle" />,
        inLink: false,
    },
    {
        id: COLLABORATE_PAGE,
        name : "Collaborate",
        routeName: '/collaborate',
        icon: <Icon name="FaRegHandshake" />,
        inLink: false,
    },
    {
        id: SCHOLARSHIP_POLICY_PAGE,
        name : "Scholarship Policy",
        routeName: '/scholarship-policy',
        icon: <Icon name="FaRegNewspaper" />,
        inLink: false,
    },
    {
        id: SUPPORT_PAGE,
        name : "Get in touch",
        routeName: '/support',
        icon: <Icon name="MdSupportAgent" />,
        inLink: false,
    },
    {
        id: 12 ,
        name : "Get the app",
        icon: <Icon name="MdLogin" />,
        inLink: true,
    },
    {
        id: LOGIN_PAGE,
        name : "Log in",
        routeName: '/login',
        icon: <Icon name="MdOutlineOtherHouses" size={20}/>,
        inLink: false,
    }
];


// navbar menus 

export const navbarMenus = [
    {
        id:ABOUT_US_PAGE,
        name : "About",
        routeName: '/about',
        icon: <Icon name="AiOutlineExclamationCircle" size={20}/>,
    }, 
    {
        id: HOW_IT_WORKS_PAGE,
        name : "How It Works",
        routeName: '/how-it-works',
        icon: <Icon name="AiOutlineQuestionCircle" size={20}/>,
    },
    {
        id: SCHOLARSHIP_PAGE,
        name : "Scholarships",
        routeName: '/scholarship',
        icon: <Icon name="FaRegNewspaper" size={20}/>,
    },
    {
        id: COLLABORATE_PAGE,
        name : "Collaborate",
        routeName: '/collaborate',
        icon: <Icon name="FaRegHandshake" size={20}/>,
    },
    {
        id: LOGIN_PAGE,
        name : "Log in",
        routeName: '/login',
        icon: <Icon name="MdOutlineOtherHouses" size={20}/>,
    }
]