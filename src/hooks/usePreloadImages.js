import { useState, useEffect } from "react";

export default function usePreloadImages(imageUrls = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) return setLoaded(true);

    let loadedCount = 0;
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) setLoaded(true);
      };
    });
  }, [imageUrls]);

  return loaded;
}
