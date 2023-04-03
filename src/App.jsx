import React, {useEffect} from "react";
import Layouts from '@/layouts';
import {getRoutes} from '@/commons/menus'

export default function App() {
  useEffect(() => {
    getRoutes()
  }, [])

  return (
    <div className="layoutContainer">
      <Layouts />
    </div>
  );
}

