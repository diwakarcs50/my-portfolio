import Image from "next/image";
import Me from "@/public/personelPhoto.jpg";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl
        sm:leading-10 md:text-6xl md:leading-13"
        >
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:gap-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            src={Me}
            alt="Diwakar Kumar"
            className="h-48 w-48 rounded-full object-cover"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Diwakar
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Hey my name is Diwakar I am a full Stack developer
          </p>
          <div className="flex space-x-5 pt-6">
            <a href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className=" w-8 h-8 text-teal-500 hover:text-teal-600"
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
            <a href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-teal-500 hover:text-teal-600"
              >
                <path
                  fill="currentColor"
                  d="M21 8V7l-3 2l-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"
                ></path>
              </svg>
            </a>
            <a href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path
                  fill="currentColor"
                  d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            ratione quae eius, iusto soluta amet aut. Molestias beatae placeat
            numquam temporibus minus! Mollitia debitis accusantium sequi
            delectus quae eaque atque architecto reiciendis, consequuntur
            corrupti ratione ipsa suscipit rem laborum consequatur reprehenderit
            laudantium praesentium autem cumque eius beatae qui impedit! Fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit voluptatum perferendis ipsum consequatur nobis accusamus
            aperiam sit? Quaerat odio expedita velit molestiae eveniet
            recusandae iure est fuga neque, corporis porro sequi, laboriosam in
            temporibus dolore natus placeat aspernatur quibusdam quas sit? Sequi
            voluptate corporis fuga ad vel. Pariatur itaque vel vitae quaerat
            minima sint accusantium dolorum, incidunt mollitia distinctio,
            ducimus facere? Assumenda facere ducimus itaque. Exercitationem
            eligendi, voluptatibus fugit expedita obcaecati cum repellendus,
            necessitatibus odio aperiam eaque ipsa. Autem, molestiae. Voluptates
            repellat, nulla dicta et reprehenderit tempore vel accusantium
            necessitatibus nam laudantium, vitae esse, quo consequuntur est
            quisquam sunt!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            alias vel nam, quo repellat molestiae ratione, optio, eos obcaecati
            iste architecto mollitia molestias expedita? Ratione praesentium
            optio veritatis ullam expedita esse natus aliquid debitis ea
            assumenda excepturi ipsa numquam pariatur cumque corrupti quidem
            laborum necessitatibus adipisci, doloremque nihil, suscipit alias
            dolor! Iure eum exercitationem aliquid iste tempore repudiandae,
            consectetur esse corporis recusandae obcaecati possimus nam dolorum
            asperiores dolores, reprehenderit architecto, quibusdam voluptatibus
            sint modi a suscipit harum veniam! Aperiam debitis ex optio sint hic
            itaque accusantium dicta beatae aut, ratione modi voluptatem,
            corporis fugit praesentium totam aliquam cum! Temporibus, sit?
          </p>
        </div>
      </div>
    </div>
  );
}
