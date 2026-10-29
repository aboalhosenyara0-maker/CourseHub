
'use client'
import { useParams } from "next/navigation"
import { state } from "../../page"
import { useSelector } from "react-redux"
import { useState } from "react"
import icon from '../../../../assets/icon.png'
import Students from '../../../../assets/Students.png'
import time from '../../../../assets/time.png'
import level from '../../../../assets/level.png'
import lesson from '../../../../assets/lesson.png'
import quizzes from '../../../../assets/quizzes.png'
import Instructor from '../../../../assets/Instructor.png'
import fecbook from '../../../../assets/fecbook.png'
import icon3 from '../../../../assets/icon3.png'
import icon2 from '../../../../assets/icon2.png'
import instagram from '../../../../assets/instagram.png'
import youTube from '../../../../assets/youTube.png'
import Image from "next/image"

const faqs = [
    {
        question: "What Does Royalty Free Mean?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
        question: "What Does Royalty Free Mean?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
        question: "What Does Royalty Free Mean?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
        question: "What Does Royalty Free Mean?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
]

const ShowCourse = () => {
    const params = useParams()
    const id = params.id
    const allCourses = useSelector((state: state) => state.education.education)
    const course = allCourses.find((course) => course.id === Number(id))

    const [activeTab, setActiveTab] = useState("overview")
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [reviewPage, setReviewPage] = useState(1)

    return (
        <div className="w-full min-w-0 overflow-x-hidden">

            <div className="w-full min-h-[60px] flex flex-wrap items-center gap-4 pl-[70px] pt-[18px] pb-3 bg-[#F5F5F5] max-md:pl-5 max-md:pr-5 max-md:gap-2">
                Homepage
                <Image src={icon} alt='' className='mt-1 w-[4.94px] h-[8px]' />
                <div className='text-gray-500'>Course</div>
            </div>

            <div className="w-full min-h-[290px] bg-gray-950 pb-8 max-md:pb-6">

                {course ? (
                    <div className="flex gap-[253px] max-md:flex-col max-md:gap-6 max-md:px-4">

                        <div className="pt-[50px] pb-[50px] pl-[70px] pr-[70px] flex flex-col gap-[20px] min-w-0 max-md:px-0 max-md:pt-7 max-md:pb-0 max-md:gap-5">

                            <div className="flex gap-[20px] items-center max-md:flex-wrap max-md:gap-3">

                                <div className="w-[114px] min-h-[40px] shrink-0 flex justify-center items-center bg-[#555555] border-[#555555] rounded-[8px] border font-medium text-[#FFFFFF] text-base px-2">
                                    {course.category}
                                </div>

                                <div className="flex flex-wrap gap-[10px] font-normal text-lg text-[#FFFFFF] max-md:text-base max-md:min-w-0">
                                    <div className="text-[#555555]">by</div>
                                    <span className="break-words [overflow-wrap:anywhere]">
                                        {course.instructor}
                                    </span>
                                </div>

                            </div>

                            <div className="w-[563px] font-semibold text-4xl text-[#FFFFFF] max-md:w-full max-md:text-2xl max-sm:text-xl break-words [overflow-wrap:anywhere]">
                                {course.description}
                            </div>

                            <div className="flex gap-[24px] max-md:flex-wrap max-md:gap-x-5 max-md:gap-y-3">

                                <div className="flex gap-[8px] items-center text-[#555555] max-sm:text-sm min-w-0">
                                    <Image src={Students} alt='' className="w-[16px] h-[16px] shrink-0" />
                                    <span className="break-words">{course.duration}</span>
                                </div>

                                <div className="flex gap-[8px] items-center text-[#555555] max-sm:text-sm min-w-0">
                                    <Image src={time} alt='' className="w-[16px] h-[16px] shrink-0" />
                                    <span className="break-words">{course.students}</span>
                                </div>

                                <div className="flex gap-[8px] items-center text-[#555555] max-sm:text-sm min-w-0">
                                    <Image src={level} alt="" className="w-[16px] h-[16px] shrink-0" />
                                    <span className="break-words">{course.level}</span>
                                </div>

                                <div className="flex items-center text-[#555555] gap-[8px] max-sm:text-sm min-w-0">
                                    <Image src={lesson} alt="" className="w-[16px] h-[16px] shrink-0" />
                                    <span>{course.lessons} Lessons</span>
                                </div>

                                <div className="flex gap-[8px] items-center text-[#555555] max-sm:text-sm min-w-0">
                                    <Image src={quizzes} alt="" className="w-[16px] h-[16px] shrink-0" />
                                    <span>{course.quizzes} Quizzes</span>
                                </div>

                            </div>
                        </div>

                        <div className="w-[410px] h-[358px] shrink-0 border border-gray-400 rounded-[20px] flex flex-col gap-[30px] mt-[50px] max-md:mt-0 max-md:w-full max-md:max-w-[410px] max-md:h-auto max-md:mx-auto max-md:gap-5">

                            <div className="w-full">
                                <Image
                                    src={course.image}
                                    alt=''
                                    className="w-[410px] h-[250px] rounded-t-[20px] object-cover max-md:w-full max-md:h-auto max-md:aspect-[410/250]"
                                />
                            </div>

                            <div className="flex gap-[40px] justify-center items-center pb-4 max-sm:gap-5 max-sm:px-3 max-sm:flex-wrap">

                                <div className="flex gap-[10px] justify-center items-center">
                                    <span className="line-through text-gray-400">
                                        ${course.oldPrice}
                                    </span>
                                    <span className="text-2xl font-bold text-red-600">
                                        ${course.price}
                                    </span>
                                </div>

                                <button className="flex justify-center items-center text-white w-[127px] min-h-[48px] bg-[#FF782D] rounded-[24px] shrink-0">
                                    Start now
                                </button>

                            </div>
                        </div>

                    </div>
                ) : (
                    <p></p>
                )}

            </div>

            <div className="pt-[50px] pl-[70px] max-md:pt-7 max-md:px-4">

                <div className="flex flex-wrap max-sm:gap-2">

                    {["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`cursor-pointer max-sm:flex-1 max-sm:min-w-[90px] max-sm:px-2 max-sm:text-sm ${
                                activeTab === tab.toLowerCase()
                                    ? "w-[158px] h-[64px] border-b-2 bg-[#F5F5F5] rounded-t-[20px] rounded-r-[0] border-[#EAEAEA] text-red-600 max-sm:w-auto max-sm:h-[52px]"
                                    : "w-[158px] h-[64px] text-gray-500 border border-[#EAEAEA] max-sm:w-auto max-sm:h-[52px]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}

                </div>
            </div>

            {activeTab === "overview" && (
                <div className="w-[792px] ml-[70px] p-[30px] leading-[150%] text-[#555555] bg-[#F5F5F5] rounded-b-[20px] text-lg pl-[70px] pt-[30px] pb-[30px] max-md:ml-0 max-md:mx-4 max-md:w-auto max-md:p-5 max-md:text-base max-sm:mx-4 max-sm:p-4 max-sm:text-sm break-words [overflow-wrap:anywhere]">

                    <p className="mb-8">
                        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                    </p>

                    <p>
                        LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                        No comments yet! You be the first to comment.
                    </p>

                </div>
            )}

                        
            {activeTab === "curriculum" && (
            <div className="ml-[70px] w-[792px] rounded-b-[20px] bg-[#F5F5F5] p-[30px] pl-[70px] text-lg leading-[150%] text-[#555555] break-words [overflow-wrap:anywhere] max-md:mx-4 max-md:ml-0 max-md:w-auto max-md:p-5 max-md:text-base max-sm:p-4 max-sm:text-sm">

                <p className="mb-6 text-gray-600">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
                This is one of the best WordPress LMS Plugins which can be used
                to easily create & sell courses online.
                </p>

                <div className="flex flex-col gap-4">
                {[
                    { title: "Lessons with video content", info: "5 Lessons", duration: "45 Mins" },
                    { title: "Lessons with video content", info: "3 Lessons", duration: "45 Mins" },
                    { title: "Lessons with video content", info: "Preview", duration: "12:30" },
                    { title: "Lessons with video content", info: "Preview", duration: "10:05" },
                    { title: "Lessons with video content", info: "Preview", duration: "2:25" },
                    { title: "Lessons with video content", info: "5 Lessons", duration: "45 Mins" },
                    { title: "Lessons with video content", info: "5 Lessons", duration: "45 Mins" },
                    { title: "Lessons with video content", info: "5 Lessons", duration: "45 Mins" },
                ].map((lesson, index) => (
                    <div
                    key={index}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E5E5E5] bg-white p-4"
                    >
                    <p className="min-w-0 flex-1 font-medium text-[#222222]">
                        {lesson.title}
                    </p>

                    <div className="flex shrink-0 flex-wrap items-center gap-3 text-sm text-[#555555]">
                        <span>{lesson.info}</span>
                        <span>{lesson.duration}</span>
                    </div>
                    </div>
                ))}
                </div>

            </div>
            )}


            {activeTab === "instructor" && (
                <div className="w-[792px] ml-[70px] p-[30px] leading-[150%] text-[#555555] bg-[#F5F5F5] rounded-b-[20px] text-lg pl-[70px] pt-[30px] pb-[30px] max-md:ml-0 max-md:mx-4 max-md:w-auto max-md:p-5 max-md:text-base max-sm:p-4 max-sm:text-sm break-words [overflow-wrap:anywhere]">

                    <div className="flex gap-[24px] max-sm:flex-col max-sm:gap-4">

                        <div className="shrink-0">
                            <Image src={Instructor} alt="" className="max-sm:max-w-full" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h2>ThimPress</h2>

                            <p>
                                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                            </p>

                            <div className="mt-[12px]">
                                <div className="flex items-center gap-[4px]">
                                    <Image src={Students} alt="" className="w-[16px] h-[16px] shrink-0" />
                                    156 Students
                                </div>

                                <div className="flex items-center gap-[4px]">
                                    <Image src={lesson} alt="" className="w-[16px] h-[16px] shrink-0" />
                                    20 Lessons
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="pt-[20px]">

                        <p>
                            LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                        </p>

                        <div className="flex pt-[20px] gap-[12px] max-sm:flex-col max-sm:gap-3">
                            <p>Follow:</p>

                            <div className="flex flex-wrap gap-[12px] items-center">
                                <Image src={fecbook} alt='' className='w-[20px] h-[20px]' />
                                <Image src={icon2} alt='' className='w-[20px] h-[20px]' />
                                <Image src={icon3} alt='' className='w-[20px] h-[20px]' />
                                <Image src={instagram} alt='' className='w-[20px] h-[20px]' />
                                <Image src={youTube} alt='' className='w-[20px] h-[20px]' />
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {activeTab === "faqs" && (
                <div className="w-[792px] min-h-[477px] p-[30px] bg-[#F5F5F5] rounded-b-[20px] ml-[70px] max-md:ml-0 max-md:mx-4 max-md:w-auto max-md:p-4 max-sm:px-3">

                    <div className="w-[732px] max-w-full flex flex-col gap-[20px]">

                        {faqs.map((faq, index) => (
                            <div
                                key={`${faq.question}-${index}`}
                                className="border-b border-gray-200 py-5 bg-[#FFFFFF] pl-[30px] pr-[30px] max-sm:px-4"
                            >

                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="flex w-full items-center justify-between gap-3 text-left"
                                >
                                    <span className="font-semibold min-w-0 break-words [overflow-wrap:anywhere]">
                                        {faq.question}
                                    </span>

                                    <span className="text-xl shrink-0">
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                </button>

                                {openFaq === index && (
                                    <p className="mt-4 leading-[150%] text-gray-600 break-words [overflow-wrap:anywhere]">
                                        {faq.answer}
                                    </p>
                                )}

                            </div>
                        ))}

                    </div>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="w-[792px] max-w-[850px] bg-[#F7F7F7] p-5 sm:p-7 text-[#222222] ml-[70px] max-md:ml-0 max-md:mx-4 max-md:w-auto max-md:p-4 max-sm:px-3">

                    <h3 className="text-sm font-semibold mb-3">
                        Comments
                    </h3>

                    <div className="flex items-start gap-3 mb-5">
                        <span className="text-[30px] font-semibold leading-none">
                            4.0
                        </span>

                        <div>
                            <div className="text-[#FFB400] text-sm tracking-wide">
                                ★★★★☆
                            </div>
                            <p className="text-[10px] text-gray-500">
                                based on 146,951 ratings
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        {[
                            { stars: 5, percent: 90 },
                            { stars: 4, percent: 5 },
                            { stars: 3, percent: 2 },
                            { stars: 2, percent: 2 },
                            { stars: 1, percent: 1 },
                        ].map((rating) => (
                            <div
                                key={rating.stars}
                                className="flex items-center gap-2 text-[10px]"
                            >
                                <span className="w-[58px] shrink-0 text-[#FFB400]">
                                    {"★".repeat(rating.stars)}
                                    <span className="text-gray-300">
                                        {"☆".repeat(5 - rating.stars)}
                                    </span>
                                </span>

                                <span className="w-7 shrink-0 text-gray-500">
                                    {rating.percent}%
                                </span>

                                <div className="h-[6px] flex-1 min-w-0 bg-[#E6E6E6]">
                                    <div
                                        className="h-full bg-[#FFB400]"
                                        style={{ width: `${rating.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-200">
                        {[1, 2, 3].map((review) => (
                            <div
                                key={review}
                                className="flex gap-3 border-b border-gray-200 py-5 max-sm:gap-2"
                            >

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E5E5] text-xs font-semibold text-gray-600">
                                    LH
                                </div>

                                <div className="min-w-0 flex-1">

                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h4 className="text-[11px] font-semibold">
                                            Laura Hipster
                                        </h4>

                                        <span className="text-[10px] text-gray-500">
                                            October 03, 2022
                                        </span>
                                    </div>

                                    <p className="mt-2 text-[11px] leading-[1.7] text-gray-600 break-words [overflow-wrap:anywhere]">
                                        Quisque nec non amet quis. Varius tellus justo odio
                                        parturient mauris curabitur lorem in. Pulvinar sit
                                        ultricies mi et eleifend luctus ut. Id sed faucibus
                                        bibendum augue id cras purus. At eget euismod cursus
                                        non. Molestie dignissim sed volutpat feugiat vel.
                                    </p>

                                    <button
                                        className="mt-2 flex items-center gap-1 text-[11px] text-red-600 hover:text-red-800"
                                        onClick={() => alert("Reply feature coming soon")}
                                    >
                                        <span>↶</span>
                                        Reply
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center items-center gap-2">

                        <button
                            onClick={() => setReviewPage((page) => Math.max(1, page - 1))}
                            disabled={reviewPage === 1}
                            className="h-8 w-8 rounded-full border border-gray-200 text-sm disabled:opacity-40"
                        >
                            ‹
                        </button>

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => setReviewPage(page)}
                                className={`h-8 w-8 rounded-full text-xs ${
                                    reviewPage === page
                                        ? "bg-black text-white"
                                        : "border border-gray-200 bg-transparent hover:bg-gray-200"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setReviewPage((page) => Math.min(3, page + 1))}
                            disabled={reviewPage === 3}
                            className="h-8 w-8 rounded-full border border-gray-200 text-sm disabled:opacity-40"
                        >
                            ›
                        </button>

                    </div>
                </div>
            )}

            <div className="mt-6 bg-white pt-1 text-[#222222] w-[792px] ml-[70px] max-md:ml-0 max-md:mx-4 max-md:w-auto max-md:min-w-0 max-md:mb-6">

                <h3 className="text-[13px] font-semibold mb-2">
                    Leave A Comment
                </h3>

                <p className="text-[11px] text-gray-500 mb-4 break-words">
                    Your email address will not be published. Required fields are marked *
                </p>

                <form
                    className="space-y-2.5"
                    onSubmit={(e) => {
                        e.preventDefault()
                        alert("Your comment has been submitted!")
                    }}
                >

                    <div className="flex flex-col sm:flex-row gap-2.5">

                        <input
                            type="text"
                            placeholder="Name*"
                            required
                            className="h-[40px] w-full sm:w-1/2 rounded-[4px] border border-[#CCCCCC] px-3 text-sm outline-none focus:border-[#FF782D]"
                        />

                        <input
                            type="email"
                            placeholder="Email*"
                            required
                            className="h-[40px] w-full sm:w-1/2 rounded-[4px] border border-[#CCCCCC] px-3 text-sm outline-none focus:border-[#FF782D]"
                        />

                    </div>

                    <textarea
                        placeholder="Comment"
                        required
                        rows={4}
                        className="w-full min-w-0 resize-y rounded-[4px] border border-[#CCCCCC] p-3 text-sm outline-none focus:border-[#FF782D]"
                    />

                    <label className="flex items-start gap-2 text-[10px] text-gray-600">
                        <input
                            type="checkbox"
                            className="h-3 w-3 shrink-0 mt-0.5 accent-[#FF782D]"
                        />
                        <span className="break-words">
                            Save my name, email in this browser for the next time I comment
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="mt-1 rounded-full bg-[#FF782D] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#e9651c]"
                    >
                        Posts Comment
                    </button>

                </form>
            </div>

        </div>
    )
}

export default ShowCourse

