import React from "react";
import IconListItem from "../IconListItem/IconListItem";

type ProgrammingLanguage = {
  name: string;
  icon: string;
};

type WorkExperienceItemProps = {
  companyName?: string;
  jobDuties?: string[];
  programmingLanguages?: ProgrammingLanguage[];
};

export default function WorkExperienceItem({
  companyName = "Temp Title",
  jobDuties = ["Temp Duty 1", "Temp Duty 2", "Temp Duty 3"],
  programmingLanguages = [
    { name: "Typescript", icon: "/icons/typescript-96.png" }
  ]
}: WorkExperienceItemProps) {
  return (
    <>
      <div className="rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-semibold mb-5 text-textMain">{companyName}</span>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-4 text-textMain">Job Duties:</h3>
          <ul className="list-disc list-inside space-y-1 text-textMain">
            {jobDuties.map((duty, idx) => (
              <li key={idx}>{duty}</li>
            ))}
          </ul>
        </div>

        <div className="text-textMain">
          <h3 className="font-semibold mb-4 mt-6">Programming Languages/Frameworks/Tools/Testing:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <IconListItem icon={lang.icon} name={lang.name} key={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
