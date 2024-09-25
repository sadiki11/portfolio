import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import SkillsCard from "../components/SkillsCard";
import StudyCard from "../components/StudyCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const { theme } = useTheme()

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="gradient-overlay"></div> 

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="laptop:mt-20 mt-10">         
          <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
              <Socials style={{ margin: 0, padding: 0 }} />
          </div>        
        </div>   

        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-5xl text-bold">Projects:</h1>

          <div className="mx-28 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                skills={project.skills}
                Organization={project.Organization}
                dates={project.dates}
                type={project.type}
                position={project.position}
                technologiesUsed={project.technologiesUsed}
                approach={project.approach}
                keyFeatures={project.keyFeatures}
                impact={project.impact}
                myRole={project.myRole}
                // onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-5xl text-bold">Studies:</h1>
          <div className="mx-28 grid laptop:grid-rows-1 gap-6">
            {data.Studies.map((service, index) => (
              <StudyCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>


        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-5xl text-bold">Skills:</h1>
          
          {/* Grid layout for all skill sections */}
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 mx-28">
            
            {data.Skills.map((service, index) => (
              <div key={index}>
                <SkillsCard
                  name={service.title}
                  skills={service.skills}
                />
              </div>
            ))}
            
          </div>
        </div>


        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-5xl text-bold">About Me 😊:</h1>
          <p className={`mx-10 tablet:mx-28 text-xl laptop:text-xl text-justify ${theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"} p-10 border rounded-xl`}>
            {data.aboutpara.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          </div>
        <Footer />
      </div>
    </div>
  );
}
