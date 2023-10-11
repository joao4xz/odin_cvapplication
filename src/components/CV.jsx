import CVHeader from './CVHeader';
import CVBody from './CVBody';

export default function CV({ personalData, education, experience }) {
  return (
    <div className="shadow-2xl py-10 px-14 m-10 min-h-[900px] flex flex-col gap-5">
      <CVHeader personalData={personalData}></CVHeader>
      <CVBody education={education} experience={experience}></CVBody>
    </div>
  );
}
