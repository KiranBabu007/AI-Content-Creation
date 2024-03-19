import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import { MobileSidebar } from "@/components/mobile-sidebar"

const navbar = () => {
    return (
        <div className="flex items-center p-4 ">
            <Button variant="ghost" size="icon" className="md:hidden"   >
                <MobileSidebar />
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />

            </div>
        </div>
    )
}

export default navbar