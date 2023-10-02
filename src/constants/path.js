const COURSE_PATH = "/courses";
const PROFILE_PATH = "/profile";
const BLOG_PATH = "/blog";

const  PATHS ={
    HOME: "/",

    COURSE: {
        INDEX: COURSE_PATH,
        DETAIL: COURSE_PATH + "/:courseSlug",
        ORDER: '/course-order/:courseSlug'
    },
    BLOG:{
        INDEX: BLOG_PATH,
        DETAIL: BLOG_PATH + "/:blogSlug"
    },
    PROFILE:{
        INDEX: PROFILE_PATH,
        MY_COURSE: PROFILE_PATH + "/my-course",
        MY_PAYMENT: PROFILE_PATH + "/my-payment"
    },
    
    CONTACT: "/contact",
    ABOUT: "/about",
    CHANGE_PASSWORD: "/change-passWord",
    PAYMENT: "/payment-method",
    PRIVACY: "/privacy",
}

export default PATHS