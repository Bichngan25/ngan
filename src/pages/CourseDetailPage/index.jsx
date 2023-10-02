import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from './HeroSection';
import ContentDetailSection from './ContentDetailSection';
import FeaturedSection from './FeaturedSection';
import FaqSection from './FaqSection';
import CoursesSection from './CoursesSection';
import HeaderTop from '../../components/HeaderTop';
import { courseService } from '../../services/courseService';
import useMutation from '../../hooks/useMutation';
import useQuery from '../../hooks/useQuery';
import { formatCurrency, formatDate } from '../../utils/format'
import useDebounce from '../../hooks/useDebounce';
import PageLoading from '../../components/PageLoading';



// Dùng useParams lấy courseSlug từ url
// Dùng useMutation để setup courseService.getCourseBySlug: vì API này không gọi ngay mà phụ thuộc vào courseSlug mỗi khi url thay đổi => kết hợp với useEffect để khi courseSlug thay đổi sẽ gọi execute để gọi API
// Dùng useQuery để gọi API lấy data của questions và courses
// Tạo modifiedProps chứa tất cả dữ liệu của courseDetailData, đồng thời điều chỉnh những data cần thiết khác
// Truyền modifiedProps vào các Component cần thiết. Truyền dư props trong trường hợp này cũng không ảnh hưởng.
// Ứng dụng useDebounce để delay sự thay đổi của các api loading => kết hợp với <PageLoading>

const CourseDetailPage = () => {
  const params = useParams();
  // console.log("params", params)
  const { courseslug } = useParams();
  console.log("courseslug", courseslug)
  const {data: questionsData, loading: questionLoading} = useQuery (
    courseService.getCourses
  );
  const {data: courseData, loading: courseLoading} = useQuery
  const {data: courseDetailData,loading: courseDetailLoading, execute, } = useMutation(courseService.getCourseBySlug)
    useEffect(() =>{
      if (courseslug) execute (courseslug || "", {})
    },[])



    // Modify Data
    const questions = questionsData?.questions || []
    const courses = courseData?.courses || []
    const orderLink = `/course-order` + courseslug;

    const {teams, startDate, price} = courseDetailData || {}
    const modifiedProps = {...courseDetailData,
    teacherInfor: teams?.find((item) => item.tags.includes(Roles.Teacher)),
    startDate : formatDate(startDate || ""),
    price: formatCurrency(price),
    orderLink
  }

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
