import Icon from '@mdi/react';
import { mdilChevronDown } from '@mdi/light-js';
import { mdilChevronLeft } from '@mdi/light-js';
import { useState } from 'react';

function updateExperience(event, experience, setExperience, property) {
  const index = event.target.id.slice(-1);
  const updatedExperience = [...experience];

  updatedExperience[index] = {
    ...updatedExperience[index],
    [property]: event.target.value,
  };

  setExperience(updatedExperience);
}

function Experience({ job, experience, setExperience }) {
  const [hide, setHide] = useState(true);
  return (
    <div key={job.key} className="p-1">
      <button
        className="flex w-full justify-between items-center bg-slate-200 text-lg font-bold px-2 rounded-sm min-h-[28px]"
        type="button"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <div>{job.jobTitle}</div>
        <Icon path={hide ? mdilChevronLeft : mdilChevronDown} size={1} />
      </button>
      {hide ? undefined : (
        <div className="flex flex-col gap-2 p-3">
          <label className="flex flex-col" htmlFor={`jobTitle${job.key}`}>
            Job title:
            <input
              className="rounded-lg bg-slate-200"
              type="text"
              name={`jobTitle${job.key}`}
              id={`jobTitle${job.key}`}
              value={job.jobTitle}
              onChange={(event) =>
                updateExperience(event, experience, setExperience, 'jobTitle')
              }
            />
          </label>
          <label
            className="flex flex-col"
            htmlFor={`experienceLocation${job.key}`}
          >
            Location:
            <input
              className="rounded-lg bg-slate-200"
              type="text"
              name={`experienceLocation${job.key}`}
              id={`experienceLocation${job.key}`}
              value={job.location}
              onChange={(event) =>
                updateExperience(event, experience, setExperience, 'location')
              }
            />
          </label>
          <label className="flex flex-col" htmlFor={`description${job.key}`}>
            Description:
            <textarea
              className="bg-slate-200 rounded-lg min-h-[24px]"
              name={`description${job.key}`}
              id={`description${job.key}`}
              value={job.description}
              onChange={(event) =>
                updateExperience(
                  event,
                  experience,
                  setExperience,
                  'description'
                )
              }
            ></textarea>
          </label>
          <div>
            <label className="mr-3" htmlFor={`experienceStartDate${job.key}`}>
              Start Date:
              <input
                className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
                type="text"
                name={`experienceStartDate${job.key}`}
                id={`experienceStartDate${job.key}`}
                value={job.startDate}
                onChange={(event) =>
                  updateExperience(
                    event,
                    experience,
                    setExperience,
                    'startDate'
                  )
                }
              />
            </label>
            <label className="" htmlFor={`experienceEndDate${job.key}`}>
              End Date:
              <input
                className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
                type="text"
                name={`experienceEndDate${job.key}`}
                id={`experienceEndDate${job.key}`}
                value={job.endDate}
                onChange={(event) =>
                  updateExperience(event, experience, setExperience, 'endDate')
                }
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EditExperience({ experience, setExperience }) {
  return (
    <div className="bg-slate-100 p-3 rounded-xl">
      <h2 className="font-bold text-xl">Experience</h2>
      <form>
        {experience.map((job) => {
          return (
            <Experience
              key={job.key}
              job={job}
              experience={experience}
              setExperience={setExperience}
            ></Experience>
          );
        })}
      </form>
    </div>
  );
}
