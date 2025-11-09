
import Link from "next/link";
import Image from "next/image";
export function TrustedBy() {
  const companies = [
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
     { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
  ];

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
            >
              <div className="text-center">
                <div>
                  <Link href="/" >
                    <Image
                     src={company.image}
                      alt="Orchid Software"
                      width={160}
                      height={60}
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
