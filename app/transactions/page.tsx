import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/* TITULO E BOTAO */}
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
