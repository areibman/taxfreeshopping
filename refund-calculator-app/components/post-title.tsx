import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h4 className="text-md font-bold tracking-tighter leading-tight mb-12">
      {children}
    </h4>
  );
};

export default PostTitle;
