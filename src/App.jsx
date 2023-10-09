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

  return (
    <div className="min-h-screen flex justify-center items-center">
      <EditSection
        personalData={personalDetails}
        setPersonalData={setPersonalDetails}
      ></EditSection>
      <CV cvData={personalDetails}></CV>
    </div>
  );
}

export default App;
