import EditPersonal from './EditPersonal';
import EditEducation from './EditEducation';
import EditExperience from './EditExperience';

export default function EditSection({
  personalData,
  setPersonalData,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  return (
    <div className="min-h-[800px] m-10 min-w-[500px] flex flex-col gap-6">
      <EditPersonal
        personalData={personalData}
        setPersonalData={setPersonalData}
      ></EditPersonal>
      <EditEducation
        education={education}
        setEducation={setEducation}
      ></EditEducation>
      <EditExperience
        experience={experience}
        setExperience={setExperience}
      ></EditExperience>
    </div>
  );
}
