import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import { CountryListingType } from "../interfaces/post";

type Props = {
  country: string;
  taxrate: string;
  minimumSpend: number;
  currency: string;
  flag: string;
};

const PostPreview = ({
  country,
  taxrate,
  minimumSpend,
  currency,
  flag,
}: Props) => {
  return (
    // thin rows containing the country nane, flag, and tax rate
    <div className="flex flex-row items-center justify-between w-full h-16 border-b border-gray-200">
      <div className="flex flex-row items-center justify-start w-1/2">
        <div className="flex flex-row items-center justify-start w-1/2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {flag} {country}
          </h3>
        </div>
      </div>
      <div className="flex flex-row items-center w-1/2">
        <div className="flex flex-row items-center w-1/2">
          <p className="text-lg leading-relaxed mb-4">{taxrate}</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-1/2">
        <div className="flex flex-row items-center w-1/2">
          <p className="text-lg leading-relaxed mb-4">
            {minimumSpend.toLocaleString()}
            {currency}
          </p>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link
    //       as={`/posts/${slug}`}
    //       href="/posts/[slug]"
    //       className="hover:underline"
    //     >
    //       {title}
    //     </Link>
    //   </h3>

    //   <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    // </div>
  );
};

export default PostPreview;
