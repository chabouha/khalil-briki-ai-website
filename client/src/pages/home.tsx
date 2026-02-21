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

import igara1 from "@assets/Igara_(1)_1771707549349.jpg";
import igara2 from "@assets/Igara_(2)_1771707549349.jpg";
import igara5 from "@assets/Igara_(5)_1771707549349.jpg";
import igaraBdmg123 from "@assets/20230906_Igara_BDMG_Foto-DanielaPaoliello-alta-123_1771707549352.jpg";
import igaraBdmg89 from "@assets/20230906_Igara_BDMG_Foto-DanielaPaoliello-alta-89_1771707549353.jpg";
import igaraBdmg60 from "@assets/20230906_Igara_BDMG_Foto-DanielaPaoliello-alta-60_1771707549353.jpg";
import swingSafado10 from "@assets/BLOCO_SWING_SAFADO_-_2026-10_1771707549352.jpg";
import swingSafado7 from "@assets/BLOCO_SWING_SAFADO_-_2026-7_1771707549352.jpg";
import silas2 from "@assets/Silas_(2)_1771707549348.jpg";
import silas4 from "@assets/Silas_(4)_1771707549353.jpg";
import dani1 from "@assets/Dani_(1)_1771707549350.jpg";
import dani2 from "@assets/Dani_(2)_1771707549350.jpg";
import dani3 from "@assets/Dani_(3)_1771707549350.jpg";
import ciro1 from "@assets/Ciro_(1)_1771707549351.jpg";
import ciro2 from "@assets/Ciro_(2)_1771707549351.jpg";
import ciro3 from "@assets/Ciro_(3)_1771707549351.jpg";
import heroPhoto from "@assets/Silas_12_1771708035525.jpg";

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
    role: "Composer, Bassist, Musical Director",
    description: "The Khalil Briki Octet embodies Briki's vision of Afro-descendant instrumental expression, blending ancestral rhythmic traditions with contemporary harmonic and melodic structures. Featuring Khalil Briki (bass), Lucas Godoy (drums), Dudu Amendoeira (piano/keys), Xande Sax (saxophone), Aurelio (trumpet), Micael (trombone), Daniel Faria (guitar), and Ebano Brandao (percussion). A platform where Afro-Brazilian and global musical influences converge through rhythmic dialogue, collective creativity, and harmonic architecture.",
    photos: [
      { src: "/images/project-octet-1.png", alt: "Octet ensemble on stage" },
      { src: "/images/project-octet-2.png", alt: "Upright bass close-up" },
      { src: "/images/project-octet-3.png", alt: "Rehearsal studio session" },
    ],
  },
  {
    title: "Igara Silva",
    role: "Bassist, Musical Director",
    description: "Within Igara Silva's evolving instrumental universe — deeply influenced by the tradition of Minas Gerais instrumental music and contemporary Brazilian composition — Briki's bass became a grounding and structural force. During the creative process of O Piano, os Cavalos e o Mar (2024), Briki contributed to arrangement development, shaping a sound that honored regional identity while expanding harmonic and textural possibilities. The celebrated Paulo Santos (Uakti) and Marcus Ruffato also participated, adding sonic depth to collaborative explorations.",
    photos: [
      { src: igara1, alt: "Khalil Briki playing bass on stage with Igara Silva" },
      { src: igara5, alt: "Igara Silva and Briki performing live" },
      { src: igara2, alt: "Ensemble performing with Igara Silva" },
      { src: igaraBdmg123, alt: "Briki playing oud at BDMG Instrumental" },
      { src: igaraBdmg89, alt: "Clarinetist performing with Briki at BDMG" },
      { src: igaraBdmg60, alt: "Briki playing bass at BDMG Instrumental" },
    ],
  },
  {
    title: "Swing Safado",
    role: "Bassist",
    description: "Within the Afro-descendant energy of Carnaval de Belo Horizonte, Swing Safado embodies the pulse of street bloco culture rooted in Black Brazilian rhythmic traditions. Featuring Latin Grammy-winning producer Dédé Santaklaus and the charismatic Jeffim da Baze, a vocal advocate of anti-racist engagement. In 2026, Swing Safado toured Minas Gerais, culminating in performances on Avenida dos Andradas before more than 150,000 spectators.",
    photos: [
      { src: swingSafado10, alt: "Swing Safado bloco group photo at Carnaval" },
      { src: swingSafado7, alt: "Swing Safado members celebrating at Carnaval" },
    ],
  },
  {
    title: "Thamires Cunha",
    role: "Bassist",
    description: "In the show Raízes, Briki's bass lines carried more than harmony — they carried memory. Supporting Thamires Cunha's Afro-descendant affirmation, her artistic voice rooted in choro, samba, and Black Brazilian cultural memory resonates with strength and historical consciousness. Live performances reveal melodies soaring over bass lines that anchor ancestry, resistance, and celebration.",
    photos: [
      { src: "/images/project-thamires-1.png", alt: "Raízes live performance" },
    ],
  },
  {
    title: "Silas Prado",
    role: "Bassist",
    description: "Across instrumental jazz sessions and festival stages, Briki's collaboration with Silas Prado unfolds through attentive interplay deeply informed by Afro-Brazilian rhythmic heritage. Briki participated in the presentation of Silas Prado's album Obrigado Mestre, contributing to live interpretations that highlight improvisational dialogue and compositional richness.",
    photos: [
      { src: silas2, alt: "Silas Prado performing with saxophone" },
      { src: silas4, alt: "Briki playing bass with Silas Prado" },
    ],
  },
  {
    title: "Tatio",
    role: "Bassist, Guitarist",
    description: "In groove-driven projects with Tatio, Briki demonstrates versatility beyond the bass, contributing guitar and expanding harmonic textures within contemporary Afro-Brazilian frameworks. He participated in the artist's first album presentation, Contrabandeado, produced by Chico Neves — one of Brazil's most respected music producers. Creative chemistry drives the collaboration, while professional rigor sustains it.",
    photos: [
      { src: "/images/project-tatio-1.png", alt: "Tatio groove session" },
    ],
  },
  {
    title: "Gabriela Viegas",
    role: "Bassist",
    description: "Collaborations with Gabriela Viegas explore territories influenced by African traditions and diasporic memory. Rooted in rhythmic matrices echoing West and Central African heritage, her work bridges Brazilian popular music with ancestral narratives. Briki's bass interacts with percussion-driven arrangements and polyrhythmic structures, reinforcing groove while maintaining harmonic clarity.",
    photos: [
      { src: "/images/project-gabriela-1.png", alt: "African-influenced performance" },
    ],
  },
  {
    title: "Daniel Faria",
    role: "Bassist",
    description: "In collaboration with Daniel Faria, Briki's bass engages music shaped by Afro-descendant identity and contemporary Black Brazilian expression, drawing on New Soul, New York, and British Hip Hop influences. Their partnership reflects structural clarity aligned with rhythmic matrices echoing samba, funk, diasporic grooves, and global hip-hop sensibilities — honoring lineage while speaking to the present.",
    photos: [
      { src: dani1, alt: "Briki playing bass with Daniel Faria" },
      { src: dani2, alt: "Daniel Faria performing guitar with Briki" },
      { src: dani3, alt: "Full band performing with Daniel Faria" },
    ],
  },
  {
    title: "Ciro Belluci",
    role: "Bassist",
    description: "Ciro Belluci is a multi-talented musician, composer, and interpreter whose work blends deep musical literacy with expressive performance, reimagining Brazilian classics and original compositions. His collaboration with Briki focuses on structural interplay and creative composition, grounded in Afro-diasporic heritage and contemporary expression.",
    photos: [
      { src: ciro1, alt: "Ciro Belluci performing with guitar" },
      { src: ciro2, alt: "Ciro Belluci at the piano" },
      { src: ciro3, alt: "Musicians performing with Ciro Belluci" },
    ],
  },
  {
    title: "Cruvinel",
    role: "Bassist",
    description: "Briki performed with Cruvinel in Groove do Cruv projects and a João Bosco tribute at Minas Tênis Clube, contributing bass lines that anchor groove and support melodic interplay within sophisticated Brazilian jazz frameworks.",
    photos: [
      { src: "/images/project-cruvinel-1.png", alt: "Cruvinel groove session" },
    ],
  },
  {
    title: "Banda El Said",
    role: "Oud Player, Creator",
    description: "A classical Arabic music group created by Khalil Briki, emphasizing the influence of Arabic music in the Western world. The band plays classical repertoire such as Om Kalthoum, Abdelhalim, and Abdelwaheb in a Brazilian context. Briki plays oud in this ensemble, connecting Arabic musical heritage to Brazilian and global audiences.",
    photos: [
      { src: "/images/project-elsaid-1.png", alt: "Arabic ensemble performance" },
      { src: "/images/project-elsaid-2.png", alt: "Gombri instrument detail" },
    ],
  },
  {
    title: "Brazilian Jazz Scene",
    role: "Bassist, Collaborator",
    description: "Active presence across Minas Gerais and São Paulo's vibrant jazz circuits with the Dudu Amendoeira Trio, Lucas Demello Trio, Davi Desmolins Trio, Lucas Godoy Trio, and Carol Serdeira. Performing complex compositions and exploring collective improvisation, providing both harmonic foundation and rhythmic propulsion while emphasizing Afro-descendant influences.",
    photos: [
      { src: "/images/project-jazz-1.png", alt: "Jazz concert in Brazilian venue" },
    ],
  },
];

