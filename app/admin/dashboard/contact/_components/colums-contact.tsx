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
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Copy, Eye, MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";
import ButtonDeleteContact from "./button-delete-contact";
import { Contact } from "@/types/contact-type";

export const columns: ColumnDef<Contact>[] = [
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
        <Button className="w-fit" variant="ghost" onClick={handleSorting}>
          No
          <ArrowUpDown className="ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize ml-4">{row.index + 1}</div>,
    accessorFn: (_, rowIndex) => rowIndex + 1, // Hitung indeks secara otomatis
  },
  {
    accessorKey: "icon",
    header: () => <div className="text-left">Icon</div>,
    cell: ({ row }) => (
      <div className="w-6 aspect-square dark:bg-foreground">
        <Image
          src={row.getValue("icon")}
          alt={row.getValue("label")}
          width={50}
          height={50}
          className="text-current"
        />
      </div>
    ),
  },
  {
    accessorKey: "label",
    header: "Label",
    cell: ({ row }) => <div>{row.getValue("label")}</div>,
  },
  {
    accessorKey: "url",
    header: "Url",
    cell: ({ row }) => <div>{row.getValue("url")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const contact = row.original;

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
              onClick={() => navigator.clipboard.writeText(contact.id)}
            >
              <Copy />
              Copy payment ID
            </DropdownMenuItem>
            <ButtonDeleteContact filePath={contact.icon} id={contact.id} />
            <Link href={`/admin/dashboard/contact/edit/${contact.id}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Pencil /> Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">
              <Eye />
              View contact details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
