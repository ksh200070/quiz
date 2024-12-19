"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <Link href={"/flag"} className={pathname === "/flag" ? "selected" : ""}>
        국기
        <img src="./icon_flag.png" alt="" />
      </Link>
      <Link
        href={"/capital"}
        className={pathname === "/capital" ? "selected" : ""}
      >
        수도 맞추기
      </Link>
    </div>
  );
}
