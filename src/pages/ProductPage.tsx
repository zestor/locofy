import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onShopTextClick = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  return (
    <div className="relative rounded-3xl bg-whitesmoke-100 box-border w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center gap-[40px] text-center text-base text-black font-inter border-[2px] border-solid border-gainsboro-300">
      <div className="w-[1440px] overflow-hidden flex flex-col items-center justify-start">
        <div className="relative w-[1440px] h-28 overflow-hidden shrink-0">
          <div className="absolute top-[41px] left-[96px] text-13xl tracking-[-0.01em] leading-[100%] font-medium font-newsreader text-darkolivegreen text-left">
            World Peas
          </div>
          <div className="absolute top-[45.5px] left-[744px] w-[302px] h-[21px] overflow-hidden flex flex-row items-center justify-start gap-[48px]">
            <div
              className="relative leading-[130%] cursor-pointer"
              onClick={onShopTextClick}
            >
              Shop
            </div>
            <div className="relative leading-[130%]">Newstand</div>
            <div className="relative leading-[130%]">Who we are</div>
          </div>
          <div className="absolute top-[32px] left-[1094px] w-[250px] h-12 overflow-hidden flex flex-row items-center justify-start gap-[48px]">
            <div className="relative leading-[130%]">My profile</div>
            <div className="rounded-lg bg-darkolivegreen w-[126px] h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center text-primary-contrast">
              <div className="relative leading-[130%] font-semibold">
                Basket (3)
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-contrast w-[1440px] h-[149px] overflow-hidden shrink-0 flex flex-col pt-14 px-24 pb-0 box-border items-start justify-end gap-[16px]">
          <div className="relative w-[1248px] h-[77px] overflow-hidden shrink-0">
            <div className="absolute right-[179px] bottom-[17px] rounded-xl bg-darkolivegreen w-[88px] h-10 overflow-hidden flex flex-col items-center justify-center text-primary-contrast">
              <div className="relative leading-[130%] font-semibold">
                Default
              </div>
            </div>
            <div className="absolute right-[109px] bottom-[17px] rounded-xl bg-primary-contrast box-border w-[62px] h-10 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-silver-100">
              <div className="relative leading-[130%] font-semibold">A-Z</div>
            </div>
            <div className="absolute right-[0px] bottom-[17px] rounded-xl bg-primary-contrast box-border w-[101px] h-10 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-silver-100">
              <div className="relative leading-[130%] font-semibold">
                List view
              </div>
            </div>
            <div className="absolute bottom-[17px] left-[251px] text-xl leading-[130%] text-left">
              <span className="font-medium">Fresh</span>
              <span className="font-light"> — August 21, 2023</span>
            </div>
            <div className="absolute bottom-[0px] left-[0px] text-45xl tracking-[-0.02em] leading-[120%] font-newsreader text-left">
              Produce
            </div>
          </div>
          <div className="relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1250px] h-0.5 border-t-[2px] border-solid border-gainsboro-300" />
        </div>
      </div>
      <div className="w-[1255px] h-[444px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[38px] text-left text-xl">
        <div className="w-[822px] h-[444px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[32px]">
          <div className="relative rounded-3xl bg-whitesmoke-100 box-border w-[395px] h-[444px] overflow-hidden shrink-0 border-[2px] border-solid border-gainsboro-300">
            <div className="absolute bottom-[98px] left-[24px] leading-[130%] font-semibold">
              Heirloom tomato
            </div>
            <div className="absolute bottom-[68px] left-[24px] leading-[130%] font-semibold text-darkolivegreen">
              $5.99 / lb
            </div>
            <div className="absolute bottom-[28px] left-[24px] text-base leading-[150%] text-dimgray-100">
              Grown in San Juan Capistrano, CA
            </div>
            <img
              className="absolute h-[calc(100%_-_148px)] w-full top-[0px] right-[0px] bottom-[148px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/edoneilavvdzlhdowaunsplash-1@2x.png"
            />
          </div>
          <div className="relative rounded-3xl bg-whitesmoke-100 box-border w-[395px] h-[444px] overflow-hidden shrink-0 border-[2px] border-solid border-gainsboro-300">
            <div className="absolute bottom-[98px] left-[24px] leading-[130%] font-semibold">
              Organic ginger
            </div>
            <div className="absolute bottom-[68px] left-[24px] leading-[130%] font-semibold text-darkolivegreen">
              $12.99 / lb
            </div>
            <div className="absolute bottom-[28px] left-[24px] text-base leading-[150%] text-dimgray-100">
              Grown in Huntington Beach, CA
            </div>
            <img
              className="absolute h-[calc(100%_-_148px)] w-full top-[0px] right-[0px] bottom-[148px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/noonbrewzicb4-ekmakunsplash@2x.png"
            />
          </div>
        </div>
        <div className="relative rounded-3xl bg-whitesmoke-100 box-border w-[395px] h-[444px] overflow-hidden shrink-0 border-[2px] border-solid border-gainsboro-300">
          <div className="absolute bottom-[98px] left-[24px] leading-[130%] font-semibold">
            Organic onion
          </div>
          <div className="absolute bottom-[68px] left-[24px] leading-[130%] font-semibold text-darkolivegreen">
            $15.99 / lb
          </div>
          <div className="absolute bottom-[28px] left-[24px] text-base leading-[150%] text-dimgray-100">
            Grown in Charlotte, NC
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[395px] h-[296px] object-cover"
            alt=""
            src="/k80-fkphulvmunsplash-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
