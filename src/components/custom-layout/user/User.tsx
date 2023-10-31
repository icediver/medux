"use client";
import { GoBell } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import { useProfile } from "@/hooks/useProfile";
import Image from "next/image";
import { useActions } from "@/hooks/useActions";
import { useRouter } from "next/navigation";
import { useOutside } from "@/hooks/useOutside";

export default function User() {
  const { logout } = useActions();
  const { profile } = useProfile();
  const { ref, isShow, setIsShow } = useOutside(false);
  const { push, refresh } = useRouter();

  return (
    <div className="relative min-w-72">
      <div className="flex justify-center items-center gap-5">
        {profile && (
          <>
            <div className="h-10 w-10 flex justify-center items-center text-inactive bg-bg-light rounded-lg">
              <GoBell />
            </div>
            <div className="w-10 h-10 bg-avatar rounded-lg overflow-hidden">
              <Image
                src={profile.avatarPath}
                height={40}
                width={40}
                alt="avatar"
              />
            </div>
            <div>
              <div className="text-base">{profile?.name}</div>
              <div className="text-xss">{profile?.speciality}</div>
            </div>
          </>
        )}
        <button onClick={() => setIsShow(!isShow)}>
          <FiChevronDown className="ml-[25px] text-1.5xl text-inactive" />
        </button>
      </div>
      {isShow && (
        <div
          ref={ref}
          className="absolute top-12 w-full h-20 bg-bg-light/80  border-background border rounded-b-lg p-5 animate-opacity"
        >
          <button
            onClick={() => {
              logout();
              setIsShow(false);
              push("/auth");
              refresh();
            }}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}
