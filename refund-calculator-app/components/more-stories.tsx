import PostPreview from "./post-preview";
import type { PostType, CountryListingType } from "../interfaces/post";

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
            flag={post.flag}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesPages;
