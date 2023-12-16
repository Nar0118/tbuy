interface ICompany {
  id: string | number;
  name: string;
  logo: string;
}

type SubcategoryType = Omit<ICompany, "logo">;

export interface IProducts {
  id: string;
  company: ICompany;
  images: Array<string>;
  name: Array<string>;
  price: Array<string>;
}

export interface ICategories {
  id: string;
  company: ICompany;
  logo: string;
  name: string;
  subcategory: SubcategoryType;
}

interface IStates {
  searchTerm: string;
  products: Array<IProducts>;
  suggestedSearches: Array<string>;
  categories: Array<ICategories>;
}

export type SearchType = {
  search: IStates;
};
