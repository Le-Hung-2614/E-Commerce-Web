import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl tracking-tighter font-bold uppercase mb-4">
            Sẵn sàng <br /> Du lịch
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Khám phá những bộ trang phục du lịch với dịch vụ giao hàng toàn cầu nhanh chóng.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Mua ngay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
