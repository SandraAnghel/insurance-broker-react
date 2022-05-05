import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {

    return (
        <>
            <section className="pt-16 lg:pt-24 pb-40">
                <h2 className="font-medium font-serif text-xl md:text-3xl text-center pt-12 pb-8 md:pt-16 md:pb-12 text-gray-100">
                    Latest
                    Updates</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-4 lg:mx-auto">
                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <a href="/why-you-need-insurance.html" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-1.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Advice</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">Mar 23, 2021</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">Why You Need
                                        Insurance
                                    </h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-1.jpg"
                                                alt="A smiling Georgina Orwell." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Georgina
                                                Orwell</span>
                                            <span className="block font-medium text-sm text-gray-100">Chief Technical
                                                Writer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <Link to="/blog" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-2.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Lesson</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">Jan 23, 2021</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">Getting Numbers Right
                                    </h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-3.jpg"
                                                alt="A pondering Yuval Harrari." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Yuval
                                                Harrari</span>
                                            <span className="block font-medium text-sm text-gray-100">Historian</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <Link to="/blog" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-3.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Insight</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">12 Dec, 2020</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">Working as a Team
                                    </h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-2.jpg"
                                                alt="A tranquil Sam Harris." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Sam
                                                Harris</span>
                                            <span className="block font-medium text-sm text-gray-100">Neuroscientist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <Link to="/blog" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-4.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Insight</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">9 Nov, 2020</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">Making It Count</h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-2.jpg"
                                                alt="A tranquil Sam Harris." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Sam
                                                Harris</span>
                                            <span className="block font-medium text-sm text-gray-100">Neuroscientist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <Link to="/blog" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-5.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Productivity</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">26 Oct, 2020</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">The Glass Ceiling
                                        Illusion
                                    </h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-1.jpg"
                                                alt="A smiling Satoshi Nakamoto." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Georgina
                                                Orwell</span>
                                            <span className="block font-medium text-sm text-gray-100">Chief Technical
                                                Writer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="group relative flex flex-col transition-all shadow-md">
                        <div
                            className="absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-50 duration-300 group-hover:bg-blue-800 bg-blue-900 z-10">
                        </div>
                        <Link to="/blog" className="relative inline-block h-full">
                            <div className="absolute h-full w-full overflow-hidden">
                                <img className="h-full w-full object-cover bg-green-800" src="./images/blog-6.jpg" alt="" />
                            </div>
                            <div className="relative flex flex-col items-center px-8 py-16 z-20 h-full">
                                <div className="w-full">
                                    <div className="mt-2">
                                        <span className="uppercase font-semibold text-yellow-200 text-xs">Lesson</span>
                                        <span className="text-gray-50 mx-2 font-medium text-sm">8 Sept, 2020</span>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white">What the Past
                                        Can Teach Us
                                    </h2>
                                    <div className="flex items-center mt-4">
                                        <div
                                            className="h-10 w-10 rounded-sm lg:h-12 lg:w-12 lg:rounded-lg overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover object-bottom" src="./images/writer-3.jpg"
                                                alt="A pondering Satoshi Nakamoto." />
                                        </div>
                                        <div className="ml-2 text-x">
                                            <span className="block font-bold text-sm text-white">Yuval
                                                Harrari</span>
                                            <span className="block font-medium text-sm text-gray-100">Historian</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    );
}