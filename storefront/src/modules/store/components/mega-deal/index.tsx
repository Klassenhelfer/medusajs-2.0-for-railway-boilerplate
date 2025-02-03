"use client"

import InteractiveButton from "@modules/common/components/interactive-button";
import Image from "next/image";

type MegaDealProps = {
    bgMain?: string
    bgLight?: string
    newSticker?: string
}

const MegaDeal = ({
  newSticker = "#3b82f6",
  bgMain = "#d4eaff",
  bgLight = "#f6faff"
}: MegaDealProps) => {
    return (
       <div className="w-full md:h-64 flex flex-col md:flex-row rounded-lg mb-12 shadow-xl overflow-hidden" style={{ backgroundColor: bgLight }}>
           <div className="relative w-full h-48 md:w-[24rem] md:h-auto" style={{ backgroundColor: bgMain }}>
               <div className="absolute top-0 left-0 w-full md:w-[calc(100%-3rem)] h-full flex flex-col justify-center items-center px-4 md:px-0 md:pt-6 z-30">
                   <h3 className="text-2xl font-bold italic mb-1">Geometrie Mega Deal</h3>
                   <p className="text-md font-medium text-center mb-4">Das große Geometriebündel für den Matheunterricht</p>
                   <InteractiveButton href="/" color="amber" size="md" className="w-[8rem] text-lg">
                       Jetzt sparen
                   </InteractiveButton>
               </div>
               <div className="hidden absolute left-4 top-4 w-14 h-14 md:flex justify-center items-center">
                   <svg className="absolute left-0 top-0 w-full h-full z-10" width="299" height="299" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M198.664 29.7792C189.282 12.0632 170.633 0 149.188 0C127.742 0 109.093 12.0632 99.7109 29.7792C80.5379 23.8933 58.8591 28.5554 43.7073 43.7073C28.5554 58.8591 23.8933 80.5962 29.7792 99.7109C12.0632 109.093 0 127.742 0 149.188C0 170.633 12.0632 189.282 29.7792 198.664C23.8933 217.837 28.5554 239.516 43.7073 254.668C58.8591 269.82 80.5962 274.482 99.7109 268.596C109.093 286.312 127.742 298.375 149.188 298.375C170.633 298.375 189.282 286.312 198.664 268.596C217.837 274.482 239.516 269.82 254.668 254.668C269.82 239.516 274.482 217.779 268.596 198.664C286.312 189.282 298.375 170.633 298.375 149.188C298.375 127.742 286.312 109.093 268.596 99.7109C274.482 80.5379 269.82 58.8591 254.668 43.7073C239.516 28.5554 217.779 23.8933 198.664 29.7792Z" fill="#3B82F6"/>
                       <path d="M193.051 41.6644L193.438 42.3956L194.229 42.1521C211.174 36.9343 230.443 41.0682 243.875 54.4993C257.306 67.9304 261.44 87.147 256.221 104.145L255.979 104.936L256.709 105.323C272.416 113.641 283.108 130.173 283.108 149.183C283.108 168.193 272.416 184.725 256.709 193.043L255.978 193.431L256.222 194.221C261.44 211.167 257.306 230.436 243.875 243.867C230.443 257.298 211.227 261.432 194.228 256.214L193.438 255.971L193.051 256.702C184.733 272.408 168.201 283.1 149.191 283.1C130.181 283.1 113.649 272.408 105.33 256.702L104.943 255.97L104.152 256.214C87.2073 261.432 67.9383 257.298 54.5071 243.867C41.076 230.436 36.9418 211.219 42.1602 194.221L42.4028 193.43L41.6722 193.043C25.9657 184.725 15.2734 168.193 15.2734 149.183C15.2734 130.173 25.9657 113.641 41.6722 105.323L42.4034 104.935L42.1599 104.145C36.9421 87.1995 41.076 67.9305 54.5071 54.4993C67.9382 41.0682 87.1549 36.934 104.153 42.1524L104.944 42.395L105.33 41.6644C113.649 25.9579 130.181 15.2656 149.191 15.2656C168.201 15.2656 184.733 25.9579 193.051 41.6644Z" stroke="white" strokeWidth="2"/>
                   </svg>

                   <span className="relative block text-4 font-bold text-white z-20 mt-[-0.125rem]">NEU!</span>
               </div>
               <svg className="absolute bottom-0 -right-4 md:left-0 md:right-[unset] h-auto w-72 md:w-[calc(100%-5rem)] z-10" width="1330" height="531" viewBox="0 0 1330 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M522.198 2.67493C348.567 -11.2215 101.72 44.9879 0 74.8296V320.69C120.758 285.949 235.805 235.842 461.003 249.204C686.201 262.566 893.448 364.117 1001.97 414.892C1088.78 455.513 1223.09 508.871 1279.39 530.473L1329.16 406.207C1294.62 382.601 1213.29 326.97 1167.6 293.298C869.786 84.8514 739.237 20.0455 522.198 2.67493Z" fill="url(#paint0_linear_275_291)"/>
                   <defs>
                       <linearGradient id="paint0_linear_275_291" x1="953.012" y1="60.1317" x2="50.7766" y2="456.356" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" stopOpacity="0.63"/>
                           <stop offset="1" stopColor="white" stopOpacity="0"/>
                       </linearGradient>
                   </defs>
               </svg>
               <svg className="hidden md:block absolute bottom-0 right-[-1px] h-full w-auto z-20 overflow-hidden" width="488" height="1230" viewBox="0 0 488 1230" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M488 1230L0 1230L488 0L488 1230Z" fill="#F6FAFF"/>
               </svg>
           </div>
           <div className="relative flex-1 h-full">
               <div className="relative md:absolute top-0 left-0 w-full h-full flex justify-around gap-2 items-center py-6 md_py-0 px-4 z-30">
                   <div className="flex flex-col items-center justify-center gap-4">
                       <Image className="w-48" src="/images/bunte-mathe-koerper-physische-produkte.png" alt="Bunte Mathe Körper physische Produkte" width={135} height={32} priority />
                        <p className="bg-black text-white text-sm text-center font-semibold px-3 py-1 rounded-md">7er Körperset</p>
                   </div>

                   <div className="flex flex-col items-center justify-center gap-4">
                       <Image className="w-48" src="/images/bunte-mathe-koerper-physische-produkte.png" alt="Bunte Mathe Körper physische Produkte" width={135} height={32} priority />
                       <p className="bg-black text-white text-sm text-center font-semibold px-3 py-1 rounded-md">7er Körperset</p>
                   </div>

                   <div className="flex flex-col items-center justify-center gap-4">
                       <Image className="w-48" src="/images/bunte-mathe-koerper-physische-produkte.png" alt="Bunte Mathe Körper physische Produkte" width={135} height={32} priority />
                       <p className="bg-black text-white text-sm text-center font-semibold px-3 py-1 rounded-md">7er Körperset</p>
                   </div>
               </div>

               <svg className="absolute top-4 md:top-[unset] md:bottom-4 left-6 md:left-16 w-24 h-24" width="410" height="410" viewBox="0 0 410 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="205" cy="205" r="205" fill="#D4EAFF"/>
               </svg>

               <svg className="absolute -bottom-12 md:bottom-[unset] md:-top-12 -right-6 md:right-16 w-48 h-48" width="410" height="410" viewBox="0 0 410 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="205" cy="205" r="205" fill="#D4EAFF"/>
               </svg>
           </div>
       </div>
    )
}

export default MegaDeal
