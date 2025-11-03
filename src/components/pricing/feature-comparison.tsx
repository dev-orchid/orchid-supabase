import * as React from "react";
import { Check, X } from "lucide-react";

const features = [
  {
    category: "Core Features",
    items: [
      { name: "API Access", starter: true, professional: true, enterprise: true },
      { name: "Custom Domain", starter: false, professional: true, enterprise: true },
      { name: "Advanced Analytics", starter: false, professional: true, enterprise: true },
      { name: "Team Collaboration", starter: "5 users", professional: "25 users", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      { name: "SSL Encryption", starter: true, professional: true, enterprise: true },
      { name: "Two-Factor Auth", starter: true, professional: true, enterprise: true },
      { name: "SSO/SAML", starter: false, professional: false, enterprise: true },
      { name: "SOC 2 Compliance", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Email Support", starter: true, professional: true, enterprise: true },
      { name: "Priority Support", starter: false, professional: true, enterprise: true },
      { name: "Phone Support", starter: false, professional: false, enterprise: true },
      { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Advanced Features",
    items: [
      { name: "API Rate Limit", starter: "1,000/day", professional: "10,000/day", enterprise: "Unlimited" },
      { name: "Data Retention", starter: "30 days", professional: "1 year", enterprise: "Unlimited" },
      { name: "Custom Integrations", starter: false, professional: "Limited", enterprise: true },
      { name: "White Label", starter: false, professional: false, enterprise: true },
    ],
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-green-600 dark:text-green-500" />
    ) : (
      <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
}

export function FeatureComparison() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Compare Plans in Detail
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See exactly what&apos;s included in each plan
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-xl border">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <div className="inline-flex flex-col">
                      <span>Professional</span>
                      <span className="mt-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-muted/30">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-sm font-semibold text-foreground"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="hover:bg-muted/20">
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.name}</td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.starter} />
                        </td>
                        <td className="bg-primary/5 px-6 py-4 text-center">
                          <FeatureCell value={item.professional} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
