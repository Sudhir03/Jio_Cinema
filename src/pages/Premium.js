import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PremiumCard from "../components/PremiumCard";

let premium = {
  ID: "d8338924-59d5-4ce4-b086-eb766a3d6ec8",
  name: "Premium",
  Offer: "SPECIAL OFFER",
  Features: [
    "Ad-Free (except sports & live)",
    "Includes all Premium content",
    "Any 1 device at a time (up to Asli 4K quality)",
    "Download and watch anytime",
  ],
  duration: "1 MONTH",
  price: 29,
  mrp: "₹59",
  discount: "51% OFF",
};

let family = {
  ID: "9ffa47f6-df9a-443e-814d-60a4e251d570",
  name: "Family",
  Offer: "SPECIAL OFFER",
  Features: ["Enjoy all Premium plan benefits on up to 4 devices"],
  duration: "1 MONTH",
  price: 89,
  mrp: "₹149",
  discount: "40% OFF",
};

export default function Premium() {
  const images = [
    "/images/carousal_image1.avif",
    "/images/carousal_image2.avif",
    "/images/carousal_image3.avif",
    "/images/carousal_image4.avif",
    "/images/carousal_image5.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedPlanID, setSelectedPlanID] = useState(
    "d8338924-59d5-4ce4-b086-eb766a3d6ec8"
  );
  const arrowNavigate = useNavigate();
  const paymentNavigate = useNavigate();

  useEffect(() => {
    const imageDuration = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageDuration);
  });

  const handleNext = () => {
    if (currentIndex === images.length) {
      // When reaching the cloned last image (original first image)
      setIsTransitioning(false); // Disable transition for reset
      setCurrentIndex(1); // Go to the real first image
    } else {
      setIsTransitioning(true); // Enable transition for normal slides
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length + 1)); // Circular logic
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      // If we're on the cloned last slide (real first image), reset to the real first image without animation
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Navigate to the home page
  function clickHandler() {
    arrowNavigate("/");
  }

  // Navigate to the payment page
  function paymentClickHandler() {
    // check which plan is selected and pass the id of that plan
    paymentNavigate(`payment-page/plan/${selectedPlanID}`); // Relative path, to navigate within the current route
  }

  const carouselContainer = {
    width: "100wh",
    height: "calc(100vh - 76.8px)",
    overflow: "hidden", // Hide overflow to show one image at a time
    position: "relative",
  };

  const carouselImages = {
    display: "flex",
    width: `calc(100vw * ${images.length + 1})`, // Width of all images + the extra first image clone
    height: "100%",
    transform: `translateX(-${currentIndex * 100}vw)`, // Slide effect
    transition: isTransitioning ? "transform 1s ease-in-out" : "none", //
    position: "absolute",
  };

  const slide = {
    minWidth: "100vw", // Each slide takes up the full width of the carousel
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div style={carouselContainer}>
        <div
          style={carouselImages}
          onTransitionEnd={handleTransitionEnd} // Listen for transition end to reset position
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...slide,
                backgroundImage: `url(${image})`, // Background image for each slide
              }}
            />
          ))}
          {/* Clone the first slide at the end for smooth circular transition */}
          <div
            style={{
              ...slide,
              backgroundImage: `url(${images[0]})`, // First image cloned
            }}
          />
        </div>
        <div
          style={{
            zIndex: 10,
            width: "100%",
            height: "100%",
          }}
          className="scrollbar-hide absolute overflow-y-scroll pt-5 pb-3 pl-7"
        >
          <button onClick={clickHandler}>
            <ArrowLeft color="white" size={30} />
          </button>

          {/* Heading and description */}
          <div className="mt-16 px-10">
            <h1 className="text-[44px] text-white font-extrabold">
              JioCinema Premium
            </h1>
            <p className="text-white font-semibold text-[20px]">
              Entertainment Redefined - The best of Hollywood, Before TV
              premieres, Blockbuster movies, Exclusive series, India’s <br />
              biggest Kids & Family hub + 365 days of reality!
            </p>
          </div>

          {/* Premium cards */}
          <div className="px-10 pt-16 flex gap-3">
            <PremiumCard
              plan={premium}
              selectedPlanID={selectedPlanID}
              setSelectedPlanID={setSelectedPlanID}
            />
            <PremiumCard
              plan={family}
              selectedPlanID={selectedPlanID}
              setSelectedPlanID={setSelectedPlanID}
            />
          </div>

          {/* Promo code section */}
          <div className="px-10 z-10 pt-14 flex gap-7">
            <button className="flex gap-3 border-[3px] border-white py-2 px-6 rounded-3xl">
              <img
                src="./images/promocode_icon.svg"
                className="relative -bottom-1"
                alt="Promo Code"
              />
              <span className="text-white text-[20px] font-extrabold">
                Apply Promo Code
              </span>
            </button>

            <button
              onClick={paymentClickHandler}
              className="bg-[#D900D8] py-2 px-8 rounded-3xl"
            >
              <span className="text-white text-[20px] font-extrabold">
                Continue & Pay
              </span>
            </button>
          </div>

          {/* Footer */}
          <footer className="px-10 mt-4">
            <p className="text-white/60">
              By continuing you agree to our{" "}
              <span className="underline cursor-pointer">Terms of Use</span> and
              acknowledge that you have
              <br />
              read our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
            <span className="text-[20px] font-bold text-white">
              Already Subscribed?{" "}
              <span className="underline cursor-pointer">Login Here</span>
            </span>
          </footer>
        </div>
      </div>

      {/* This will render the PaymentPage component */}
      <Outlet></Outlet>
    </div>
  );
}
