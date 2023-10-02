import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useActionData, useAsyncValue } from 'react-router-dom'
import useQuery from '../../hooks/useQuery'
import { useMainContext } from '../../context/MainContext'
import HeroSection from './HeroSection'
import TeacherSection from './TeacherSection'
import CourseComingSection from './CourseComingSection'
import CourseSection from './CourseSection'
import FeaturedSection from './FeaturedSection'
import TestimonialSection from './TestimonialSection'
import FaqSection from './FaqSection'
import GallerySection from './GallerySection'
import CallRegisterSection from './CallRegisterSection'
import { courseService } from '../../services/courseService'
import { questionService } from '../../services/questionService'
import { teamService } from '../../services/teamService'
import { galleryService } from '../../services/galleryService'
// import { useBlocker } from 'react-router/dist/lib/hooks'

const HomePage = () => {
  // ********* NHO DE .ENV O NGOAI SRC *********
  // =========== COURSE ===============
  const {
    data: coursesData,
    error: coursesError,
    loading: coursesLoading,
    // refetch
  } = useQuery (courseService.getCourses);

  const course = coursesData?.courses || [];
  // coursescomming = start
  // commingCourses se lay courses 
  // filter: Chỉ lấy ra những phần tử đạt điều kiện
  const commingCourses = course.filter((course) =>{
    return course?.startDate && new Date(course.startDate) > new Date()
  }) || [];


  // =============== TEAM ==================
  const { data: teamsData, loading: teamsLoading } = useQuery(
    teamService.getTeams
  );
  const teams = teamsData?.teams || [];

// ================= QUESTION =================
  const { data: questionData, loading: questionsLoading } = useQuery(
    questionService.getQuestion
  );
   const questions= questionData?.questions || [];


  // ================== GALLERY ===============
  const { data: galleriesData, loading: galleriesLoading } = useQuery(
    galleryService.getGalleries
  );
  // DE LAY DUOC HINH ANH TA CAN CHECK DUOC TUNG PHAN TU PHIA TRONG DE LAY RA THONG TIN
  const galleries= galleriesData?.galleries?.[0]?.images || [];


//   // =========== TEAM ===========
//   const {
//     data: teamsData,
//     error: teamsError,
//     loading: teamsLoading,
//     refetch: refetchTeam,
//   } = useQuery (() => axios.get("https://cfdcourses.cfdcircle.vn/api/v1/teams"))

//   const teams = teamsData?.teams || [];
//   // console.log("teamsData", teamsData)
  

//   // // ========= COURSESCOMMING ============
//   const {
//     data: coursesData,
//     error: coursesError,
//     loading: coursesLoading,
//     refetch: refetchCourses,
//   } = useQuery (() => axios.get("https://cfdcourses.cfdcircle.vn/api/v1/courses"))
//   // clg ra de check 

//   const courses = coursesData?.courses || [];
//   // coursescomming = start
//   // commingCourses se lay courses 
//   // filter: Chỉ lấy ra những phần tử đạt điều kiện
//   const commingCourses = courses.filter((course) =>{
//     return course?.startDate && new Date(course.startDate) > new Date()
//   }) || [];
//   // console.log("CommingCourses", commingCourses)

  
  return (
    <div>
      <main className="mainwrapper">
      <HeroSection/>
      <CourseComingSection courses={commingCourses} loading={coursesLoading} />
      <CourseSection courses={course} loading={coursesLoading}/>
      <TeacherSection teachers={teams} loading={teamsLoading}/>
      <FeaturedSection/>
    {/* --------------------------------Testimonial-------------------------------- */}
      <TestimonialSection/>
    {/* --------------------------------faq-------------------------------- */}
      <FaqSection questions={questions} loading={questionsLoading}/>
      <GallerySection galleries ={galleries} loading={galleriesLoading} />
      <CallRegisterSection/>
  </main>
    </div>
  )
}

export default HomePage
