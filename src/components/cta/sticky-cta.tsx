"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, Calendar } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
        <div className="border-t bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-2xl backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4 py-4">
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold md:text-base">
                      Start your free trial today
                    </p>
                    <p className="text-xs opacity-90 md:text-sm">
                      No credit card required • 14-day trial • Cancel anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="hidden font-semibold sm:flex"
                  asChild
                >
                  <a href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hidden border-white bg-transparent font-semibold text-white hover:bg-white hover:text-primary md:flex"
                  onClick={() => setShowDemoModal(true)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Demo
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="font-semibold sm:hidden"
                  asChild
                >
                  <a href="/signup">Sign Up</a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={handleDismiss}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
}
