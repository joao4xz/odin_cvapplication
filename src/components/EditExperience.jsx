export default function EditExperience() {
  return (
    <div className="bg-slate-100 p-3 rounded-xl">
      <h2 className="font-bold text-xl">Experience</h2>
      <form className="flex flex-col gap-3 p-3">
        <label className="flex flex-col" htmlFor="jobTitle">
          Job title:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="jobTitle"
          />
        </label>
        <label className="flex flex-col" htmlFor="experienceLocation">
          Location:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="experienceLocation"
          />
        </label>
        <label className="flex flex-col" htmlFor="description">
          Description:
          <textarea
            className="bg-slate-200 rounded-lg min-h-[24px]"
            name="description"
          ></textarea>
        </label>
        <div>
          <label className="mr-3" htmlFor="experienceStartDate">
            Start Date:
            <input
              className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
              type="text"
              name="experienceStartDate"
            />
          </label>
          <label className="" htmlFor="experienceEndDate">
            End Date:
            <input
              className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
              type="text"
              name="experienceEndDate"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
