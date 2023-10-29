import LogoSvg from "./LogoSvg";

interface ILogo {}
export default function Logo({}: ILogo) {
  return (
    <div className="flex items-center  gap-2 justify-start w-[164px]">
      <LogoSvg className="" />
      <span className="text-logo text-2xl font-rubik font-bold">medux</span>
    </div>
  );
}
