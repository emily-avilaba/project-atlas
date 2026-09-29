"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const items = document.querySelectorAll(
  "article.group, .group.rounded-2xl, .group.rounded-3xl"
);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}