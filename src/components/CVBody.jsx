function SectionTitle({ title }) {
  return <h2 className="text-xl border-b border-slate-950">{title}</h2>;
}

function EducationSection({ education }) {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle title="Education"></SectionTitle>
      {education.map((uni) => {
        return (
          <div key={uni.key} className="grid grid-cols-[1fr_auto] items-center">
            <div className="font-bold">{uni.university}</div>
            <div className="text-sm italic justify-self-end">
              {uni.location}
            </div>
            <div className="text-sm italic">{uni.degree}</div>
            <div className="text-sm italic justify-self-end">
              {uni.startDate} - {uni.endDate}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ExperienceSection({ experience }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Experience"></SectionTitle>
      {experience.map((job) => {
        return (
          <div
            key={job.key}
            className="grid grid-cols-[1fr_auto] items-center gap-x-2"
          >
            <div className="font-bold">{job.jobTitle}</div>
            <div className="text-sm italic justify-self-end">
              {job.location}
            </div>
            <div className="text-sm italic max-w-[400px]">
              {job.description}
            </div>
            <div className="text-sm italic justify-self-end self-start">
              {job.startDate} - {job.endDate}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CVBody({ education, experience }) {
  return (
    <>
      <EducationSection education={education}></EducationSection>
      <ExperienceSection experience={experience}></ExperienceSection>
    </>
  );
}
