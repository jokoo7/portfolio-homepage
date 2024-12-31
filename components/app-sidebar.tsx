import * as React from "react";
import { Hammer, Home, LogOut, Send } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { logout } from "@/services/user-service";
import { verifySession } from "@/services/session-service";
import Link from "next/link";

const items = [
  {
    title: "Project",
    url: "/admin/dashboard/project",
    icon: Hammer,
  },
  {
    title: "Contact",
    url: "/admin/dashboard/contact",
    icon: Send,
  },
];

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = await verifySession();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center">
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard Admin</span>
                  <span className="capitalize">{session?.username}</span>
                </div>
              </Link>
            </SidebarMenuButton>
            <form
              action={async () => {
                "use server";
                await logout();
              }}
            >
              <Button type="submit" variant="ghost" size="icon" className="flex-shrink-0">
                <LogOut />
              </Button>
            </form>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
