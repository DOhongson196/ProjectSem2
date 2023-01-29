import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { MailIcon } from '../../../components/Icons';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <div className="px-32 pt-12 w-full bg-[#FAFAFA] dark:bg-[#0b0e11] text-base font-normal text-[#707a8a] dark:text-[#848e9c] leading-5 ">
      <div className="flex">
        <div className="w-[25%] pb-6">
          <img className="mt-9 select-none" src={images.logo} alt="Binance" />
          <div className=" w-5/6 mt-7">Please contact us if you have any specific idea or request.</div>
          <div className="flex items-center   ">
            <MailIcon />
            <div className="underline ml-2">nft@binance.com</div>
          </div>
        </div>
        <div className="w-3/5 pb-6 flex">
          <div className="w-1/4">
            <FooterItem heading>About Us</FooterItem>
            <FooterItem content>About Binance</FooterItem>
            <FooterItem content>Careers</FooterItem>
            <FooterItem content>Binance Blog</FooterItem>
            <FooterItem content>Community</FooterItem>
            <FooterItem content>Terms</FooterItem>
          </div>
          <div className="w-1/4">
            <FooterItem heading>Products</FooterItem>
            <FooterItem content>Exchange</FooterItem>
            <FooterItem content>Binance Charity Foundation</FooterItem>
            <FooterItem content>Academy</FooterItem>
          </div>
          <div className="w-1/4">
            <FooterItem heading>Service</FooterItem>
            <FooterItem content>Buy Crypto</FooterItem>
          </div>
          <div className="w-1/4">
            <FooterItem heading>Support</FooterItem>
            <FooterItem content>FAQ</FooterItem>
            <FooterItem content>Help Center</FooterItem>
            <FooterItem content>Give us a feedback</FooterItem>
            <FooterItem content>What is NFT</FooterItem>
          </div>
        </div>
        <div className="w-[15%]">
          <FooterItem heading>Community</FooterItem>
          <div className="flex text-2xl text-[#B7BDC6] dark:text-[#848e9c]">
            <div className="cursor-pointer hover:text-textColor dark:hover:text-[#eaecef]">
              <FontAwesomeIcon icon={faTelegram} />
            </div>
            <div className="mx-6 cursor-pointer hover:text-textColor dark:hover:text-[#eaecef]">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="cursor-pointer hover:text-textColor dark:hover:text-[#eaecef]">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6">
        <div className="text-center text-xs">Binance © 2023</div>
      </div>
    </div>
  );
}

export default Footer;
