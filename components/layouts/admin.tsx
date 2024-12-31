"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Mengonversi path menjadi array bagian-bagian breadcrumb
  const basePath = "/admin/dashboard";
  const adjustedPath = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : "/";
  const pathSegments = adjustedPath.split("/").filter(Boolean);

  // Membuat label untuk setiap segment, bisa diatur sesuai kebutuhan
  const segmentLabels = (segment: string) =>
    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

  // console.log(pathSegments);

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* Item breadcrumb pertama untuk "Home" */}
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => {
                const href = "/admin/dashboard/" + pathSegments.slice(0, index + 1).join("/");
                console.log(href);
                return (
                  <Fragment key={segment}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={href}>{segmentLabels(segment)}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      {children}
    </SidebarInset>
  );
}
