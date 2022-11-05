import { SignUp } from '@clerk/nextjs/app-beta';

export default function Page() {
    return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
}