
'use client'
import Image from 'next/image'
import icon from './../../../assets/icon.png'
import Students from '../../../assets/Students.png'
import time from '../../../assets/time.png'
import iconSearch from './../../../assets/search.png'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../page'
import { setCurrentPage } from '@/redux/slices'
import Link from 'next/link'
import { useState } from 'react'

const Courses = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state: state) => state.education.currentPage)
    const allCourses = useSelector((state: state) => state.education.education)
    const [search, setSearch] = useState('')

    const filteredCourses = allCourses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    )

    const coursesPerPage = 6
    const startIndex = (currentPage - 1) * coursesPerPage
    const endIndex = startIndex + coursesPerPage
    const currentCourses = filteredCourses.slice(startIndex, endIndex)
    const totalPage = Math.ceil(filteredCourses.length / coursesPerPage)

    const pageNumbers = Array.from(
        { length: totalPage },
        (_, index) => index + 1
    )

    return (
        <div>
            {/* Breadcrumb */}
            <div className="flex h-[60px] w-full items-center gap-4 bg-[#F5F5F5] pl-5 pt-0 md:pl-[70px] md:pt-[18px]">
                Homepage
                <Image src={icon} alt="" className="h-[8px] w-[4.94px]" />
                <div className="text-gray">Course</div>
            </div>

            <div className="flex flex-col px-5 md:pl-[70px] md:pr-0">
                {/* Title and Search */}
                <div className="my-8 flex flex-col gap-5 md:m-[50px] md:flex-row md:items-center md:justify-between">
                    <h1 className="text-3xl font-semibold text-[#000000] md:text-4xl">
                        All Courses
                    </h1>

                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                dispatch(setCurrentPage(1))
                            }}
                            placeholder="search"
                            className="h-[31px] w-full border-0 border-b border-black px-2 outline-none focus:border-[#FF782D] md:w-[270px]"
                        />
                        <div className="absolute right-0 top-0">
                            <Image
                                src={iconSearch}
                                alt=""
                                className="h-[20px] w-[20px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Courses */}
                <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-[35px]">
                    {currentCourses.map((course) => (
                        <div
                            key={course.id}
                            className="w-full overflow-hidden rounded-3xl border border-[#EAEAEA] md:h-[474px] md:w-[385px]"
                        >
                            <div className="relative">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={385}
                                    height={250}
                                    className="h-auto w-full rounded-3xl md:h-auto md:w-[385px]"
                                />

                                <div className="absolute left-2 top-2 h-[40px] w-[114px] rounded-2xl bg-gray-950 p-2 text-center text-white">
                                    {course.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="mb-[12px]">
                                    by {course.instructor}
                                </div>

                                <div className="mb-[16px] text-xl font-semibold text-[#000000]">
                                    {course.title}
                                </div>

                                <div className="mb-[16px] flex flex-wrap gap-x-6 gap-y-3 md:gap-24">
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

                                <div className="flex items-center justify-between gap-3 pt-[16px]">
                                    <div>
                                        {course.price} $
                                        {course.isFeatured}
                                    </div>

                                    <div>
                                        <button className="cursor-pointer hover:text-green-600">
                                            <Link href={`/courses/${course.id}`}>
                                                View more
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mb-8 mt-10 flex flex-wrap items-center justify-center gap-3 md:mb-0 md:mt-[70px] md:gap-[12px]">
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => dispatch(setCurrentPage(page))}
                            className={`h-[48px] w-[48px] shrink-0 cursor-pointer rounded-3xl border p-[10px]
                                ${
                                    currentPage === page
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 bg-white text-gray-700'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses