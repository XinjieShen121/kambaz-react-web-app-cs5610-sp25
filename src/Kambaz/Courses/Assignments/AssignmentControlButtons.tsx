import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}