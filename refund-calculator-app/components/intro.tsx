import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="justify-center text-center mt-16 mb-16 ">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        VAT Refund Calculator.
      </h1>
      <label className="text-2xl md:text-xl m-3">
        <input type="text" placeholder="Country" className="text-center" />
      </label>
      <label className="text-2xl md:text-xl">
        <input type="text" placeholder="Spend amount" className="text-center" />
      </label>
    </section>
  );
};

export default Intro;
