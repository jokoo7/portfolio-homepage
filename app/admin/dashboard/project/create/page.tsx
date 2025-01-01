"use client";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { SKILS_PROJECTS } from "@/constants/stacks";
import { createProjectToDb } from "@/services/firebase-service";

const formSchema = z.object({
  image: z.string(),
  title: z.string().min(1, "Title is required"),
  url: z.string().url().optional(),
  description: z.string().min(1, "Description is required"),
  techStack: z.string().array().min(1, "Select at least one techstack"),
});

export default function MyForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      url: "",
      description: "",
      techStack: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      createProjectToDb(values, (result: boolean) => {
        if (result) {
          console.log("berhasil upload");
          // Reset form setelah berhasil upload
          form.reset();
          setFiles(null); // Reset state file
        } else {
          console.log("gagal upload");
        }
      });
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  async function handleFilesChange(files: File[] | null) {
    if (!files || files.length === 0) return;
    const selectedFile = files[0];

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      console.log("File uploaded:", data.filePath);
      form.setValue("image", data.filePath); // Simpan path file di form
    } catch (error) {
      console.error("Upload error:", error);
    }
  }

  // console.log(files[0].name);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-3xl mx-auto">
        <FormField
          control={form.control}
          name="image"
          render={({}) => (
            <FormItem>
              <FormLabel>Chose Image</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={(files) => {
                    setFiles(files);
                    handleFilesChange(files);
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
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title your project" {...field} />
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

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your project in detail..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your Techstack</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                  loop
                  className="max-w-xs"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select Techstack" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      {SKILS_PROJECTS.map((stack, index) => (
                        <MultiSelectorItem key={index} value={`${index}`}>
                          {stack}
                        </MultiSelectorItem>
                      ))}
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
