import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from './HeroSection';
import ContentDetailSection from './ContentDetailSection';
import FeaturedSection from './FeaturedSection';
import FaqSection from '../HomePage/FaqSection';
import CoursesSection from './CoursesSection';
import HeaderTop from '../../components/HeaderTop';
import { courseService } from '../../services/courseService';
import useMutation from '../../hooks/useMutation';
import useQuery from '../../hooks/useQuery';
import { formatCurrency, formatDate } from '../../utils/format'
import useDebounce from '../../hooks/useDebounce';
import PageLoading from '../../components/PageLoading';
import { questionService } from '../../services/questionService';
import { ROLE } from '../../constants/role';
// import { ROLE } from '../../constants/role'




// Dùng useParams lấy courseSlug từ url
// Dùng useMutation để setup courseService.getCourseBySlug: vì API này không gọi ngay mà phụ thuộc vào courseSlug mỗi khi url thay đổi => kết hợp với useEffect để khi courseSlug thay đổi sẽ gọi execute để gọi API
// Dùng useQuery để gọi API lấy data của questions và courses
// Tạo modifiedProps chứa tất cả dữ liệu của courseDetailData, đồng thời điều chỉnh những data cần thiết khác
// Truyền modifiedProps vào các Component cần thiết. Truyền dư props trong trường hợp này cũng không ảnh hưởng.
// Ứng dụng useDebounce để delay sự thay đổi của các api loading => kết hợp với <PageLoading>

const CourseDetailPage = () => {
  const params = useParams();
  // console.log("params",params)
  const { courseSlug } = params;
  // console.log("courseSlug",courseSlug)
  // la danh sach cau hoi
  const { data: questionsData, loading: questionLoading } = useQuery(
    questionService.getQuestion
  );
  // lay chi tiet khoa hoc de render ra cac khoa hoc lien quan
  const { data: courseData, loading: courseLoading } = useQuery(
    courseService.getCourses
  );

  // lay chi tiet khoa hoc
  // useQuery: get
  // useMutation: put, post, delete,...
  const {
    data: courseDetailData,
    loading: courseDetailLoading,
    execute,
  } = useMutation(courseService.getCourseBySlug);

  // neu co courseSlug thi dung execute 
  useEffect(() => {
    if (courseSlug) execute(courseSlug || "");
  }, [courseSlug]);

  // Modify data
  const questions = questionsData?.questions || [];
  // console.log("questions",questions)
  const courses = courseData?.courses || [];
  console.log("courses",courses)
  const orderLink = `/course-order/` + courseSlug;
  // console.log("orderLink",orderLink)

  const { teams, startDate, price } = courseDetailData || {};

  const modifiedProps = {
    ...courseDetailData,
    teacherInfo: teams?.find((item) => item.tags.includes(ROLE.Teacher)),
    startDate: formatDate(startDate || ""),
    price: formatCurrency(price),
    orderLink,
  };

  console.log("modifiedProps",modifiedProps)

  const apiLoading = courseDetailLoading || questionLoading || courseLoading;

  const pageLoading = useDebounce(apiLoading, 500);

  if (pageLoading) {
    return <PageLoading />;
  }


  return (
    <div>
        <HeaderTop {...modifiedProps}/>
        <main className="mainwrapper coursedetailpage">
          <HeroSection {...modifiedProps}/>
          <ContentDetailSection {...modifiedProps}/>
          <FeaturedSection {...modifiedProps}/>
          <FaqSection questions={questions} loading={questionLoading}/>
          <CoursesSection courses={courses} loading={courseLoading}/>
        </main>
    </div>
  )
}

export default CourseDetailPage
