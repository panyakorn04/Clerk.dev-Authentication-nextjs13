import Image from 'next/image'
import {
  auth, SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs/app-beta';
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/app-beta';


export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <>
      <header
        className="flex justify-between items-center py-4 px-6 bg-gray-200 border-b-4"
      >
        <h1>My App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className='hover:text-indigo-500'>
            Sign In
          </Link>
        </SignedOut>

      </header>
      <main>
        <h1 className="text-4xl font-bold text-center my-8">Welcome {user?.firstName}{user?.lastName}</h1>
        <div className="flex justify-center">
          <Image
            src="/images/nextjs.png"
            alt="Next.js logo"
            width={20}
            height={20}
          />
        </div>
      </main>
    </>
  )
}
