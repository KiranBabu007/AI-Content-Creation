"use client";


import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Artificial intelligence is the future, and the future is now.",
        name: "Elon Musk",
        title: "Founder of Tesla and SpaceX",
    },
    {
        quote:
            "The development of full artificial intelligence could spell the end of the human race.",
        name: "Stephen Hawking",
        title: "Theoretical Physicist",
    },
    {
        quote: "The question is not whether robots will be able to think, it's whether humans will be able to think without them.",
        name: "Garry Kasparov",
        title: "Chess Grandmaster",
    },
    {
        quote:
            "I visualize a time when we will be to robots what dogs are to humans. And I'm rooting for the machines.",
        name: "Claude Shannon",
        title: "Mathematician and Electrical Engineer",
    },
    {
        quote:
            "Artificial intelligence will reach human levels by around 2029. Follow that out further to, say, 2045, we will have multiplied the intelligence, the human biological machine intelligence of our civilization a billion-fold.",
        name: "Ray Kurzweil",
        title: "Director of Engineering at Google",
    },
];

export const LandingContent = () => {
    return (
        <div className=" rounded-md md:pt-20  sm:pt-20 flex flex-col antialiased bg-transparent  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    )
}