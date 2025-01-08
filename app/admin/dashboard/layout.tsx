import { AppSidebar } from "@/components/app-sidebar";
import DashboardLayout from "@/components/layouts/admin";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <DashboardLayout>
        <main className="p-4 w-full mt-20">{children}</main>
      </DashboardLayout>
    </SidebarProvider>
  );
}
