import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" alt="Logo-care.xyz" width={100} height={40} />
      </Link>
    </div>
  );
};

export default Logo;
