"use client";

import React, { useEffect, useState } from "react";

const libraryMap = {
  md: () => import("react-icons/md"),
  ai: () => import("react-icons/ai"),
  bi: () => import("react-icons/bi"),
  fa: () => import("react-icons/fa"),
  fa: () => import("react-icons/fa6"),
  im: () => import("react-icons/im"),
  hi: () => import("react-icons/hi"),
  ci: () => import("react-icons/ci"),
  tb: () => import("react-icons/tb"),
  hi2: () => import("react-icons/hi2"),
};

const Icon = ({ name, size, color = "currentColor", ...props }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      const prefix = name.slice(0, 2).toLowerCase();
      const iconName = name.slice(2);
      const libraryLoader = libraryMap[prefix];

      if (libraryLoader) {
        try {
          const library = await libraryLoader();
          setIconComponent(() => library[name]);
        } catch (error) {
          console.error(`Failed to load icon "${name}"`, error);
        }
      } else {
        console.error(`Icon prefix "${prefix}" is not supported.`);
      }
    };

    loadIcon();
  }, [name]);

  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} {...props} />;
};

export default Icon;
