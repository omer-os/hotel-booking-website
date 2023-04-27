import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="h-full w-full flex-col absolute top-0 left-0 flex items-center justify-center">
      <SignIn signUpUrl="/signup" />
      <div className="text-sm md:text-zinc-400 font-bold  mt-4">
        Create an account or sign in to see hows your hotel doing
      </div>
    </div>
  );
}
