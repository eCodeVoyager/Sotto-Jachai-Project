import Container from "@/components/common/Container";
import { featuresOFProject } from "@/data/about.data";

const About = () => {
  return (
    <section className=" py-12 md:pt-32">
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold capitalize ">
            About this project
          </h1>
          <p className="text-base md:text-lg mt-4 leading-7 text-justify max-w-4xl">
            Sotto-Jachai is a secure system designed to prevent propaganda and
            false information, particularly during mass protests. Utilizing the
            MERN stack (MongoDB, Express.js, React.js, Node.js) and advanced
            cryptography with 128-bit small hashing, the system ensures data
            integrity and security. Organizers can log in, submit content, and
            the data is hashed and verified by an admin team. Users can then
            verify the content using a key, ensuring that only truthful and
            validated information is shared.
          </p>
          <div className="mt-6 md:mt-12">
            <h3 className="text-xl md:text-3xl font-semibold capitalize ">
              🚀 Features
            </h3>
            <ul className="pl-3 mt-6 space-y-3">
              {featuresOFProject.map((feature) => (
                <li key={feature.id} className="list-disc text-sm md:text-base">
                  <p className="mt-2">
                    <span className="font-semibold">{feature.title}</span> :{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
