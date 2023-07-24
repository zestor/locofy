import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCart: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTomatoContainerClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onWorldPeasTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-primary-contrast w-full h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div
        className="absolute w-[calc(100%_-_619px)] top-[301px] right-[523px] left-[96px] rounded-3xl bg-whitesmoke-100 box-border h-[159px] overflow-hidden cursor-pointer border-[2px] border-solid border-gainsboro-300"
        onClick={onTomatoContainerClick}
      >
        <div className="absolute top-[24px] left-[184px] leading-[130%] font-semibold">
          Heirloom tomato
        </div>
        <div className="absolute top-[24px] right-[24px] leading-[130%] font-semibold text-right">
          $5.99
        </div>
        <div className="absolute top-[54px] left-[184px] leading-[130%] font-semibold text-darkolivegreen">
          $5.99 / lb
        </div>
        <div className="absolute bottom-[24px] left-[184px] rounded-xl bg-primary-contrast box-border w-32 h-10 overflow-hidden text-base border-[2px] border-solid border-gray-500">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[16px] leading-[130%] font-semibold">
            1 lb
          </div>
          <img
            className="absolute top-[calc(50%_-_16px)] right-[8px] w-8 h-8"
            alt=""
            src="/icon.svg"
          />
        </div>
        <img
          className="absolute h-[calc(100%_+_1px)] top-[0px] bottom-[-1px] left-[0px] max-h-full w-40 object-cover"
          alt=""
          src="/edoneilavvdzlhdowaunsplash-11@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_619px)] top-[491px] right-[523px] left-[96px] rounded-3xl bg-whitesmoke-100 box-border h-[159px] overflow-hidden border-[2px] border-solid border-gainsboro-300">
        <div className="absolute top-[24px] left-[184px] leading-[130%] font-semibold">
          Organic ginger
        </div>
        <div className="absolute top-[54px] left-[184px] leading-[130%] font-semibold text-darkolivegreen">
          $12.99 / lb
        </div>
        <div className="absolute bottom-[24px] left-[184px] rounded-xl bg-primary-contrast box-border w-32 h-10 overflow-hidden text-base border-[2px] border-solid border-gray-500">
          <b className="absolute top-[calc(50%_-_10.5px)] left-[16px] leading-[130%]">
            0.5 lb
          </b>
          <img
            className="absolute top-[calc(50%_-_16px)] right-[8px] w-8 h-8"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="absolute top-[24px] right-[24px] leading-[130%] font-semibold text-right">
          $6.50
        </div>
        <img
          className="absolute h-[calc(100%_+_1px)] top-[0px] bottom-[-1px] left-[0px] max-h-full w-40 object-cover"
          alt=""
          src="/noonbrewzicb4-ekmakunsplash1@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_619px)] top-[681px] right-[523px] left-[96px] rounded-3xl bg-whitesmoke-100 box-border h-[159px] overflow-hidden border-[2px] border-solid border-gainsboro-300">
        <div className="absolute top-[24px] left-[184px] leading-[130%] font-semibold">
          Sweet onion
        </div>
        <div className="absolute top-[54px] left-[184px] leading-[130%] font-semibold text-darkolivegreen">
          $2.99 / lb
        </div>
        <div className="absolute bottom-[24px] left-[184px] rounded-xl bg-primary-contrast box-border w-32 h-10 overflow-hidden text-base border-[2px] border-solid border-gray-500">
          <b className="absolute top-[calc(50%_-_10.5px)] left-[16px] leading-[130%]">
            5 lb
          </b>
          <img
            className="absolute top-[calc(50%_-_16px)] right-[8px] w-8 h-8"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="absolute top-[24px] right-[24px] leading-[130%] font-semibold text-right">
          $14.95
        </div>
        <img
          className="absolute h-[calc(100%_+_1px)] top-[0px] bottom-[-1px] left-[0px] max-h-full w-40 object-cover"
          alt=""
          src="/k80-fkphulvmunsplash-2@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_1045px)] top-[301px] right-[96px] left-[949px] rounded-3xl bg-whitesmoke-100 box-border h-[318px] overflow-hidden text-base border-[2px] border-solid border-gainsboro-300">
        <div className="absolute top-[24px] left-[24px] text-xl leading-[130%] font-semibold">
          Order summary
        </div>
        <div className="absolute top-[82px] left-[24px] leading-[130%]">
          Subtotal
        </div>
        <div className="absolute top-[82px] right-[24px] leading-[130%] text-right">
          $27.44
        </div>
        <div className="absolute top-[119px] left-[24px] leading-[130%]">
          Shipping
        </div>
        <div className="absolute top-[119px] right-[24px] leading-[130%] text-right">
          $3.99
        </div>
        <div className="absolute top-[156px] left-[24px] leading-[130%]">
          Tax
        </div>
        <div className="absolute top-[156px] right-[24px] leading-[130%] text-right">
          $2.00
        </div>
        <div className="absolute top-[193px] left-[24px] leading-[130%] font-semibold">
          Total
        </div>
        <div className="absolute top-[190px] right-[24px] leading-[130%] font-semibold text-right">
          $33.43
        </div>
        <div className="absolute w-[calc(100%_-_48px)] right-[24px] bottom-[24px] left-[24px] rounded-lg bg-darkolivegreen h-12 overflow-hidden text-primary-contrast">
          <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[130%] font-semibold">
            Continue to payment
          </div>
          <img
            className="absolute top-[calc(50%_-_16px)] right-[16px] w-8 h-8 overflow-hidden"
            alt=""
            src="/icon1.svg"
          />
        </div>
      </div>
      <div className="absolute w-full top-[112px] right-[0px] left-[0px] bg-primary-contrast h-[149px] overflow-hidden">
        <div className="absolute bottom-[33px] left-[301px] leading-[130%] font-light">
          3 items
        </div>
        <div className="absolute bottom-[16px] left-[96px] text-45xl tracking-[-0.02em] leading-[120%] font-newsreader">
          Basket
        </div>
        <div className="absolute w-[calc(100%_-_190px)] right-[95px] bottom-[-1px] left-[95px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border h-0.5 border-t-[2px] border-solid border-gainsboro-300" />
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-28 overflow-hidden text-center text-base">
        <div
          className="absolute top-[41px] left-[96px] text-13xl tracking-[-0.01em] leading-[100%] font-medium font-newsreader text-darkolivegreen text-left cursor-pointer"
          onClick={onWorldPeasTextClick}
        >
          World Peas
        </div>
        <div className="absolute top-[45.5px] right-[657px] leading-[130%]">
          Shop
        </div>
        <div className="absolute top-[45.5px] right-[532px] leading-[130%]">
          Newstand
        </div>
        <div className="absolute top-[45.5px] right-[394px] leading-[130%]">
          Who we are
        </div>
        <div className="absolute top-[45.5px] right-[270px] leading-[130%]">
          My profile
        </div>
        <div className="absolute top-[32px] right-[96px] rounded bg-darkolivegreen w-[126px] h-12 overflow-hidden text-primary-contrast">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_40px)] leading-[130%] font-semibold">
            Basket (3)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
