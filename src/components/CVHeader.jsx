import Icon from '@mdi/react';
import { mdilMapMarker } from '@mdi/light-js';
import { mdilPhone } from '@mdi/light-js';
import { mdilEmail } from '@mdi/light-js';

export default function CVHeader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl text-center">John Doe</h1>
      <div className="flex gap-8">
        <div className="flex gap-1">
          <Icon path={mdilPhone} size={1} /> (123) 456-7890
        </div>
        <div className="flex gap-1">
          <Icon path={mdilEmail} size={1} /> johndoe@email.com
        </div>
        <div className="flex gap-1">
          <Icon path={mdilMapMarker} size={1} /> New York, US
        </div>
      </div>
    </div>
  );
}
