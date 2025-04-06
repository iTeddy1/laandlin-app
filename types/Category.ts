export interface Category {
  _id: string;
  name: string;
}

export interface AddCategoryRequest {
  name: string;
}

export interface UpdateCategoryRequest {
  categoryName: string;
  newCategoryName: string;
}

export interface DeleteCategoryRequest {
  name: string;
}