const FESTIVALS = [
  { name: "Savassi Jazz Festival", detail: "Winner — DJ Category, highlighting creative breadth beyond instrumental performance", highlight: true },
  { name: "Prêmio BDMG Instrumental", detail: "Prestigious instrumental music award, reinforcing presence in Brazil's contemporary music scene" },
  { name: "BH Instrumental", detail: "Featured performer across intimate and large-scale stages" },
  { name: "CCBB", detail: "Centro Cultural Banco do Brasil — performing at one of Brazil's most prestigious cultural venues" },
  { name: "SESC Consolação", detail: "São Paulo — expanding reach across Brazil's cultural capitals" },
  { name: "Festival Fartura", detail: "Nationally recognized cultural programming and performance" },
  { name: "Minas Tênis Clube", detail: "Belo Horizonte — including tributes and jazz ensembles" },
  { name: "Assembleia Legislativa de MG", detail: "Performances promoted by the state legislative assembly of Minas Gerais" },
];

const EDUCATION_TOPICS = [
  { title: "Musicalisation", description: "Building musical awareness from the ground up through embodied rhythm and ancestral listening practices, impacting hundreds of students across Brazil and internationally." },
  { title: "Music Perception", description: "Training the ear to hear across traditions — from Arabic maqam to West African polyrhythm to Brazilian syncopation. Emphasizing listening as the foundation of all musicianship." },
  { title: "Bass Technique", description: "Developing architectural presence on the instrument — structural, harmonic, and deeply grooved. Balancing discipline with creativity to ground learning in solid fundamentals." },
  { title: "Improvisation", description: "Freedom within form. Spontaneous composition rooted in deep knowledge of multiple musical languages, encouraging students to explore personal expression." },
  { title: "Ensemble & Composition", description: "Workshops in ensemble playing and composition, fostering collective creativity and structural understanding through collaborative musical dialogue." },
  { title: "Afro-descendant Musical Roots", description: "Highlighting African and Afro-descendant roots of Brazilian and global music — rhythmic matrices, harmonic architecture, and cross-cultural integration bridging contemporary practice with ancestral knowledge." },
  { title: "Cultural Literacy", description: "Positioning music not only as craft but as living cultural legacy — connecting communities, generations, and diverse traditions through historical and cultural perspectives." },
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
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
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
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-700/30 via-red-900/20 to-stone-900/30 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/15 to-transparent rounded-2xl blur-xl" />
              <img
                src={heroPhoto}
                alt="Khalil Briki"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-2xl shadow-2xl"
                style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                data-testid="img-hero-portrait"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-stone-950/40 via-transparent to-stone-950/40" />
              <div className="absolute inset-0 rounded-2xl mix-blend-overlay bg-gradient-to-br from-amber-500/10 via-transparent to-red-900/10" />
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
                At the center of diverse artistic intersections stands Khalil Briki, a Northern African native who immigrated to Brazil in 2018, bringing a multicultural, multilingual, and cross-continental perspective to his music. He is fluent in Arabic, Tunisian dialect, French, English, and Portuguese.
              </p>
              <p className="text-lg leading-relaxed text-stone-400 mb-6">
                Briki plays bass, Gombri (Northern African acoustic bass), and oud. His music is informed by jazz improvisation, Gnawa trance rhythms, Arabic-Andalusian melodic phrasing, West African polyrhythms, and Brazilian Popular Music (MPB), creating a hybridized sound that bridges continents, genres, and ancestral legacies.
              </p>
              <p className="text-stone-500 leading-relaxed italic">
                His presence is not merely supportive; it is architectural. Across concerts, festivals, and recordings, his harmonic sensibility and structural awareness help define the identity of each collaboration.
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
                    <p className="text-stone-500 text-sm">Arabic, Tunisian dialect, French, English, Portuguese — five languages bridging countless musical dialects and cultural traditions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-amber-500/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200 text-lg mb-1">Tunisia to Brazil</h3>
                    <p className="text-stone-500 text-sm">Trained at Ariana Public Conservatory and Jazz Club de Tunis, then immersed at Bituca — Universidade de Música Popular under masters Enéias Xavier, Aloízio Horta, and Pitágoras Silveira.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-800/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Music className="w-4 h-4 text-amber-500/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-stone-200 text-lg mb-1">Philosophy</h3>
                    <p className="text-stone-500 text-sm">Friendship fuels creativity. Professionalism sustains it. Music built on mutual respect, shared vision, and collective growth.</p>
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
                    <ProjectPhotoSlider photos={project.photos} title={project.title} description={project.description} />
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
            <p className="text-stone-500 max-w-2xl text-base leading-relaxed">
              Briki's artistic path unfolds across a wide range of important Brazilian cultural platforms, demonstrating versatility and commitment to community and Afro-descendant musical traditions. Across each platform, artistic excellence is sustained by human connection — where performance, cultural dialogue, and community engagement intersect.
            </p>
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
            <p className="text-stone-500 max-w-2xl text-lg leading-relaxed mb-4">
              Beyond performance, Khalil Briki is deeply committed to musical education and the preservation of cultural heritage. Through workshops, private lessons, and ensemble coaching, he ensures the richness of Afro-descendant and global musical heritage is passed on, celebrated, and sustained.
            </p>
            <p className="text-stone-600 max-w-2xl text-base leading-relaxed mb-12 italic">
              His teaching balances discipline with creativity, encouraging students to explore personal expression while grounding their learning in solid musical fundamentals.
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

function splitDescription(description: string, count: number): string[] {
  if (count <= 1) return [description];
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
  if (sentences.length <= count) {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(sentences[i] ? sentences[i].trim() : "");
    }
    return result;
  }
  const perChunk = Math.ceil(sentences.length / count);
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const chunk = sentences.slice(i * perChunk, (i + 1) * perChunk).join(" ").trim();
    result.push(chunk);
  }
  return result;
}

