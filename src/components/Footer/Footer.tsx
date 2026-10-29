import Image from 'next/image'
import logo from '../../assets/logo.png'
import fecbook from '../../assets/fecbook.png'
import icon from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import instagram from '../../assets/instagram.png'
import youTube from '../../assets/youTube.png'

const Footer = () => {
    return (
        <div className="mt-[70px] h-auto bg-[#F5F5F5] md:h-[458px]">
        <div className="flex h-auto w-full flex-col gap-10 px-5 pt-[40px] pb-[30px] md:h-[281px] md:flex-row md:justify-evenly md:gap-0 md:px-0 md:pt-[50px] md:pb-[50px]">

            {/* EduPress */}
            <div>
            <div className="mb-[20px] flex items-center gap-[4px] md:mb-[32px]">
                <Image
                src={logo}
                alt=""
                className="h-[30px] w-[39.3px]"
                />
                <h1 className="text-[28px] font-bold text-[#000000]">
                EduPress
                </h1>
            </div>

            <p className="w-full max-w-[341px] text-lg font-normal text-[#555555] md:h-[69px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>

            {/* GET HELP */}
            <div>
            <h2 className="mb-[20px] text-xl font-semibold text-[#000000] md:mb-[32px]">
                GET HELP
            </h2>

            <ul className="text-lg font-medium text-[#555555]">
                <li className="mb-[10px]">Contact Us</li>
                <li className="mb-[10px]">Latest Articles</li>
                <li>FAQ</li>
            </ul>
            </div>

            {/* PROGRAMS */}
            <div>
            <h2 className="mb-[20px] text-xl font-semibold text-[#000000] md:mb-[32px]">
                PROGRAMS
            </h2>

            <ul className="text-lg font-medium text-[#555555]">
                <li className="mb-[10px] hover:text-[#FF782D]">
                Art &amp; Design
                </li>
                <li className="mb-[10px] hover:text-[#FF782D]">
                Business
                </li>
                <li className="mb-[10px] hover:text-[#FF782D]">
                IT &amp; Software
                </li>
                <li className="mb-[10px] hover:text-[#FF782D]">
                Languages
                </li>
                <li className="mb-[10px] hover:text-[#FF782D]">
                Programming
                </li>
            </ul>
            </div>

            {/* CONTACT US */}
            <div>
            <h2 className="mb-[20px] text-xl font-semibold text-[#000000] md:mb-[32px]">
                CONTACT US
            </h2>

            <p className="mb-[16px] w-full max-w-[340.22px] text-lg font-normal text-[#555555]">
                Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
            </p>

            <p className="mb-[16px] w-full max-w-[340.22px] text-lg font-normal text-[#555555]">
                Tel: + (123) 2500-567-8988 Mail: supportlms@gmail.com
            </p>

            {/* Social icons stay side by side */}
            <div className="flex gap-[12px]">
                <Image
                src={fecbook}
                alt="Facebook"
                className="h-[20px] w-[20px]"
                />
                <Image
                src={icon}
                alt=""
                className="h-[20px] w-[20px]"
                />
                <Image
                src={icon3}
                alt=""
                className="h-[20px] w-[20px]"
                />
                <Image
                src={instagram}
                alt="Instagram"
                className="h-[20px] w-[20px]"
                />
                <Image
                src={youTube}
                alt="YouTube"
                className="h-[20px] w-[20px]"
                />
            </div>
            </div>
        </div>

        {/* Copyright */}
        <p className="flex justify-center px-5 pt-[30px] pb-[30px] text-center text-sm text-[#555555] md:pt-[70px] md:pb-[50px] md:text-base">
            Copyright © 2024 LearnPress LMS | Powered by ThimPress
        </p>
        </div>
    )
    }

export default Footer