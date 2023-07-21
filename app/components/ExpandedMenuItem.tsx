import Image from "next/image";

import expandArrowIcon from "../../images/icon-arrow-down.svg";
import collapseArrowIcon from "../../images/icon-arrow-up.svg";

export function ExpandedMenuItem(props: any) {
  const { text, isFeaturesExpanded } = props;

  return (
    <div className="flex flex-row mb-5">
      <li className="h-1">{text}</li>
      <Image
        className="expand-arrow h-1.5 w-2.5 flex align-center mt-4 ml-6"
        src={isFeaturesExpanded ? collapseArrowIcon : expandArrowIcon}
        width={1000}
        height={1000}
        alt="Arrow icon"
      />
    </div>
  );
}
