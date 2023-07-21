import Image from "next/image";

export function ExpandedMenuItem(props) {
  const {isFeaturesExpanded} = props;

  return (
    <div>
      <li className="h-1">Features</li>
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
