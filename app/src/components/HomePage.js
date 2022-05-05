import React from 'react';

export default function HomePage() {

    return (
        <>
        <main className="pt-24 px-4 md:px-6 lg:px-8 2xl:max-w-screen-2xl 2xl:mx-auto">
            <section>
                <div className="flex flex-col items-center">
                    <div className="h-40 lg:h-72"><img className="h-full object-contain" src="./images/hero-umbrella.png"
                        alt="A yellow umbrella" />
                    </div>
                    <h1
                        className="lg:mt-6 font-serif text-center tracking-wide font-semibold uppercase text-5xl lg:text-7xl text-gray-50">
                        Cover you
                        deserve</h1>
                    <p className="max-w-prose text-center lg:text-lg mt-6 lg:mt-10 mb-16 leading-relaxed  text-gray-300">Lorem
                        ipsum dolor sit
                        amet,
                        consectetur
                        adipiscing elit.
                        Ac
                        turpis egestas
                        sit nisi
                        habitant sed volutpat enim
                        scelerisque. Euismod nec purus mauris scelerisque ultrices eleifend. Risus, sed sit neque porta.</p>
                    <div className="flex flex-col gap-y-4">
                        <a className="inline-block tracking-wider px-8 py-2 rounded-md font-semibold uppercase mx-4 border-2 border-gray-100 text-gray-100 hover:border-yellow-200 transition-colors duration-300 hover:text-yellow-200"
                            href="/get-a-free-broker.html">Free
                            Broker</a>
                            <a
                                className="inline-block tracking-wider px-8 py-2 rounded-md  uppercase mx-4 underline text-gray-400 hover:text-yellow-200 transition-colors duration-300"
                                href="/get-a-free-quote.html">Quick Quote</a>
                    </div>
                    <div className="hidden lg:flex gap-x-20 mt-24">
                        <div className="flex items-center">
                            <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-800">
                                <svg className="fill-current text-blue-50 w-6 h-6 " width="32" height="19" viewBox="0 0 32 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 0C14.7623 0 13.5753 0.491666 12.7002 1.36684C11.825 2.24201 11.3333 3.42899 11.3333 4.66667C11.3333 5.90434 11.825 7.09133 12.7002 7.9665C13.5753 8.84167 14.7623 9.33333 16 9.33333C17.2377 9.33333 18.4247 8.84167 19.2998 7.9665C20.175 7.09133 20.6667 5.90434 20.6667 4.66667C20.6667 3.42899 20.175 2.24201 19.2998 1.36684C18.4247 0.491666 17.2377 0 16 0ZM16 2.66667C16.5304 2.66667 17.0391 2.87738 17.4142 3.25245C17.7893 3.62753 18 4.13623 18 4.66667C18 5.1971 17.7893 5.70581 17.4142 6.08088C17.0391 6.45595 16.5304 6.66667 16 6.66667C15.4696 6.66667 14.9609 6.45595 14.5858 6.08088C14.2107 5.70581 14 5.1971 14 4.66667C14 4.13623 14.2107 3.62753 14.5858 3.25245C14.9609 2.87738 15.4696 2.66667 16 2.66667ZM7.33333 4C6.44928 4 5.60143 4.35119 4.97631 4.97631C4.35119 5.60143 4 6.44928 4 7.33333C4 8.58667 4.70667 9.66667 5.72 10.24C6.2 10.5067 6.74667 10.6667 7.33333 10.6667C7.92 10.6667 8.46667 10.5067 8.94667 10.24C9.44 9.96 9.85333 9.56 10.16 9.08C9.18864 7.81409 8.66357 6.2623 8.66667 4.66667V4.29333C8.26667 4.10667 7.81333 4 7.33333 4ZM24.6667 4C24.1867 4 23.7333 4.10667 23.3333 4.29333V4.66667C23.3333 6.26667 22.8133 7.81333 21.84 9.08C22 9.33333 22.1733 9.53333 22.3733 9.73333C22.9882 10.3295 23.8103 10.664 24.6667 10.6667C25.2533 10.6667 25.8 10.5067 26.28 10.24C27.2933 9.66667 28 8.58667 28 7.33333C28 6.44928 27.6488 5.60143 27.0237 4.97631C26.3986 4.35119 25.5507 4 24.6667 4ZM16 12C12.88 12 6.66667 13.56 6.66667 16.6667V18.6667H25.3333V16.6667C25.3333 13.56 19.12 12 16 12ZM6.28 12.7333C3.70667 13.04 0 14.3467 0 16.6667V18.6667H4V16.0933C4 14.7467 4.92 13.6267 6.28 12.7333ZM25.72 12.7333C27.08 13.6267 28 14.7467 28 16.0933V18.6667H32V16.6667C32 14.3467 28.2933 13.04 25.72 12.7333ZM16 14.6667C18.04 14.6667 20.32 15.3333 21.64 16H10.36C11.68 15.3333 13.96 14.6667 16 14.6667Z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-lg font-semibold text-gray-300">Protect Your People</span>
                                <p className="text-sm font-medium text-gray-400">A phrase about something or other.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-800">
                                <svg className="fill-current text-blue-50 w-6 h-6 " width="24" height="30" viewBox="0 0 24 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 13.3333C24 20.7333 18.88 27.6533 12 29.3333C5.12 27.6533 0 20.7333 0 13.3333V5.33333L12 0L24 5.33333V13.3333ZM12 26.6667C17 25.3333 21.3333 19.3867 21.3333 13.6267V7.06667L12 2.90667L2.66667 7.06667V13.6267C2.66667 19.3867 7 25.3333 12 26.6667ZM10.6667 17.3333H13.3333V21.3333H17.3333V14.6667H20L12 8L4 14.6667H6.66667V21.3333H10.6667V17.3333Z" />
                                </svg>

                            </div>
                            <div>
                                <span className="text-lg font-semibold text-gray-300">Assets Jargon</span>
                                <p className="text-sm font-medium text-gray-400">Not too jargo ny though, please.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-800">
                                <svg className="fill-current text-blue-50 w-6 h-6" width="11" height="20" viewBox="0 0 11 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.979736 13.4337H2.97748C2.97748 14.6151 4.34594 15.6216 5.97411 15.6216C7.60227 15.6216 8.97073 14.6151 8.97073 13.4337C8.97073 12.2304 7.9319 11.7928 5.73438 11.213C3.61676 10.6333 0.979736 9.91128 0.979736 6.87018C0.979736 4.91205 2.44808 3.24929 4.4758 2.69139V0.306641H7.47242V2.69139C9.50013 3.24929 10.9685 4.91205 10.9685 6.87018H8.97073C8.97073 5.68874 7.60227 4.68233 5.97411 4.68233C4.34594 4.68233 2.97748 5.68874 2.97748 6.87018C2.97748 8.07349 4.01631 8.51106 6.21384 9.09084C8.33145 9.67062 10.9685 10.3926 10.9685 13.4337C10.9685 15.3918 9.50013 17.0546 7.47242 17.6125V19.9972H4.4758V17.6125C2.44808 17.0546 0.979736 15.3918 0.979736 13.4337Z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-lg font-semibold text-gray-300">Something Money</span>
                                <p className="text-sm font-medium text-gray-400">Saving money somehow. Promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-32 pb-48 lg:pt-40 lg:pb-44">
                <h2
                    className="text-left lg:text-center text-stroke overflow-clip text-7xl lg:text-10xl leading-tight font-bold opacity-40">
                    insurance
                    that
                    works
                </h2>
            </section>

            <section>
                <h2
                    className="inline-block relative top-left-line bottom-right-line pt-3 pb-4 uppercase font-semibold text-3xl lg:text-5xl font-serif tracking-wider text-gray-300">
                    Benefits</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-x-48 gap-y-30 lg:w-3/4 mx-8 pt-32 lg:mx-auto">
                    <div className="relative">
                        <div
                            className="absolute flex justify-center items-center h-30 w-30 text-stroke border font-bold rounded-full opacity-20 -mt-16 -ml-16">
                            <span className="inline-block text-8xl">1</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-semibold text-3xl mb-4 text-gray-300">Save Money</h2>
                            <p className="leading-relaxed text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                aperiam
                                aut ipsam
                                itaque rem nostrum error
                                assumenda suscipit totam saepe. Numquam, nam? Ipsum impedit sapiente molestias voluptatum? Voluptatibus,
                                ullam
                                necessitatibus!</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute flex justify-center items-center h-30 w-30 text-stroke border font-bold rounded-full opacity-20 -mt-16 -ml-16">
                            <span className="inline-block text-8xl">2</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-semibold text-3xl mb-4 text-gray-300">Orderly Books</h2>
                            <p className="leading-relaxed text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                aperiam
                                aut ipsam
                                itaque rem nostrum error
                                assumenda suscipit totam saepe. Numquam, nam? Ipsum impedit sapiente molestias voluptatum? Voluptatibus,
                                ullam
                                necessitatibus!</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute flex justify-center items-center h-30 w-30 text-stroke border font-bold rounded-full opacity-20 -mt-16 -ml-16">
                            <span className="inline-block text-8xl">3</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-semibold text-3xl mb-4 text-gray-300">No Overtime</h2>
                            <p className="leading-relaxed text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                aperiam
                                aut ipsam
                                itaque rem nostrum error
                                assumenda suscipit totam saepe. Numquam, nam? Ipsum impedit sapiente molestias voluptatum? Voluptatibus,
                                ullam
                                necessitatibus!</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute flex justify-center items-center h-30 w-30 text-stroke border font-bold rounded-full opacity-20 -mt-16 -ml-16">
                            <span className="inline-block text-8xl">4</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-semibold text-3xl mb-4 text-gray-300">Something or Other</h2>
                            <p className="leading-relaxed text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                aperiam
                                aut ipsam
                                itaque rem nostrum error
                                assumenda suscipit totam saepe. Numquam, nam? Ipsum impedit sapiente molestias voluptatum? Voluptatibus,
                                ullam
                                necessitatibus!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-60">
                <div className="w-full flex justify-end">
                    <h2
                        className="inline-block relative top-left-line bottom-right-line pt-3 pb-4 uppercase font-semibold text-3xl lg:text-5xl font-serif tracking-wider text-gray-300">
                        Client Stories</h2>
                </div>
                <div className="flex flex-col gap-y-48 pt-40 md:w-3/4 md:mx-auto lg:w-2/3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-36">
                        <p className="mt-10 lg:mt-0 order-last relative leading-relaxed quote-marks text-gray-200">Nec gravida tempus,
                            lobortis
                            elit
                            augue tellus.
                            Dolor, et ipsum
                            porta pharetra.
                            Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed.</p>
                        <div>
                            <div className="h-89 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" src="./images/man.png" alt="" />
                            </div>
                            <div className="flex flex-col mt-1 text-sm lg:text-base"><span
                                className="text-right font-semibold text-gray-200">Thom
                                Yorke</span><span className="text-right text-yellow-200">Founder,
                                    Radiohead</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-36">
                        <p className="mt-10 lg:mt-0 order-last lg:order-first relative leading-relaxed quote-marks text-gray-200">Nec
                            gravida tempus,
                            lobortis elit
                            augue
                            tellus.
                            Dolor, et ipsum
                            porta pharetra.
                            Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed.</p>
                        <div>
                            <div className="h-89 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" src="./images/smiling_woman.jpg" alt="" />
                            </div>
                            <div className="flex flex-col mt-1 text-sm lg:text-base"><span
                                className="text-right font-semibold text-gray-200">Annaka
                                Harris</span><span className="text-right text-yellow-200">Author, "Conscious"</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-36">
                        <p className="mt-10 lg:mt-0 order-last relative leading-relaxed quote-marks text-gray-200">Nec gravida tempus,
                            lobortis elit
                            augue
                            tellus.
                            Dolor, et ipsum
                            porta pharetra.
                            Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Risus
                            nunc turpis vehicula
                            sed. Volutpat
                            mollis quam volutpat nulla pellentesque.olor, et ipsum porta pharetra. Risus nunc turpis vehicula sed.</p>
                        <div>
                            <div className="h-89 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" src="./images/smiling_man_2.jpg" alt="" />
                            </div>
                            <div className="flex flex-col mt-1 text-sm lg:text-base"><span
                                className="text-right font-semibold text-gray-200">Rory
                                Ferreira</span><span className="text-right text-yellow-200">MC, Scallops Hotel</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="text-gray-400">
                <h2
                    className="pt-32 pb-20 lg:pt-40 lg:pb-44 lg:text-center text-stroke text-8xl lg:text-10xl leading-tight font-bold opacity-40 text-black">
                    why you need
                    this...</h2>
                <div className="max-w-prose mx-auto leading-relaxed">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sollicitudin tempor nisl, eget
                        nulla. Enim elit
                        pharetra elementum iaculis est. Fermentum morbi at nunc, molestie consequat scelerisque sapien a elementum.
                        Mauris
                        faucibus tristique pretium etiam auctor a eleifend.</p>
                    <p className="mb-4">Eu sem enim commodo velit. Sit pretium enim, eu eget id accumsan ut varius aliquam. Arcu
                        pharetra
                        arcu sed varius
                        egestas tortor, quis. Convallis a urna semper pretium dignissim eget maecenas habitant. Tincidunt eleifend
                        eget
                        mattis
                        curabitur. Est condimentum convallis morbi bibendum magna bibendum sagittis, semper vitae. Quam in consequat
                        hac
                        rhoncus, egestas non dolor urna, euismod. Tincidunt est nisl placerat justo, habitant mi tempor, rhoncus
                        mauris.
                        Lectus
                        arcu arcu proin proin tincidunt.</p>
                    <p className="mb-4">Congue ut aliquet sit porta. Enim at posuere nulla eu non felis scelerisque interdum dolor. Id
                        fames
                        nulla
                        feugiat
                        pulvinar porta. Id est nulla lacus velit eleifend nisi nam enim. Sed commodo amet vitae nisi, tristique.
                        Faucibus
                        ut
                        consequat fames non, magna sit id aliquam. Amet tellus massa, placerat lectus amet at. Non viverra vitae.</p>
                    <p className="mb-4">It’s really that simple.</p>
                </div>

            </section>

            <section className="flex flex-col items-center pt-40 pb-60">
                <h2
                    className="relative top-left-line bottom-right-line pt-2 pb-2 font-semibold uppercase text-xl lg:text-3xl font-serif tracking-wider text-gray-300 mb-16">
                    Trusted By
                </h2>
                <div className="flex flex-wrap justify-center">
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Audi icon</title>
                        <path
                            d="M19.848,7.848c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928 c-0.992,0-1.902,0.348-2.616,0.928c-0.714-0.58-1.624-0.928-2.616-0.928c-0.992,0-1.902,0.348-2.616,0.928 c-0.714-0.58-1.624-0.928-2.616-0.928C1.859,7.848,0,9.707,0,12s1.859,4.152,4.152,4.152c0.992,0,1.902-0.348,2.616-0.928 c0.714,0.58,1.624,0.928,2.616,0.928c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928 c0.992,0,1.902-0.348,2.616-0.928c0.714,0.58,1.624,0.928,2.616,0.928C22.141,16.152,24,14.293,24,12S22.141,7.848,19.848,7.848z M17.232,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866c0.376,0.526,0.598,1.17,0.598,1.866 C17.83,12.696,17.608,13.34,17.232,13.866z M12,13.866c-0.376-0.526-0.598-1.17-0.598-1.866c0-0.696,0.222-1.34,0.598-1.866 c0.376,0.526,0.598,1.17,0.598,1.866C12.598,12.696,12.376,13.34,12,13.866z M6.768,13.866C6.392,13.34,6.17,12.696,6.17,12 c0-0.696,0.222-1.34,0.598-1.866C7.144,10.66,7.366,11.304,7.366,12C7.366,12.696,7.144,13.34,6.768,13.866z M0.938,12 c0-1.775,1.439-3.214,3.214-3.214c0.736,0,1.414,0.248,1.956,0.665C5.56,10.154,5.232,11.039,5.232,12 c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665C2.377,15.214,0.938,13.775,0.938,12z M7.428,14.549 C7.976,13.846,8.304,12.961,8.304,12c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665 c0.736,0,1.414,0.248,1.956,0.665c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549 c-0.542,0.416-1.22,0.665-1.956,0.665C8.648,15.214,7.97,14.966,7.428,14.549z M12.66,14.549c0.549-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.55c0.542-0.416,1.22-0.665,1.956-0.665s1.414,0.248,1.956,0.665 c-0.549,0.704-0.876,1.588-0.876,2.549c0,0.961,0.328,1.846,0.876,2.549c-0.542,0.416-1.22,0.665-1.956,0.665 C13.88,15.214,13.202,14.966,12.66,14.549z M19.848,15.214c-0.736,0-1.414-0.248-1.956-0.665c0.548-0.704,0.876-1.588,0.876-2.549 c0-0.961-0.328-1.846-0.876-2.549c0.542-0.416,1.22-0.665,1.956-0.665c1.775,0,3.214,1.439,3.214,3.214 S21.623,15.214,19.848,15.214z" />
                    </svg>
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Discord icon</title>
                        <path
                            d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
                    </svg>
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Audio-Technica icon</title>
                        <path
                            d="M12 0A11.992 11.992 0 00.015 11.985 12.019 12.019 0 0012 24a12.019 12.019 0 0011.985-12.015A11.992 11.992 0 0012.004 0zm0 .903a11.078 11.078 0 0111.085 11.078c0 6.123-4.958 11.112-11.085 11.112A11.104 11.104 0 01.922 11.985 11.078 11.078 0 0111.996.907zm.087 1.16l-.43 1.252-5.674 16.063-.204.604h12.654l-.23-.604L12.524 3.31zm0 2.797l2.007 5.643-3.024 8.553H7.056zm2.502 7.038l2.532 7.155h-5.09z" />
                    </svg>
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Tesla icon</title>
                        <path
                            d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z" />
                    </svg>
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>World Health Organization icon</title>
                        <path
                            d="M12.0214 1.4122c-1.064 0-.6118 1.5783-.5273 2.0925 0 .025.0857 3.5707.1024 4.3789.1619-.0429.3226-.0822.4761-.119l.3214-.081c.0154-.782.094-4.1658.0964-4.1837.0702-.551.6272-2.0877-.469-2.0877zm-.3118 12.0405c.119-.0405.238-.0762.3452-.1107l.2297-.0714c0-.2274.069-3.372.0809-3.9433a7.2271 7.2271 0 0 0-.732.2107c.0083.4285.0702 3.5719.0762 3.9147zm.3928 1.1926c-.0405.0143-.144.0583-.2095.081-.0655.0226-.1571.0606-.1571.0845 0 .0238.0666 3.6195.0666 3.6992 0 .744.3785.7487.3785 0 0-.0535.0762-3.9159.0762-3.9159s-.0905.0298-.1547.0512zm-.8558-10.1468a5.4953 5.4953 0 0 0-.8332.3392c-.2975.0988-.7141.119-1.151.588a5.8905 5.8905 0 0 0-.3963.5094c-.131.188-.1369.4904-.238.6535-.1381.238-.1048.3701-.1048.3701v.0072a.632.632 0 0 1-.1595.2952.6046.6046 0 0 1-.5546.2213c.1975.0988.476-.0392.476-.0392a3.6433 3.6433 0 0 0-.1047.3927c.2214-.501.425-.6843.488-.7355.0952.0214.2928.013.6594-.1976.4142-.238 1.0367-.6249 1.2129-.87a1.6175 1.6175 0 0 1 .7332-.5535c-.0131-.3773-.0203-.7035-.0274-.9808zM9.4993 6.0637L9.284 6.11l.257-.413.3.0095zm1.2795 8.64c0 .4665.3452.714.6892.9128 0-.0785-.0143-.801-.0143-.8129.0071-.144.1464-.2309.2595-.2845a5.6 5.6 0 0 1 .5463-.2082c.1023-.0358.1892-.0703.2868-.0988.6904-.2083 1.489-.4761 1.489-1.3093 0-.8332-.6844-1.1902-1.4283-1.4438 0 .2678-.013.6594-.019.9296.3166.119.526.275.526.5142 0 .3011-.3213.476-.5486.5618a5.9252 5.9252 0 0 1-.2797.0976c-.1833.0571-.381.119-.5654.1904a2.7126 2.7126 0 0 0-.2797.119c-.3285.1643-.663.406-.6618.832zm4.5753-8.1496c0-.8534-.619-1.8009-2.1365-2.1353a3.6528 3.6528 0 0 0-.463-.0536c0 .1286-.0095.4237-.0095.4237 0 .0929-.0095.4345-.012.5083a2.1424 2.1424 0 0 1 .2917.0404c.882.2107 1.1974.7142 1.1974 1.2165 0 .8105-.6927 1.1164-1.5473 1.3473l-.2821.0738c-.2583.0643-.5237.1262-.7868.1964a10.782 10.782 0 0 0-.2797.0797c-.9438.288-1.7556.7427-1.7556 1.9044 0 1.1617.926 1.5878 1.8294 1.8663q-.0083-.4987-.019-1.0022c-.3988-.1868-.6797-.4332-.6797-.8474 0-.4142.256-.6499.6475-.8332a3.0192 3.0192 0 0 1 .2786-.1083c.225-.0762.476-.1416.7439-.2059l.282-.0678c1.2724-.2976 2.7007-.6963 2.7007-2.4031zm-2.8482 9.5362c.4284.2166.8236.5165.989 1.0843.0726-.9403-.4546-1.3474-.9771-1.6223l-.012.538zM19.5199 5.29c.4595.5475 1.2629.87 1.733 1.4188-.3368-1.6223-1.589-2.947-3.0696-3.2637.7225.544.8784 1.2998 1.3366 1.845zM1.7235 9.4023c1.02-2.2198 2.5423-1.7497 3.1862-3.8647-.357.6487-2.0234.9224-2.7982 2.5852.394-.988.1964-2.4995.863-3.3148-1.9926 1.47-1.144 3.848-1.251 4.5943zm1.8472 5.324c.1833.864-.357 2.1114.5 3.304-.8856-.9926-2.7614-1.245-3.5256-2.7542.9522 3.6898 3.4517 2.928 4.5694 3.729-.9237-1.327-.1679-2.209-1.5438-4.2789zm-.2868 2.315c-.5463-2.0603.4273-2.7745-.3166-4.7503-.0774 1.114-.8201 1.6568-.319 3.6898C1.7639 14.2597.3963 13.6169 0 12.4338c.0274 3.2351 2.6269 3.7148 3.2839 4.6075zm3.992 3.4517c-.7653-1.0594-.238-1.658-2.3923-3.5815.4546.7023-.0143 1.5854 1.4354 2.959-1.4188-.8332-3.3755-.4761-4.3194-1.5962 1.6211 3.103 4.4694 1.8366 5.2763 2.2222zm10.4051-.6225c1.4497-1.3736.9808-2.2615 1.4354-2.959-2.1495 1.9235-1.627 2.5221-2.3923 3.5815.807-.3857 3.6552.8807 5.2751-2.2187-.9427 1.1213-2.8994.763-4.3182 1.5997zm2.2484-1.8437c.8534-1.1903.3166-2.44.4999-3.3041-1.376 2.0698-.6201 2.9518-1.5473 4.2848 1.1236-.801 3.6135-.0416 4.5693-3.729-.763 1.5069-2.6364 1.7592-3.522 2.7519zm-3.435 2.6126a10.617 10.617 0 0 0-2.3508-.3571 5.6834 5.6834 0 0 0-2.1424.3642 5.687 5.687 0 0 0-2.1424-.3642 10.617 10.617 0 0 0-2.3508.357c-1.2938.344-2.4114.6106-3.3862.119.9343.8332 2.0234 1.1249 3.5981.9523 1.3093-.1405 2.3698-.7963 3.6052-.7868h.0488a6.6023 6.6023 0 0 0-2.0377 1.5842l.5952.0798s.6272-1.2605 2.0698-1.589c1.4426.3285 2.0698 1.589 2.0698 1.589l.5951-.0798a6.6213 6.6213 0 0 0-2.0377-1.5758h.0488c1.2355-.0096 2.2936.6463 3.604.7867 1.5748.1702 2.665-.1262 3.5994-.9522-.9748.4868-2.0925.2202-3.3863-.1238zM3.0553 10.0569c-.5333 1.0236-1.3617 1.2581-1.27 3.3767-.45-1.883-1.5188-2.5804-1.5057-3.7813-.7427 3.1303 1.2426 3.5016 1.752 4.8133-.075-1.8794 1.1248-2.259 1.0236-4.4087zm.745-2.4162c-.1856.2595-.3154.3702-.8105.7785a4.0194 4.0194 0 0 0-1.4426 2.353c.0512-1.1473-.6582-2.7958-.1869-3.998-1.8246 2.577.1048 4.1207.1726 5.0538.4737-1.796 1.5616-1.8103 2.2674-4.1873zm18.6511 3.1316A4.0254 4.0254 0 0 0 21.01 8.4192c-.4951-.4083-.6249-.519-.8105-.7785.7058 2.3805 1.7937 2.3912 2.2614 4.1873.0679-.9331 1.9972-2.4769.1714-5.0537.4761 1.202-.232 2.8506-.1809 3.998zm1.5473 1.6663c-.3963 1.1831-1.764 1.8258-2.6483 3.5517.5011-2.0377-.238-2.5805-.319-3.6898-.7439 1.9782.238 2.6888-.3166 4.7503.6582-.9022 3.2577-1.3819 3.2851-4.617zm-3.0506-2.3817c-.1011 2.1496 1.0998 2.5293 1.0236 4.404.5106-1.3093 2.4995-1.683 1.752-4.8134.0143 1.201-1.0545 1.9044-1.5008 3.7754.0833-2.1079-.7451-2.3424-1.2748-3.366zM4.4824 5.296c.4607-.5474.6166-1.3009 1.3379-1.8448-1.4807.3166-2.7376 1.6413-3.0697 3.2636.463-.5546 1.2677-.8772 1.727-1.4247zm14.6126.2476c.644 2.1151 2.1663 1.645 3.1851 3.8648-.106-.7463.7427-3.1244-1.2497-4.5944.6665.8165.469 2.327.8629 3.3148-.7773-1.6687-2.44-1.9424-2.803-2.5911zm-5.1692 1.195a4.9895 4.9895 0 0 0-1.2176-.3273v.2714a4.761 4.761 0 0 1 1.1188.307.7141.7141 0 0 0 .0988-.251zM13.6175 4.12l.081-.0726-.1548-.0655-.407-.0083-.106.0738-.238-.0202v.0583a4.136 4.136 0 0 1 .419.044l.1987-.0178zm-.789 8.778c0-.069-.0917-.1368-.2274-.2011h-.025c0 .056 0 .332-.0084.4666.1679-.075.2607-.156.2607-.2655zM8.1126 7.7205a1.2997 1.2997 0 0 1 .0345-.1488.6891.6891 0 0 1-.1666.0167zm3.8956 11.9738a8.3031 8.3031 0 0 0 .8463-16.5598c0 .0155 0 .0321-.0095.0476-.0167.081-.0322.1535-.044.2178a8.0163 8.0163 0 0 1 4.8359 2.2615l-.9165.9165.0345-.162-.119-.0523-.1643-.0095.0345-.106-.1106-.3749-.2286-.2511-.7141-.3773-.062.0655-.1296.038a2.1424 2.1424 0 0 1 .3785 1.2034v.163l.357.4464-.1666.038.1107.1667-.313.3118-.1262-.238a2.133 2.133 0 0 1-.238.4678l.0702.0642-.9653.9653a3.2917 3.2917 0 0 0-.181-.1607 4.5833 4.5833 0 0 1-.2832.119l.0821.0643-.0488.0488-.119.0631-.0417.119-.0702-.0702-.2035.0679.056.0892.1404-.0369.0916.0072.0072-.05.0702-.0357.0214-.0417.1262-.0357h.0988c.019.0167.0392.0345.057.0524l-.388.369-.0285-.0405-.4.0654-.0892.0893-.0869.0107.2476-.238-.088-.044-.2322.3094.0679-.0071v.119l.0845.0333.0166.119-.1392-.0273-.1452.0261-.3571-.1797-.0286 1.4164c.8332.2785 1.708.6808 1.708 1.7378a1.3093 1.3093 0 0 1-.595 1.1164l-.018.0119-.0261.0179c-.3357.2213-.7665.3404-1.1403.457l-.0107.7403c.5951.2952 1.3152.7249 1.2486 1.9544-.0084.3023-.1262.3856-.2274.413a6.2511 6.2511 0 0 1-1.0712.1702v.2702a6.6499 6.6499 0 0 0 4.1397-1.8282l.964.9641a8.0186 8.0186 0 0 1-11.1049.0226l.9641-.964a6.6451 6.6451 0 0 0 4.0814 1.8031v-.2702a6.3785 6.3785 0 0 1-3.8945-1.7222l.257-.2583.3572.0405.188-.2024.4928.0167.0726-.1702-.0179-.0726a4.999 4.999 0 0 0 2.5102 1.0033v-.2713a4.7526 4.7526 0 0 1-2.7042-1.2403l.9653-.9652a3.4338 3.4338 0 0 0 .782.5249.913.913 0 0 1 .0976-.2536 3.1208 3.1208 0 0 1-.6892-.463l.9677-.9664a1.7687 1.7687 0 0 0 .5166.2868v-.2904a1.4842 1.4842 0 0 1-.319-.1893l.2725-.2725a6.7378 6.7378 0 0 1-.288-.0929l-.1833.1833a1.4759 1.4759 0 0 1-.2309-.344 3.2815 3.2815 0 0 1-.476-.2547 1.8675 1.8675 0 0 1-.9035-1.6401 1.9687 1.9687 0 0 1 .3904-1.2498l-.9617-.9617a4.7502 4.7502 0 0 1 2.5757-1.2664c0-.0928 0-.1845-.006-.2714a5.0204 5.0204 0 0 0-2.76 1.3498l-.1631-.1595a4.504 4.504 0 0 0-.1297.2511l.1023.1036a5.0145 5.0145 0 0 0-1.364 3.3552H5.6096a6.382 6.382 0 0 1 1.7699-4.3253l.4332.4345a.5487.5487 0 0 0 .062 0 .6546.6546 0 0 0 .2463-.0715l-.551-.551a6.488 6.488 0 0 1 .9521-.7594 1.7925 1.7925 0 0 1 .0679-.2 3.2053 3.2053 0 0 1 .2083-.2797 6.6653 6.6653 0 0 0-1.4188 1.0462l-.9641-.964a7.9984 7.9984 0 0 1 4.7729-2.2377 2.1298 2.1298 0 0 1-.012-.0595c-.0118-.0631-.0261-.1333-.0392-.2071a8.3043 8.3043 0 0 0 .8665 16.5622zm1.7985-5.731v-.0071zm4.0206-8.108a8.0056 8.0056 0 0 1 2.2198 5.4561h-1.37a6.626 6.626 0 0 0-.7141-2.9137l.0119-.0238.094.05.0226-.0726-.238-.4273-.2892-.3999-.3428-.2797c-.119-.1452-.238-.2857-.3654-.4213zm-1.7437 1.7462l.3273.0143.0786.094-.0393.1392.4511.2857.0893-.0107.5832.6665.238-.0833a6.3559 6.3559 0 0 1 .5952 2.6042h-1.364a4.9728 4.9728 0 0 0-.1274-1.0378l.063-.0846.0846-.4272-.0643-.4595-.1642-.5284-.381-.557.093.0487.0463-.0464-.3059-.2071-.0202.0678.3059.4369.1726.357.119.3571.0393.238.063.4024-.119.0083s-.132-.2464-.1725-.3476l.0607-.0916-.119-.1666V9.107l-.0834-.1047-.1035.013a2.924 2.924 0 0 0-.119-.2035l.0737.037.019-.0191-.0392-.0857.0893-.05-.0405-.05-.1321.05.0488-.207-.0786-.0453-.0702.1654a5.0752 5.0752 0 0 0-.4963-.6308zm-.2737 3.1981l.2451-.1333.25-.038.0547-.119.1393-.0834.0536-.119.0428-.2012a4.071 4.071 0 0 1 .0548.2155l-.1321.394v.1332l.1916-.2559a4.611 4.611 0 0 1 .0678.7142h-1.1902l-.0274-.1036.1393-.1107.0273-.0666.0607-.0452.162-.0167.0166-.0714zm-1.6378-.9367l.119-.0285v-.0286l-.119-.0821.0416-.2571.1464-.1464a3.2327 3.2327 0 0 1 .2536.3297l-.0512.1583-.1333-.0952-.1012.0273.05.094h.05l-.056.1393-.038-.056zm.5225 4.5313l-.2952-.0833-.088.032-.1667-.1273-.1571-.056c.0774-.0559.1524-.119.225-.176l.238.1713.1857.0976.0916.0917zm-.15-5.2633l.9653-.9653a4.8121 4.8121 0 0 1 .5951.8023l-.119.0333.006.2154.357.2286a4.6657 4.6657 0 0 1 .2262.6094l-.0631.0928-.131.0833-.032.2-.0893.05-.075.088-.075-.0273h-.1333l.0774-.1048.0559-.2725.088-.0548-.2487-.2559-.194.0655-.044.182-.119.1322-.1274-.1048-.0452-.1118.0726-.0453.0404.0738.0595-.0226-.0261-.119h-.0845l-.006.05-.056.0107-.3035-.3559-.1023-.0774.0393-.0428.0904-.031-.0833-.0333s-.106.0238-.119.0238l.0607.0762h-.1524a3.2982 3.2982 0 0 0-.3047-.3928zm.4916 5.136l-.131-.131.1-.1298.1262-.257-.0488-.0715.0833-.1904-.0095-.1714-.05-.1773-.119-.0417-.044.1-.0715-.019a3.235 3.235 0 0 0 .2857-.4988l.119-.0523.069-.0929.0334.0381.0833-.1-.0666-.0833.0607-.0167.1118.0453h.2107l.1274-.0667.3332-.088-.063-.1107-.0215-.1345.1786.0785.0666-.0393-.0333-.138-.2154.0869-.238-.05-.1834-.375h1.0439a4.7514 4.7514 0 0 1-1.3176 3.1042l-.1429-.144.062-.1917-.112-.4225zm.1845 2.6625l.1285-.2762-.05-.119.1893-.1666v-.1l-.1619-.1012.1333-.2654.2-.2618-.2-.2155h-.15l-.0928-.1511a7.5411 7.5411 0 0 0 .238-.206l.9654.9653a6.4725 6.4725 0 0 1-1.1998.8987zm1.2045-1.2736l.1071-.119-.1011-.5285-.069-.0273.0428-.0893-.2285-.0714-.044.188-.0227.238-.0476.0441-.4166-.4166a5.0192 5.0192 0 0 0 1.3973-3.2934h1.3653a6.3737 6.3737 0 0 1-1.7973 4.2587zm.3761.375a6.6463 6.6463 0 0 0 1.877-4.4492h1.364a8.008 8.008 0 0 1-2.2757 5.4144zm-8.2126-1.3224a5.1601 5.1601 0 0 1-.2833-.319l.0417-.3452-.144-.3308-.0358-.5178-.1618-.3142.0333-.1952-.1952-.375-.1702-.0856.069-.1988-.0702-.1571.0702-.1798h.1869l.0654-.1083h.319l.0488.094-.0595.3298-.038.0559.119.2607-.0786.0428-.0548-.069-.0238.0262.0548.1547.094.181h.044l.031-.1762-.0452-.0596v-.1095l-.0143-.2261.0595-.3975-.0643-.1072h.2286a3.3898 3.3898 0 0 0 .939 2.1627zm-.9046-2.6673l-.1286.2023h-.2213l-.0179-.013a4.849 4.849 0 0 1-.069-.6488h.4106l-.0988.3285zm.4487-.9368l.025-.2713.1619-.094.2892.0511.044.0524a3.2136 3.2136 0 0 0-.044.469h-.3273zm1.389 1.02l.0679-.0344.1702.1345-.0774.063.2012.1334-.0048-.1429.1071-.1773.1119.119.119.1643-.219.0452.094.188.144-.0761-.0142-.0595.1071-.0727.063-.2975a1.7746 1.7746 0 0 0 .3131.476l-.964.9642a3.1196 3.1196 0 0 1-.8451-1.8116l.1975.2107h.1857zm-.9926-3.9825l.964.9653a3.441 3.441 0 0 0-.5117.7368h-.0667l-.1357.0416h-.0476l-.144.1345.182-.038.1643-.0417-.0285.063-.144.0882h-.0726l-.212.1618-.2046-.0166-.2964.5522.0583.1107-.1607.1786-.025.238h-.6046a4.7514 4.7514 0 0 1 1.2855-3.1744zM7.283 15.4202l.3059.1797.063.0428-.2213.2214q-.1548-.1607-.3-.332zm-.306-3.8386c0 .1321.0168.2643.031.394l-.1666.038-.0345.1691-.3476.4428.0084.6082-.3571.119h-.1952a6.3654 6.3654 0 0 1-.3047-1.7723zm-1.3473 1.764l-.0797-.0155-.075-.0845-.3833-.0333.119.1606-.357-.0666.0928-.0857-.0869-.0857-.2559.1119-.0916.169.0357.3892.2952.6999.1416.2213.081.0298-.2226-.4225-.0488-.2155.05-.0523-.031-.119.1345.0178.206.3118.0511.0203v-.2274l.0833.0488.0179.119.2166.0572.0905-.0643.031.0214v.1655l.0951.119.119.0262.2524.4273.1535.0428.0476-.2a6.7034 6.7034 0 0 0 .9403 1.2141l-.964.9641a8.0127 8.0127 0 0 1-2.3115-5.4287h1.3652a6.6451 6.6451 0 0 0 .288 1.764zm.5952-7.514l.964.964a6.6546 6.6546 0 0 0-1.8496 4.5158h-1.364A8.008 8.008 0 0 1 6.219 5.8316zm9.879-.4975l-.0822-.1333-.1785-.0893-.1393.106.1786.0951.1916.1464zm-.8344 3.8504v.1047l.238-.0702.0726-.144-.163-.2143.0869-.1309.2202.1571.0404-.0321-.044-.031-.05-.0952.0905-.0523-.0881-.119-.2071.1047-.069.1297-.0417.113.0916.1536-.0333.0714zm-9.8671 6.1202l.0179-.0619-.119-.2666-.1453-.0536zm5.5798-5.1276c0 .2286.1393.3904.3928.5297v-.1024l-.1595-.1594.0845-.1536.069-.019c0-.2666-.0106-.5654-.0118-.6082h-.012c-.2356.1309-.363.288-.363.513Z" />
                    </svg>
                    <svg className="fill-current text-gray-200 opacity-30 h-12 m-4 lg:h-16 lg:my-0 lg:mx-8" role="img"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>CD Projekt icon</title>
                        <path
                            d="M18.942,20.154c-0.687,0.323-1.719,0.302-2.986-0.072l0.213,0.547l-0.389-0.226l-1.537-0.907h0.001 l-0.033-0.158C14.783,19.509,17.746,20.507,18.942,20.154z M7.929,22.045c-0.127,0.229,0.179,0.645,0.179,0.645 c-0.687-0.534-1.276,0.346-1.276,0.346c-0.039-0.385,0.397-0.669,0.397-0.669c-0.715,0.113-1.549,0.78-1.549,0.78 c-0.097-0.333,0.319-0.556,0.319-0.556c0-0.263,0.361-0.236,0.763-0.347c0.272-0.074,0.679-0.186,0.919-0.252 c0.005-0.004,0.007-0.01,0.011-0.013c0-0.002,0.303-0.348,0.671-0.745c0.291-0.31,0.614-0.648,0.868-0.88 c0.118,0.018,0.226,0.031,0.294,0.037c-0.243,0.199-0.651,0.62-0.999,0.994C8.266,21.665,8.039,21.921,7.929,22.045z M10.168,14.083 l8.822,6.05c-0.013,0.007-0.029,0.011-0.042,0.018c-0.008-0.004-0.163-0.064-0.328-0.129c-0.081-0.033-0.178-0.072-0.29-0.118 h-0.001c-0.005-0.002-0.012-0.005-0.019-0.009c-0.772-0.317-2.27-0.951-4.634-2.041c-2.4-1.112-3.815-1.798-5.028-2.388l0.001,0.002 c0,0-0.001-0.002-0.002-0.002l4.363,3.974l0.006,0.004l0.011,0.011h0.002l0.256,0.211l-1.153,0.348 c-0.001-0.006-0.005-0.013-0.006-0.018c-0.006-0.016-0.011-0.033-0.017-0.051c-0.003-0.008-0.006-0.017-0.009-0.025 c-0.006-0.017-0.012-0.033-0.018-0.05c-0.003-0.007-0.006-0.015-0.009-0.023c-0.011-0.023-0.021-0.047-0.032-0.073l-0.202,0.094 c0.09,0.197,0.121,0.356,0.121,0.482c-0.001,0.16-0.064,0.282-0.109,0.353c-0.025,0.037-0.07,0.086-0.071,0.086l0.064,0.088 c-0.004,0.011-0.008,0.023-0.014,0.035c-0.341,0.545-0.652,1.308-0.786,1.653c-0.044,0.114-0.069,0.183-0.069,0.183 c0,0,0,0.002-0.001,0.005c0.227,0.009,0.767,0.073,0.627,0.504l-0.122,0.444c-0.268-0.478-0.154-0.606-0.154-0.606 C10.544,22.894,8.968,24,8.968,24c0.052-0.411,0.506-0.697,0.768-0.847c-0.221-0.026-0.494,0.165-0.64,0.283 c0.137-0.27,0.335-0.433,0.539-0.522c-0.002-0.002-0.002-0.002-0.003-0.004c0.359-0.135,0.712-0.069,0.753-0.029l-0.002,0.001 c0.122-0.038,0.131-0.043,0.241-0.068c0.036-0.026,0.071-0.112,0.088-0.158c0.001-0.005,0.363-1.014,0.81-1.774 c-0.217-0.021-0.388-0.274-0.388-0.581c0-0.018,0.001-0.037,0.002-0.055c-0.475,0.069-0.973,0.088-1.484,0.043 c-0.016,0-0.032-0.003-0.049-0.005c0,0.001,0,0.001,0,0.001c-0.024-0.002-0.131-0.012-0.262-0.029 c-0.945-0.128-1.803-0.45-2.507-0.911l0.002,0.01c0,0-1.279-0.682-1.551-2.233l-0.309,0.195c0-1.39,0.238-2.365,0.563-3.111 l-0.38,0.037l0.38-0.534c-0.05,0.103-0.096,0.212-0.143,0.332l0.233-0.039l0-.002c0.047-0.096,0.092-0.184,0.138-0.27 c0.092-0.169,0.188-0.328,0.295-0.484c0.024-0.035,0.069-0.098,0.111-0.152c0.062-0.08,0.147-0.179,0.204-0.245 c0.051-0.06,0.166-0.172,0.22-0.221c0.041-0.037,0.114-0.096,0.147-0.12l-0.229,1.072c0.669-0.832,1.912-2.075,2.535-2.665 c-0.118-0.222-0.248-0.418-0.386-0.581L8.08,10.763l-0.025,0.019c0,0-0.416,0.314-0.565,0.412c-0.409,0.267-0.706-0.07-0.722-0.09 c0.088,0.074,0.201,0.12,0.328,0.12c0.14,0,0.267-0.055,0.357-0.144c0.092-0.088,0.147-0.209,0.147-0.343 c0-0.068-0.014-0.132-0.038-0.191c-0.044-0.097-0.12-0.178-0.214-0.23H7.35c0,0-0.104-0.06-0.082-0.158 c0.022-0.099,0.206-0.291,0.206-0.291l0.225-0.229l0.36-0.367l0.777-0.79c0.047-0.052,0.077-0.087,0.077-0.087L8.231,8.686 L8.229,8.68c0-0.009,0.006-0.037,0.053-0.123c0.065-0.119,0.22-0.335,0.224-0.343l0.001-0.001L7.242,9.117c0-0.001,0-0.001,0-0.002 c0.074-0.35,0.824-1.365,0.858-1.412L7.27,8.464c0-0.002-0.001-0.004-0.003-0.006C7.224,8.2,7.638,7.317,7.695,7.197 C7.697,7.193,7.698,7.19,7.7,7.187C7.398,7.488,7.18,7.815,7.173,7.823c0-0.291,0.223-0.709,0.223-0.709 C7.332,7.176,7.272,7.242,7.214,7.307C6.346,8.285,6.095,9.429,6.027,9.873c0,0,0,0.001-0.001,0.001 C5.881,9.963,5.97,9.854,5.9,10.022c-0.256,0.073-0.47,0.202-0.642,0.346c-0.287,0.237-0.459,0.511-0.513,0.605 c0.034-0.043,0.07-0.083,0.105-0.119C5.38,10.3,5.992,10.36,5.992,10.36s0.682,1.26,0.542,1.405 c-0.015,0.015-0.039,0.017-0.072,0.006c-0.09-0.031-0.149-0.017-0.182,0.024c-0.105,0.117-0.009,0.454-0.008,0.462l-1.809-0.778 c0.858-0.318,1.47-0.1,1.47-0.1c0,0.212,0.48,0.184,0.48,0.184l0-.001h0.001c0-0.196-0.365-0.43-0.365-0.43 s-0.327,0.136-0.716,0c-0.077-0.027-0.161-0.038-0.242-0.034C5.02,11.1,4.946,11.115,4.874,11.136 c-0.206,0.059-0.357,0.174-0.357,0.174v-0.001L4.515,11.31l1.131-4.139l0.119,1.591L8.06,3.367l0.039,4.037L14.354,0l-3.847,8.316 l0.023,0.041l2.713-1.954l-0.573,1.149l3.793-1.481l-3.539,2.585l6.612-0.81l-8.021,3.471l4.105-1.001L10.168,14.083z M11.512,11.319l0.001,0l-0.001-0.004C11.512,11.316,11.512,11.317,11.512,11.319z M9.515,12.181 c-0.095-0.395-0.223-0.757-0.371-1.076L8.2,13.182L9.515,12.181z M7.215,11.087c0.208-0.071,0.314-0.308,0.239-0.529l-0.208,0.071 c0.013,0.031,0.022,0.064,0.022,0.099c0,0.031-0.005,0.06-0.017,0.086l0.095,0.057c-0.032,0.051-0.081,0.095-0.141,0.12 c-0.036,0.016-0.074,0.022-0.112,0.022c-0.122,0-0.236-0.074-0.286-0.195c-0.004-0.01-0.01-0.022-0.012-0.034l-0.092,0.03 C6.778,11.038,7.008,11.158,7.215,11.087z" />
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-between pt-12 lg:pt-20 w-full lg:w-auto">
                    <h2 className="text-sm font-medium text-gray-400">Want to work with us?</h2>
                    <form name="landing-page-contact" data-netlify="true" autoComplete="off" netlify-honeypot="bot-field"
                        className="flex items-center mt-2 w-full md:w-auto">
                        <p className="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        <div className="w-full md:w-80">
                            <div className="relative">
                                <input
                                    className="appearance-none block w-full bg-black text-gray-100 border border-gray-800 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                                    type="email" placeholder="Email address..." required />

                                <button type="submit"
                                    className="uppercase px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-1 mr-2 bg-blue-800 text-blue-50 hover:bg-blue-900">Contact</button>
                                <span id="success"
                                    className="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks!
                                    We'll be in touch soon.</span>
                                <span id="error"
                                    className="hidden mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                                    Something went wrong.</span>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        </>
    );
}