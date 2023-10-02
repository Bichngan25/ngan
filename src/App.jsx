import MainLayout from "./layout/MainLayout"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BlogDetailPage from "./pages/BlogDetailPage"
import BlogPage from "./pages/BlogPage"
import ChangePassWordPage from "./pages/ChangePassWordPage"
import CourseDetailPage from "./pages/CourseDetailPage"
import CourseOderPage from "./pages/CourseOderPage"
import CoursesPage from "./pages/CoursesPage"
import NotFoundPage from "./pages/NotFoundPage"
import PaymentMethodPage from "./pages/PaymentMethodPage"
import PrivacyPage from "./pages/PrivacyPage"
import ProfilePage from "./pages/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyInfo from "./pages/ProfilePage/MyInfo"
import MyCourse from "./pages/ProfilePage/MyCourse"
import MyPayment from "./pages/ProfilePage/MyPayment"
import PATHS from "./constants/path"
import PrivateRoute from "./components/PrivateRoute"

function App() {
   return (
    <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage/>} />
            <Route path={PATHS.ABOUT} element={<AboutPage/>} />

            <Route path={PATHS.BLOG.INDEX} element={<BlogPage/>} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage/>} />

            <Route path={PATHS.CHANGE_PASSWORD} element={<ChangePassWordPage/>} />


            {/* vao constants de tao path.js */}
            <Route path={PATHS.COURSE.INDEX} element={<CoursesPage/>} />
            <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage/>} />
            <Route path={PATHS.COURSE.ORDER} element={<CourseOderPage/>} />

            <Route path={PATHS.PAYMENT} element={<PaymentMethodPage/>} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPage/>} />
            
            {/* ======== PRIVATEROUTE ======== */}
            {/* dung privateRoute de chan vao cac trang k the vao truc tiep maf phai dang nhap hay lam 1 hanh dong nao do vi du nhu trang profile */}
            <Route element={<PrivateRoute/>}>
              {/* <Route path={PATHS.COURSE.ORDER} element={<CourseOderPage/>} /> */}
              <Route path={PATHS.PROFILE.INDEX} element={<ProfilePage/>}>
                <Route index element={<MyInfo />} />
                <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
                <Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage/>} /> 
          </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default App;
