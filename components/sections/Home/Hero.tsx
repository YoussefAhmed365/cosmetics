import Image from "next/image";
import Button from "../../ui/Button";

export default function Hero() {
    return (
        <header className="bg-hero relative h-[calc(100svh-4rem)] md:h-[calc(100dvh-5rem)] lg:h-[calc(100dvh-6rem)]">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    alt="Hero Cover"
                    src="/images/full-hero-overlay.jpg"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[70%_top] md:object-top-right"
                />
                {/* Dynamic Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/20 md:bg-linear-to-r md:from-black/50 md:via-black/20 md:to-transparent" />
            </div>

            {/* Foreground Content Container */}
            <div className="flex justify-center md:justify-start items-end md:items-center z-10 w-full md:w-2/3 lg:w-1/2 xl:w-2/3 h-full">
                <div className="relative mt-10 flex flex-col items-start justify-center space-y-5 md:space-y-6 px-6 sm:px-10 md:px-12 lg:px-16">
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight drop-shadow-md">
                        Glow <span className="text-secondary">Naturally</span>
                    </h1>

                    <p className="text-white/95 text-lg md:text-2xl lg:text-3xl tracking-tight max-w-xl drop-shadow-sm">
                        Discover the beauty of natural ingredients made especially for your skin
                    </p>

                    <h2 className="font-brand text-secondary text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Nature Sense</h2>

                    <Button className="mt-30 md:mt-0 mb-15 md:mb-0" children="Shop Now" />
                </div>
            </div>
        </header>
    );
}