import { useEffect, useRef, useState } from 'react';

const useInViewFade = () => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    
    const observer = new IntersectionObserver(

      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }

    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

export default useInViewFade;
