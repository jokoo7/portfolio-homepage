import DashboardContactEditPage from "../../_components/edit-contact";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <DashboardContactEditPage id={(await params).id} />;
}

export default Page;
