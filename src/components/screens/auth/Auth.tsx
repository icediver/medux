import Logo from "@/components/ui/logo/Logo";
import SignIn from "@/components/ui/sign-in/SignIn";

interface IAuth {}
export default function Auth({}: IAuth) {
  return (
    <div className="grid grid-cols-2 animate-opacity">
      <div className="flex justify-start items-end  flex-col">
        <div className="text-start  w-[600px]  py-10 h-screen">
          <Logo />
          <SignIn />
        </div>
      </div>
      <div className="bg-[url(/image/image-auth.png)] h-screen"></div>
    </div>
  );
}
