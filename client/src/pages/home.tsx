import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Music,
  FileText,
  Mail,
  ExternalLink,
  ChevronDown,
  Globe,
  Headphones,
  GraduationCap,
  MapPin,
  Award,
} from "lucide-react";
import { SiSpotify, SiYoutube, SiInstagram, SiWhatsapp } from "react-icons/si";

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-amber-600/80 dark:text-amber-500/70 mb-4">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-stone-100 mb-6">
      {children}
    </h2>
  );
}

const NAV_ITEMS = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Festivals", href: "#festivals" },
  { label: "Education", href: "#education" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Khalil Briki Octet",
    role: "Bassist, Composer, Musical Director",
    description: "An eight-piece ensemble channeling the architectural convergence of Gnawa trance, Arabic-Andalusian modes, and Brazilian harmonic landscapes into a unified sonic architecture.",
    photos: [
      { src: "/images/project-octet-1.png", alt: "Octet ensemble on stage" },
      { src: "/images/project-octet-2.png", alt: "Upright bass close-up" },
      { src: "/images/project-octet-3.png", alt: "Rehearsal studio session" },
    ],
  },
  {
    title: "Swing Safado",
    role: "Bassist, Arranger",
    description: "Where swing meets the irreverence of Brazilian popular culture — a rhythmic dialogue between North American jazz tradition and Northeastern Brazilian groove.",
    photos: [
      { src: "/images/project-swing-1.png", alt: "Swing Safado at festival" },
      { src: "/images/project-swing-2.png", alt: "Intimate bar session" },
    ],
  },
  {
    title: "Igara Silva",
    role: "Bassist, Musical Director",
    description: "Collaborative artistry rooted in MPB and contemporary Brazilian song, shaping the harmonic foundation beneath poetic lyricism and cultural narrative.",
    photos: [
      { src: "/images/project-igara-1.png", alt: "MPB concert performance" },
      { src: "/images/project-igara-2.png", alt: "Recording studio session" },
    ],
  },
  {
    title: "Banda El Said",
    role: "Bassist, Oud Player, Composer",
    description: "A bridge between the Maghreb and South America — blending Arabic maqam with Afro-Brazilian percussion into a transnational sonic identity.",
    photos: [
      { src: "/images/project-elsaid-1.png", alt: "Arabic ensemble performance" },
      { src: "/images/project-elsaid-2.png", alt: "Gombri instrument detail" },
    ],
  },
  {
    title: "Brazilian Jazz Scene",
    role: "Bassist, Collaborator",
    description: "Active presence across Minas Gerais and São Paulo's vibrant jazz circuits, bringing polyrhythmic depth and cross-cultural fluency to each collaboration.",
    photos: [
      { src: "/images/project-jazz-1.png", alt: "Jazz concert in Brazilian venue" },
    ],
  },
];

const FESTIVALS = [
  { name: "Savassi Jazz Festival", detail: "Winner — DJ Category", highlight: true },
  { name: "Prêmio BDMG Instrumental", detail: "Selected Artist" },
  { name: "BH Instrumental", detail: "Featured Performer" },
  { name: "SESC Consolação", detail: "São Paulo" },
  { name: "CCBB", detail: "Centro Cultural Banco do Brasil" },
  { name: "Festival Fartura", detail: "Cultural Programming" },
  { name: "Minas Tênis Clube", detail: "Belo Horizonte" },
];

