'use client'

import bgImag from '../../assets/bgImag.png'
import girl from '../../assets/girl.png'
import Art from '../../assets/Art.png'
import development from '../../assets/development.png'
import communication from '../../assets/communication.png'
import video from '../../assets/video.png'
import marketing from '../../assets/markiting.png'
import content from '../../assets/content.png'
import finance from '../../assets/finance.png'
import science from '../../assets/Science.png'
import bg from '../../assets/bg.png'
import book from '../../assets/book.png'
import currect from '../../assets/currect.png'
import section from '../../assets/bg-section.png'
import student from '../../assets/student.png'
import Students from '../../assets/Students.png'
import time from '../../assets/time.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Course } from '@/data/courses'
import Link from 'next/link'

export type state = {
  education: {
    education: Array<Course>
    currentPage: number
  }
}

export default function Home() {
  const categories = [
    { id: 1, Image: Art, name: 'Design', courses: 38 },
    { id: 2, Image: development, name: 'Development', courses: 38 },
    { id: 3, Image: communication, name: 'Communication', courses: 38 },
    { id: 4, Image: video, name: 'Videography', courses: 38 },
    { id: 5, Image: marketing, name: 'Marketing', courses: 38 },
    { id: 6, Image: content, name: 'Content writing', courses: 38 },
    { id: 7, Image: finance, name: 'Finance', courses: 38 },
    { id: 8, Image: science, name: 'Science', courses: 38 },
  ]

  const allCourses = useSelector(
    (state: state) => state.education.education
  )

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${bgImag.src})` }}
        className="relative h-auto min-h-[calc(100vh-73px)] bg-cover bg-center bg-no-repeat pt-[115px] pb-[50px] md:h-[calc(100vh-73px)] md:min-h-0 md:pt-0 md:pb-0"
      >
        <div className="flex flex-col md:flex-row">
          <div
            style={{ backgroundImage: `url(${girl.src})` }}
            className="absolute right-0 top-31 hidden h-[540px] w-[402px] md:block"
          />

          <div className="mt-0 flex flex-col items-center px-5 text-center md:mt-50 md:items-start md:p-10 md:text-left">
            <h1 className="mb-6 w-full text-4xl font-semibold md:mb-12 md:w-[520px] md:text-6xl">
              Build Skills with Online Course
            </h1>

            <p className="mb-7 w-full max-w-[520px]">
              We denounce with righteous indignation and dislike men who are
              so beguiled and demoralized that cannot trouble.
            </p>

            <button className="flex h-[48px] w-[170px] items-center justify-center rounded-3xl bg-[#FF782D] text-amber-50">
              <a href="/blog">Posts comment</a>
            </button>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="h-auto px-5 pt-[70px] md:h-[642px] md:px-[70px] md:pt-[50px]">
        <div>
          <div className="mb-[30px] flex flex-col items-center gap-5 text-center md:mb-[50px] md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="mb-[12px] text-[32px] font-semibold text-[#000000]">
                Top Categories
              </h2>

              <p className="text-[18px] font-normal text-[#555555]">
                Explore our Popular Categories
              </p>
            </div>

            <button className="hidden h-[48px] w-[161px] items-center justify-center rounded-3xl border border-[#9D9D9D] font-medium text-[#000000] md:flex">
              All categories
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 px-0 md:px-[98px]">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="flex h-[180px] w-full items-center justify-center rounded-3xl border border-[#EAEAEA] text-center md:h-[234px] md:w-[234px]"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={category.Image}
                      alt={category.name}
                      width={32}
                      height={32}
                    />

                    <div className="text-[20px] font-semibold text-[#000000]">
                      {category.name}
                    </div>

                    <div className="text-[18px] font-normal text-[#555555]">
                      {category.courses} courses
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex justify-center md:hidden">
            <button className="flex h-[48px] w-[161px] items-center justify-center rounded-3xl border border-[#9D9D9D] font-medium text-[#000000]">
              All categories
            </button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="h-auto px-5 pt-[70px] md:h-[642px] md:px-[70px] md:pt-[50px]">
        <div className="mb-[30px] flex flex-col items-center gap-5 text-center md:mb-[50px] md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="mb-[12px] text-[32px] font-semibold text-[#000000]">
              Featured courses
            </h2>

            <p className="text-[18px] font-normal text-[#555555]">
              Explore our Popular Courses
            </p>
          </div>

          <div>
            <button className="hidden h-[48px] w-[161px] items-center justify-center rounded-3xl border border-[#9D9D9D] font-medium text-[#000000] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#FF782D] hover:bg-[#FF782D] hover:text-white hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:scale-95 md:flex">
              <Link href="/courses">All courses</Link>
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-[50px]">
          {allCourses
            .filter((course) => course.isFeatured)
            .slice(0, 3)
            .map((course) => {
              return (
                <div
                  key={course.id}
                  className="w-full min-w-0 flex-1 rounded-3xl border border-[#EAEAEA] md:h-[474px]"
                >
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      height={250}
                      className="w-full rounded-3xl"
                    />

                    <div className="absolute top-1 m-2 h-[40px] w-[114px] rounded-2xl border-b-black bg-gray-950 p-2 text-center text-white">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-[20px]">
                    <div className="mb-[12px]">
                      by {course.instructor}
                    </div>

                    <div className="mb-[16px] text-xl font-semibold text-[#000000]">
                      {course.title}
                    </div>

                    <div className="mb-[16px] flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={Students}
                          alt=""
                          className="h-[16px] w-[16px]"
                        />
                        {course.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <Image
                          src={time}
                          alt=""
                          className="h-[16px] w-[16px]"
                        />
                        {course.students} students
                      </div>
                    </div>

                    <div className="h-1 w-full bg-[#EAEAEA]" />

                    <div className="flex flex-wrap justify-between gap-3 pt-[16px]">
                      <div>{course.price} $</div>

                      <div>
                        <button className="cursor-pointer hover:text-[Green]">
                          <Link href={`/courses/${course.id}`}>
                            View more
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <button className="flex h-[48px] w-[161px] items-center justify-center rounded-3xl border border-[#9D9D9D] font-medium text-[#000000]">
            <Link href="/courses">All courses</Link>
          </button>
        </div>
      </section>

      
      {/* LearnPress Add-Ons */}
      <section className="px-0 pt-[70px] pb-[70px] md:px-[73px] md:pt-[70px]">
        <div className="relative mx-auto h-[400px] w-full md:mx-0 md:h-auto md:max-w-none">
          <Image
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full rounded-none object-cover object-left md:static md:h-auto md:w-full md:rounded-none md:object-contain"
      />

    {/* Mobile content */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-start px-5 pt-8 text-center md:hidden">
      <p className="mb-[12px] text-sm font-semibold text-[#555555]">
        GET MORE POWER FROM
      </p>

      <h2 className="text-2xl font-semibold text-[#000000]">
        LearnPress Add-Ons
      </h2>

      <p className="mt-5 mb-5 w-full text-base leading-6 font-normal text-[#555555]">
        The next level of LearnPress - LMS WordPress Plugin. More Powerful,
        Flexible and Magical Inside.
      </p>

      <button className="flex h-[48px] w-[177px] shrink-0 cursor-pointer items-center justify-center rounded-3xl bg-[#FF782D] text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e9651b] hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:scale-95">
        <Link href="/courses">Explorer course</Link>
      </button>
    </div>

    {/* Desktop content */}
    <div className="absolute top-1 hidden pt-[54px] pl-[50px] md:block">
      <p className="mb-[12px] text-base font-semibold text-[#555555]">
        GET MORE POWER FROM
      </p>

      <h2 className="text-3xl font-semibold text-[#000000]">
        LearnPress Add-Ons
      </h2>

      <p className="mt-[24px] mb-[24px] h-[54px] w-[450px] text-lg font-normal text-[#555555]">
        The next level of LearnPress - LMS WordPress Plugin. More
        Powerful, Flexible and Magical Inside.
      </p>

      <button className="flex h-[48px] w-[177px] cursor-pointer items-center justify-center rounded-3xl bg-[#FF782D] text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e9651b] hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:scale-95">
        <Link href="/courses">Explorer course</Link>
      </button>
    </div>
  </div>

  {/* Statistics */}
  <div className="mt-[70px] flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-[30px] md:pl-[70px] md:pr-[70px]">
    <div className="flex h-[161px] w-full max-w-[284px] flex-col items-center justify-center rounded-3xl bg-[#F5F5F5] md:w-[284px]">
      <p className="text-[32px] font-semibold text-[#FF782D]">25K+</p>
      <p className="text-center text-lg font-medium text-[#000000]">Students</p>
    </div>

    <div className="flex h-[161px] w-full max-w-[284px] flex-col items-center justify-center rounded-3xl bg-[#F5F5F5] md:w-[284px]">
      <p className="text-[32px] font-semibold text-[#FF782D]">899</p>
      <p className="text-center text-lg font-medium text-[#000000]">Courses</p>
    </div>

    <div className="flex h-[161px] w-full max-w-[284px] flex-col items-center justify-center rounded-3xl bg-[#F5F5F5] md:w-[284px]">
      <p className="text-[32px] font-semibold text-[#FF782D]">158</p>
      <p className="text-center text-lg font-medium text-[#000000]">Instructor</p>
    </div>

    <div className="flex h-[161px] w-full max-w-[284px] flex-col items-center justify-center rounded-3xl bg-[#F5F5F5] md:w-[284px]">
      <p className="text-[32px] font-semibold text-[#FF782D]">100%</p>
      <p className="text-center text-lg font-medium text-[#000000]">Satisfaction rate</p>
    </div>
  </div>

  {/* Grow your skills */}
  <div className="flex flex-col items-center gap-8 pt-[70px] md:flex-row md:items-start md:justify-center md:gap-[125px] md:p-[70px]">
    <div className="w-full max-w-[520px] md:w-auto md:max-w-none">
      <Image src={book} alt="" className="h-auto max-w-full" />
    </div>

    <div className="flex w-full max-w-[520px] flex-col items-start px-4 md:w-auto md:max-w-none md:pt-[40px] md:pl-[70px] md:pr-[70px] md:px-0">
      <h2 className="mb-[24px] text-[32px] font-semibold text-[#000000] max-sm:text-2xl">
        Grow us your skill
        <br />
        with LearnPress LMS
      </h2>

      <p className="mb-[16px] w-full max-w-[520px] text-lg font-normal text-[#555555] max-sm:text-base">
        We denounce with righteous indignation and dislike men who are
        so beguiled and demoralized that cannot trouble.
      </p>

      <ul className="mb-[20px] text-lg font-normal text-[#000000] max-sm:text-base">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="mb-[12px] flex gap-[8px]">
            <Image
              src={currect}
              alt=""
              className="mt-[8px] h-[16px] w-[16px] shrink-0"
            />
            Certification
          </li>
        ))}
      </ul>

      <button className="flex h-[48px] w-[177px] shrink-0 cursor-pointer items-center justify-center rounded-3xl bg-[#FF782D] text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e9651b] hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:scale-95">
        <Link href="/courses">Explorer course</Link>
      </button>
    </div>
  </div>

</section>


      
{/* Academy LMS */}
<section className="px-0 pt-[70px] pb-[70px] w-full md:px-[70px] md:pt-0 md:pb-0 ">
  <div className="relative min-h-[280px] w-full md:min-h-0">

    <Image
  src={section}
  alt=""
  className="absolute inset-0 h-full w-full object-cover md:static md:h-auto md:w-full"
/>

    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:justify-between md:px-[40px] md:text-left">

      {/* Image and text */}
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-[32px]">
        <div className="relative h-[70px] w-[70px] shrink-0 rounded-full bg-white md:h-[120px] md:w-[120px]">
          <Image
            src={student}
            alt=""
            className="absolute left-1/2 top-1/2 h-auto w-[40px] -translate-x-1/2 -translate-y-1/2 md:left-7 md:top-4 md:w-[61.16px] md:translate-x-0 md:translate-y-0"
          />
        </div>

        <p className="text-sm md:text-base">
          Let’s Start With Academy LMS
        </p>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 flex-col items-center gap-3 md:flex-row md:gap-[20px]">
        <button className="flex h-[40px] w-[156px] items-center justify-center rounded-3xl border border-[#FF782D] text-base font-medium text-[#FF782D] md:h-[48px] md:text-lg">
          I’m a student
        </button>

        <button className="flex h-[40px] w-[190px] items-center justify-center rounded-3xl border border-[#FF782D] bg-[#FF782D] text-base font-medium text-white md:h-[48px] md:w-[219px] md:text-lg">
          Become an Instructor
        </button>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}