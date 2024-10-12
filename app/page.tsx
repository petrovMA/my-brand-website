"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Send,
  MessageCircle,
  Bot,
  Globe,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import translations from "@/app/translations.json";

const AnimatedCard = ({ children, isProject = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: isProject ? { opacity: 0, x: 100 } : { opacity: 0, y: 50 },
        visible: isProject ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default function Component() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  const t = (key: string) => {
    return translations?.[language]?.[key] ?? '';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-400">
            {t("title")}
          </a>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-teal-400 transition-colors">
              {t("about")}
            </a>
            <a
              href="#portfolio"
              className="hover:text-teal-400 transition-colors"
            >
              {t("portfolio")}
            </a>
            <a
              href="#testimonials"
              className="hover:text-teal-400 transition-colors"
            >
              {t("testimonials")}
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6985678-fIjLr8wGrq6PNeZoek9qPnVSNuCtdJ.jpg"
            alt="AI Technology Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            {t("heroButton")}
            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("aboutTitle")}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9C%D0%B8%D1%88%D0%B0-Bc8SeUyq2rwtmknLYXIUsgDQq7GkBG.jpg"
                alt="AI Bot Developer Portrait"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                {t("aboutParagraph1")}
              </p>
              <p className="text-lg mb-4">
                {t("aboutParagraph2")}
              </p>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
              >
                {t("aboutButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("portfolioTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("project1Title"),
                description: t("project1Description"),
                icon: <Bot className="h-12 w-12 text-purple-400 mb-4" />,                
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/customer-service-bot.jpg",
                color: "purple",
              },
              {
                title: t("project2Title"),
                description: t("project2Description"),
                icon: <Globe className="h-12 w-12 text-green-400 mb-4" />,                
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/translation-bot.jpg",
                color: "green",
              },
              {
                title: t("project3Title"),
                description: t("project3Description"),
                icon: <Newspaper className="h-12 w-12 text-orange-400 mb-4" />,                
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/news-bot.jpg",
                color: "orange",
              },
            ].map((project, index) => (
              <AnimatedCard key={index} isProject={true}>
                <Card
                  className={`bg-gray-800 border-gray-700 overflow-hidden group hover:bg-${project.color}-900 transition-colors duration-300`}
                >
                  <CardContent className="p-6">
                    {project.icon}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    <h3
                      className={`text-xl font-semibold mb-2 text-${project.color}-400`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Button
                      variant="link"
                      className={`text-${project.color}-400 hover:text-${project.color}-300 p-0 group`}
                    >
                      {t("viewCaseStudy")}
                      <ArrowRight
                        className={`ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-${project.color}-400`}
                      />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("testimonialsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: t("testimonial1Quote"),
                name: "John Doe",
                title: t("testimonial1Title"),
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/client1.jpg",
              },
              {
                quote: t("testimonial2Quote"),
                name: "Jane Smith",
                title: t("testimonial2Title"),
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/client2.jpg",
              },
              {
                quote: t("testimonial3Quote"),
                name: "Alex Johnson",
                title: t("testimonial3Title"),
                image:
                  "https://uxwjmfbvxgqpjgqxnbwb.supabase.co/storage/v1/object/public/public-images/client3.jpg",
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index}>
                <Card className="bg-gray-700 border-gray-600 hover:bg-blue-900 transition-colors duration-300">
                  <CardContent className="p-6">
                    <p className="italic mb-4 text-blue-200">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-400">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("contactTitle")}
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder={t("contactNamePlaceholder")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Input
                type="email"
                placeholder={t("contactEmailPlaceholder")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Textarea
                placeholder={t("contactMessagePlaceholder")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                {t("contactButton")}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="mb-2">
                {t("contactAdditionalInfo")}
              </p>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("chatOnTelegram")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            {t("footerText")}
          </p>
        </div>
      </footer>
    </div>
  );
}
