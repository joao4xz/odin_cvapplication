import Icon from '@mdi/react';
import { mdilChevronDown } from '@mdi/light-js';
import { mdilChevronLeft } from '@mdi/light-js';
import { mdilDelete } from '@mdi/light-js';
import { mdilPlus } from '@mdi/light-js';
import { useState } from 'react';

function updateEducation(event, education, setEducation, property) {
  const index = event.target.id.slice(-1);
  const updatedEducation = [...education];

  updatedEducation[index] = {
    ...updatedEducation[index],
    [property]: event.target.value,
  };

  setEducation(updatedEducation);
}

function createEducation(education, setEducation) {
  const newEducation = {
    university: 'Columbia University',
    location: 'New York, US',
    degree: 'Bachelor in Computer Science',
    startDate: 'Aug. 2019',
    endDate: 'Jul. 2023',
    key: education.length,
    deleted: false,
  };

  setEducation((education) => [...education, newEducation]);
}

function deleteEducation(event, education, setEducation) {
  const index = event.target.closest('button').id.slice(-1);
  const updatedEducation = [...education];

  updatedEducation[index] = {
    ...updatedEducation[index],
    deleted: true,
  };

  setEducation(updatedEducation);
}

function Education({ uni, education, setEducation }) {
  const [hide, setHide] = useState(true);
  return uni.deleted ? null : (
    <div key={uni.key} className="p-1">
      <div className="flex w-full justify-between items-center bg-slate-200 text-lg font-bold px-2 rounded-sm min-h-[28px]">
        <div>{uni.university}</div>
        <div className="flex gap-1 items-center">
          <button
            id={`deleteButton${uni.key}`}
            type="button"
            onClick={(event) => deleteEducation(event, education, setEducation)}
            // onClick={() => {
            //   setDeleted(true);
            // }}
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
          <label className="flex flex-col" htmlFor={`university${uni.key}`}>
            University:
            <input
              className="rounded-lg bg-slate-200"
              type="text"
              name={`university${uni.key}`}
              id={`university${uni.key}`}
              value={uni.university}
              onChange={(event) =>
                updateEducation(event, education, setEducation, 'university')
              }
            />
          </label>
          <label
            className="flex flex-col"
            htmlFor={`educationLocation${uni.key}`}
          >
            Location:
            <input
              className="rounded-lg bg-slate-200"
              type="text"
              name={`educationLocation${uni.key}`}
              id={`educationLocation${uni.key}`}
              value={uni.location}
              onChange={(event) =>
                updateEducation(event, education, setEducation, 'location')
              }
            />
          </label>
          <label className="flex flex-col" htmlFor={`degree${uni.key}`}>
            Degree:
            <input
              className="rounded-lg bg-slate-200"
              type="text"
              name={`degree${uni.key}`}
              id={`degree${uni.key}`}
              value={uni.degree}
              onChange={(event) =>
                updateEducation(event, education, setEducation, 'degree')
              }
            />
          </label>
          <div className="flex justify-between">
            <label htmlFor={`educationStartDate${uni.key}`}>
              Start Date:
              <input
                className="rounded-lg bg-slate-200 w-[120px] ml-2 mt-2"
                type="text"
                name={`educationStartDate${uni.key}`}
                id={`educationStartDate${uni.key}`}
                value={uni.startDate}
                onChange={(event) =>
                  updateEducation(event, education, setEducation, 'startDate')
                }
              />
            </label>
            <label htmlFor={`educationEndDate${uni.key}`}>
              End Date:
              <input
                className="rounded-lg bg-slate-200 w-[120px] ml-2 mt-2"
                type="text"
                name={`educationEndDate${uni.key}`}
                id={`educationEndDate${uni.key}`}
                value={uni.endDate}
                onChange={(event) =>
                  updateEducation(event, education, setEducation, 'endDate')
                }
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EditEducation({ education, setEducation }) {
  return (
    <div className="bg-slate-100 p-3 rounded-xl">
      <h2 className="font-bold text-xl">Education</h2>
      <form>
        {education.map((uni) => {
          return (
            <Education
              key={uni.key}
              uni={uni}
              education={education}
              setEducation={setEducation}
            ></Education>
          );
        })}
      </form>
      <div className="w-full flex justify-center mt-2">
        <button
          onClick={() => {
            createEducation(education, setEducation);
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
