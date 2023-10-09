import EditPersonal from './EditPersonal';
import EditEducation from './EditEducation';
import EditExperience from './EditExperience';

export default function EditSection({ personalData, setPersonalData }) {
  return (
    <div className="min-h-[800px] m-10 min-w-[400px] flex flex-col gap-6">
      <EditPersonal
        personalData={personalData}
        setPersonalData={setPersonalData}
      ></EditPersonal>
      <EditEducation></EditEducation>
      <EditExperience></EditExperience>
    </div>
  );
}
