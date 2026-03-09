'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const TECH_PILLS = ['Java', 'Spring Boot', 'Laravel', 'Node.js', 'PostgreSQL', 'AWS']

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative overflow-hidden">
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center pointer-events-none"
                aria-hidden
            >
                <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_30%,black)]" />
            </div>

            <div className="relative z-10 flex justify-center min-h-[85vh] items-center px-4 sm:px-6">
                <div className="w-full max-w-3xl flex flex-col items-center text-center">
                    <p className="text-sm md:text-base text-white-200/90 uppercase tracking-[0.2em] mb-3">
                        Senior Backend Engineer · 8+ years
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                        Hi, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-purple via-purple to-blue-100 bg-clip-text text-transparent">
                            Min Thiha
                        </span>
                    </h1>
                    <div className="mb-6">
                        <TextGenerateEffect
                            className="text-lg sm:text-xl md:text-2xl text-white-200 font-medium max-w-2xl mx-auto"
                            words="I build production systems in Java & backend—stable under load."
                        />
                    </div>
                    <p className="text-white-200/90 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8">
                        Core expertise in <strong className="text-white font-semibold">Java & Backend Systems</strong>. Shipped apps across AgriTech, E-commerce & Video. I write maintainable, typed code and design for scale.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {TECH_PILLS.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/5 text-white-200 border border-white/10 hover:border-purple/50 hover:text-purple transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="group">
                        <MagicButton
                            title="See my work"
                            icon={<FaLocationArrow className="group-hover:translate-x-1 transition-transform" />}
                            position="right"
                            handleClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
