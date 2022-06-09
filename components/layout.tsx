import { FC, ReactNode } from "react"
import { faIcons, faRobot, faTasks, faEnvelope, faChartArea, faWallet, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal">
      <header>
        <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto w-full z-20 top-0">

          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="#">
                <span className="text-xl pl-2">
                  <FontAwesomeIcon icon={faIcons} />
                </span>
              </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <input type="search" id="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
              </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <a className="inline-block py-2 px-4 text-white no-underline" href="#">
                    Active
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">
                    link
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <div className="relative inline-block">
                    <button className="drop-button text-white py-2 px-2">
                      <span className="pr-2">
                        <FontAwesomeIcon icon={faRobot} />
                      </span>
                      Hi, User
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="flex flex-col md:flex-row">
          <nav>
            <div className="bg-gray-800 shadow-xl h-20 bottom-0 md:relative md:h-screen w-full md:w-48 content-center">
              <div className="md:mt-12 md:w-48 md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                  <li className="mr-3 flex-1">
                    <Link href="/admin/mdx-files" >
                      <div className="cursor-pointer block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                        <FontAwesomeIcon icon={faTasks} className="pr-0 md:pr-3" />
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                          Mdx Files
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link href="/" >
                      <div className="cursor-pointer block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                        <FontAwesomeIcon icon={faWallet} className="pr-0 md:pr-3" />
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                          Logout
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="flex-1">
            <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">{children}</div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Layout