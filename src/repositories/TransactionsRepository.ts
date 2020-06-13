/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transactionReduce) => { return total += transactionReduce.value }, 0);

    const outcome = this.transactions
      .filter((transaction) => transaction.type === 'outcome')
      .reduce((total, transactionReduce) => { return total += transactionReduce.value }, 0);

    console.log(outcome);

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
