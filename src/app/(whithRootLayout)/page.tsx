import baseImages from "@/assets/images";
import CategoryCard from "@/components/cards/categoryCard";
import APP_ROUTES from "@/constants/paths";

export const revalidate = 300;

const cartData = [
  {
    image: baseImages.konkoor,
    title: "کنکور",
    link: APP_ROUTES.KONKOOR,
    className:
      "[background:linear-gradient(102.51deg,#D7A02B_0.22%,#FFC03A_99.78%)] [box-shadow:0px_1px_3.1px_0px_#EFB334]",
  },
  {
    image: baseImages.middleSchool2,
    title: "متوسطه دوم",
    link: APP_ROUTES.HIGH_SCHOOL,
    className:
      "[background:linear-gradient(102.51deg,#2AB751_0.22%,#5BF085_99.78%)] [box-shadow:0px_1px_3.1px_0px_#4CDF75]",
  },
  {
    image: baseImages.middleSchool1,
    title: "متوسطه اول",
    link: APP_ROUTES.MIDDLE_SCHOOL,
    className:
      "[background:linear-gradient(102.51deg,#6B3FE2_0.22%,#A380FF_99.78%)] [box-shadow:0px_1px_3.1px_0px_#926CF6]",
  },
  {
    image: baseImages.elementarySchool,
    title: "ابتدایی",
    link: APP_ROUTES.ELEMENTRY_SCHOOL,
    className:
      "[background:linear-gradient(102.51deg,#CD37A9_0.22%,#FB4ED1_99.78%)] [box-shadow:0px_1px_3.1px_0px_#ED46C5]",
  },
];

export default async function Home() {
  // const appearanceJson = await getCachedAppearance();
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col max-w-[1920px] w-screen place-self-center overflow-x-hidden"
    >
      <div className="flex-grow">
        <div className="md:flex-nowrap justify-stretch flex flex-wrap w-full lg:w-9/12 max-xl:w-11/12 max-lg:w-full md:px-4 md:overflow-x-auto md:gap-6 mx-auto flex-row pt-4 pb-2 md:pt-20">
          {cartData.map((cat) => (
            <CategoryCard
              key={cat.title}
              image={cat.image}
              title={cat.title}
              link={cat.link}
              className={cat.className}
            />
          ))}
        </div>

        {/* dynamic content */}

        {/* <LandingSliders appearanceJson={appearanceJson} /> */}
      </div>
    </div>
  );
}
