import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Education", href: "#education" },
{ label: "Skills", href: "#skills" },
{ label: "Experience", href: "#experience" },
{ label: "Projects", href: "#projects" },
{ label: "Achievements", href: "#achievements" },
{ label: "Certifications", href: "#certifications" },
{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for fixed navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling behind mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (!element) return;

    const offset = 85;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          FIXED & DYNAMIC GLASS NAVBAR
          STAYS ACCESSIBLE WITH CRISP BLUR
      ====================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-[500] w-full px-3 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div className="flex justify-center">
          <motion.nav
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full max-w-[1180px] rounded-[18px] sm:rounded-[22px] border transition-all duration-300 ${
              isScrolled
                ? "border-slate-800/90 bg-[#060a16]/85 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.55)]"
                : "border-white/[0.08] bg-[#070b14]/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            }`}
          >
        <div
          className="
            min-h-[68px]
            px-4
            sm:px-6
            lg:px-7
            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              LOGO + NAME
          ================================================== */}

          <button
            onClick={() => handleNavClick("#home")}
            className="
              group
              flex
              items-center
              gap-3
              shrink-0
              focus:outline-none
            "
            aria-label="Go to home"
          >

            {/* YOUR ACTUAL HM LOGO */}
            <div
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                shrink-0
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <img
                src="/images/logo.png"
                alt="HM Logo"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* NAME */}
            <span
              className="
                hidden
                sm:block
                text-[14px]
                lg:text-[15px]
                font-semibold
                tracking-tight
                text-white
                whitespace-nowrap
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Harshal Mendhule
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden lg:block ml-auto">
            <ul className="flex items-center gap-6 xl:gap-7">

              {navLinks.map((link) => {
                const section =
                  link.href.slice(1);

                const isActive =
                  activeSection === section;

                return (
                  <li key={link.href}>
                    <button
                      onClick={() =>
                        handleNavClick(link.href)
                      }
                      className="
                        group
                        relative
                        py-2
                        text-[13px]
                        xl:text-[14px]
                        font-medium
                        whitespace-nowrap
                        focus:outline-none
                      "
                      style={{
                        color: isActive
                          ? "#ffffff"
                          : "#94a3b8",
                      }}
                    >
                      <span
                        className="
                          transition-colors
                          duration-200
                          group-hover:text-white
                        "
                      >
                        {link.label}
                      </span>

                      {/* Active underline */}
                      <motion.span
                        className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          -bottom-[3px]
                          h-[2px]
                          rounded-full
                          bg-sky-400
                        "
                        initial={false}
                        animate={{
                          width: isActive
                            ? 18
                            : 0,
                          opacity: isActive
                            ? 1
                            : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      />
                    </button>
                  </li>
                );
              })}

            </ul>
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              border
              border-white/[0.10]
              bg-white/[0.04]
              text-slate-300
              transition-all
              duration-200
              hover:bg-white/[0.08]
              hover:text-white
              focus:outline-none
            "
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

        </div>
      </motion.nav>

    </div>
  </header>



  {/* =====================================================
      MOBILE BACKDROP
  ====================================================== */}

  <AnimatePresence>
    {mobileOpen && (
      <motion.div
        className="
          fixed
          inset-0
          z-[490]
          lg:hidden
          bg-black/55
          backdrop-blur-sm
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMobileOpen(false)}
      />
    )}
  </AnimatePresence>



  {/* =====================================================
    MOBILE MENU
====================================================== */}

<AnimatePresence>
  {mobileOpen && (
    <motion.div
      className="
        fixed
        top-[76px]
        sm:top-[84px]
        left-3
        right-3
        z-[499]
        lg:hidden
        mx-auto
        max-w-[420px]
      "
      initial={{
        opacity: 0,
        y: -14,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.97,
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[22px]
          border border-white/[0.10]
          bg-[#070a10]/95
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          p-2
        "
      >

        {/* Subtle top glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-20
            left-1/2
            h-32
            w-64
            -translate-x-1/2
            rounded-full
            bg-sky-500/[0.08]
            blur-3xl
          "
        />

        {/* Navigation items */}
        <div className="relative space-y-1">

          {navLinks.map((link, index) => {
            const section = link.href.slice(1);
            const isActive = activeSection === section;

            return (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.035,
                  duration: 0.2,
                }}
                className="
                  group
                  relative
                  w-full
                  flex
                  items-center
                  gap-3
                  rounded-[14px]
                  px-3.5
                  py-2.5
                  text-left
                  transition-all
                  duration-200
                  focus:outline-none
                "
                style={{
                  background: isActive
                    ? "rgba(14,165,233,0.10)"
                    : "transparent",
                }}
              >

                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="mobile-active"
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-6
                      w-[2px]
                      -translate-y-1/2
                      rounded-full
                      bg-sky-400
                      shadow-[0_0_12px_rgba(56,189,248,0.8)]
                    "
                  />
                )}

                {/* Number */}
                <span
                  className="
                    w-6
                    shrink-0
                    text-[10px]
                    font-semibold
                    tracking-wider
                  "
                  style={{
                    color: isActive
                      ? "#38bdf8"
                      : "#475569",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Label */}
                <span
                  className="
                    flex-1
                    text-[13px]
                    font-medium
                    tracking-[0.01em]
                    transition-colors
                    duration-200
                    group-hover:text-white
                  "
                  style={{
                    color: isActive
                      ? "#ffffff"
                      : "#94a3b8",
                  }}
                >
                  {link.label}
                </span>

                {/* Arrow / active dot */}
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-200
                  "
                  style={{
                    background: isActive
                      ? "rgba(14,165,233,0.12)"
                      : "transparent",
                  }}
                >
                  {isActive ? (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-sky-400
                        shadow-[0_0_8px_rgba(56,189,248,0.8)]
                      "
                    />
                  ) : (
                    <span
                      className="
                        text-[11px]
                        text-slate-600
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:text-slate-300
                      "
                    >
                      →
                    </span>
                  )}
                </span>

              </motion.button>
            );
          })}

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>



</>

);
}