"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/landing/navigation";
import { BackgroundAtmosphere } from "@/components/landing/background-atmosphere";
import { Footer } from "@/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  Globe2,
  Building2,
  Clock,
  MessageSquare,
  User,
  Briefcase,
  FileText,
} from "lucide-react";
import InteractiveGlobe from "@/components/contact/InteractiveGlobe";

const offices = [
  {
    city: "New York",
    country: "USA - HQ",
    countryCode: "US",
    address: "450 Lexington Ave",
    address2: "New York, NY 10017",
    phone: "+1 (973) 555-0100",
    email: "connect@aumbit.io",
    timezone: "GMT-4",
  },
  {
    city: "New Jersey",
    country: "USA",
    countryCode: "US",
    address: "200 Greene St",
    address2: "Jersey City, NJ 07311",
    phone: "+1 (973) 555-0100",
    email: "connect@aumbit.io",
    timezone: "GMT-4",
  },
  {
    city: "London",
    country: "UK",
    countryCode: "GB",
    address: "51 Eastcheap",
    address2: "London, England EC3M 1DT",
    phone: "+44 20 7946 0000",
    email: "connect@aumbit.io",
    timezone: "GMT+1",
  },
  {
    city: "Bengaluru",
    country: "India",
    countryCode: "IN",
    address: "Bellandur, No. 78/9, Outer Ring Road, Bellandur Village, Varthur, Hobli",
    address2: "Bangalore, KA 560103",
    phone: "+91 80 4242 4242",
    email: "connect@aumbit.io",
    timezone: "GMT+5:30",
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
          });
        }, 3000);
      } else {
        console.error("Form submission error:", result.error);
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-900 overflow-x-hidden">
      <BackgroundAtmosphere />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300/80">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Connect With Aumbit
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Whether you have a question about our products, need technical
            support, or want to explore partnership opportunities, we're here to
            help.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Form and Globe Row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden h-full">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-white/60 mb-8">
                    Fill out the form below and our team will respond within 24
                    hours.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12 flex-1 flex flex-col justify-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-4">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-white/60">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 flex-1 flex flex-col"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-white/80 text-sm flex items-center gap-2"
                          >
                            <User className="w-3 h-3" />
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            disabled={isLoading}
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-white/80 text-sm flex items-center gap-2"
                          >
                            <Mail className="w-3 h-3" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={isLoading}
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="text-white/80 text-sm flex items-center gap-2"
                          >
                            <Briefcase className="w-3 h-3" />
                            Company
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            disabled={isLoading}
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="subject"
                            className="text-white/80 text-sm flex items-center gap-2"
                          >
                            <FileText className="w-3 h-3" />
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            disabled={isLoading}
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 flex-1">
                        <Label
                          htmlFor="message"
                          className="text-white/80 text-sm flex items-center gap-2"
                        >
                          <MessageSquare className="w-3 h-3" />
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          disabled={isLoading}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 min-h-[150px] flex-1 transition-all resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                      >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 -top-[2px] -bottom-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                        {/* Button content */}
                        <div className="relative z-10 flex items-center justify-center">
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              <span>Send Message</span>
                            </>
                          )}
                        </div>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Globe */}
            <div className="order-1 lg:order-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden h-full">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-blue-400" />
                  Global Presence
                </h3>
                <div className="h-[500px]">
                  <InteractiveGlobe />
                </div>
              </div>
            </div>
          </div>

          {/* Office Cards Section */}
          <div className="space-y-6 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-700/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Aumbit Global Offices
              </h3>
              <p className="text-white/60">
                Connect with our teams around the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    selectedOffice === index
                      ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
                      : "border-slate-700/50 hover:border-slate-600/50"
                  }`}
                  onClick={() =>
                    setSelectedOffice(index === selectedOffice ? null : index)
                  }
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {office.city}
                          </h4>
                          <p className="text-sm text-white/60">
                            {office.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/40">
                      <Clock className="w-3 h-3" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-white/70">
                        <p>{office.address}</p>
                        <p>{office.address2}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-white/70 hover:text-blue-400 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white/70 hover:text-blue-400 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="border-t border-slate-700/50 py-16 px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 mb-4">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Call Us</h4>
              <p className="text-white/80 text-base">Mon-Fri 9am to 6pm</p>
              <a
                href="tel:+19735550100"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg block mt-2"
              >
                +1 (973) 555-0100
              </a>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 mb-4">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Email Us</h4>
              <p className="text-white/80 text-base">
                We reply within 24 hours
              </p>
              <a
                href="mailto:contact@aumbit.io"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg block mt-2"
              >
                connect@aumbit.io
              </a>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 mb-4">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Visit Us</h4>
              <p className="text-white/80 text-base">4 Global Offices</p>
              <p className="text-blue-400 font-semibold text-lg mt-2">
                USA, UK & India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
