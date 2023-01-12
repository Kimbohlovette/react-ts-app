export default function Footer(): JSX.Element{
    return (
        <div>
             <footer id="contacts" className="w-full py-8 px-4 xs:px-8 sm:px-10 lg:px-24 mt-4 bg-[#17291B]">
            <h1 className="text-white text-4xl sm:text-5xl font-bold py-6 lg:py-12 xs:w-2/3">Get intouch with us.</h1>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 py-2">
                <div>
                    <span className="text-slate-100 py-2">More than 80,000 companies trust our business.</span>
                </div>
                <div>
                    <div id="email-control" className="ring-4 flex bg-white p-1 rounded-sm">
                        <input id="email" type="email" placeholder="Your business email" className="py-2 px-4 focus:outline-none placeholder-slate-400 placeholder:italic border-none inline-block flex-1 min-w-0" />
                        
                        
                        <button className="px-4 py-2 bg-orange-400 text-white font-md text-sm rounded-sm ">
                        
                           <span className="hidden xs:inline"> Get Started</span>
                            <svg className="inline mx-1" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: "vertical-align: -0.125em"}} width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
                <div>
                    <img src="./assets/footer-brand.png" alt="" />
                </div>
                <div className="py-4">
                    <ul className="flex flex-col xs:flex-row gap-y-2 gap-x-4 text-slate-50">
                        <li className="cursor-pointer hover:text-slate-400 transition-colors duration-100 ease-in"><a href="#hero">About</a></li>
                        <li className="cursor-pointer hover:text-slate-400 transition-colors duration-100 ease-in"><a href="#processes">Products</a></li>
                        <li className="cursor-pointer hover:text-slate-400 transition-colors duration-100 ease-in"><a href="#services">Services</a></li>
                        <li className="cursor-pointer hover:text-slate-400 transition-colors duration-100 ease-in"><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="py-4">
                    <ul className="flex flex-row gap-y-2 gap-x-4 text-slate-50 text-2xl">
                        <li className="cursor-pointer hover:scale-110 transition-transform duration-100 ease-in">
                            <svg className="text-white fs-4" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: "vertical-align: -0.125em"}} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                        </li>
                        <li className="cursor-pointer hover:scale-110 transition-transform duration-100 ease-in">
                            <svg className="text-white fs-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"/></svg>
                        </li>
                        <li className="cursor-pointer hover:scale-110 transition-transform duration-100 ease-in">
                            <svg className="text-white fs-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="white" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9ZM207 353.89v-196.5l145 98.2Z"/></svg>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
            <hr className="py-2 border-slate-600"/>
            <div className="italic sm:text-center">
                <span className="text-slate-600 text-sm">Copyright &copy; 2022.Besnik creative.</span>
            </div>
        </footer>
        </div>
    )
}
