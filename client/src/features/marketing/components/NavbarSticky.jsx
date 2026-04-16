import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

/* ================= NAV LINKS ================= */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* ================= DESKTOP LINK ================= */
function DesktopNavLink({ item }) {
  const isHash = item.href.startsWith("#");

  if (isHash) {
    return (
      <a
        href={item.href}
        className="group relative text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </a>
    );
  }

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `group relative text-sm font-medium transition ${
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`
      }
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </NavLink>
  );
}

/* ================= MAIN NAVBAR ================= */
export default function NavbarSticky() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* ===== scroll detection ===== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* ===== LOGO ===== */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold">SwapWise</span>
            <span className="text-xs text-muted-foreground">
              Skill Exchange
            </span>
          </div>
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <DesktopNavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* ===== DESKTOP BUTTONS ===== */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild className="rounded-xl px-5">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>SwapWise</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((item) => {
                  const isHash = item.href.startsWith("#");

                  if (isHash) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-muted text-sm"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg hover:bg-muted text-sm"
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>

                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ===== bottom line animation ===== */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      )}
    </header>
  );
}
