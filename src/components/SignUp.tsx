import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm pax-w-xs mx-auto">
          By continuingm, you are setting up a Rabdit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        {/* Sign in form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Already a Rabditer?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 text-sm underline underlinte-offset-8"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;