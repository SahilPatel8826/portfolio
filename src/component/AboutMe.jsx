import { Briefcase,User,Code } from "lucide-react"

export const AboutMe = () => {
    return (
        <section id="about-me" className="relative py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Software Engineer</h3>

                    <p className="text-muted-foreground">
                        I am a software engineering graduate with hands-on experience building real-world applications using React, Node.js, and Go. I focus on writing clean, maintainable code, designing scalable backends, and improving performance through data structures and system design. Through internships and personal projects, I have demonstrated the ability to ship functional products, work with databases, and solve complex technical problems.
                    </p>
                    <p className="text-muted-foreground">
                        I have developed production-ready applications such as CropOzone, a MERN-based marketplace with robust cart, order, and payment workflows, as well as high-performance Go-based systems including a concurrent Bing Web Crawler and a lightweight file-based database. These experiences have strengthened my ability to design scalable systems, write efficient code, and solve real-world engineering challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#projects" className="cosmic-button">
                            Get In Touch
                        </a>

                         <a href="#projects" className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300 text-center">
                            Download CV
                        </a>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                <p className="text-muted-foreground text-sm">
                                    Experienced in building responsive web applications using React, Node.js, Express, and MongoDB with a focus on clean code and user experience.
                                </p>

                            </div>
                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                              <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                <p className="text-muted-foreground text-sm">
                                    Experienced in building responsive web applications using React, Node.js, Express, and MongoDB with a focus on clean code and user experience.
                                </p>

                            </div>
                        </div>
                        
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                              <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                <p className="text-muted-foreground text-sm">
                                    Experienced in building responsive web applications using React, Node.js, Express, and MongoDB with a focus on clean code and user experience.
                                </p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </section>    
    )
}