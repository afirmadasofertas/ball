"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { productVariants } from "@/lib/product-data";
import { ProductGallery } from "./product-gallery";
import { ProductStory } from "./product-story";

export function ProductDetail() {
  const [selectedId, setSelectedId] = useState<"mini" | "pro">("mini");
  const selectedVariant =
    productVariants.find((variant) => variant.id === selectedId) ??
    productVariants[0];

  return (
    <>
      <main className="pdp" aria-label="FIFA World Cup 26 product page">
        <ProductGallery images={selectedVariant.images} />

        <aside className="buybox" aria-label="Product purchase details">
          <div className="product-meta-row">
            <p className="product-category">Soccer</p>
            <div className="rating-row">
              <span
                className="rating-stars"
                aria-label="Rating 4.8 out of 5"
                style={{ "--rating": "90%" } as CSSProperties}
              >
                <span aria-hidden="true">★★★★★</span>
              </span>
              <span>4.8</span>
              <a href="#">(113)</a>
            </div>
          </div>

          <h1>{selectedVariant.title}</h1>
          <p className="product-price">
            <span className="compare-price">
              {selectedVariant.compareAtPrice}
            </span>
            <span>{selectedVariant.price}</span>
          </p>

          <div className="product-option">
            <span>Color</span>
            <strong>{selectedVariant.color}</strong>
          </div>

          <div className="size-block" id="add-to-bag">
            <div className="size-heading">
              <h2>Sizes</h2>
            </div>
            <div className="size-options">
              {productVariants.map((variant) => (
                <button
                  aria-pressed={selectedVariant.id === variant.id}
                  className="size-choice"
                  key={variant.id}
                  onClick={() => setSelectedId(variant.id)}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          <button className="add-bag">
            <span>Buy Now</span>
            <BagPlusIcon />
          </button>
        </aside>
      </main>

      <ProductStory variantId={selectedVariant.id} />
    </>
  );
}

function BagPlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
      className="cta-icon"
    >
      <path
        fill="var(--icon-primary-color, #fff)"
        fillRule="evenodd"
        d="M9 4h10v4h5v6.752a8.5 8.5 0 0 0-1-.378V9h-4v3h-1V9h-8v3H9V9H5v18h8.288q.33.528.731 1H4V8h5zm9 1v3h-8V5z"
        clipRule="evenodd"
      />
      <path
        fill="var(--icon-primary-color, #fff)"
        fillRule="evenodd"
        d="M20.5 16a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M13 22.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0"
        clipRule="evenodd"
      />
      <path
        fill="var(--icon-primary-color, #fff)"
        fillRule="evenodd"
        d="M21 23h3v-1h-3v-3h-1v3h-3v1h3v3h1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
