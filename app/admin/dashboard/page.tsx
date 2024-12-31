import { Hammer, Send } from "lucide-react";

export default async function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 w-full">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="tracking-tight text-sm font-medium">Total Projects</div>
            <Hammer size={20} />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </div>
        </div>
        <div className="rounded-md border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="tracking-tight text-sm font-medium">Total Contacts</div>
            <Send size={20} />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+0 from last month</p>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
