import Icon from '@mdi/react';
import { mdilMapMarker } from '@mdi/light-js';
import { mdilPhone } from '@mdi/light-js';
import { mdilEmail } from '@mdi/light-js';

export default function CVHeader({ personalData }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl text-center">{personalData.fullName}</h1>
      <div className="flex gap-8">
        <div className="flex gap-1">
          <Icon path={mdilPhone} size={1} /> {personalData.phone}
        </div>
        <div className="flex gap-1">
          <Icon path={mdilEmail} size={1} /> {personalData.email}
        </div>
        <div className="flex gap-1">
          <Icon path={mdilMapMarker} size={1} /> {personalData.location}
        </div>
      </div>
    </div>
  );
}
