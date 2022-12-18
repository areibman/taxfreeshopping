import PostPreview from "./post-preview";
import type { CountryListingType } from "../interfaces/post";

type Props = {
  posts: CountryListingType[];
};

const CountriesPages = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid">
        <div className="flex flex-row items-center justify-between w-full h-16 border-b border-gray-200">
          <div className="flex flex-row items-center justify-start w-1/2">
            <div className="flex flex-row items-center justify-start w-1/2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Country
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-center w-1/2">
            <div className="flex flex-row items-center w-1/2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Tax Rate
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-center w-1/2">
            <div className="flex flex-row items-center w-1/2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Minimum Spend
              </h3>
            </div>
          </div>
        </div>

        {posts.map((post) => (
          <PostPreview
            country={post.country}
            taxrate={post.taxrate}
            minimumSpend={post.minimumSpend}
            currency={post.currency}
            flag={post.flag}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesPages;
