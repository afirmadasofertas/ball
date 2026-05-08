"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { ProductImage } from "@/lib/product-data";

type ProductGalleryProps = {
  images: ProductImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const galleryRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const syncBar = useCallback(() => {
    const gallery = galleryRef.current;
    const bar = barRef.current;
    if (!gallery || !bar) {
      return;
    }

    const { clientWidth, scrollLeft, scrollWidth } = gallery;
    if (clientWidth < 1 || scrollWidth < 1) {
      return;
    }

    const imageCount = images.length;
    const width = Math.max(42, Math.round(clientWidth / imageCount));

    if (scrollWidth <= clientWidth) {
      bar.style.width = `${width}px`;
      bar.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    const maxScroll = scrollWidth - clientWidth;
    const maxLeft = clientWidth - width;
    const left = Math.max(0, (scrollLeft / maxScroll) * maxLeft);
    bar.style.width = `${width}px`;
    bar.style.transform = `translate3d(${left}px, 0, 0)`;
  }, [images.length]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) {
      return;
    }

    gallery.scrollLeft = 0;

    let frame = 0;
    const requestSync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncBar);
    };

    const timers = [
      window.setTimeout(requestSync, 50),
      window.setTimeout(requestSync, 250),
      window.setTimeout(requestSync, 700),
    ];
    requestSync();
    gallery.addEventListener("scroll", requestSync, { passive: true });
    gallery.addEventListener("touchmove", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    const resizeObserver = new ResizeObserver(requestSync);
    resizeObserver.observe(gallery);

    return () => {
      cancelAnimationFrame(frame);
      gallery.removeEventListener("scroll", requestSync);
      gallery.removeEventListener("touchmove", requestSync);
      window.removeEventListener("resize", requestSync);
      timers.forEach((timer) => window.clearTimeout(timer));
      resizeObserver.disconnect();
    };
  }, [images, syncBar]);

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    const gallery = galleryRef.current;
    if (!gallery) {
      return;
    }

    dragRef.current = {
      dragging: true,
      startX: event.clientX,
      scrollLeft: gallery.scrollLeft,
    };
    gallery.setPointerCapture(event.pointerId);
    gallery.classList.add("is-dragging");
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const gallery = galleryRef.current;
    if (!gallery || !dragRef.current.dragging) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.startX;
    gallery.scrollLeft = dragRef.current.scrollLeft - deltaX;
    syncBar();
  };

  const stopDragging = (event: React.PointerEvent<HTMLElement>) => {
    const gallery = galleryRef.current;
    if (!gallery) {
      return;
    }

    dragRef.current.dragging = false;
    gallery.classList.remove("is-dragging");
    if (gallery.hasPointerCapture(event.pointerId)) {
      gallery.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="gallery-wrap">
      <section
        ref={galleryRef}
        className="pdp-gallery"
        aria-label="Product images"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
        onScroll={syncBar}
      >
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Soccer</a>
          <span>/</span>
          <a href="#">Accessories</a>
        </nav>

        {images.map((image, index) => (
          <figure className="gallery-tile" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 767px) 86vw, 34vw"
            />
            {index === 0 ? (
              <figcaption className="gallery-badge">Best Seller</figcaption>
            ) : null}
          </figure>
        ))}
      </section>

      <div className="carousel-scrollbar" aria-hidden="true">
        <span ref={barRef} />
      </div>
    </div>
  );
}
