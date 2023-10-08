import EditPersonal from './EditPersonal';
import EditEducation from './EditEducation';
import EditExperience from './EditExperience';

export default function EditSection() {
  return (
    <div className="min-h-[800px] m-10 min-w-[400px] flex flex-col gap-6">
      <EditPersonal></EditPersonal>
      <EditEducation></EditEducation>
      <EditExperience></EditExperience>
    </div>
  );
}
