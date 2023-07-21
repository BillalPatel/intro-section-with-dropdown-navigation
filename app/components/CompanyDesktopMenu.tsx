import Image from "next/image";

import todoListIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";

export function CompanyDesktopMenu() {
  return (
    <div className="border-solid bg-white shadow-2xl rounded-lg p-3 pl-0 absolute top-16">
      <ul className="flex flex-col my-3 mx-6">
        <li className="flex flex-row pb-2">History</li>
        <li className="flex flex-row pb-2">Our Team</li>
        <li className="flex flex-row pb-2">Blog</li>
      </ul>
    </div>
  );
}
