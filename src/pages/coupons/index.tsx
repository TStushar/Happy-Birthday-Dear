import FlipCard from "@/components/flip-card";
import Heading from "@/components/heading";
import { useEffect } from "react";

const coupons = [
  {
    code: "Example Giftcard Code",
    front: "coupon/image.png",
    back: "coupon/image.png",
  },
  {
    code: "Example Giftcard Code",
    front: "coupon/image.png",
    back: "coupon/image.png",
  },
];

const Coupons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#FCFCFE]">
        <div className="container mx-auto px-4 lg:px-24 ">
          <section className="overflow-hidden text-gray-700">
            <div className="mt-28">
              <Heading title="coupons" subtitle="for your special day &lt;3" />
            </div>
            <section className="font-inter ">
              <h3 className="font-semibold my-5">Hopefully &#x1F91E;</h3>
              <p className="font-light text-sm">
                Hopefully, we will meet soon, and I can’t wait to use these
                coupons with you. Spending time together is always special, and
                I look forward to creating even more beautiful memories with
                you. You mean so much to me, and every moment we share is a gift
                I truly treasure.
              </p>
            </section>

            <div className="mt-8 grid lg:grid-cols-2 gap-2 space-y-10 md:space-y-0 mb-32">
              {coupons.map((coupon) => (
                <FlipCard
                  key={coupon.code}
                  front={coupon.front}
                  back={coupon.back}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Coupons;
