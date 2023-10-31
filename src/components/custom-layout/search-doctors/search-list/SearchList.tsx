import { IUser } from "@/types/user.interface";
import Image from "next/image";
import Link from "next/link";

interface ISearchList {
  users: IUser[];
}
export default function SearchList({ users }: ISearchList) {
  return (
    <ul className="absolute top-11 left-0  bg-background/50 w-full px-4 mt-5 rounded-b-lg">
      {users.map((user) => (
        <li key={user.email} className="mb-4 animate-opacity">
          <Link href={"/"} className="grid grid-cols-2 items-center">
            <div className="flex items-center">
              <Image
                src={user.avatarPath}
                alt="avatar"
                className="h-10 w-10 rounded-lg"
                width={40}
                height={40}
              />
              <span className="ml-3">{user.name}</span>
            </div>
            <div className="items-center">{user?.speciality}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
