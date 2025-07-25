import React, { useEffect, useRef } from 'react';
import WorkCard from './WorkCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { preloadImages } from '../utils';

gsap.registerPlugin(ScrollTrigger);

interface WorkCardData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  theme: 'blue' | 'orange';
}

const workCardsData: WorkCardData[] = [
    {
      id: 1,
      title: 'Featured Project Showcase',
      description: 'A deep dive into our collaboration with a leading tech firm to redefine their digital event presence.',
      imageSrc: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80',
      tags: ['Events', 'Corporate'],
      theme: 'orange',
    },
    {
      id: 2,
      title: 'Brand Identity Overhaul',
      description: 'We crafted a new, vibrant brand identity for a startup, capturing their innovative spirit.',
      imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80',
      tags: ['Branding', 'Startups'],
      theme: 'blue',
    },
    {
      id: 3,
      title: 'Interactive Web Experience',
      description: 'An immersive website designed to engage users and drive conversions for an e-commerce client.',
      imageSrc: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&q=80',
      tags: ['Web', 'E-commerce'],
      theme: 'orange',
    },
    {
      id: 4,
      title: 'National Marketing Campaign',
      description: 'Spearheaded a multi-platform campaign that resulted in a 200% increase in customer engagement.',
      imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
      tags: ['Marketing', 'Campaign'],
      theme: 'blue',
    },
    {
      id: 5,
      title: 'E-commerce Platform Launch',
      description: 'Successfully launched a new e-commerce platform, leading to a 150% increase in online sales.',
      imageSrc: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80',
      tags: ['E-commerce', 'Retail'],
      theme: 'orange',
    },
    {
      id: 6,
      title: 'Mobile App Redesign',
      description: 'Redesigned a popular mobile app, improving user retention by 40% and engagement by 60%.',
      imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80',
      tags: ['Mobile', 'UX/UI'],
      theme: 'blue',
    },
];

const WorkAnimation: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let observer: IntersectionObserver;

    const setupScroll = () => {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      const scrollFn = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);

      const gridItems = gridRef.current?.querySelectorAll('.grid__item');

      if (gridItems) {
        // Preload images for all cards
        preloadImages('.work-card__image').then(() => {
          document.body.classList.remove('loading');

          gridItems.forEach((item, index) => {
            // Animate each card
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });

            tl.set(item, {
            //   transformOrigin: 'center center',
              transformOrigin: `${gsap.utils.random(0,1) > 0.5 ? 0 : 100}% 100%`
            })
            .fromTo(item, 
              { opacity: 0, scale: 1 },
              { ease: 'none', opacity: 1, scale: 1 }
            )
            .to(item, {
              ease: 'none',
              opacity: 0,
              scale: 0.3,
            }); // Add a delay before starting the fade-out
          });
        });
      }
    };

    const cleanupScroll = () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };

    if (sectionRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setupScroll();
          } else {
            cleanupScroll();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(sectionRef.current);
    }

    return () => {
      cleanupScroll();
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="our-work-section work-animation">
      <div className="container">
        <div className="our-work-section__header">
          <div className='our-work-section__header-content'>
            <h2 className="our-work-section__title">Our Work.</h2>
            <p className="our-work-section__description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className='our-work-section__header-card'>
            <WorkCard
              title="Featured Project"
              description="A showcase of our latest and greatest work, highlighting our expertise and creativity."
              imageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"
              tags={['Featured', 'Project']}
              theme={'orange'}
            />
          </div>
        </div>
        <div ref={gridRef} className="work-animation__grid">
            {workCardsData.map((card, index) => {
                // Add a class for staggering and set a random margin top for a masonry effect
                const rowNo = index % 2 ;
                const isLeft = index % 2 === 0;
                const rightColumn = isLeft ? 0 : 80;
                const xSpacing = Math.floor(Math.random() * 10) * 15;
                const ySpacing = rowNo * 40   + rightColumn
                return (
                <div key={card.id} className="grid__item" style={{ marginTop: `${ySpacing}px`, marginLeft: `${xSpacing}px`, marginRight: `${xSpacing}px` }}>
                    <WorkCard {...card} />
                </div>
                );
            })}
        </div>
        <div className="our-work-section__cta-container">
            <button className="our-work-section__cta-button">
            Let's Work Together
            </button>
        </div>
      </div>
    </section>
  );
};

export default WorkAnimation;
