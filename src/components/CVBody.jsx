import PropTypes from 'prop-types';

function SectionTitle({ title }) {
  return <h2 className="text-xl border-b border-slate-950">{title}</h2>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function EducationSection() {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle title="Education"></SectionTitle>
      <div className="grid grid-cols-[1fr_auto] items-center">
        <div className="font-bold">Columbia University</div>
        <div className="text-sm italic justify-self-end">New York, US</div>
        <div className="text-sm italic">Bachelor in Computer Science</div>
        <div className="text-sm italic justify-self-end">
          Ago. 2019 - Jul. 2023
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <SectionTitle title="Experience"></SectionTitle>
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-2">
        <div className="font-bold">Software Engineer Intern - Amazon</div>
        <div className="text-sm italic justify-self-end">New York, US</div>
        <div className="text-sm italic">
          As an Amazon software engineer intern, I worked on full-stack
          development using AWS, Java, JavaScript, and DynamoDB. I optimized
          system performance and contributed to robust, high-availability
          solutions.
        </div>
        <div className="text-sm italic justify-self-end self-start">
          Aug. 2023 - Oct. 2023
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-2">
        <div className="font-bold">Software Engineer Intern - Netflix</div>
        <div className="text-sm italic justify-self-end">New York, US</div>
        <div className="text-sm italic">
          As a Netflix software engineer intern, I focused on full-stack
          development, applying technologies like Node.js, React, and AWS to
          enhance streaming services. I contributed to performance optimizations
          and innovative features.
        </div>
        <div className="text-sm italic justify-self-end self-start">
          Jan. 2023 - Present
        </div>
      </div>
    </div>
  );
}

export default function CVBody() {
  return (
    <>
      <EducationSection></EducationSection>
      <ExperienceSection></ExperienceSection>
    </>
  );
}
