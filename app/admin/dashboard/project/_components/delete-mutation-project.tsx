/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type DeleteFileAndDataParams = {
  filePath: string;
  id: string;
};

async function deleteFileAndData({ filePath, id }: DeleteFileAndDataParams) {
  const response = await fetch("/api/project", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filePath, id }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete file and data");
  }

  return response.json();
}

export function useDeleteFileAndDataProject() {
  const { toast } = useToast();
  const queryClient: any = useQueryClient();

  return useMutation({
    mutationFn: deleteFileAndData,
    onSuccess: () => {
      // Invalidasi query untuk merivalidasi data
      queryClient.invalidateQueries(["projects"]);

      // Tampilkan notifikasi sukses
      toast({
        description: "File and data deleted successfully.",
      });
    },
    onError: (error: Error) => {
      // Tampilkan notifikasi error
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });
}
