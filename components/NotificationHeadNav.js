import BeritaIcon from "../public/Berita.svg";
import { useState } from "react";
import useSWR from "swr";

const notifFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NotificationHeadNav({ id }) {
  const [notifItem, setNotifItem] = useState(5);
  const { data: notifres, error: notiferror } = useSWR(
    `https://snapwork.herokuapp.com/api/person/${id}`,
    notifFetcher
  );

  const notifications = notifres?.data.data.notification;

  return (
    <>
      <div className="relative p-8 space-y-0 bg-white">
        <div className="flex justify-start items-start space-x-2">
          <h1 className="pb-2 text-xl font-medium">Notifikasi</h1>
          <p className="py-1 px-2.5 text-sm text-white bg-blue-500 rounded-full">
            {notifications?.length}
          </p>
        </div>
        {notiferror && (
          <div className="flex justify-center items-center p-8 w-full">
            <h1>Failed to load</h1>
          </div>
        )}
        {!notifres ? (
          <div className="flex justify-center items-center p-8 w-full">
            <h1>Loading ...</h1>
          </div>
        ) : (
          <>
            {notifications ? (
              <>
                {notifications
                  .map((item) => (
                    <a
                      key={item.id}
                      className="flex items-center p-2 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-white sm:w-6 sm:h-6">
                        <BeritaIcon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))
                  .reverse()
                  .slice(0, notifItem)}
                {notifications?.length >= 5 && (
                  <div className="flex justify-center items-center pt-2 w-full">
                    {notifItem === 5 ? (
                      <button
                        onClick={() => setNotifItem(notifications.length)}
                        className="py-2 w-full text-sm text-gray-500 rounded-lg transition duration-150 hover:text-gray-700 hover:bg-gray-100"
                      >
                        Lihat Semua
                      </button>
                    ) : (
                      <button
                        onClick={() => setNotifItem(5)}
                        className="py-2 w-full text-sm text-gray-500 rounded-lg transition duration-150 hover:text-gray-700 hover:bg-gray-100"
                      >
                        Lihat Lebih Sedikit
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center p-8 w-full">
                <h1>Tidak ada Notifikasi</h1>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
