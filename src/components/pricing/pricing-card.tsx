import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  isAnnual: boolean;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export function PricingCard({
  name,
  description,
  monthlyPrice,
  annualPrice,
  isAnnual,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) {
  const price = isAnnual ? annualPrice : monthlyPrice;
  const billingCycle = isAnnual ? "year" : "month";

  return (
    <Card
      className={`pricing-card ${isPopular ? "pricing-card-popular" : ""}`}
    >
      {isPopular && (
        <div className="pricing-popular-badge">
          <Sparkles className="h-4 w-4" />
          <span>Most Popular</span>
        </div>
      )}

      <CardHeader className={isPopular ? "pt-8" : ""}>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="pricing-amount">${price}</span>
            <span className="pricing-cycle">/{billingCycle}</span>
          </div>
          {isAnnual && (
            <p className="mt-2 text-sm text-muted-foreground">
              Billed annually (${annualPrice}/year)
            </p>
          )}
          {!isAnnual && monthlyPrice > 0 && (
            <p className="mt-2 text-sm text-muted-foreground">Billed monthly</p>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-grow flex-col">
        <Button
          size="lg"
          className={`w-full ${isPopular ? "shadow-lg" : ""}`}
          variant={isPopular ? "default" : "outline"}
          asChild
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>

        <div className="mt-8 space-y-4">
          <p className="text-sm font-semibold">What&apos;s included:</p>
          <ul className="pricing-features-list">
            {features.map((feature, index) => (
              <li key={index} className="pricing-feature-item">
                <Check className="pricing-feature-icon" />
                <span className="pricing-feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
