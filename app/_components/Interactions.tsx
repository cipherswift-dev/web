"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("menu-open");

    // sticky header shadow on scroll
    const header = document.querySelector(".header");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // hamburger / mobile menu
    const burger = document.querySelector<HTMLButtonElement>(".hamburger");
    const onBurger = () => {
      const open = document.body.classList.toggle("menu-open");
      burger?.setAttribute("aria-expanded", String(open));
    };
    burger?.addEventListener("click", onBurger);
    const panelLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".mobile-panel a"));
    const closeMenu = () => document.body.classList.remove("menu-open");
    panelLinks.forEach((a) => a.addEventListener("click", closeMenu));

    // close desktop dropdown after selecting an item
    const navItems = Array.from(document.querySelectorAll<HTMLElement>(".nav-item"));
    const dropLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".dropdown a"));
    const collapse = (e: Event) => {
      (e.currentTarget as HTMLElement).closest(".nav-item")?.classList.add("dd-collapsed");
      (document.activeElement as HTMLElement | null)?.blur();
    };
    const reopen = (e: Event) => (e.currentTarget as HTMLElement).classList.remove("dd-collapsed");
    dropLinks.forEach((a) => a.addEventListener("click", collapse));
    navItems.forEach((it) => it.addEventListener("mouseleave", reopen));

    // scroll reveal
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }
    const failsafe = setTimeout(() => reveals.forEach((el) => el.classList.add("in")), 1500);

    // count-up stats
    const counts = Array.from(document.querySelectorAll<HTMLElement>("[data-target]"));
    const done = new Set<Element>();
    const animate = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const dur = 1500;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(step);
    };
    let statIO: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      statIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !done.has(e.target)) {
              done.add(e.target);
              animate(e.target as HTMLElement);
              statIO?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counts.forEach((el) => statIO!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      burger?.removeEventListener("click", onBurger);
      panelLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      dropLinks.forEach((a) => a.removeEventListener("click", collapse));
      navItems.forEach((it) => it.removeEventListener("mouseleave", reopen));
      io?.disconnect();
      statIO?.disconnect();
      clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
