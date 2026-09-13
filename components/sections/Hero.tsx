import Image from "next/image";

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
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/20 md:bg-linear-to-r md:from-black/60 md:via-black/30 md:to-transparent" />
            </div>

            {/* Foreground Content Container */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex h-full flex-col items-start justify-center space-y-6 md:space-y-8 px-6 sm:px-10 md:px-12 lg:px-16 pt-16 md:pt-0">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight drop-shadow-md">
                    Glow <span className="text-secondary">Naturally</span>
                </h1>

                <p className="text-white/95 text-base sm:text-lg md:text-2xl lg:text-3xl tracking-tight max-w-xl drop-shadow-sm">
                    Discover the beauty of natural ingredients made especially for your skin
                </p>

                <button className="bg-secondary text-primary text-base md:text-lg font-medium px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all shadow-lg hover:shadow-xl cursor-pointer">
                    Shop Now
                </button>
            </div>
        </header>
    );
}