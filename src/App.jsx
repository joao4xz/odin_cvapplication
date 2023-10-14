import { useState } from 'react';
import CV from './components/CV';
import EditSection from './components/EditSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'John Doe',
    phone: '(123) 456-7890',
    email: 'johndoe@email.com',
    location: 'New York, US',
  });

  const [education, setEducation] = useState([
    {
      university: 'Columbia University',
      location: 'New York, US',
      degree: 'Bachelor in Computer Science',
      startDate: 'Aug. 2019',
      endDate: 'Jul. 2023',
      key: 0,
      deleted: false,
    },
    {
      university: 'Stanford University',
      location: 'California, US',
      degree: 'Bachelor in Eletrical Engineering',
      startDate: 'Sep. 2018',
      endDate: 'Jun. 2022',
      key: 1,
      deleted: false,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      jobTitle: 'Software Engineer Intern - Amazon',
      location: 'New York, US',
      description:
        'As an Amazon software engineer intern, I worked on full-stack development using AWS, Java, JavaScript, and DynamoDB. I optimized system performance and contributed to robust, high-availability solutions.',
      startDate: 'Aug. 2023',
      endDate: 'Oct. 2023',
      key: 0,
      deleted: false,
    },
    {
      jobTitle: 'Software Engineer Intern - Netflix',
      location: 'New York, US',
      description:
        'As a Netflix software engineer intern, I focused on full-stack development, applying technologies like Node.js, React, and AWS to enhance streaming services. I contributed to performance optimizations and innovative features.',
      startDate: 'Jan. 2023',
      endDate: 'Present',
      key: 1,
      deleted: false,
    },
  ]);

  return (
    <div className="min-h-screen flex justify-center">
      <EditSection
        personalData={personalDetails}
        setPersonalData={setPersonalDetails}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      ></EditSection>
      <CV
        personalData={personalDetails}
        education={education}
        experience={experience}
      ></CV>
    </div>
  );
}

export default App;
