import React from 'react'
import logo from '../assets/logo_dark.png'
import logo_dark from '../assets/logo.png'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20">
    <div className="text-center">
        <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden"/>
        <img src={logo_dark} alt="" className="w-36 mx-auto mb-2 hidden dark:block"/>


        <div className="w-max flex items-center gap-2 mx-auto">
            <img src={mail_icon} alt="" className="w-6 dark:hidden"/>
            <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block"/>

            dsdm0012@gmail.com
        </div>
    </div>
    <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {currentYear} Durga Shankar Das Mangaraj. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target='_blank' href="https://github.com/iamdurgashankar">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/durga-shankar-das-mangaraj/">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.instagram.com/imdsdm/">Instagram</a></li>
        </ul>
    </div>
 </div>
  )
}

export default Footer
