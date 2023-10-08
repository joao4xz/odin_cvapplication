export default function EditPersonal() {
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
          />
        </label>
        <label className="flex flex-col" htmlFor="phone">
          Phone:
          <input className="rounded-lg bg-slate-200" type="text" name="phone" />
        </label>
        <label className="flex flex-col" htmlFor="email">
          E-mail:
          <input
            className="rounded-lg bg-slate-200"
            type="email"
            name="email"
          />
        </label>
        <label className="flex flex-col" htmlFor="location">
          Location:
          <input
            className="rounded-lg bg-slate-200"
            type="text"
            name="location"
          />
        </label>
      </form>
    </div>
  );
}
