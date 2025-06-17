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
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="w-full bg-[#f7f9fb] flex flex-col justify-between items-center gap-10 sm:pt-0 pt-1 scroll-smooth">
        <div className="w-full lg:w-[80%] md:w-[90%] sm:w-[95%] pb-10">
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

        <div className="w-full px-4 md:px-10 py-6 lg:w-[80%] mx-auto space-y-12">
          {/* SECTION COMPONENT */}
          {[
            {
              title: "Today's Deals - 30% Off",
              start: 0,
              end: 4,
              discount: 0.3,
            },
            { title: "Top Picks - 50% Off", start: 4, end: 8, discount: 0.5 },
            {
              title: "Recommended for You - 10% Off",
              start: 8,
              end: 12,
              discount: 0.1,
            },
          ].map((section, i) => (
            <div key={i}>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {section.title}
              </h1>
              <div className="w-full flex overflow-x-auto gap-4 p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                {productList
                  .slice(section.start, section.end)
                  .map((product, index) => {
                    const originalPrice = (
                      product.price /
                      (1 - section.discount)
                    ).toFixed(2);
                    const discountPercent = Math.round(section.discount * 100);

                    return (
                      <div
                        key={product.id}
                        className="min-w-[200px] md:min-w-[220px] bg-white p-4 rounded-md 
                         shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
                      >
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[160px] object-contain mb-3 bg-white"
                          />
                          <h3 className="text-base font-semibold text-gray-800 truncate">
                            {product.name}
                          </h3>
                          <div className="text-sm mt-1">
                            <span className="text-red-600 font-bold">
                              ₹{product.price}
                            </span>
                            <span className="text-gray-400 line-through ml-2">
                              ₹{originalPrice}
                            </span>
                            <span className="text-green-600 ml-2 font-medium">
                              {discountPercent}% off
                            </span>
                          </div>
                          <div className="text-yellow-400 text-xs mt-1">
                            ★★★★☆
                          </div>
                          <p className="text-gray-500 text-xs mt-1 truncate">
                            {product.description}
                          </p>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