function ProjectPhotoSlider({ photos, title, description }: { photos: { src: string; alt: string }[]; title: string; description: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const descriptionParts = splitDescription(description, photos.length);
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const AUTO_ADVANCE_MS = 5000;
  const TICK_MS = 30;

  const goTo = (index: number) => {
    setProgress(0);
    if (index < 0) setCurrentIndex(photos.length - 1);
    else if (index >= photos.length) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  useEffect(() => {
    if (photos.length <= 1) return;
    setProgress(0);
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_MS / AUTO_ADVANCE_MS) * 100;
        if (next >= 100) {
          setCurrentIndex((ci) => (ci + 1) % photos.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [currentIndex, photos.length]);

  return (
    <div className="max-w-2xl mx-auto" data-testid={`slider-${slug}`}>
      <div className="relative group/slider rounded-xl overflow-hidden">
        <div className="relative aspect-[16/10] bg-stone-900">
          {photos.map((photo, i) => (
            <motion.img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{ opacity: i === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              loading="lazy"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
        </div>

        {photos.length > 1 && (
          <>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-800/60 z-10">
              <div
                className="h-full bg-amber-500/80 transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/70 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-700/50 transition-all duration-200 opacity-0 group-hover/slider:opacity-100"
              aria-label="Previous photo"
              data-testid={`slider-prev-${slug}`}
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/70 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-700/50 transition-all duration-200 opacity-0 group-hover/slider:opacity-100"
              aria-label="Next photo"
              data-testid={`slider-next-${slug}`}
            >
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 min-h-[3rem]">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-stone-400 leading-relaxed text-sm md:text-base"
        >
          {descriptionParts[currentIndex]}
        </motion.p>
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-amber-500 w-6" : "bg-stone-700 w-1.5 hover:bg-stone-500"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
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
