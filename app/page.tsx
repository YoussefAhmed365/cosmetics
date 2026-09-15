import Hero from "@/components/sections/Home/Hero";
import Marquee from "@/components/sections/Home/Marquee";
import FeaturedProducts from "@/components/sections/Home/FeaturedProducts";

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <main className="p-10">
                <FeaturedProducts />
            </main>
        </>
    );
}
