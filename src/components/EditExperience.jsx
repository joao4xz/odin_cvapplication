import Icon from '@mdi/react';
import { mdilChevronDown } from '@mdi/light-js';
import { mdilChevronLeft } from '@mdi/light-js';
import { mdilDelete } from '@mdi/light-js';
import { mdilPlus } from '@mdi/light-js';
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

function createExperince(experience, setExperience) {
  const newExperience = {
    jobTitle: 'Software Engineer Intern - Amazon',
    location: 'New York, US',
    description:
      'As an Amazon software engineer intern, I worked on full-stack development using AWS, Java, JavaScript, and DynamoDB. I optimized system performance and contributed to robust, high-availability solutions.',
    startDate: 'Aug. 2023',
    endDate: 'Oct. 2023',
    key: experience.length,
    deleted: false,
  };

  setExperience((experience) => [...experience, newExperience]);
}

function deleteExperience(event, experience, setExperience) {
  const index = event.target.closest('button').id.slice(-1);
  const updatedExperience = [...experience];

  updatedExperience[index] = {
    ...updatedExperience[index],
    deleted: true,
  };

  setExperience(updatedExperience);
}

function Experience({ job, experience, setExperience }) {
  const [hide, setHide] = useState(true);
  return job.deleted ? null : (
    <div key={job.key} className="p-1">
      <div className="flex w-full justify-between items-center bg-slate-200 text-lg font-bold px-2 rounded-sm min-h-[28px]">
        <div>{job.jobTitle}</div>
        <div className="flex gap-1 items-center">
          <button
            id={`deleteButton${job.key}`}
            type="button"
            onClick={(event) =>
              deleteExperience(event, experience, setExperience)
            }
          >
            <Icon path={mdilDelete} size={1} />
          </button>
          <button
            type="button"
            onClick={() => {
              setHide(!hide);
            }}
          >
            <Icon path={hide ? mdilChevronLeft : mdilChevronDown} size={1} />
          </button>
        </div>
      </div>
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
      <div className="w-full flex justify-center mt-2">
        <button
          onClick={() => {
            createExperince(experience, setExperience);
          }}
          type="button"
          className="bg-slate-200 rounded-3xl"
        >
          <Icon path={mdilPlus} size={1} />
        </button>
      </div>
    </div>
  );
}
