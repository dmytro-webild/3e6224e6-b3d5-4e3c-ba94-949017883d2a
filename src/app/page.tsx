"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import SplitAbout from "@/components/sections/about/SplitAbout";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function LandingPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Ascend Digital Co."
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Why Us", id: "whyus" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Free Audit",            onClick: scrollToContact
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="We Don't Just Build Your Digital Presence. We Make It Work."
          description="Website design, AI automation, and social media management — all under one roof. Trusted by businesses across Lahore, USA, and UK."
          buttons={[
            {
              text: "Get Your Free Audit",              onClick: scrollToContact
            },
            {
              text: "See Our Services",              onClick: scrollToServices
            }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=1"
          imageAlt="Ascend Digital Co. Agency Workspace"
          showDimOverlay={true}
          ariaLabel="Hero section - Ascend Digital Co."
        />
      </div>

      <div id="ticker" data-section="ticker">
        <FeatureCardMedia
          title="Website Design · AI Automation · Social Media · WhatsApp Bots · Lead Generation · Digital Growth · Lahore · USA · UK ·"
          description=""
          features={[
            {
              id: "ticker-1",              title: "Website Design",              description: "Professional websites that rank on Google",              tag: "Service",              imageSrc: "http://img.b2bpic.net/free-psd/travel-concept-web-template_23-2149181487.jpg?_wi=1",              imageAlt: "modern responsive website design mockup"
            },
            {
              id: "ticker-2",              title: "AI Automation",              description: "24/7 booking systems and WhatsApp bots",              tag: "Service",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-notebook-displaying-ai-machine-learning-algorithms_482257-122159.jpg?_wi=1",              imageAlt: "AI automation chatbot interface dashboard"
            },
            {
              id: "ticker-3",              title: "Social Media",              description: "Consistent high-quality content strategy",              tag: "Service",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-keyboard-laptop_1156-42.jpg?_wi=1",              imageAlt: "social media content management platform"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="auto"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Built From the Ground Up. Just Like Your Business."
          description="Ascend Digital Co. was built by people who understand what it feels like to run a business with no digital presence and watch customers go elsewhere. We started in the field — working directly with clinics, restaurants, schools, and service businesses — before we ever called ourselves an agency. That means we don't just deliver websites and social media posts. We deliver systems that actually bring in customers. We've been in the trenches of digital business for years, not months. Every service we offer has been battle-tested on real businesses before it was ever sold to a client."
          tag="Our Story"
          buttons={[
            {
              text: "Work With Us",              onClick: scrollToContact
            }
          ]}
          bulletPoints={[
            {
              title: "Real Field Experience",              description: "Years of hands-on work with real businesses before launching the agency"
            },
            {
              title: "Battle-Tested Services",              description: "Every service is proven to deliver results for our clients"
            },
            {
              title: "Multiple Countries",              description: "Serving businesses across Lahore, USA, and UK"
            }
          ]}
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=2"
          imageAlt="Ascend Digital Co. Team"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          title="What We Do"
          description="Complete digital solutions tailored for your business"
          features={[
            {
              id: "service-1",              title: "Website Design",              description: "Professional websites that rank on Google, load fast, and turn visitors into customers. Built for clinics, schools, restaurants, and service businesses.",              tag: "Starting from PKR 35,000 / $300",              imageSrc: "http://img.b2bpic.net/free-psd/travel-concept-web-template_23-2149181487.jpg?_wi=2",              imageAlt: "modern responsive website design mockup",              buttons: [
                {
                  text: "Learn More"
                }
              ]
            },
            {
              id: "service-2",              title: "AI Automation",              description: "AI booking systems and WhatsApp bots that handle appointments, reminders, and customer queries 24/7 — so you never miss a lead while you're busy.",              tag: "Setup from PKR 40,000 / $400 + retainer",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-notebook-displaying-ai-machine-learning-algorithms_482257-122159.jpg?_wi=2",              imageAlt: "AI automation chatbot interface dashboard",              buttons: [
                {
                  text: "Learn More"
                }
              ]
            },
            {
              id: "service-3",              title: "Social Media Management",              description: "Consistent high-quality content on Instagram, Facebook, and TikTok. We handle everything — you focus on running your business.",              tag: "Starting from PKR 20,000 / $200 per month",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-keyboard-laptop_1156-42.jpg?_wi=2",              imageAlt: "social media content management platform",              buttons: [
                {
                  text: "Learn More"
                }
              ]
            }
          ]}
          textboxLayout="split"
          useInvertedBackground={false}
          animationType="blur-reveal"
        />
      </div>

      <div id="whyus" data-section="whyus">
        <FeatureCardMedia
          title="Why Businesses Choose Ascend Over Agencies"
          description="Proven advantages that set us apart"
          features={[
            {
              id: "why-1",              title: "One Team, Everything Handled",              description: "No juggling 3 separate vendors. Website, automation, and social media — all managed by one team that knows your business inside out.",              tag: "Integrated Approach",              imageSrc: "http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=3",              imageAlt: "dark modern agency office workspace"
            },
            {
              id: "why-2",              title: "AI-Powered, Human-Led",              description: "We use cutting-edge AI tools to deliver faster, smarter work — but every strategy is built and reviewed by a real human who understands your market.",              tag: "Smart Technology",              imageSrc: "http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=4",              imageAlt: "dark modern agency office workspace"
            },
            {
              id: "why-3",              title: "Results First, Always",              description: "We don't charge for activity. We charge for outcomes. Every service we sell has a measurable impact on your bookings, traffic, or revenue.",              tag: "Performance Focused",              imageSrc: "http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=5",              imageAlt: "dark modern agency office workspace"
            },
            {
              id: "why-4",              title: "Lahore Roots, Global Reach",              description: "We work with businesses in Lahore, USA, and UK. We understand local markets and international standards — and we deliver both.",              tag: "Multicultural Expertise",              imageSrc: "http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=6",              imageAlt: "dark modern agency office workspace"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="scale-rotate"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Proven Track Record"
          description="Numbers that speak for themselves"
          metrics={[
            {
              id: "metric-1",              value: "150+",              description: "Projects Delivered"
            },
            {
              id: "metric-2",              value: "8+",              description: "Years in the Field"
            },
            {
              id: "metric-3",              value: "3",              description: "Countries Served"
            },
            {
              id: "metric-4",              value: "98%",              description: "Client Retention"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Grow?"
          title="Ready to Grow? Let's Talk."
          description="Tell us about your business and we'll send you a free audit within 24 hours. No cost, no commitment."
          buttons={[
            {
              text: "💬 Message Us on WhatsApp — 03312881111",              href: "https://wa.me/923312881111?text=Hi%20Ascend%20Digital%20Co.%2C%20I%20found%20your%20website%20and%20I'd%20like%20to%20get%20a%20free%20audit%20for%20my%20business."
            }
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "animated-grid"
          }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/nice-business-desk-black-background_24972-1179.jpg?_wi=7"
          imageAlt="Ascend Digital Co. Footer Background"
          logoText="Ascend Digital Co."
          copyrightText="© 2026 Ascend Digital Co. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                {
                  label: "Website Design",                  href: "#services"
                },
                {
                  label: "AI Automation",                  href: "#services"
                },
                {
                  label: "Social Media",                  href: "#services"
                }
              ]
            },
            {
              title: "Company",              items: [
                {
                  label: "About Us",                  href: "#about"
                },
                {
                  label: "Why Choose Us",                  href: "#whyus"
                },
                {
                  label: "Contact",                  href: "#contact"
                }
              ]
            },
            {
              title: "Contact",              items: [
                {
                  label: "📱 WhatsApp: 03312881111",                  href: "https://wa.me/923312881111"
                },
                {
                  label: "📧 Email: ascendigitalco@gmail.com",                  href: "mailto:ascendigitalco@gmail.com"
                },
                {
                  label: "Instagram",                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}