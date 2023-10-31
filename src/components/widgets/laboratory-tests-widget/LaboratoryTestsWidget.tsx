import { IUser } from "@/types/user.interface";
import Widget from "../widget/Widget";
import { BsCheck, BsLink45Deg, BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import CheckedButton from "@/components/ui/checked-button/CheckedButton";
import { useState } from "react";

interface INextPatientWidget {
  user: IUser;
  type: string;
  isFinished: boolean;
}
export default function LaboratoryTestsWidget({
  user,
  type,
  isFinished,
}: INextPatientWidget) {
  const [isChecked, setIsChecked] = useState(0);
  return (
    <Widget title="Laboratory tests" size="base" prevNextHandler={() => {}}>
      <div className="mx-6">
        {" "}
        <div className="flex flex-col mt-3 ">
          <div>
            <Link href={"#"} className="flex justify-start w-full gap-2.5">
              <BsLink45Deg />
              <div className="text-sm text-primary">{user.name}</div>
            </Link>
          </div>
          <div className="flex justify-start items-start">
            <div>
              <span className="leading-none"> {type}</span>
              {isFinished && (
                <div className="inline-block">
                  <div className="ml-2 w-3 h-3 bg-background rounded-full flex items-center justify-center">
                    <div className="rounded-full w-2 h-2 bg-green-600"></div>
                  </div>
                </div>
              )}
            </div>
            <button className="hover:text-white w-10">
              <BsThreeDots className="ml-auto" />
            </button>
          </div>
        </div>
        <footer className="h-10 flex items-center justify-between">
          <CheckedButton
            isChecked={isChecked === 0}
            onClick={() => setIsChecked(0)}
          >
            Details
          </CheckedButton>
          <CheckedButton
            isChecked={isChecked === 1}
            onClick={() => setIsChecked(1)}
          >
            Contact Patient
          </CheckedButton>
          <CheckedButton
            onClick={() => setIsChecked(2)}
            isChecked={isChecked === 2}
            Icon={BsCheck}
          >
            Achive
          </CheckedButton>
        </footer>
      </div>
    </Widget>
  );
}
