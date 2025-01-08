/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import { useDeleteFileAndData } from "./use-delete-mutation-project";

type Props = {
  filePath: string;
  id: string;
};

export default function ButtonDeleteProject({ filePath, id }: Props) {
  const deleteMutation: any = useDeleteFileAndData();

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
