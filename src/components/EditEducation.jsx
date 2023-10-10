import Icon from '@mdi/react';
import { mdilChevronDown } from '@mdi/light-js';
import { mdilChevronLeft } from '@mdi/light-js';
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

function Education({ uni, education, setEducation }) {
  const [hide, setHide] = useState(true);
  return (
    <div key={uni.key} className="p-1">
      <button
        className="flex w-full justify-between items-center bg-slate-200 text-lg font-bold px-2 rounded-sm min-h-[28px]"
        type="button"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <div>{uni.university}</div>
        <Icon path={hide ? mdilChevronLeft : mdilChevronDown} size={1} />
      </button>
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
          <div>
            <label className="mr-3" htmlFor={`educationStartDate${uni.key}`}>
              Start Date:
              <input
                className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
                type="text"
                name={`educationStartDate${uni.key}`}
                id={`educationStartDate${uni.key}`}
                value={uni.startDate}
                onChange={(event) =>
                  updateEducation(event, education, setEducation, 'startDate')
                }
              />
            </label>
            <label className="" htmlFor={`educationEndDate${uni.key}`}>
              End Date:
              <input
                className="rounded-lg bg-slate-200 w-[130px] ml-2 mt-2"
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
    </div>
  );
}
