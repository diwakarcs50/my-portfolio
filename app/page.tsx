import Image from "next/image";
import Me from "@/public/personelPhoto.jpg";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl
        sm:leading-10 md:text-6xl md:leading-13 animate-fade-in"
        >
          Home
        </h1>
      </div>

      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:gap-y-0">
        <div className="flex flex-col items-center pt-8 xl:sticky xl:top-8 animate-slide-in-left">
          <div className="relative group">
            <Image
              src={Me}
              alt="Diwakar Kumar"
              className="h-48 w-48 rounded-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Diwakar Kumar
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center font-medium">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="flex space-x-5 pt-6">
            <a href="" target="_blank" aria-label="GitHub" className="transform hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" target="_blank" aria-label="LinkedIn" className="transform hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                    clipRule="evenodd"
                  ></path>
                  <path d="M7.2 8.809H4V19.5h3.2z"></path>
                </g>
              </svg>
            </a>
            <a href="" target="_blank" aria-label="Email" className="transform hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-red-600 hover:text-red-700 transition-colors"
              >
                <path
                  fill="currentColor"
                  d="M21 8V7l-3 2l-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"
                ></path>
              </svg>
            </a>
            <a href="" target="_blank" aria-label="Twitter" className="transform hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <path
                  fill="currentColor"
                  d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2 animate-slide-in-right">
          <p className="text-lg leading-relaxed">
            Hi, I'm Diwakar Kumar, a passionate full-stack developer with expertise in building modern, scalable web applications. I specialize in creating seamless user experiences on the frontend while architecting robust backend systems that power today's digital solutions.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-6 flex items-center">
            <span className="mr-3">🎨</span>
            Frontend Technologies
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6 not-prose">
            <div className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="mr-3 p-2 bg-black rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C4.25 2.185 1.057.346 7.65.04a19.76 19.76 0 0 1 .364-.033C8.57.001 8.706 0 11.572 0z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Next.js</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">React Framework</p>
              </div>
            </div>

            <div className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="mr-3 p-2 bg-blue-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.102-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.36-.034c-.471 0-.92.015-1.36.034c.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.788-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034c.47 0 .92-.015 1.36-.034c-.44.572-.895 1.095-1.36 1.565c-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">React</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">UI Library</p>
              </div>
            </div>
          </div>

          <p className="mb-8">
            I craft responsive and interactive user interfaces using these powerful frameworks, leveraging their ecosystem to build performant single-page applications with modern CSS frameworks, state management solutions, and component libraries.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-6 flex items-center">
            <span className="mr-3">⚙️</span>
            Backend & Database Expertise
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6 not-prose">
            <div className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="mr-3 p-2 bg-green-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Node.js</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Backend Runtime</p>
              </div>
            </div>

            <div className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="mr-3 p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12s12-5.373 12-12S18.626 0 12 0zm-.896 5.913c.282-.015.563.009.838.082a5.387 5.387 0 0 1 2.617 1.509c.806.787 1.287 1.856 1.351 3.011c.047.849-.096 1.699-.414 2.482c-.282.693-.697 1.329-1.218 1.856c-.47.476-1.003.86-1.587 1.143c-.527.256-1.092.43-1.675.518c-.265.04-.532.06-.8.06c-.265 0-.532-.02-.8-.06c-.583-.088-1.148-.262-1.675-.518c-.584-.283-1.117-.667-1.587-1.143c-.521-.527-.936-1.163-1.218-1.856c-.318-.783-.461-1.633-.414-2.482c.064-1.155.545-2.224 1.351-3.011a5.387 5.387 0 0 1 2.617-1.509c.275-.073.556-.097.838-.082zm-.001 1.463c-.223.009-.445.032-.661.072a3.924 3.924 0 0 0-1.906 1.099c-.587.573-.935 1.352-.98 2.196c-.034.618.07 1.238.301 1.814c.205.504.508.966.886 1.353c.342.349.73.631 1.155.841c.384.19.796.313 1.22.377c.193.029.387.044.582.044c.195 0 .389-.015.582-.044c.424-.064.836-.187 1.22-.377c.425-.21.813-.492 1.155-.841c.378-.387.681-.849.886-1.353c.231-.576.335-1.196.301-1.814c-.045-.844-.393-1.623-.98-2.196a3.924 3.924 0 0 0-1.906-1.099c-.216-.04-.438-.063-.661-.072z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Databases</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">SQL & NoSQL</p>
              </div>
            </div>
          </div>

          <p className="mb-8">
            I build robust RESTful APIs and real-time applications, designing and optimizing database schemas for both SQL and NoSQL systems. My backend solutions prioritize scalability, security, and maintainability.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-6 flex items-center">
            <span className="mr-3">🤖</span>
            AI Integration & Innovation
          </h3>
          
          <div className="grid grid-cols-1 gap-4 mb-6 not-prose">
            <div className="group flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <div className="mr-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Latest AI Technologies</h4>
                <p className="text-gray-600 dark:text-gray-400">Machine Learning, NLP & Real-world Applications</p>
              </div>
            </div>
          </div>

          <p className="mb-8">
            I stay at the forefront of technology by keeping up with the latest AI developments and integrating cutting-edge AI models into real-world applications. My passion lies in bridging the gap between artificial intelligence and practical business solutions, creating applications that leverage machine learning, natural language processing, and other AI technologies to solve complex problems and enhance user experiences.
          </p>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700 animate-pulse-slow">
            <p className="text-gray-700 dark:text-gray-300 italic">
              "Whether it's building a complete web application from scratch, integrating AI capabilities into existing systems, or optimizing performance across the full stack, I'm passionate about creating technology solutions that make a meaningful impact."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}