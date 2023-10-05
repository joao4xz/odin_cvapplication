import CVHeader from './CVHeader';
import CVBody from './CVBody';

export default function CV() {
  return (
    <div className="shadow-2xl py-10 px-14 m-10 min-h-[800px] flex flex-col gap-5">
      <CVHeader></CVHeader>
      <CVBody></CVBody>
    </div>
  );
}
