import { workExperience } from '@/data';
import React from 'react'
import { Button } from './ui/MovingBorder';

const Experience = () => {
    return (
        <div className="py-20 overflow-hidden" id="experience">
            <h1 className="heading">
                My
                <span className="text-purple"> work experience</span>
            </h1>
            <div className="mt-12 flex gap-6 overflow-x-auto overflow-y-hidden pb-4 px-1 scroll-smooth snap-x snap-mandatory scrollbar-hide">
                {workExperience.map((card) => (
                    <div
                        key={card.id}
                        className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[420px] lg:w-[460px] snap-center"
                    >
                        <Button
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            className="w-full h-full min-h-[200px] text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center p-4 py-6 md:p-5 lg:p-8 gap-4">
                                <img
                                    src={card.thumbnail}
                                    alt=""
                                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover flex-shrink-0"
                                />
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h2 className="text-start text-lg md:text-xl font-bold leading-tight">
                                            {card.title}
                                        </h2>
                                        {card.timeline && (
                                            <span className="text-xs font-medium text-purple/90 bg-purple/10 px-2 py-1 rounded-md whitespace-nowrap">
                                                {card.timeline}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-start text-white-100 text-sm md:text-base font-medium leading-snug line-clamp-4">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                    </div>
                ))}
            </div>
            <p className="text-center text-white-200/70 text-sm mt-4">Scroll horizontally to explore</p>
        </div>
    );
}

export default Experience
