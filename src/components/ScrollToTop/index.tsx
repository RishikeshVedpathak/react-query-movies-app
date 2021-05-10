import { useLayoutEffect  } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): null => {
  let { pathname } = useLocation();

  useLayoutEffect (() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
