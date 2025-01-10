import DashboardProjectEditPage from "../../_components/edit-project";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <DashboardProjectEditPage id={(await params).id} />;
}

export default Page;
