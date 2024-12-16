import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/frontend/site-footer";
import React from "react";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
