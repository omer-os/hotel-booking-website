"use client";
import { useAuth } from "@clerk/nextjs";

export const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <button
        title="Sign Out"
        onClick={() => {
          signOut();
        }}
        className="btn btn-primary"
      >
        Sign Out
      </button>
    </>
  );
};
