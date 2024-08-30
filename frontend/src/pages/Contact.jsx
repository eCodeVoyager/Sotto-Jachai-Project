import Container from "@/components/common/Container";

const contactData = [
  {
    id: 1,
    name: "Mohiuddin al ehsan",
    position: "Backend Developer",
    email: "work.alehsan@gmail.com",
    image: "/images/team/ehsan.png",
  },
  {
    id: 2,
    name: "Sanuar Khan",
    position: "Project manager",
    email: "khanthesanuar@gmail.com",
    image: "/images/team/sanuar.jpeg",
  },
  {
    id: 3,
    name: "MD Salman Farshi",
    position: "Frontend Developer",
    email: "devwithfarhsi@gmail.com",
    image: "/images/team/salman.png",
  },
];

const Contact = () => {
  return (
    <section className=" pt-8 md:pt-32">
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold ">Get in touch</h1>
          <ul className="mt-6 flex items-center flex-wrap justify-between *:w-full *:md:flex-1 gap-5">
            {contactData.map((item) => (
              <li
                key={item.id}
                className="mt-6 bg-custom-50 p-6 md:p-12 rounded-lg text-base flex items-center gap-5"
              >
                <figure className="shrink-0 size-24 border border-gray-500 rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full size-full object-contain"
                  />
                </figure>
                <div>
                  <h2 className="text-xl font-semibold ">{item.name}</h2>
                  <p className="mt-2">{item.position}</p>
                  <p className="mt-2">
                    <a href={`mailto:${item.email}`} target="_blank">
                      {item.email}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
