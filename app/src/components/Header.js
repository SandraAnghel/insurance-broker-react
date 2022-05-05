import React from 'react';

export default function Header() {

    return (
        <>
        <header className="fixed w-full z-10 bg-black">
        <nav className="lg:max-w-screen-xl  flex flex-row flex-wrap justify-between my-4 lg:my-6 ml-auto mr-auto"
          role="navigation">
          <div className="flex items-center ml-3">
            <a href="/">
              <div className="flex items-center">
                <a className="ml-4 flex items-center" href="/">
                  <svg className="fill-current text-yellow-200 h-5 w-5" width="24" height="28" viewBox="0 0 24 28" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3.33332C7.86667 3.33332 4.24 6.03999 3.06667 9.99999H20.9333C20.3596 8.07562 19.1805 6.38761 17.5712 5.18661C15.9618 3.98561 14.0081 3.33568 12 3.33332ZM12 0.666656C15.1826 0.666656 18.2348 1.93094 20.4853 4.18138C22.7357 6.43181 24 9.48406 24 12.6667H13.3333V23.3333C13.3333 24.3942 12.9119 25.4116 12.1618 26.1618C11.4116 26.9119 10.3942 27.3333 9.33333 27.3333C8.27247 27.3333 7.25505 26.9119 6.50491 26.1618C5.75476 25.4116 5.33333 24.3942 5.33333 23.3333V22H8V23.3333C8 23.6869 8.14048 24.0261 8.39052 24.2761C8.64057 24.5262 8.97971 24.6667 9.33333 24.6667C9.68696 24.6667 10.0261 24.5262 10.2761 24.2761C10.5262 24.0261 10.6667 23.6869 10.6667 23.3333V12.6667H0C0 9.48406 1.26428 6.43181 3.51472 4.18138C5.76515 1.93094 8.8174 0.666656 12 0.666656Z" />
                  </svg>
                  <span className="inline-block ml-2 text-xl font-semibold tracking-wider uppercase text-gray-200">TBG</span>
                </a>
              </div>
            </a>
          </div>
          <div className="inline-block h-8 mr-3 lg:hidden">
            <button id="nav_toggle" className="h-full w-full">
              <svg className="h-full w-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="white"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="40" y1="128" x2="216" y2="128" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="16"></line>
                <line x1="40" y1="64" x2="216" y2="64" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="16"></line>
                <line x1="40" y1="192" x2="216" y2="192" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="16"></line>
              </svg>
            </button>
          </div>
          <div id="nav_content"
            className="w-full hidden py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-5xl shadow-md lg:shadow-none border-b-2 lg:border-0 border-blue-800 bg-black ">
            <ul className="flex flex-col gap-y-4 ml-auto text-md text-gray-200 font-semibold lg:flex-row">
              <li className="mx-6 w-mc hover:text-yellow-200"><a href="/car-insurance.html">Car Insurance</a></li>
              <li className="mx-6 w-mc hover:text-yellow-200"><a href="/blog.html">Blog</a></li>
              <li className="mx-6 w-mc hover:text-yellow-200"><a href="/about.html">About</a></li>
              <li className="mx-6 w-mc hover:text-yellow-200"><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      </>
    );

}