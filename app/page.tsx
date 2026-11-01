import Image from "next/image";
import ImageSwiperContainer from "./imageSwiperContainer";

export default function Home() {

  const imageList = [
    { id: 1, src: "/main1.png" },
    { id: 2, src: "/main2.png" },
    { id: 3, src: "/main3.png" },
    { id: 4, src: "/main4.png" },
    { id: 5, src: "/main5.png" },
    { id: 6, src: "/main6.png" },
    { id: 7, src: "/main7.png" }

  ];

  return (
    <div>

      <ImageSwiperContainer
        imageList={imageList} />

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Section1() {

  const list = [
    { src: "/main4_1.png", desc1: "엄선된 제품", desc2: "안전하고 품질 좋은 제품만을 꼼꼼하게 골라 소개합니다." },
    { src: "/main4_2.png", desc1: "건강한 간식", desc2: "자연 원료로 만든 간식으로 아이들의 건강을 챙겨주세요." },
    { src: "/main4_3.png", desc1: "편안한 용품", desc2: "반려동물의 편안한 일생을 위한 다양한 용품을 준비했습니다. " },
  ];

  return (
    <section className="pb-20">
      <h1 className="hidden">소개합니다</h1>

      <div className="text-center my-10 flex flex-col gap-5">
        <span className="text-2xl font-bold text-[#5c4a3a]">
          Petmart를 소개합니다
        </span>
        <span className="text-[#9a7a91]">
          반려동물의 건강과 행복을 최우선으로 생각하는 펫 라이프스타일입니다.
        </span>
      </div>

      <ul
        className="flex gap-10 justify-center items-center w-8/10 m-auto"
      >

        {list.map((item, idx) => (
          <li key={idx}
            className="flex flex-col gap-5 justify-center items-center">
            <Image src={item.src} alt={`소개 이미지 ${idx + 1}`} width={300} height={200} />
            <span className="text-[#5c4a3a]">
              {item.desc1}
            </span>
            <span className="text-[#5c4a3a]">
              {item.desc2}
            </span>
          </li>
        ))}
      </ul>
    </section>


  );
}


function Section2() {

  const info = {
    src: "/main5_1.png",
    title: `우리 아이에게
    가장 좋은 것만`,
    desc: `petmart는 반려동물 전문가들이 직접 사용해보고 추천하는 제품만을 엄선합니다. 안전한 소재, 믿을 수 있는 원료, 그리고 반려동물들이 진짜 좋아하는 제품을 찾아드립니다.
    작은 것 하나까지 꼼꼼하게 살피는 마음으로, 여러분의 소중한 가족을 위한 최선의 선택을 도와드리겠습니다.`
  };

  return (
    <section className="w-8/10 m-auto flex gap-5 justify-center pb-20">
      <h1 className="hidden">{info.title}</h1>

      <Image
        src={info.src}
        alt={"소개 이미지"}
        width={500}
        height={500}
        className="w-7/10"
      />

      <div className="flex flex-col gap-5 justify-center">
        <h2 className="whitespace-pre-line text-[#4f3b2a] text-2xl font-bold">{info.title}</h2>
        <p className="whitespace-pre-line text-[#9b8576]">
          {info.desc}
        </p>

      </div>

    </section>
  );
}

function Section3() {

  const reviewList = [
    { message: "우리 강아지가 정말 좋아하는 간식을 찾았어요! 원료도 안심이 되고, 매번 꼬리를 흔들며 달려옵니다.", rank: 5, author: "김지은" },
    { message: "고야이 장난가믈 여기서 구매했는데, 품질이 정말 좋아요. 한 달 넘게 매일 가지고 놀고 있답니다.", rank: 5, author: "박수현" },
    { message: "배송도 빠르고 포장도 꼼꼼해서 만족합니다. 반려동물 용품은 앞으로 여기서만 살 것 같아요!.", rank: 5, author: "이하늘" },
  ];

  return (
    <section className="">
      <h1 className="hidden">고객리뷰</h1>

      <div className="bg-[#f5f0e9] py-10 ">

        <div className="my-10  text-center">
          <h2 className="text-[#554232] text-2xl font-bold">고객 후기</h2>
          <p className="text-[#927c80] text-xl">Petmark를 이용해주신 고객님들의 이야기입니다</p>
        </div>

        <ul className="flex gap-15 m-auto w-7/10 justify-between">
          {reviewList.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col w-8/10 bg-white p-5 rounded-lg">
              <p>
                "{item.message}"
              </p>
              <span>{item.author}</span>
              <div className="flex gap-1">
              {Array.from({ length: item.rank }).map((_, starIdx) => (
                <svg
                  key={starIdx}
                  className="w-5 h-5 text-orange-400 fill-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >

                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              </div>
            </li>
          ))}
        </ul>

      </div>

    </section>

  );
}