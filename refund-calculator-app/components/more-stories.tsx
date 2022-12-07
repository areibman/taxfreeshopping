import PostPreview from "./post-preview";
import type { CountryListingType } from "../interfaces/post";

type Props = {
  posts: CountryListingType[];
};

const CountriesPages = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid">
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
