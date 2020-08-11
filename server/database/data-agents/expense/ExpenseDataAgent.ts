import { IExpenseDocument, ExpenseModel } from '../../data-abstracts';
import { handleErrorMessages } from '../../../../utils/dbErrorHandler';
import { DataAgent } from '../../../../utils/DataAgent';

export class ExpenseDataAgent extends DataAgent<IExpenseDocument> {
  async create(
    expenseData: IExpenseDocument,
  ): Promise<IExpenseDocument | string> {
    const expense = await ExpenseModel.create(expenseData).catch((err) => handleErrorMessages(err));

    return expense;
  }

  async list(): Promise<any> {
    return Promise.resolve(null);
  }

  async getById(): Promise<any> {
    return Promise.resolve(null);
  }

  async update(): Promise<any> {
    return Promise.resolve(null);
  }

  async delete(): Promise<any> {
    return Promise.resolve(null);
  }
}