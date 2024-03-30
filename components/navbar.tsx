import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
// Import the image

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();

    return (
        <div className="flex items-center p-4 ">
            <Button variant="ghost" size="icon" className="md:hidden">
                <MobileSidebar apiLimitCount={apiLimitCount} />
            </Button>
            <div className="flex w-full justify-end">
                {/* Pass the 'items' prop to the AnimatedTooltip component */}

                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default Navbar;
