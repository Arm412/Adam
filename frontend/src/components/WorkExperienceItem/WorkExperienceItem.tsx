import React from 'react';

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
        <div className="rounded-md p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-semibold">{companyName}</span>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Job Duties:</h3>
                <ul className="list-disc list-inside space-y-1">
                    {jobDuties.map((duty, idx) => (
                        <li key={idx}>{duty}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Programming Languages:</h3>
                <div className="flex flex-wrap gap-4 items-center">
                    {programmingLanguages.map((lang, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <img src={lang.icon} alt={lang.name} className="w-6 h-6" />
                            <span>{lang.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
