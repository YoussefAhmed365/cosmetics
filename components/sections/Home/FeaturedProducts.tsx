import Image from "next/image";
import { featuredProducts } from "@/lib/data";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "lucide-react";

export default function FeaturedProducts() {
    // Generate JSON-LD Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": featuredProducts.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "image": "http://localhost:3000${product.image}",
                "offers": {
                    "@type": "Offer",
                    "price": product.price,
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": product.rating,
                    "reviewCount": product.reviews
                }
            }
        }))
    };

    return (
        <section>
            {/* SEO Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="text-center mb-12">
                <h2 className="font-brand text-3xl md:text-5xl font-bold text-accent mb-4">Our Signature Collection</h2>
                <p className="text-lg text-accent/70">Elevate your routine with our best-selling essentials.</p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
                {
                    featuredProducts.map((product) => (
                        <article
                            key={product.id}
                            className="flex flex-col bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary"
                        >
                            {/* Product Image */}
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-accent mb-2">{product.name}</h3>
                                <p className="text-sm text-accent/70 mb-4 flex-1">{product.description}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-accent">${product.price.toFixed(2)}</span>
                                    <Button aria-label={`Add ${product.name} to cart`} children="Add to Cart" className="text-xs px-2 py-1" />
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}