const EDUCATION_TOPICS = [
  { title: "Musicalisation", description: "Building musical awareness from the ground up through embodied rhythm and ancestral listening practices." },
  { title: "Music Perception", description: "Training the ear to hear across traditions — from Arabic maqam to West African polyrhythm to Brazilian syncopation." },
  { title: "Bass Technique", description: "Developing architectural presence on the instrument — structural, harmonic, and deeply grooved." },
  { title: "Improvisation", description: "Freedom within form. Spontaneous composition rooted in deep knowledge of multiple musical languages." },
  { title: "Afro-descendant Musical Roots", description: "Tracing the sonic genealogies that connect North Africa, West Africa, and the Americas." },
  { title: "Cultural Literacy", description: "Understanding music as living heritage — the social, spiritual, and political dimensions of sound." },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [navVisible, setNavVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.05]);

  useEffect(() => {
    const handleScroll = () => {
      setNavVisible(window.scrollY > window.innerHeight * 0.6);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-stone-950 text-stone-300 min-h-screen overflow-x-hidden">
      {/* Navigation */}
      {/* Skip to content link for accessibility */}
      <a href="#profile" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-stone-900 focus:text-amber-400">
        Skip to content
      </a>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-stone-950/80 border-b border-stone-800/50"
        data-testid="nav-bar"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-serif text-lg text-stone-100 tracking-wide"
            data-testid="nav-logo"
          >
            KB
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-amber-500"
                    : "text-stone-400 hover:text-stone-200"
                }`}
                data-testid={`nav-link-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
            className="text-sm text-amber-500 tracking-wide hover:text-amber-400 transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/30" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "url('/images/pattern-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-amber-600/70">
                Bassist &bull; Composer &bull; Musical Director
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-100 tracking-tight leading-[0.95] mb-8">
              Khalil
              <br />
              <span className="italic text-amber-500/90">Briki</span>
            </h1>

            <p className="font-serif text-lg md:text-xl text-stone-400 italic leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              "Architect of Afro-diasporic sound.
              <br />
              Bridging Tunisia, Brazil, and the Global South through bass."
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                className="bg-amber-700 text-stone-100 border-amber-600 rounded-full px-8"
                onClick={() => scrollToSection("#media")}
                data-testid="button-listen"
              >
                <Headphones className="w-4 h-4 mr-2" />
                Listen
              </Button>
              <Button
                variant="outline"
                className="border-stone-600 text-stone-300 rounded-full px-8 bg-transparent"
                data-testid="button-press-kit"
              >
                <FileText className="w-4 h-4 mr-2" />
                Press Kit
              </Button>
              <Button
                variant="outline"
                className="border-stone-600 text-stone-300 rounded-full px-8 bg-transparent"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-800/20 via-transparent to-stone-800/20 rounded-2xl blur-2xl" />
              <img
                src="/images/hero-portrait.png"
                alt="Khalil Briki"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                data-testid="img-hero-portrait"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-stone-500" />
          </motion.div>
        </motion.div>
      </section>

      <main>
      {/* ARTISTIC PROFILE */}
      <section id="profile" className="relative py-24 md:py-32" data-testid="section-profile">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <SectionLabel>Artistic Profile</SectionLabel>
            <SectionTitle>A Cultural Bridge</SectionTitle>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-8">
            <FadeInSection delay={0.2}>
              <p className="text-lg leading-relaxed text-stone-400 mb-6">
                Khalil Briki is a Northern African bassist, composer, and cultural bridge currently based in Brazil. His music merges jazz improvisation, Gnawa trance rhythms, Arabic-Andalusian melodies, West African polyrhythms, and Brazilian Popular Music (MPB).
              </p>
              <p className="text-lg leading-relaxed text-stone-400">
                He plays bass, gombri, and oud, developing an architectural musical presence that shapes ensembles from within — not from the front, but from the foundation.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-amber-500/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200 text-lg mb-1">Multilingual</h3>
                    <p className="text-stone-500 text-sm">Arabic, French, English, Portuguese — four languages, countless musical dialects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-amber-500/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200 text-lg mb-1">Tunisia to Brazil</h3>
                    <p className="text-stone-500 text-sm">Immigrated in 2018, carrying North African sonic memory into the rhythmic heartland of South America.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Music className="w-4 h-4 text-amber-500/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200 text-lg mb-1">Architectural Presence</h3>
                    <p className="text-stone-500 text-sm">Structural and harmonic awareness — building the sonic foundation that allows ensembles to breathe and evolve.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800/50 to-transparent" />
      </section>

      {/* SELECTED PROJECTS */}
      <section id="projects" className="relative py-24 md:py-32 bg-stone-900/30" data-testid="section-projects">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <SectionLabel>Selected Projects</SectionLabel>
            <SectionTitle>Collaborations</SectionTitle>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
              {PROJECTS.map((project, i) => (
                <AccordionItem
                  key={project.title}
                  value={project.title}
                  className="border-stone-800/40 data-[state=open]:border-amber-800/30"
                  data-testid={`card-project-${i}`}
                >
                  <AccordionTrigger className="py-6 md:py-8 hover:no-underline group">
                    <div className="flex flex-col items-start text-left gap-1 pr-4">
                      <h3 className="font-serif text-xl md:text-2xl text-stone-100 group-hover:text-amber-400/90 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs tracking-wider text-amber-600/60 uppercase">
                        {project.role}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-stone-400 leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                    <ProjectPhotoScroll photos={project.photos} title={project.title} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* FESTIVALS & MAJOR EVENTS */}
      <section id="festivals" className="relative py-24 md:py-32" data-testid="section-festivals">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <SectionLabel>Festivals & Events</SectionLabel>
            <SectionTitle>Cultural Presence</SectionTitle>
          </FadeInSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FESTIVALS.map((festival, i) => (
              <FadeInSection key={festival.name} delay={i * 0.08}>
                <div
                  className={`relative p-6 rounded-xl border transition-all duration-300 ${
                    festival.highlight
                      ? "border-amber-700/40 bg-amber-950/20"
                      : "border-stone-800/40 hover:border-stone-700/50"
                  }`}
                  data-testid={`card-festival-${i}`}
                >
                  {festival.highlight && (
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span className="font-mono text-xs text-amber-500 tracking-wider uppercase">Award</span>
                    </div>
                  )}
                  <h3 className="font-serif text-lg text-stone-200 mb-1">{festival.name}</h3>
                  <p className="text-sm text-stone-500">{festival.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800/50 to-transparent" />
      </section>

      {/* EDUCATION & MENTORSHIP */}
      <section id="education" className="relative py-24 md:py-32 bg-stone-900/30" data-testid="section-education">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <SectionLabel>Education & Mentorship</SectionLabel>
            <SectionTitle>Music as Living Heritage</SectionTitle>
            <p className="text-stone-500 max-w-2xl text-lg leading-relaxed mb-12">
              Teaching is not transmission — it is dialogue. Each student carries ancestral rhythms waiting to be awakened. The work is to listen first, then guide.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION_TOPICS.map((topic, i) => (
              <FadeInSection key={topic.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-stone-800/30 hover:border-amber-800/20 transition-all duration-300" data-testid={`card-education-${i}`}>
                  <div className="w-8 h-8 rounded-full bg-amber-900/20 border border-amber-800/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-500/60" />
                  </div>
                  <h3 className="font-serif text-stone-200 text-lg mb-2">{topic.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{topic.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section id="media" className="relative py-24 md:py-32" data-testid="section-media">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <SectionLabel>Media</SectionLabel>
            <SectionTitle>Listen & Watch</SectionTitle>
          </FadeInSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInSection delay={0.1}>
              <a href="#" aria-label="YouTube channel" className="relative aspect-video rounded-xl border border-stone-800/50 bg-stone-900/50 flex flex-col items-center justify-center gap-4 group hover:border-amber-800/30 transition-colors duration-300 cursor-pointer" data-testid="media-youtube">
                <div className="w-16 h-16 rounded-full bg-red-900/20 border border-red-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiYoutube className="w-7 h-7 text-red-400/70" />
                </div>
                <span className="text-stone-400 text-sm font-mono tracking-wider">YouTube</span>
                <p className="text-stone-600 text-xs">Video performances & sessions</p>
              </a>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <a href="#" aria-label="Spotify profile" className="relative aspect-video rounded-xl border border-stone-800/50 bg-stone-900/50 flex flex-col items-center justify-center gap-4 group hover:border-amber-800/30 transition-colors duration-300 cursor-pointer" data-testid="media-spotify">
                <div className="w-16 h-16 rounded-full bg-green-900/20 border border-green-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiSpotify className="w-7 h-7 text-green-400/70" />
                </div>
                <span className="text-stone-400 text-sm font-mono tracking-wider">Spotify</span>
                <p className="text-stone-600 text-xs">Streaming & discography</p>
              </a>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.3}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="#" aria-label="Press photos gallery" className="block rounded-xl border border-stone-800/50 p-6 hover:border-amber-800/30 transition-colors duration-300 cursor-pointer" data-testid="media-photos">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200">Press Photos</h3>
                    <p className="text-xs text-stone-600">High resolution gallery</p>
                  </div>
                </div>
              </a>

              <a href="#" aria-label="Download press kit PDF" className="block rounded-xl border border-stone-800/50 p-6 hover:border-amber-800/30 transition-colors duration-300 cursor-pointer" data-testid="media-press-kit">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200">Press Kit</h3>
                    <p className="text-xs text-stone-600">Downloadable PDF</p>
                  </div>
                </div>
              </a>
            </div>
          </FadeInSection>
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800/50 to-transparent" />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24 md:py-32 bg-stone-900/30" data-testid="section-contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Let's Connect</SectionTitle>
            <p className="text-stone-500 text-lg max-w-xl mx-auto mb-12">
              For bookings, collaborations, press inquiries, or educational workshops.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:contact@khalilbriki.com"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-stone-800/50 hover:border-amber-800/30 transition-all duration-300 w-full sm:w-auto"
                data-testid="contact-email"
              >
                <Mail className="w-5 h-5 text-amber-500/70" />
                <div className="text-left">
                  <span className="block text-stone-200 text-sm">Email</span>
                  <span className="block text-stone-500 text-xs">contact@khalilbriki.com</span>
                </div>
              </a>

              <a
                href="https://instagram.com/khalilbriki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-stone-800/50 hover:border-amber-800/30 transition-all duration-300 w-full sm:w-auto"
                data-testid="contact-instagram"
              >
                <SiInstagram className="w-5 h-5 text-amber-500/70" />
                <div className="text-left">
                  <span className="block text-stone-200 text-sm">Instagram</span>
                  <span className="block text-stone-500 text-xs">@khalilbriki</span>
                </div>
              </a>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-stone-800/50 hover:border-amber-800/30 transition-all duration-300 w-full sm:w-auto"
                data-testid="contact-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-amber-500/70" />
                <div className="text-left">
                  <span className="block text-stone-200 text-sm">WhatsApp</span>
                  <span className="block text-stone-500 text-xs">Booking inquiries</span>
                </div>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      </main>

      <footer className="border-t border-stone-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-stone-600 text-sm">
            Khalil Briki &copy; {new Date().getFullYear()}
          </span>
          <span className="text-stone-700 text-xs font-mono tracking-wider">
            Tunisia &bull; Brazil &bull; Global South
          </span>
        </div>
      </footer>

      {/* Ambient sand particle effect */}
      <SandParticles />
    </div>
  );
}

function ProjectPhotoScroll({ photos, title }: { photos: { src: string; alt: string }[]; title: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative group/scroll">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-700/50 transition-all duration-200 opacity-0 group-hover/scroll:opacity-100"
          aria-label="Scroll left"
          data-testid={`scroll-left-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <ChevronDown className="w-4 h-4 -rotate-90" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden relative group/photo"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-700/50 transition-all duration-200 opacity-0 group-hover/scroll:opacity-100"
          aria-label="Scroll right"
          data-testid={`scroll-right-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <ChevronDown className="w-4 h-4 rotate-90" />
        </button>
      )}

      {photos.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {photos.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-700" />
          ))}
        </div>
      )}
    </div>
  );
}

function SandParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 25000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.15 - 0.1,
        opacity: Math.random() * 0.15 + 0.03,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(194, 163, 120, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
