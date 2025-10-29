// export interface Contact {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   company_name: string;
//   text: string;
// }
export interface Success {
  id: number;
  resident_companies: Residentcompanies;
  export_revenue: Residentcompanies;
  export_destinations: Residentcompanies;
  skilled_specialists: Residentcompanies;
}

export interface Residentcompanies {
  label: string;
  value: number;
}
export interface Feedback {
  id: number;
  profile_photo: string;
  full_name: string;
  address: string;
  company_name: string;
  description: string;
  rating: number;
}
	export interface NewsItem {
	 id: number;
  main_image: string;
  content_image: string;
  title: string;
  description: string;
  content: string;
  creator: string;
  minutes_to_read: number;
  created_at: string;
  slug: string;
	}
  export interface Education {
  id: number;
  image: string;
  title: string;
}
export interface Faqs {
  id: number;
  question: string;
  answer: string;
}
export interface Content {
  id: number;
  category_title: Category;
  image: string;
  content: string;
  category: number;
}
export interface Category {
  id: number;
  title: string;
}