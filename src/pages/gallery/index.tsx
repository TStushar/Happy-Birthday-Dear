import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Heading from "@/components/heading";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    id: 1,
    src: "../../../public/img/vedu's_bday_wishesh.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "../../../public/img/vedu's_bday_wishesh_2.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "../../../public/img/logo.png",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "../../../public/img/VeduAurMain2.jpeg",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "../../../public/img/VeduAurMain 6.jpg",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/74/e8/37/74e8372371b880d73ccd8132a8a0a59a.jpg",
    alt: "Image 6",
  },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openSlider = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeSlider = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex! - 1 + images.length) % images.length
      );
    }
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  // Add event listener for 'Esc' key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSlider();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle clicking outside of the image to close the modal
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "modal-overlay") {
      closeSlider();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mb-32">
        <div className="container mx-auto px-4 lg:px-24">
          <section className="overflow-hidden text-gray-700">
            <div className="mt-28 mb-8">
              <Heading title="gallery" subtitle="lorem ipsum" />
            </div>
            <div className="flex flex-wrap -m-1 md:-m-2">
              {/* Left Column */}
              <div className="flex flex-wrap w-full md:w-1/2">
                {images.slice(0, 3).map((image, index) => (
                  <div
                    key={image.id}
                    className={`${index === 2 ? "w-full" : "w-1/2"} p-1 md:p-2`}
                    onClick={() => openSlider(index)}
                  >
                    <img
                      alt={image.alt}
                      className="block object-cover object-center w-full h-64 rounded-lg cursor-pointer"
                      src={image.src}
                    />
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-wrap w-full md:w-1/2">
                {images.slice(3).map((image, index) => (
                  <div
                    key={image.id}
                    className={`${index === 0 ? "w-full" : "w-1/2"} p-1 md:p-2`}
                    onClick={() => openSlider(index + 3)}
                  >
                    <img
                      alt={image.alt}
                      className="block object-cover object-center w-full h-64 rounded-lg cursor-pointer"
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Slider Modal */}
      {selectedImageIndex !== null && (
        <div
          id="modal-overlay"
          className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={handleOutsideClick}
          {...handlers}
        >
          <div
            className="relative max-w-5xl mx-auto p-4 flex items-center space-x-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Thumbnail */}
            <div className="w-1/4">
              <img
                src={
                  images[
                    (selectedImageIndex - 1 + images.length) % images.length
                  ].src
                }
                alt={
                  images[
                    (selectedImageIndex - 1 + images.length) % images.length
                  ].alt
                }
                className="rounded-lg object-cover cursor-pointer opacity-70 h-40"
                onClick={prevImage}
              />
            </div>

            {/* Center Image */}
            <div className="w-2/4">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="rounded-lg object-cover max-w-full max-h-[80vh]"
              />
            </div>

            {/* Right Thumbnail */}
            <div className="w-1/4">
              <img
                src={images[(selectedImageIndex + 1) % images.length].src}
                alt={images[(selectedImageIndex + 1) % images.length].alt}
                className="rounded-lg object-cover cursor-pointer opacity-70 h-40"
                onClick={nextImage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
