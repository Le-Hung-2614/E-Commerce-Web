import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Bản tin */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Bản tin</h3>
          <p className="text-gray-500 mb-4">
            Hãy là người đầu tiên biết về sản phẩm mới, sự kiện độc quyền và ưu đãi trực tuyến.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Đăng ký ngay và nhận giảm 10% cho đơn hàng đầu tiên của bạn.
          </p>
          {/* Form đăng ký */}
          <form className="flex">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Đăng ký
            </button>
          </form>
        </div>
        {/* Liên kết mua sắm */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Mua sắm</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Thời trang nam (áo)
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Thời trang nữ (áo)
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Thời trang nam (quần)
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Thời trang nữ (quần)
              </Link>
            </li>
          </ul>
        </div>
        {/* Hỗ trợ */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Câu hỏi thường gặp
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-color">
                Tính năng
              </Link>
            </li>
          </ul>
        </div>
        {/* Theo dõi chúng tôi */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Theo dõi chúng tôi</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="h-5 w-5"/>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="h-5 w-5"/>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="h-4 w-4"/>
            </a>
          </div>
          <p className="text-gray-500">Gọi cho chúng tôi</p>
          <p>
            <FiPhoneCall className="inline-block mr-2"/>
            0123-456-789
          </p>
        </div>
      </div>
      {/* Dưới chân trang */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-center text-gray-500 tracking-tighter text-sm">
          &copy; 2025 Tất cả quyền được bảo lưu | Được tạo với ❤️ bởi Hưng
        </p>
      </div>
    </footer>
  );
};

export default Footer;
