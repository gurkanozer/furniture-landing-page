import { useState, useEffect } from "react";
const getScrollPos = () => {
    const {scrollX, scrollY} = window;
    return {
        scrollX,
        scrollY
    };
  };
  
  const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(
      getScrollPos()
    );
  
    useEffect(() => {
      function handleScroll() {
        setScrollPos(getScrollPos());
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return scrollPos;
  };

export default useScrollPosition;
