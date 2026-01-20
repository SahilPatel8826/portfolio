import { ExternalLink ,Github,ArrowRight} from "lucide-react"

import projectImg from "@/assets/Project2.png";
import projectImg3 from "@/assets/Project.png"
import projectImg2 from "@/assets/Project3.png"

const projects = [
    {
        id:1,
        title:"Cropozone",
        description:"Built a full-stack marketplace with real-time cart management, secure payments, and scalable backend APIs.",
        image:projectImg3,
        tag:["React","Nodejs"],
        demoUrl:"#",
        githubUrl:"https://github.com/SahilPatel8826/Cropozone",
    },
       {
        id:2,
        title:"File-Based Database System",
        description:"Implemented a lightweight storage engine with indexing, querying, and persistence from scratch",
        image:projectImg,
        tag:["Golang"],
        demoUrl:"#",
        githubUrl:"https://github.com/SahilPatel8826/golang/tree/main/Database",
    },
       {
        id:3,
        title:"Bing Web Crawler",
        description:"Designed a high-performance concurrent crawler that scrapes, processes, and stores search results efficiently.",
        image:projectImg2,
        tag:["React","Golang"],
        demoUrl:"#",
        githubUrl:"https://github.com/SahilPatel8826/golang/tree/main/BingWebCrawler",
    },
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted to solve real-world problems and showcase my skills in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key)=>(
                <div
                 key={key} 
                 className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden">
                        <img
                         src={project.image}
                         alt={project.title}
                         className="flex justify-center w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tag.map((tag)=>(
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                           <div className="flex space-x-3">
                             <a
                             
                             href={project.demoUrl}
                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
                             
                             >
                                <ExternalLink size={20}/>
                            </a>
                            <a
                              
                             href={project.githubUrl}
                             className="text-foreground/80 hover:text-primary transition-colors duration-300"
                             >
                                <Github size={20}/>
                            </a>
                            </div>
                        </div>
                        
                       </div> 
                 </div>
            ))}    
        </div>
        <div className="text-center mt-12">
           <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
           target="_blank"
           href="https://github.com/SahilPatel8826">
            Check My Github <ArrowRight size={16}/>
           </a>
        </div>


    </div>
    </section>
}