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
    },
    {
      university: 'Stanford University',
      location: 'California, US',
      degree: 'Bachelor in Eletrical Engineering',
      startDate: 'Sep. 2018',
      endDate: 'Jun. 2022',
      key: 1,
    },
  ]);

  return (
    <div className="min-h-screen flex justify-center">
      <EditSection
        personalData={personalDetails}
        setPersonalData={setPersonalDetails}
        education={education}
        setEducation={setEducation}
      ></EditSection>
      <CV personalData={personalDetails} education={education}></CV>
    </div>
  );
}

export default App;
