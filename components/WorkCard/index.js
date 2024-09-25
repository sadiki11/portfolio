import React from "react";

const WorkCard = ({ img, name, description, skills, onClick, Organization, dates, type,  position, technologiesUsed, approach, keyFeatures, impact, myRole }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link w-full"
      // 'onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "6px" }}
      >


      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-90">
        {Organization ? Organization : "Organization"}
      </h2>
      <h3 className="text-xl opacity-90">
        {position ?  position : "Position"}
      </h3>
      <p className="text-justify text-xl opacity-50">
        {description ? description : "Description"}
      </p>
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
      )}
      {technologiesUsed && (
        <div className="mt-2">
          <h4 className="text-lg font-medium">Technologies Used:</h4>
          <ul className="list-disc ml-5">
            {Object.entries(technologiesUsed).map(([category, techs], index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3">
                <strong>{category}:</strong> {techs.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      {approach && (
        <div className="mt-2">
          <h5 className="text-lg font-medium">Approach:</h5>
          <ul className="list-disc ml-5">
            {Object.entries(approach).map(([step, description], index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3">
                <strong>{step}:</strong> {description}
              </li>
            ))}
          </ul>
        </div>
      )}      
      {keyFeatures && (
        <div className="mt-2">
          <h6 className="text-lg font-medium">Key Features:</h6>
          <ul className="list-disc ml-5">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      {impact && (
        <div className="mt-2">
          <h7 className="text-lg font-medium">Impact:</h7>
          <ul className="list-disc ml-5">
            {Object.entries(impact).map(([impactPoint, description], index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3">
                <strong>{impactPoint}:</strong> {description}
              </li>
            ))}
          </ul>
        </div>
      )}
      {myRole && (
        <div className="mt-2">
          <h8 className="text-lg font-medium">My Role:</h8>
          <ul className="list-disc ml-5">
            {myRole.map((role, index) => (
              <li key={index} className="text-base opacity-75 m-1 p-3">
                {role}
              </li>
            ))}
          </ul>
        </div>
      )}
      {img && (
        <div style ={{"display": "flex",
  "justify-content": "center",
  "align-items": "center",}} className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"> 
          <img 
            style={{
              height: "100%", 
              width: "62%", 
              border: "2px solid rgb(129, 140, 248)", 
              boxShadow: "0px 1px 3px 1px rgb(129, 140, 248)", 
              borderColor: "rgb(129, 140, 248)"
            }}
            src={img} 
            alt={name} 
            className= "object-cover border rounded-2xl" 
          />
        </div>
    )}
    </div>
  );
};

export default WorkCard;
