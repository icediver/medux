import clsx from "clsx";
import Widget from "../widget/Widget";
import PatientPaceChart from "./chart/PatientPaceChart";
import styles from "./PatientPace.module.scss";

interface IPatientPace {}
export default function PatientPace({}: IPatientPace) {
  return (
    <Widget title="Patient pace" className="px-0">
      <div className="relative">
        <div
          className={clsx(
            "h-[120px] w-full shadow-inner-chart px-1",
            styles.shadow,
          )}
        >
          <PatientPaceChart />
        </div>
        <footer></footer>
      </div>
    </Widget>
  );
}
