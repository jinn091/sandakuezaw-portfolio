"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Instagram,
    Mail,
    ArrowDown,
    ExternalLink,
    Facebook,
    Gift,
    Heart,
} from "lucide-react";

const isBirthday = () => {
    const today = new Date();
    return today.getMonth() === 9 && today.getDate() === 5;
};

const artworks = [
    {
        title: "Ethereal Landscapes",
        image: "/artworks/artwork-1.jpg",
        description:
            "A serene and captivating collection exploring the delicate intersection of nature, dreams, and imagination.",
        category: "Digital Art",
        year: "2024",
    },
    {
        title: "The Enchantress of Light",
        image: "/artworks/artwork-2.jpg",
        description:
            "A woman bathed in mystical light gazes upward as glowing green and blue orbs swirl around her, giving her an ethereal, otherworldly aura.",
        category: "Digital Art",
        year: "2024",
    },
    {
        title: "Beyond the Frame",
        image: "/artworks/artwork-3.jpg",
        description:
            "A mysterious figure emerges from a golden frame, reaching out with lifelike hands as if breaking free from the artwork into reality.",
        category: "Digital Art",
        year: "2023",
    },
    {
        title: "The Occupants",
        image: "/artworks/artwork-4.jpg",
        description:
            "A chilling movie poster showing a glowing house under a dark sky, watched by a giant, unblinking eye — hinting at something sinister that’s always watching.",
        category: "Digital Art",
        year: "2023",
    },
    {
        title: "Spanish Villa",
        image: "/artworks/artwork-5.jpg",
        description:
            "A suspenseful film poster showing a group of intense faces above a sunlit Spanish town, hinting at hidden motives and a dark secret lurking behind the villa’s beauty.",
        category: "Digital Art",
        year: "2023",
    },
    {
        title: "Shatter",
        image: "/artworks/artwork-6.jpg",
        description:
            "A sleek, futuristic title design with glowing blue light and fractured text, hinting at a digital world on the brink of collapse — “coming soon to a computer near you.”",
        category: "Digital Art",
        year: "2023",
    },
];

const socials = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/angry_jel/?fbclid=IwY2xjawMx6dpleHRuA2FlbQIxMABicmlkETFTdEJVUEd2VU1PTXN3Y09sAR4YsBZztp4Xhw7sYEzaT4hrahklrPbhpaLIj7K2IEmSv5yRPEmpBpjnk2NbNw_aem_Sno0xJuYjR0apDjPflPY6A#",
        icon: Instagram,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/sandakue.zaw.2025",
        icon: Facebook,
    },
    {
        name: "Email",
        url: "mailto:hello@sandakuezaw.com",
        icon: Mail,
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {isBirthday() && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white py-4 px-4 text-center overflow-hidden sticky top-0 z-50"
                >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                        <Gift className="w-6 h-6 animate-bounce" />
                        <span className="text-lg font-semibold">
                            🎉 Happy Birthday, Sandakuezaw! 🎂 Wishing you a
                            year filled with creativity and inspiration!
                        </span>
                        <Heart className="w-6 h-6 animate-pulse text-pink-200" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                        <div className="absolute top-4 right-8 w-1 h-1 bg-yellow-200 rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-3 left-12 w-1.5 h-1.5 bg-pink-200 rounded-full animate-ping delay-700"></div>
                        <div className="absolute bottom-2 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-500"></div>
                    </div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/abstract-artistic-background-with-soft-rose-and-pi.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="relative inline-block mb-6">
                            <Image
                                src="/profile-2.jpg?1"
                                alt="Sandakuezaw"
                                width={400}
                                height={400}
                                className="rounded-xl border-4 border-rose-200 shadow-2xl object-cover"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="text-4xl md:text-8xl font-bold text-gray-900 mb-6 text-balance"
                    >
                        Sandakuezaw
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed"
                    >
                        Art Designer crafting peaceful, modern visuals that
                        bridge the gap between dreams and reality
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 bg-transparent text-gray-700 font-medium"
                            >
                                <social.icon className="w-5 h-5" />
                                {social.name}
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="flex flex-col items-center gap-2 text-gray-500"
                    >
                        <span className="text-sm font-medium">
                            Explore My Work
                        </span>
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                            Featured Works
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
                            A curated selection of my latest projects, each
                            telling a unique story through visual design
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artworks.map((artwork, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={
                                                artwork.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={artwork.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 text-gray-900 rounded-full mb-2">
                                                {artwork.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-500 transition-colors">
                                                {artwork.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 font-medium">
                                                {artwork.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-pretty leading-relaxed">
                                            {artwork.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 bg-rose-50/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                                About My Journey
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 text-pretty leading-relaxed">
                                I believe in the power of visual storytelling to
                                create moments of peace and reflection in our
                                fast-paced world. My work explores the delicate
                                balance between minimalism and emotion, crafting
                                designs that speak to the soul.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed">
                                Each piece is a meditation on beauty,
                                simplicity, and the profound connections we
                                share with our environment and each other.
                            </p>
                            <button className="group flex items-center px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors duration-300">
                                Let&apos;s Collaborate
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/experience-cover.jpg"
                                    alt="Sandakuezaw's workspace"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-2xl font-bold text-white">
                                    5+
                                </span>
                            </div>
                            <div className="absolute -top-6 -left-6 text-sm text-gray-600 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-200">
                                Years of Experience
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-gray-500 mb-4">
                            © 2024 Sandakuezaw. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400">
                            Crafted with passion and attention to detail
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}
