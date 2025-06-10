import { Plus } from "lucide-react";
import Header from "../../_components/header";
import { Button } from "../../_components/ui/button";
import { db } from "../../_lib/prisma";
import { DataTable } from "../../_components/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="my-6 flex items-center justify-between p-1">
          <h1 className="text-1xl font-semibold">Minhas transações</h1>
          <Button className="bg-primary hover:bg-primary/80 rounded-4xl">
            <Plus />
            Adicionar transação
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
