const skills=[
    { name: "HTML", level: 95, category: "frontend" },

{ name: "JavaScript", level: 90, category: "frontend" },

{ name: "React", level: 90, category: "frontend" },

{ name: "Cpp", level: 85, category: "frontend" },

{ name: "TailwindCSS", level: 90, category: "frontend" },


// Backend
{ name: "Golang", level: 85, category: "backend" },
{ name: "Nodejs", level: 80, category: "backend" },

{ name: "Express", level: 75, category: "backend" },

{ name: "MongoDB", level: 70, category: "backend" },

{ name: "PostgreSQL", level: 65, category: "backend" },



// Tools

{ name: "GitHub", level: 90, category: "tools" },

{ name: "Docker", level: 70, category: "tools" },

{ name: "Figma", level: 85, category: "tools" },

{ name: "VSCode", level: 95, category: "tools" },
];



export const Skills = () => {
    return <section
    id="skills"
    className="py-24 px-4 bg-secondary/30 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My<span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
            {skills.map((skill,key)=>(
                <div
                 key={key}
                 className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="flex flex-cols gap-4 items-start">
                        <h3 className="text-2xl py-3">{skill.name}</h3>
                        <img src={`https://skillicons.dev/icons?i=${skill.name.toLowerCase().replace(/[#\/]/g,'')}`}
                         alt={skill.name}
                         className="h-10 w-10 mt-2 mb-5"/>
                    </div> 
                    <div className="w-full bg-background/20 rounded-full h-4 mt-4">
                        <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                        style={{width:skill.level+"%"}}
                        ></div> 

                        <div className="text-right mt-1">
                            <span className=" text-sm text-muted-foreground">{skill.level}%</span> 
                            </div>
                        </div> 
                    </div>
                ))}
                    </div>
    </div>



    </section>
}