"use client";

import { Badge } from "@/src/app/_components/ui/badge";
import {
  TransacionCategory,
  Transaction,
  TransactionType,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import {
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Car,
  GraduationCap,
  HeartPulse,
  Home,
  House,
  MoreHorizontal,
  Plug,
  Popcorn,
  TrendingUp,
  TrendingUpDown,
  Utensils,
  Wallet,
} from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="items-center rounded-full bg-red-950 text-red-400">
            <BanknoteArrowDown /> Despesa
          </Badge>
        );
      }
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="text-primary items-center rounded-full bg-green-950">
            <BanknoteArrowUp /> Receita
          </Badge>
        );
      } else {
        return (
          <Badge className="rounded-full bg-blue-950 text-blue-400">
            <TrendingUp />
            Investimento
          </Badge>
        );
      }
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.category === TransacionCategory.HOUSING) {
        return (
          <p className="flex items-center gap-1 text-cyan-500">
            <Home size={"1rem"} />
            Moradia
          </p>
        );
      }
      if (transaction.category === TransacionCategory.TRANSPORTATION) {
        return (
          <p className="flex items-center gap-1 text-yellow-500">
            <Car size={"1rem"} />
            Transporte
          </p>
        );
      }
      if (transaction.category === TransacionCategory.FOOD) {
        return (
          <p className="flex items-center gap-1 text-green-500">
            <Utensils size={"1rem"} />
            Alimentação
          </p>
        );
      }
      if (transaction.category === TransacionCategory.ENTERTAINMENT) {
        return (
          <p className="flex items-center gap-1 text-purple-500">
            <Popcorn size={"1rem"} />
            Entretenimento
          </p>
        );
      }
      if (transaction.category === TransacionCategory.HEALTH) {
        return (
          <p className="flex items-center gap-1 text-pink-500">
            <HeartPulse size={"1rem"} />
            Saúde
          </p>
        );
      }
      if (transaction.category === TransacionCategory.UTILITY) {
        return (
          <p className="flex items-center gap-1 text-blue-500">
            <Plug size={"1rem"} />
            Utilitário
          </p>
        );
      }
      if (transaction.category === TransacionCategory.SALARY) {
        return (
          <p className="flex items-center gap-1 text-emerald-500">
            <Wallet size={"1rem"} />
            Salário
          </p>
        );
      }
      if (transaction.category === TransacionCategory.EDUCATION) {
        return (
          <p className="flex items-center gap-1 text-indigo-500">
            <GraduationCap size={"1rem"} />
            Educação
          </p>
        );
      } else {
        return (
          <p className="flex items-center gap-1 text-gray-500">
            <MoreHorizontal size={"1rem"} />
            Outros
          </p>
        );
      }
    },
  },
  {
    accessorKey: "paymentsMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
