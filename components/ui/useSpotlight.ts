"use client";

import { useCallback } from "react";
import type { CSSProperties, MouseEvent, PointerEvent } from "react";

export type SpotlightStyle = CSSProperties & {
  "--spotlight-x": string;
  "--spotlight-y": string;
};

export const INITIAL_SPOTLIGHT_STYLE: SpotlightStyle = {
  "--spotlight-x": "50%",
  "--spotlight-y": "50%",
};

export function useSpotlight<TElement extends HTMLElement>() {
  const updateSpotlight = useCallback(
    (event: MouseEvent<TElement> | PointerEvent<TElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();

      event.currentTarget.style.setProperty(
        "--spotlight-x",
        `${event.clientX - rect.left}px`,
      );
      event.currentTarget.style.setProperty(
        "--spotlight-y",
        `${event.clientY - rect.top}px`,
      );
    },
    [],
  );

  return {
    spotlightHandlers: {
      onMouseDown: updateSpotlight,
      onMouseEnter: updateSpotlight,
      onMouseMove: updateSpotlight,
      onPointerDown: updateSpotlight,
      onPointerEnter: updateSpotlight,
      onPointerMove: updateSpotlight,
    },
    spotlightStyle: INITIAL_SPOTLIGHT_STYLE,
  };
}
