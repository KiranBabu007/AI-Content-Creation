import Heading from "@/components/heading"
import { MessageSquare } from "lucide-react"



const page = () => {
    return (
        <div>
            <Heading
                title="Conversation"
                description="Start a conversation with your AI."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8"></div>
        </div>
    )
}

export default page