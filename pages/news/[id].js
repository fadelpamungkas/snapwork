import Image from "next/image";
import HeaderImage from "../../public/HeaderNews1.png";
import AuthorImage from "../../public/newsauthor1.png";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://snapwork.herokuapp.com/api/news");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.data.data.map((news) => ({
    params: { id: news._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://snapwork.herokuapp.com/api/news/${params.id}`);
  const data = await res.json();
  const news = data.data.data;

  // Pass post data to the page via props
  return { props: { news } };
}

export default function News({ news }) {
  return (
    <>
      <div className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="justify-center items-center p-8 mt-12 w-full">
          <Image
            className="object-fill max-w-lg rounded-2xl shadow-2xl"
            src={HeaderImage}
            alt="Header"
          />
          <div className="flex justify-center -translate-y-72">
            <div className="w-2/3 bg-white rounded-xl shadow-xl">
              <div className="p-8 space-y-2">
                <h1 className="text-xl font-medium text-blue-500">
                  {news.type}
                </h1>
                <h1 className="text-3xl font-semibold">{news.title}</h1>
                <div className="flex py-4">
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={AuthorImage}
                    alt="Header"
                  />
                  <div className="px-4">
                    <h1 className="font-semibold text-black">{news.author}</h1>
                    <h1 className="text-gray-700">{news.created_at}</h1>
                  </div>
                </div>
                <p className="pb-4 text-lg leading-relaxed whitespace-pre-line">
                  {news.body1}
                </p>
                <div className="p-4 bg-blue-500 rounded-2xl">
                  <div className="flex space-x-4">
                    <p className="text-6xl font-bold text-white">”</p>
                    <p className="text-xl leading-loose text-white whitespace-pre-line">
                      {news.quotes}
                    </p>
                    <p className="text-6xl font-bold text-white rotate-180">
                      “
                    </p>
                  </div>
                </div>
                <p className="pt-4 text-lg leading-relaxed whitespace-pre-line">
                  {news.body2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FootNav />
      </div>
    </>
  );
}
