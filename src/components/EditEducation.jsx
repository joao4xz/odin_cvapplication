export default function EditEducation() {
  return (
    <div className="bg-slate-100 p-3 rounded-xl">
      <h2 className="font-bold text-xl">Education</h2>
      <form className="flex flex-col gap-3 p-3">
        <label className="flex flex-col" htmlFor="university">
          University:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="university"
          />
        </label>
        <label className="flex flex-col" htmlFor="educationLocation">
          Location:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="educationLocation"
          />
        </label>
        <label className="flex flex-col" htmlFor="degree">
          Degree:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="degree"
          />
        </label>
        <div>
          <label className="mr-3" htmlFor="educationStartDate">
            Start Date:
            <input
              className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
              type="text"
              name="educationStartDate"
            />
          </label>
          <label className="" htmlFor="educationEndDate">
            End Date:
            <input
              className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
              type="text"
              name="educationEndDate"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
