function setName(event, personalData, setPersonalData) {
  setPersonalData({
    ...personalData,
    fullName: event.target.value,
  });
}

function setPhone(event, personalData, setPersonalData) {
  setPersonalData({
    ...personalData,
    phone: event.target.value,
  });
}

function setEmail(event, personalData, setPersonalData) {
  setPersonalData({
    ...personalData,
    email: event.target.value,
  });
}

function setLocation(event, personalData, setPersonalData) {
  setPersonalData({
    ...personalData,
    location: event.target.value,
  });
}

export default function EditPersonal({ personalData, setPersonalData }) {
  return (
    <div className="bg-slate-100 p-3 rounded-xl">
      <h2 className="text-xl font-bold">Personal Details</h2>
      <form className="flex flex-col gap-3 p-3">
        <label className="flex flex-col" htmlFor="fullName">
          Full Name:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="fullName"
            id="fullName"
            value={personalData.fullName}
            onChange={(event) => setName(event, personalData, setPersonalData)}
          />
        </label>
        <label className="flex flex-col" htmlFor="phone">
          Phone:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="phone"
            id="phone"
            value={personalData.phone}
            onChange={(event) => setPhone(event, personalData, setPersonalData)}
          />
        </label>
        <label className="flex flex-col" htmlFor="email">
          E-mail:
          <input
            className="rounded-lg bg-slate-200"
            type="email"
            name="email"
            id="email"
            value={personalData.email}
            onChange={(event) => setEmail(event, personalData, setPersonalData)}
          />
        </label>
        <label className="flex flex-col" htmlFor="location">
          Location:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="location"
            id="location"
            value={personalData.location}
            onChange={(event) =>
              setLocation(event, personalData, setPersonalData)
            }
          />
        </label>
      </form>
    </div>
  );
}
