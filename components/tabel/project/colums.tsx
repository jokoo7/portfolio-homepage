"use client";

import Image from "@/components/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Project } from "@/constants/projects";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Eye, MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";
import ButtonDeleteProject from "./button-delete-project";

export const columns: ColumnDef<Project>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "index",
    header: ({ column }) => {
      const handleSorting = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
      };

      return (
        <Button variant="ghost" onClick={handleSorting}>
          No
          <ArrowUpDown className="ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize ml-4">{row.index + 1}</div>,
    accessorFn: (_, rowIndex) => rowIndex + 1, // Hitung indeks secara otomatis
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="w-20 aspect-video overflow-hidden">
        <Image
          src={row.getValue("image")}
          alt={row.getValue("title")}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => <div>{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "techStack",
    header: () => <div className="text-left">Tech Stack</div>,
    cell: ({ row }) => {
      const techStack = row.getValue("techStack");

      // Pastikan techStack adalah array
      if (!Array.isArray(techStack)) {
        return <div className="text-right font-medium">Invalid data</div>;
      }

      return (
        <div className="flex gap-2">
          {techStack.map((tech, index) => (
            <div key={index} className="w-5 aspect-square">
              {tech}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className="line-clamp-2 max-w-60">{row.getValue("description")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const project = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              <Copy />
              Copy payment ID
            </DropdownMenuItem>
            <ButtonDeleteProject filePath={project.image} id={project.id} />
            <Link href={`/admin/dashboard/project/edit/${project.id}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Pencil /> Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">
              <Eye />
              View project details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
