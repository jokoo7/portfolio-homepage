import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import { useDeleteFileAndDataContact } from "./delete-mutation-contact";

type Props = {
  filePath: string;
  id: string;
};

export default function ButtonDeleteContact({ filePath, id }: Props) {
  const deleteMutation: any = useDeleteFileAndDataContact();

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
