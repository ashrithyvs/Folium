import { useHistory } from "react-router-dom";

const Templates = (props) => {
  let history = useHistory();

  const templatesMeta = [
    {
      image:
        "https://images.creativemarket.com/0.1.0/ps/4005388/580/387/m1/fpnw/wm0/01_frontcover-.jpg?1518611018&s=a2954e5d75bb23ad2ac167bd03284b72",
      title: "Template 1",
      text: "Soft Theme",
      slug: "/template-one",
    },
    {
      image:
        "https://stockindesign.com/wp-content/uploads/edd/2017/04/138_header.jpg",
      title: "Template 2",
      text: "Soft Theme",
      slug: "/template-two",
    },
    {
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/joomla-portfolio-templates.jpg",
      title: "Template 3",
      text: "Photography Theme",
      slug: "/template-three",
    },
    {
      image: "https://s3.envato.com/files/238075824/Ben.__large_preview.png",
      title: "Template 4",
      text: "Motion Theme",
      slug: "/template-four",
    },
    {
      image:
        "https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0674NL1.png?v=1.0.2",
      title: "Template 5",
      text: "Scattered Theme",
      slug: "/template-five",
    },
    {
      image:
        "https://moozthemes.com/media/largeimage/1/adobe-muse-busines-templates.jpg",
      title: "Template 6",
      text: "Sleek Theme",
      slug: "/template-six",
    },
  ];

  const renderCard = (card, idx) => {
    return (
      <div
        key={idx}
        className="w-1/3 h-[60%] cursor-pointer text-center bg-[#1b2232] rounded-2xl m-4 flex flex-col items-center justify-start space-y-6"
        onClick={() => history.push(card.slug)}
      >
        <img
          alt=""
          className="w-full"
          src={card.image || "holder.js/100px180"}
        />
        <div className="bg-transparent">
          <h4 className="bg-transparent">{card.title}</h4>
          <p className="bg-transparent">{card.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap w-2/3 mx-auto justify-center min-h-[90vh] my-6">
        {templatesMeta.map(renderCard)}
      </div>
    </div>
  );
};

export default Templates;
