import BeritaIcon from "../public/Berita.svg";
import useSWR from "swr";

const notifFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NotificationHeadNav({ id }) {
  const { data: notifres, error: notiferror } = useSWR(
    `https://snapwork.herokuapp.com/api/person/${id}`,
    notifFetcher
  );

  if (notiferror) return <div>Failed to load</div>;
  if (!notifres) return <div>Loading...</div>;

  const notifications = notifres?.data.data.notification;

  return (
    <>
      <div className="relative p-8 space-y-0 bg-white">
        <h1 className="pb-2 text-xl font-medium">Notifikasi</h1>
        {notifications ? (
          <>
            {notifications.map((item) => (
              <a
                key={item.id}
                className="flex items-center p-2 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
              >
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-white sm:w-12 sm:h-12">
                  <BeritaIcon aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </a>
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center p-8 w-full">
            <h1>Tidak ada Notifikasi</h1>
          </div>
        )}
      </div>
    </>
  );
}
