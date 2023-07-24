import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/shopping-cart");
  }, [navigate]);

  return (
    <div className="relative bg-primary-contrast w-full h-[2092px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute w-[calc(100%_-_420px)] top-[279px] left-[217px] text-45xl tracking-[-0.02em] leading-[120%] text-center inline-block font-newsreader">
        <span>{`We’re `}</span>
        <i>farmers</i>
        <span>{`, `}</span>
        <i>purveyors</i>
        <span>{`, and `}</span>
        <i>eaters</i>
        <span> of organically grown food.</span>
      </div>
      <div className="absolute top-[481px] left-[calc(50%_-_113px)] rounded-lg bg-darkolivegreen w-[227px] h-16 overflow-hidden text-primary-contrast">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_81.5px)] leading-[130%] font-semibold">
          Browse our shop
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-28 overflow-hidden text-13xl text-darkolivegreen font-newsreader">
        <div className="absolute top-[41px] left-[96px] w-[687px] h-8 overflow-hidden">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[100%] font-medium">
            World Peas
          </div>
          <div className="absolute top-[4.5px] right-[0px] text-base leading-[130%] font-inter text-black text-center">
            Shop
          </div>
        </div>
        <div className="absolute top-[32px] left-[831px] w-[501px] h-12 overflow-hidden text-center text-base text-primary-contrast font-inter">
          <div
            className="absolute top-[0px] left-[375px] w-[126px] h-12 cursor-pointer"
            onClick={onFrameContainer1Click}
          >
            <div className="absolute top-[0px] right-[0px] rounded-lg bg-darkolivegreen shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[126px] h-12 overflow-hidden">
              <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_40px)] leading-[130%] font-semibold">
                Basket (3)
              </div>
            </div>
          </div>
          <div className="absolute top-[13.5px] left-[0px] w-[339px] h-[21px] overflow-hidden text-black">
            <div className="absolute top-[0px] right-[262px] leading-[130%]">
              Newstand
            </div>
            <div className="absolute top-[0px] right-[124px] leading-[130%]">
              Who we are
            </div>
            <div className="absolute top-[0px] right-[0px] leading-[130%]">
              My profile
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[701px] left-[96px] w-[1344px] h-[693px] overflow-hidden text-sm">
        <img
          className="absolute w-[calc(100%_-_840px)] top-[0px] right-[840px] left-[0px] max-w-full overflow-hidden h-[693px] object-cover"
          alt=""
          src="/jonathankemper1hhrdiolfpuunsplash-1@2x.png"
        />
        <div className="absolute w-[calc(100%_-_608px)] top-[586px] left-[564px] tracking-[-0.01em] leading-[160%] inline-block">
          <span className="font-medium">Central California</span>
          <span className="font-light">
            {" "}
            — The person who grew these was located in Central California and,
            er, hopefully very well-compensated.
          </span>
        </div>
        <img
          className="absolute w-[calc(100%_-_564px)] top-[90px] right-[0px] left-[564px] max-w-full overflow-hidden h-[480px] object-cover"
          alt=""
          src="/stocksy-txp226f62b2ane300-medium-4582193-1@2x.png"
        />
      </div>
      <div className="absolute top-[1550px] left-[96px] w-[1035px] h-[512px] overflow-hidden">
        <div className="absolute top-[0px] left-[213px] leading-[160%] inline-block w-[822px]">
          <p className="m-0">
            We believe in produce. Tasty produce. Produce like:
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">What are we forgetting?</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
            Persian cucumbers, in addition to aforementioned “normal” cucumbers.
            Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
            pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk
            fruit. Fruit of the Loom. Fruits of our labor (this website).
            Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes.
            Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we
            swear, we’re vendors of organic produce, but if you asked us to
            describe what escaroles are...
          </p>
        </div>
        <div className="absolute top-[5px] left-[0px] text-sm tracking-[0.04em] leading-[160%] uppercase font-semibold inline-block w-[181px]">
          WHAT WE BELIEVE
        </div>
      </div>
    </div>
  );
};

export default Homepage;
