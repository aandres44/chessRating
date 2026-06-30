"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { PlayerDetail } from "@/types/Player"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<PlayerDetail>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: "Jugador",
  },
  {
    accessorKey: "fed",
    header: "Federacion",
  },
  {
    accessorKey: "club",
    header: "Club",
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full justify-center h-8"
          onClick={(e) => { e.stopPropagation();column.toggleSorting(column.getIsSorted() === "asc")}}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "sex",
    header: "Genero",
  },
  {
    accessorKey: "category",
    header: "Categotia",
  },
  {
    accessorKey: "title",
    header: "Titulo",
  },
]