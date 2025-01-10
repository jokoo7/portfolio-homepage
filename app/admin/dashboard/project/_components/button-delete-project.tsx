/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import { useDeleteFileAndDataProject } from "./delete-mutation-project";

type Props = {
  filePath: string;
  id: string;
};

export default function ButtonDeleteProject({ filePath, id }: Props) {
  const deleteMutation: any = useDeleteFileAndDataProject();

  const handleDelete = () => {
    deleteMutation.mutate({ filePath, id });
  };

  return (
    <button className="w-full" onClick={handleDelete} disabled={deleteMutation.isLoading}>
      <DropdownMenuItem className="cursor-pointer">
        <Trash2 /> {deleteMutation.isLoading ? "Deleting..." : "Delete"}
      </DropdownMenuItem>
    </button>
  );
}
