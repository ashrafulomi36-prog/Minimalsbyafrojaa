import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import { Phone, Instagram, Facebook, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Minimals By Afroja. Order custom cakes, ice cream, and brownies in Bangladesh via WhatsApp, Facebook, or Instagram.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <div className="bg-secondary py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-body text-xs font-semibold text-accent tracking-widest uppercase mb-3 block">
            We&apos;d love to hear from you
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-text">
            Contact Us
          </h1>
          <p className="section-subtitle mt-4 max-w-lg mx-auto">
            Have a question or want to place a custom order? Reach out to us
            directly — we respond quickly!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-text mb-6">
              Reach us on
            </h2>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801879906873"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-green-50 border border-green-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              aria-label="Contact via WhatsApp"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="font-display text-base font-semibold text-text">
                  01879906873
                </p>
                <p className="font-body text-xs text-green-600 mt-0.5">
                  Tap to chat →
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801879906873"
              className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Call us"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                  Phone
                </p>
                <p className="font-display text-base font-semibold text-text">
                  01879906873
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61569368551164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-blue-50 border border-blue-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Visit our Facebook page"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                  Facebook
                </p>
                <p className="font-display text-base font-semibold text-text">
                  Minimals By Afroja
                </p>
                <p className="font-body text-xs text-blue-600 mt-0.5">
                  Visit page →
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/minimalsbyafroja/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-pink-50 border border-pink-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Follow on Instagram"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                  Instagram
                </p>
                <p className="font-display text-base font-semibold text-text">
                  @minimalsbyafroja
                </p>
                <p className="font-body text-xs text-pink-600 mt-0.5">
                  Follow us →
                </p>
              </div>
            </a>
          </div>

          {/* Right side info */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-text mb-6">
              Good to know
            </h2>

            <div className="bg-secondary rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-text">
                    Location
                  </p>
                  <p className="font-body text-sm text-text-muted mt-1">
                    Bangladesh — we deliver to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-text">
                    Order Lead Time
                  </p>
                  <p className="font-body text-sm text-text-muted mt-1">
                    Please place your order at least 2–3 days in advance to
                    ensure availability and freshness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">💬</span>
                <div>
                  <p className="font-body text-sm font-semibold text-text">
                    How to Order
                  </p>
                  <p className="font-body text-sm text-text-muted mt-1">
                    Browse our products, choose your item, fill the order form,
                    and you&apos;ll be connected to us via WhatsApp instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🎨</span>
                <div>
                  <p className="font-body text-sm font-semibold text-text">
                    Custom Orders
                  </p>
                  <p className="font-body text-sm text-text-muted mt-1">
                    Have a specific design in mind? Message us on WhatsApp and
                    we&apos;ll bring your vision to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-2xl p-6 text-white">
              <h3 className="font-display text-lg font-semibold mb-2">
                Ready to order?
              </h3>
              <p className="font-body text-sm text-white/80 mb-4">
                Browse our menu and place your order directly. We respond within
                minutes on WhatsApp.
              </p>
              <a
                href="/cakes"
                className="inline-flex items-center gap-2 bg-white text-accent px-5 py-2.5 rounded-xl font-body font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Browse Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
