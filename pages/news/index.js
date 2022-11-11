import Link from "next/link";
import Image from "next/image";
import HeaderImage from "../../public/HeaderNews1.png";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://snapwork.herokuapp.com/api/news/`);
  const data = await res.json();
  const news = data.data.data;

  // Pass post data to the page via props
  return { props: { news } };
}

export default function News({ news }) {
  const latest = news.slice(-1)[0]
  return (
    <>
      <div className="w-full text-gray-900">
        <HeadNav />
        <div className="w-full min-h-screen bg-gray-50">
          <div className="py-24 px-8 mx-auto max-w-screen-xl">
            <section className="p-12 space-y-8 bg-white rounded-xl shadow-2xl">
              <div className="flex justify-start items-start">
                <h1 className="text-2xl font-semibold text-center">
                  Artikel Terbaru
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <Link href={`/news/${latest._id}`} passHref>
                  <a className="col-span-1 space-y-2">
                    <Image
                      src={HeaderImage}
                      width={600}
                      height={300}
                      alt="Personal"
                      className="object-cover"
                    />
                    <p className="text-gray-500">{latest.created_at}</p>
                    <h1 className="text-lg font-semibold">{latest.title}</h1>
                    <p className="truncate">{latest.body1}</p>
                  </a>
                </Link>
                <div className="col-span-1 space-y-8">
                  {news.reverse().slice(1).map((item, idx) => (
                    <Link key={idx} href={`/news/${item._id}`} passHref>
                      <a className="grid grid-cols-5 gap-4 justify-center items-start">
                        <div className="col-span-2">
                          <Image
                            src={HeaderImage}
                            width={350}
                            height={200}
                            alt="Personal"
                            className="object-cover"
                          />
                        </div>
                        <div className="col-span-3 space-y-2">
                          <p className="text-gray-500">{item.created_at}</p>
                          <h1 className="text-lg font-semibold">
                            {item.title}
                          </h1>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <hr />
              <div className="flex justify-start items-start">
                <h1 className="text-2xl font-semibold text-center">
                  Artikel Lainnya
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {news.slice(1, 4).reverse().map((item, idx) => (
                  <Link key={idx} href={`/news/${item._id}`} passHref>
                    <a>
                      <div className="col-span-1 space-y-2">
                        <Image
                          src={HeaderImage}
                          width={350}
                          height={200}
                          alt="Personal"
                          className="object-cover"
                        />
                        <h1 className="text-lg font-semibold">{item.title}</h1>
                        <p className="truncate">{item.body1}</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-500">
                            Penulis: {item.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.created_at}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
