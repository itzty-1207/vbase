import React, {useEffect} from "react";
import Layouts from '@/layouts';
import '@wangeditor/editor/dist/css/style.css'

export default function App() {

  useEffect(() => {
    const size = window.addEventListener("resize", () => {
      const screenWidth = document.documentElement.clientWidth;
      // const rootFrontSize = screenWidth * (designWidth / 100) / scale;
      const rootFrontSize = screenWidth / 100;

      const html = document.querySelector("html");

      html.style.fontSize = rootFrontSize + 'px';
    })

    return () => window.removeEventListener('resize', size)
  }, [])

  return (
    <div className="layoutContainer">
      <Layouts />
    </div>
  );
}

