import { SignUp } from "@clerk/nextjs/app-beta";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import { SignOut } from "components/components/ui/buttons/SginOutBtn.tsx/SginOutBtn";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SignedIn>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">You are signed in!</div>
          <SignOut />
          <Link href="/dashboard" className="btn btn-primary">
            Go to dashboard
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col">
          <SignUp signInUrl="/sign-in" />
          <div className="text-xl font-bold text-center max-w-full">
            you are not signed in so you can't go to dashboard
          </div>
          <Link href="/dashboard" className="btn btn-primary">
            Try Going to dashboard
          </Link>
        </div>
      </SignedOut>
    </div>
  );
}
