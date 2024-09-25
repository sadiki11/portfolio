import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const SkillsCard = ({ name, skills }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
    console.log("Skills:", skills); // Debugging line to check if skills are passed correctly
  }, [skills]);

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
        {skills && (
        <div className="mt-2">
          <h3 className="text-lg font-medium">Skills:</h3>
          <ul className="list-disc ml-5">
            {skills.map((skill, index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3 ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )
      }
    </div>
  );
};

export default SkillsCard;
