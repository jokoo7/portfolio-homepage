"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CloudUpload, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { getDataById } from "@/services/project-service";

const formSchema = z.object({
  icon: z.string().optional(),
  label: z.string().min(1, "Label is required"),
  url: z.string().url().optional(),
});

type IProps = {
  id: string;
};

export default function DashboardContactEditPage({ id }: IProps) {
  const { data: contact } = useQuery<any>({
    queryKey: ["contact", id],
    queryFn: () => getDataById("contacts", id),
    initialData: null,
  });

  const [files, setFiles] = useState<File[] | null>(null);
  const { toast } = useToast();

  const dropZoneConfig = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif", ".svg"],
    },
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      icon: "",
      label: "",
      url: "",
    },
  });

  const { reset, formState } = form;

  useEffect(() => {
    if (contact) {
      reset({
        icon: "",
        label: contact.label ?? "",
        url: contact.url ?? "",
      });
    }
  }, [contact, reset]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    // Sertakan file hanya jika ada
    if (files && files.length > 0) {
      formData.append("file", files[0]);
    }
    formData.append("label", values.label);
    formData.append("id", id);
    formData.append("url", values.url || "");

    try {
      const response = await fetch("/api/contact", {
        method: "PATCH",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: data.message,
        });
      }

      setFiles(null);

      toast({
        description: data.message,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Upload error: " + error,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-3xl mx-auto">
        <FormField
          control={form.control}
          name="icon"
          render={({}) => (
            <FormItem>
              <FormLabel>Chose Icon</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={(files) => {
                    setFiles(files);
                  }}
                  dropzoneOptions={dropZoneConfig}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput id="fileInput" className="outline-dashed outline-1 outline-slate-500">
                    <div className="flex items-center justify-center flex-col p-8 w-full ">
                      <CloudUpload className="text-gray-500 w-10 h-10" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG</p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>Select a file to upload.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Instagram" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url</FormLabel>
              <FormControl>
                <Input placeholder="https:" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
          {formState.isSubmitting ? "Loading..." : "Create Contact"}
        </Button>
      </form>
    </Form>
  );
}
