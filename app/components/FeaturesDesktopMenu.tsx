import Image from "next/image";

import todoListIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";

export function FeaturesDesktopMenu() {
  return (
    <div className="border-solid bg-white shadow-2xl rounded-lg p-3 pl-0 absolute top-16 left-36">
      <ul className="flex flex-col my-3 mx-6">
        <li className="flex flex-row pb-2">
          <Image
            className="h-5 w-auto mr-5 flex self-center"
            src={todoListIcon}
            width={1000}
            height={1000}
            alt="Expanded menu items"
          />
          Todo List
        </li>
        <li className="flex flex-row pb-2">
          <Image
            className="h-5 w-auto mr-4 mb-1 flex self-center"
            src={calendarIcon}
            width={1000}
            height={1000}
            alt="Expanded menu items"
          />
          Calendar
        </li>
        <li className="flex flex-row pb-2">
          <Image
            className="h-5 w-auto mr-5 mb-1 flex self-center"
            src={remindersIcon}
            width={1000}
            height={1000}
            alt="Expanded menu items"
          />
          Reminders
        </li>
        <li className="flex flex-row">
          <Image
            className="h-5 w-auto mr-4 mb-1 flex self-center"
            src={planningIcon}
            width={1000}
            height={1000}
            alt="Expanded menu items"
          />
          Planning
        </li>
      </ul>
    </div>
  );
}
