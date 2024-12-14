import Heading from "@/components/heading";
import { useEffect, useState } from "react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "First Meeting",
    date: "April 08, 2019",
    description: "That Hi...! आणि बिचारा साधा भोळा मी ...🤭",
    image: "../../../public/img/1.jpg", // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 2,
    title: "First Messege",
    date: "June, 2019",
    description:
      "अरे सॉरी सॉरी 🤭 तो तर तू मामांना केला होतास नाही का? 🤣 वेडूच  आहेस ग तू 😂",
    image: "../../../public/img/2.jpg", // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 3,
    title: "First Call",
    date: "December 15, 2023",
    description:
      "It took 4.5 years to make our first call...How slow you are...😒",
    image: "../../../public/img/3.jpg",
  },
  {
    id: 4,
    title: "Second Call",
    date: "Feb 29, 2024",
    description:
      "घरी कुणी नाही म्हणे,  मग का केला कॉल? आपण काय 'Couples' आहोत का कुणी नसताना कॉल करायला? तरी सांगितलं होत 'I save my photos on Drive', कशाला बॅकअप व्हायचं होत!",
    image: "../../../public/img/4.jpeg",
  },
  {
    id: 5,
    title: "Expressing...",
    date: "May 15, 2024",
    description:
      "This was forth call and I don't think was needed. काही सांगता हि नाही आलं तुला, डरपोक. मी असतो तर बोललो असतो सरळ सरळ. पण आपण तर मित्र आहोत न? हो न?",
    image: "../../../public/img/5.jpg",
  },
];

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    timelineData[0] || null
  );

  const handleClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <section className="overflow-hidden">
          <div className="mt-28">
            <Heading
              title="timeline"
              subtitle="हे सगळं तुझ्या मुळे झालं आहे ...🤭😁"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 lg:items-center px-5 lg:p-8 mb-16">
            {/* Timeline Section */}
            <div className="flex flex-col  lg:mr-8 relative lg:w-1/2">
              {timelineData.map((event, index) => (
                <div key={event.id} className="flex items-center mb-6 relative">
                  {/* Garis antara lingkaran */}
                  {index !== timelineData.length - 1 && (
                    <div className="absolute left-2.5 top-[2.3rem] h-full w-[2px] bg-rose z-10"></div>
                  )}

                  <div
                    onClick={() => handleClick(event)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${
                      selectedEvent?.id === event.id ? "bg-mandy" : "bg-rose"
                    }`}
                  ></div>
                  <div
                    className="ml-4 text-left cursor-pointer"
                    onClick={() => handleClick(event)}
                  >
                    <h3
                      className={`${
                        selectedEvent?.id === event.id
                          ? "text-mandy font-semibold"
                          : "text-gray-800"
                      } text-lg`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`${
                        selectedEvent?.id === event.id
                          ? "text-mandy/70"
                          : "text-gray-500"
                      }`}
                    >
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Display Card Section */}
            <div className="flex-1 lg:w-1/2">
              {selectedEvent && (
                <div
                  className="text-white bg-mandy rounded-2xl p-6 max-w-sm cursor-pointer"
                  onClick={() => handleClick(selectedEvent)}
                >
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="rounded-xl mb-4 w-full object-cover h-75"
                  />
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-sm text-white">{selectedEvent.date}</p>
                  <p className="mt-4 text-white">{selectedEvent.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
