import { CategoryModel, ICategoryDocument, ICategoryModel } from '../../data-abstracts';
import { BaseDataAgent } from '../../../../utils/BaseDataAgent';

/**
 * TODO: consider implementing the DataRepository interface instead of extending BaseDataRepository
 * since that means we are inheriting functionality that we don't need at the moment
 * such as (update, delete) functionality
 */
export class CategoryDataAgent extends BaseDataAgent<ICategoryDocument> {
  private categoryModel: ICategoryModel;

  constructor() {
    super(CategoryModel);
    this.categoryModel = CategoryModel;
  }

  async list(): Promise<ICategoryDocument[]> {
    const results = await this.categoryModel.find({
      createdByAdmin: true,
    });

    return results;
  }

  async listByUser(userId: string): Promise<ICategoryDocument[]> {
    const results = await this.categoryModel.find({
      user: userId,
    });

    return results;
  }
}
