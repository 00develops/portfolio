import logo from "../media/logo.jpeg"
import logo1 from "../media/logo1.jpeg"
export default function Experiences(){
    return( 

        <section id="Experiences"
        className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
        <h2 className="text-5xl text-emerald-500 font-bold text-center">
          My Experiences..
            </h2>
            <br></br>


            {/* left align */}
           
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                   
                        <img src=
"https://content.app-sources.com/s/065521219218851301/uploads/Zoho/FGrade_Small_Logo-6096580-7070939.webp?format=webp"
                             alt="logo"
                             className="w-60 h-full 
                                        bg-cover rounded"/>
                   
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-left">
                        
                    Web Designer
                        
                    </h2>
                    <p>
                    UI/UX Intern at Fgrade| Passionate about crafting seamless and intuitive digital experiences.
                    Currently enhancing user interactions and interfaces, contributing to innovative projects, and
                    learning from a dynamic and talented team. Excited to grow and make an impact in the world of design!
                    </p>
                </div>
            </div>
                



            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                   
                        <img src=
"https://sdn.signalhire.co/storage/company/505f/df99/c8d0/2464/6d36/9a39/ba67/9fe6.webp"
                             alt="logo"
                             className="w-50 h-full 
                                        bg-cover rounded"/>
                   
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-left">
                        
                    Graphic Designer
                        
                    </h2>
                    <p>
                    Joined a dynamic orientation as a Graphic Design Intern where i’m unleashing my creativity
                    by crafting captivating posters and graphics. Collaborate with experienced professionals, 
                    hone my skills, and bring ideas to life in a vibrant, supportive environment. 
                    This internship offers hands-on experience and the opportunity to showcase my talent while 
                    making meaningful contributions to the projects.
                    </p>
                </div>
            </div>
                


            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                   
                        <img src={logo}
                             alt="logo"
                             className="w-50 h-full 
                                        bg-cover rounded"/>
                   
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-left">
                        
                    Video editor
                        
                    </h2>
                    <p>
                    Edit and assemble raw footage into a compelling, visually appealing final product.
                    Collaborate with the creative team to understand project requirements and objectives.
                    Implement feedback from team members and contribute innovative ideas.
                    Ensure timely delivery of high-quality videos, meeting project deadlines..
                    </p>
                </div>
            </div>
                
                

                

            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                   
                        <img src={logo1}
                             alt="logo"
                             className="w-40 h-full 
                                        bg-cover rounded"/>
                   
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-left">
                        
                    Photo Editor
                        
                    </h2>
                    <p>
                    Hands-on experience in curating and editing images for real-world projects.
                    Mentorship from experienced professionals in the field.
                    Exposure to various creative projects and the opportunity to build a diverse portfolio.
                    Flexible working hours to accommodate your academic schedule.
                    </p>
                </div>
            </div>
        </section>
    );
}