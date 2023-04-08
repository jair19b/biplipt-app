import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface AnchorProps {
   children: React.ReactNode;
   href: string;
   className?: string;
   activeClass?: string;
   title?: string;
   role?: string;
   style?: React.CSSProperties;
}

export default function Anchor({ children, href, className, activeClass, title, role, style }: AnchorProps) {
   const router = useRouter();

   if (activeClass)
      return (
         <Link
            href={href}
            className={router.pathname === href ? `${className} ${activeClass}` : className}
            title={title}
            role={role}
            style={style}
         >
            {children}
         </Link>
      );

   return (
      <Link href={href} className={className} title={title} role={role} style={style}>
         {children}
      </Link>
   );
}
