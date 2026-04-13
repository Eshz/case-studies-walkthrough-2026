/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from './types';

export default function App() {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const currentCaseStudy = CASE_STUDIES[currentCaseStudyIndex];
  const activeSection = currentCaseStudy.sections[activeIndex];
  const totalSections = currentCaseStudy.sections.length;

  const rotateY = useMemo(() => {
    return -activeIndex * (360 / totalSections);
  }, [activeIndex, totalSections]);

  const navigateCarousel = (direction: 'next' | 'prev') => {
    setActiveIndex((current) => {
      if (direction === 'next') {
        return (current + 1) % totalSections;
      }

      return (current - 1 + totalSections) % totalSections;
    });
  };

  const handleCaseStudyChange = (index: number) => {
    setCurrentCaseStudyIndex(index);
    setActiveIndex(0);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (previewImage || isDropdownOpen) {
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateCarousel('next');
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateCarousel('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, previewImage, totalSections]);

  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] text-[#1a1a1a] overflow-hidden font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-72 border-r border-black/5 flex flex-col z-20 bg-white">
        <div className="p-10 relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 group"
          >
            <h1 className="text-lg font-semibold tracking-tight">{currentCaseStudy.name}</h1>
            <Icons.ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          <p className="text-xs text-gray-400 mt-1">{currentCaseStudy.client}</p>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDropdownOpen(false)} 
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-10 top-24 w-52 bg-white border border-black/5 shadow-xl rounded-xl p-2 z-50"
                >
                  {CASE_STUDIES.map((cs, index) => (
                    <button
                      key={cs.id}
                      onClick={() => handleCaseStudyChange(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                        currentCaseStudyIndex === index 
                          ? 'bg-black text-white' 
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      {cs.name}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 space-y-1">
          {currentCaseStudy.sections.map((section, index) => {
            const isActive = activeIndex === index;
            const number = (index + 1).toString().padStart(2, '0');

            return (
              <button
                key={section.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center gap-6 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  isActive 
                    ? 'text-black font-medium' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span className={`text-[10px] font-mono tracking-tighter ${
                  isActive ? 'text-black' : 'text-gray-300 group-hover:text-gray-400'
                }`}>
                  {number}
                </span>
                <div className="text-left">
                  <h3 className="text-sm leading-none">{section.navTitle ?? section.title}</h3>
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="active-dot"
                    className="ml-auto w-1 h-1 rounded-full bg-black"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-10 border-t border-black/5">
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Eshchar Zychlinski</p>
        </div>
      </aside>

      {/* Main Content / Carousel Area */}
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Made for Brandlight Header */}
        <div className="absolute top-10 right-10 flex items-center gap-3 z-40">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Made for Brandlight</span>
          <div className="w-10 h-10 bg-[#000830] rounded-xl flex items-center justify-center shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Recreating the Brandlight logo from the attachment */}
              <path d="M12 4V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 15V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12H9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 12H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 7L10 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 14L17 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17 7L14 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 14L7 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Background Subtle Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        {/* Carousel Container */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-8 perspective-[2000px]">
          <motion.div
            key={currentCaseStudy.id}
            animate={{ rotateY }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative h-[360px] w-[640px]"
          >
            {currentCaseStudy.sections.map((section, index) => {
              const angle = index * (360 / totalSections);
              const isActive = activeIndex === index;

              return (
                <div
                  key={section.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `rotateY(${angle}deg) translateZ(800px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (isActive) {
                      setPreviewImage(section.image);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.8,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                    className="absolute inset-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
                  >
                    <div className={`relative h-full w-full ${section.imageBackgroundClassName ?? ''}`}>
                      <img
                        src={section.image}
                        alt={section.title}
                        className={`${section.imageClassName ?? 'h-full w-full'} ${section.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                        style={section.isLogo ? { imageRendering: 'auto' } : undefined}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {section.showTitle !== false && (
                      <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/80 via-35% to-transparent">
                        <motion.div
                          initial={false}
                          animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0.72 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <h2 className="text-2xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.75)]">{section.title}</h2>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Info Card (Bottom Right) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCaseStudy.id}-${activeSection.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-16 w-80 p-8 rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-black/5 z-30"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">Section {activeIndex + 1}</span>
            </div>
            <h4 className="text-base font-semibold mb-3">{activeSection.subtitle}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              {activeSection.description}
            </p>
            <button 
              onClick={() => setPreviewImage(activeSection.image)}
              className="mt-8 flex items-center gap-2 text-xs font-semibold group"
            >
              View Full Image 
              <Icons.Maximize2 size={14} className="transition-transform group-hover:scale-110" />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Pagination Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {currentCaseStudy.sections.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeIndex === i ? 'w-12 bg-black' : 'w-1.5 bg-black/10 hover:bg-black/20'
              }`}
            />
          ))}
        </div>
      </main>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 p-6 md:p-10"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-7xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={previewImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/35" />
              <div className="relative z-10 flex h-full w-full items-center justify-center p-6 md:p-10">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="block max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/10 p-3 text-black transition-colors hover:bg-black/20 md:right-6 md:top-6"
              >
                <Icons.X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
