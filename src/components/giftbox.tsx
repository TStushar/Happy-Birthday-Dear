// GiftBox.tsx
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface GiftBoxProps {
  toggleModal: () => void;
}

const GiftBox = ({ toggleModal }: GiftBoxProps) => {
  const [step, setStep] = useState(1);
  const stepMinutes = [2000, 2000, 1000];

  const openBox = () => {
    if (step < 3) {
      // Stop incrementing after step-3
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step === 1) return;

    if (step < 3) {
      const timeoutId = setTimeout(openBox, stepMinutes[step - 1]);
      return () => clearTimeout(timeoutId);
    }
  }, [step]);

  return (
    <div
      className={`merrywrap step-${step}`}
      onClick={step === 1 ? openBox : toggleModal}
    >
      <canvas id="snowfall"></canvas>
      <div className="giftbox">
        <div className="cover">
          <div></div>
        </div>
        <div className="box"></div>
      </div>
      <div
        className="letter-card relative bg-rose text-center p-10 rounded-lg shadow-lg max-w-md lg:w-full w-[90%] text-[#2B343A] overflow-y-auto font-inter no-scrollbar"
        style={{ opacity: step === 3 ? 1 : 0, maxHeight: "80vh" }} // Limit height to 90% of the viewport
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-black text-2xl font-bold"
        >
          <IoCloseOutline className="text-lg" />
        </button>

        {/* Title */}
        <h2 className="text-3xl  font-inter mb-2">Happy birthday Dear Vedu!</h2>

        {/* Subtitle */}
        <p className="text-gray-800 mb-4 text-sm">
          to the one brought so much joy, laughter, and happiness into my life,
          the one I'm grateful for.
        </p>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Letter Content */}
        <div className="space-y-4 text-gray-900 pr-2 text-sm text-justify">
          <p>
            <strong>My Closest Friend</strong>
          </p>
          <p>
            I want you to know how special you are to me. You came into my life
            unexpectedly, but over time, you became one of the closest and most
            important people to me. You're not just my partner—you’re my truest
            friend, someone I deeply respect and care for.
          </p>
          <p>
            As we walk through life together, my only wish is for you to have
            the freedom to be yourself, pursue your dreams, and always feel
            valued and respected. I truly believe in creating a space where it’s
            just us, where we can talk about anything and everything as equals,
            as true companions.
          </p>
          <p>
            What I truly value is your ability to maintain respect for yourself
            and others while being my wife. I admire your ambition and your
            willingness to hustle hard for your dreams. It’s important to me
            that we support each other’s goals, and I hope you will always feel
            free to grow while understanding my drive to help others.
          </p>
          <p>
            Today, I celebrate you—not just for being in my life but for being
            the incredible person you are. I don’t know what the future holds,
            but in this moment, I feel lucky to have you by my side.
          </p>
          <h2> Happy Birthday once again!</h2>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
