import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill"></div>
                <Modules />
                 {/* Added 'ms-5' for margin */}
                <div className="d-none d-md-block ms-5">
                <div className="d-none d-md-block">
                <CourseStatus />
             </div>
             </div>
             </div>
);}