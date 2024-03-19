import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs"


const LandingPage = () => {
    return <div>
        <div>
            <h1>Landing Page(Unprotected)</h1>
        </div>
        <div>
            <Link href='/sign-in'>
                <Button>sign-in</Button>
            </Link>
            <Link href='/sign-up'>
                <Button>sign-up</Button>
            </Link>

            <UserButton />

        </div>

    </div>
}

export default LandingPage