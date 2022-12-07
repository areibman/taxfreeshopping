import type Author from "./author";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export type CountryListingType = {
  country: string;
  taxrate: string;
  minimumSpend: string;
  flag: string;
  timetoclaim: Author;
  exemptions: string;
  restrictions: string;
  checkInLuggage: string;
  carryOnLuggage: string;
};
