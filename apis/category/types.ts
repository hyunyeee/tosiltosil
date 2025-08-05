// GET /api/v1/categories
export interface Category {
  categoryId: number;
  title: string;
  color: string;
  orderIndex: number;
}

// POST /api/v1/categories
export interface CreateCategoryPayload {
  title: string;
  color: string;
}

// PATCH /api/v1/categories/{id}
export interface UpdateCategoryPayload {
  categoryId: number;
  data: {
    title: string;
    color: string;
  };
}

// PATCH /api/v1/categories/{id}/change-order
export interface UpdateCategoryOrderPayload {
  categoryId: number;
  data: {
    nextOrderIndex: number;
  };
}
