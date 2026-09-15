import Image from "next/image";

const SPONSORING_BRANDS = [
  { name: "Dior", src: "" },
  { name: "Chanel", src: "" },
  { name: "Fendi", src: "" },
  { name: "Givenchy", src: "" },
  { name: "Gucci", src: "" },
  { name: "Louis Vuitton", src: "" },
  { name: "Prada", src: "" },
  { name: "Saint Laurent", src: "" },
];

export default function Marquee() {
  return (
    <section id="marquee" className="group overflow-hidden bg-accent py-6">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...SPONSORING_BRANDS, ...SPONSORING_BRANDS].map(
          (brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex w-50 shrink-0 items-center justify-center px-4"
            >
              {brand.src ? (
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className="h-auto w-auto"
                />
              ) : (
                <h1 className="text-2xl font-semibold text-secondary">
                  {brand.name}
                </h1>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}