import { LandingHero } from "@/components/landingHero"
import { LandingContent } from "@/components/landingcontent"
import { LandingNavbar } from "@/components/landingnavbar"


const LandingPage = () => {
    return <div className="h-full">
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
    </div>
}

export default LandingPage