import DefaultLayout from "@/components/layouts/main";
import ProjectsSlug from "@/components/pages/projects-slug";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <DefaultLayout>
      <ProjectsSlug slug={(await params).slug} />
    </DefaultLayout>
  );
}
