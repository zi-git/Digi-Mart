import productList from "../Data/products";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import categoriesData from "../Data/category";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#9ca3af66", // Tailwind's gray-800
        color: "#fff",
        borderRadius: "20px",
        width: "5vw",
        maxWidth: "50px",
        height: "70%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        zIndex: 10,
        marginRight: "1.5rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "	#37415180")} // gray-700
      onMouseLeave={(e) => (e.currentTarget.style.background = "#9ca3af66")} // back to gray-800
    >
      ►
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#9ca3af66", // Tailwind's gray-800
        color: "#fff",
        borderRadius: "20px",
        width: "5vw",
        maxWidth: "50px",
        height: "70%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        zIndex: 10,
        marginLeft: "1.5rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "	#37415180")} // gray-700
      onMouseLeave={(e) => (e.currentTarget.style.background = "#9ca3af66")} // back to gray-800
    >
      ►
    </div>
  );
}

const Home = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="w-full h-screen  flex flex-col justify-between items-center gap-10 sm:pt-0 pt-1 scroll-smooth">
       
        <div className="w-full md:w-[80%] pb-10">
          <Slider {...settings} className="">
            {categoriesData.map((category) => (
              <div key={category.id}>
               <Link to={`/category/${category.id}`}>
                 <img src={category.Icon} alt={category.title} className="" />
               </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div >
          <div className="w-full md:w-[80vw] mx-auto md:flex items-center justify-between overflow-scroll gap-4 mt-10 text whitespace-nowrap">
            {productList.slice(0, 8).map((product) => (
              <div key={product.id} className=" w-2xs bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
