import Image from "next/image";
import React from "react";

export const SideBar = () => {
  return (
    <aside>
      <Image src="/logo.svg" height={26} width={115} alt="logo" />
    </aside>
  );
};
