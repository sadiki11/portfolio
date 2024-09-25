import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.degree}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-low justify-between">

                  {resume.languages && (
                    <div className="mt- mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-8 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-8 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {resume["AI Applications"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">AI Applications</h3>
                      <ul className="list-disc">
                        {resume["AI Applications"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["AI Frameworks & Libraries"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">AI Frameworks & Libraries</h3>
                      <ul className="list-disc">
                        {resume["AI Frameworks & Libraries"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Big Data & Databases"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Big Data & Databases</h3>
                      <ul className="list-disc">
                        {resume["Big Data & Databases"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Data Science & Analytics"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Data Science & Analytics</h3>
                      <ul className="list-disc">
                        {resume["Data Science & Analytics"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Generative AI & Large Language Models (LLMs)"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Generative AI & Large Language Models (LLMs)</h3>
                      <ul className="list-disc">
                        {resume["Generative AI & Large Language Models (LLMs)"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Cloud Computing"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Cloud Computing</h3>
                      <ul className="list-disc">
                        {resume["Cloud Computing"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Software Engineering"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Software Engineering</h3>
                      <ul className="list-disc">
                        {resume["Software Engineering"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["API Development & Testing"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">API Development & Testing</h3>
                      <ul className="list-disc">
                        {resume["API Development & Testing"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume["Soft Skills"] && (
                    <div className="mt-8 mob:mt-5">
                      <h3 className="text-lg">Soft Skills</h3>
                      <ul className="list-disc">
                        {resume["Soft Skills"].map((item, index) => (
                          <li key={index} className="ml-5 py-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
