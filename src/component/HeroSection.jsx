import { ArrowDown } from "lucide-react";
export const HeroSection =()=>{
    return(
        <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
        <div className="container text-center max-w-4xl z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                   <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                   <span className="text-primary opacity-0 animate-fade-in-delay-2"> Sahil</span>
                   <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Patel</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                   Software engineer with practical experience in full-stack development, system design, and performance optimization. I build scalable applications using React, Node.js, Go, and modern databases, and I prioritize clean code, reliability, and measurable results.
                </p>

                <div className=" pt-4 opacity-0 animate-fade-in-delay-4">

                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
             </div> 
             </div> 
             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
             <span className="text-sm text-muted-foreground mb-2">Scroll</span>
             <ArrowDown className="mt-2 h-6 w-6 text-primary"/>
            </div> 
        </section>
    )
}