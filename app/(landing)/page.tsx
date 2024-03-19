import { Button } from "@/components/ui/button"
import Link from 'next/link'


const LandingPage = () => {
    return <div>
        <div>
            <h1>Landing Page(Unprotected)</h1>
        </div>
        <div>
            <Link href='/sign-in'>
                <Button>sign-in</Button>
            </Link>

        </div>

    </div>
}

export default LandingPage