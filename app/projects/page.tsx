import Image from "next/image";
import { client } from "../lib/sanity";


interface Project{
    title: string,
    overview: string,
    link: string,
    _id: string,
    imageUrl: string
}
async function getProjects(){
    const query = `*[_type == "project"] {
  title,
    overview,
    link,
    _id,
    "imageUrl":image.asset->url
}`;

   const data: Project[] = await client.fetch(query);
   return data;
}

export const revalidate = 60;
export default async function Projects(){

    const projects = await getProjects();
    console.log(projects);
    return(
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Projects</h1>

            </div>

            <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                {projects.map((project) => (
                    <article key={project._id} className="overflow-hidden rounded-lg border border-gray-100 dark:border-zinc-600 bg-white shadow-lg dark:bg-black 
                    dark:shadow-gray-700 shadow-teal-100">
                      <div className="h-56 w-full relative">
                         <Image src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" fill/>
                      </div>

                      <div className="p-4 sm:p-6">
                        <a href={project.link} target="_blank">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                {project.title}
                            </h3>
                        </a>

                        <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-gray-500 dark:text-gray-400">
                            {project.overview}
                        </p>

                        <a href={project.link} target="_blank" className="group mt-4 inline-flex items-center text-sm font-medium gap-1 text-teal-500 hover:text-teal-600">
                            Learn More !
                            <span className="block transition-all group-hover:ms-0.5">&rarr;</span>
                        </a>

                      </div>
                      </article>
                ))}
            </div>
        </div>
    )
}