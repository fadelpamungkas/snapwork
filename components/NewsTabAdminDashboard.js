import Image from "next/image";
import { ClipboardListIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import HeaderImage from "../public/HeaderNews1.png";
import AddIcon from "../public/AddIcon.png";
import useSWR from "swr";

const newsFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewsTabAdminDashboard() {
  const [newsItem, setNewsItem] = useState("");
  const [isOpenNewsDetail, setIsOpenNewsDetail] = useState(false);
  const [isOpenDeleteNews, setIsOpenDeleteNews] = useState(false);

  const { data: newsres, error: newserror } = useSWR(
    `https://snapwork.herokuapp.com/api/news`,
    newsFetcher
  );

  if (newserror) return <div>Failed to load</div>;
  if (!newsres) return <div>Loading...</div>;

  const news = newsres?.data.data;

  function closeNewsDetailModal() {
    setIsOpenNewsDetail(false);
    setNewsItem("");
  }

  function openNewsDetailModal(item) {
    setIsOpenNewsDetail(true);
    if (!item) {
      setNewsItem("");
    } else {
      setNewsItem(item);
    }
  }

  function closeDeleteNewsModal() {
    setIsOpenDeleteNews(false);
    setNewsItem("");
  }

  function closeAndConfirmDeleteNewsModal() {
    setIsOpenDeleteNews(false);
    handleDeleteNews(newsItem._id);
    setNewsItem("");
  }

  function openDeleteNewsModal(item) {
    setIsOpenDeleteNews(true);
    setNewsItem(item);
  }

  const handleDeleteNews = async (newsId) => {
    const response = await fetch(
      `https://snapwork.herokuapp.com/api/news/${newsId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (data === 200) {
      closeDeleteNewsModal();
    } else {
      alert("Error: " + data.message);
    }
  };

  const handleEditNews = async (event) => {
    event.preventDefault();
    const response = await fetch("https://snapwork.herokuapp.com/api/news", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: newsItem._id,
        header: "no",
        author: event.target.newsauthor.value,
        type: event.target.newstype.value,
        title: event.target.newstitle.value,
        body1: event.target.newsbody1.value,
        body2: event.target.newsbody2.value,
        quotes: event.target.newsquotes.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      closeNewsDetailModal();
    } else {
      alert("Error: " + data.message);
    }
  };

  const handleAddNews = async (event) => {
    event.preventDefault();
    const response = await fetch("https://snapwork.herokuapp.com/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        header: "no",
        author: event.target.newsauthor.value,
        type: event.target.newstype.value,
        title: event.target.newstitle.value,
        body1: event.target.newsbody1.value,
        body2: event.target.newsbody2.value,
        quotes: event.target.newsquotes.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      closeNewsDetailModal();
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Pengelolaan Berita</h1>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-3 gap-8 justify-center items-center">
              {news.map((item, idx) => (
                <div
                  key={idx}
                  className="col-span-1 p-4 space-y-2 h-full bg-white rounded-xl shadow-xl"
                >
                  <div className="space-y-4 h-full">
                    <Image
                      src={HeaderImage}
                      width={350}
                      height={200}
                      alt="Personal"
                      className="object-cover rounded-lg"
                    />
                    <h1 className="text-base font-semibold leading-snug">
                      {item.title}
                    </h1>
                    <p className="text-sm text-gray-500">Oleh {item.author}</p>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => openDeleteNewsModal(item)}
                        className="inline-flex items-center py-1.5 px-6 text-white bg-red-500 rounded-lg duration-150 hover:bg-red-600 transiiton"
                      >
                        Hapus
                      </button>
                      <button
                        type="button"
                        onClick={() => openNewsDetailModal(item)}
                        className="inline-flex items-center py-1.5 px-6 text-white bg-green-500 rounded-lg duration-150 hover:bg-green-600 transiiton"
                      >
                        Ubah
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => openNewsDetailModal()}
                className="col-span-1 w-full h-full cursor-pointer"
              >
                <div className="flex justify-center items-center p-4 h-full bg-white rounded-xl border-2 border-green-500 border-dashed shadow-xl transition duration-150 hover:bg-green-50">
                  <div className="space-y-4">
                    <Image src={AddIcon} width={100} height={100} alt="Add" />
                    <h1 className="text-lg font-semibold text-green-500">
                      Tambah Berita
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpenNewsDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeNewsDetailModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="overflow-y-auto fixed inset-0">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-screen-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  {!newsItem ? (
                    <NewsFormDialog />
                  ) : (
                    <NewsFormDialog item={newsItem} />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenDeleteNews} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeDeleteNewsModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="overflow-y-auto fixed inset-0">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Hapus Berita
                  </Dialog.Title>
                  <Confirmation />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );

  function Confirmation() {
    return (
      <>
        <div className="mt-2">
          <p className="text-sm text-gray-500 whitespace-pre-line">
            {`Anda yakin menghapus berita:
`}
            <span className="font-bold"> {newsItem.title}</span>
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeAndConfirmDeleteNewsModal}
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  function NewsFormDialog() {
    return (
      <>
        <form
          id="formNews"
          onSubmit={!newsItem ? handleAddNews : handleEditNews}
        >
          <body className="w-full text-gray-900">
            <div className="flex justify-start items-center py-2 px-4 space-x-4">
              <div className="p-2 bg-red-500 rounded">
                <ClipboardListIcon
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                {!newsItem ? (
                  <h1 className="text-2xl font-semibold text-red-500">
                    Tambah Berita
                  </h1>
                ) : (
                  <h1 className="text-2xl font-semibold text-red-500">
                    Ubah Berita
                  </h1>
                )}
                <p className="text-sm font-bold">
                  Data di bawah ini merupakan data lengkap perusahaan untuk
                  mendaftar sebagai member
                </p>
              </div>
            </div>
            <div className="px-2 mx-auto w-full">
              <div className="py-4 px-8 space-y-4 rounded-xl border divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">
                    Informasi Berita
                  </h1>
                  <p className="pb-2 text-sm">
                    Silahkan isi data-data dibawah ini sesuai dengan berita yang
                    ingin dipublikasi
                  </p>
                  <div className="my-4 space-y-4 text-sm">
                    <div className="space-y-2">
                      <h1>Upload Gambar</h1>
                      <input
                        required
                        id="newsheader"
                        type="file"
                        name="newsheader"
                        accept="image/*"
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none rounded-xl border-2 border-blue-500 border-dashed shadow-sm transition duration-150 text-slate-500 file:mr-4 file:rounded-xl file:border-0 file:bg-blue-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white file:transition file:duration-150 hover:file:bg-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Penulis</h1>
                      {!newsItem ? (
                        <input
                          required
                          id="newsauthor"
                          type="text"
                          name="newsauthor"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input nama penulis disini"
                        />
                      ) : (
                        <input
                          required
                          id="newsauthor"
                          type="text"
                          name="newsauthor"
                          defaultValue={newsItem.author}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input nama penulis disini"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Judul Berita</h1>
                      {!newsItem ? (
                        <input
                          required
                          id="newstitle"
                          type="text"
                          name="newstitle"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input judul berita disini"
                        />
                      ) : (
                        <input
                          required
                          id="newstitle"
                          type="text"
                          name="newstitle"
                          defaultValue={newsItem.title}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input judul berita disini"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Tipe Berita</h1>
                      {!newsItem ? (
                        <input
                          required
                          id="newstype"
                          type="text"
                          name="newstype"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input tipe berita disini"
                        />
                      ) : (
                        <input
                          required
                          id="newstype"
                          type="text"
                          name="newstype"
                          defaultValue={newsItem.type}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input tipe berita disini"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Isi Berita Atas</h1>
                      {!newsItem ? (
                        <textarea
                          required
                          id="newsbody1"
                          type="text"
                          name="newsbody1"
                          rows={10}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahan input isi berita atas disini"
                        />
                      ) : (
                        <textarea
                          required
                          id="newsbody1"
                          type="text"
                          name="newsbody1"
                          defaultValue={newsItem.body1}
                          rows={10}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahan input isi berita atas disini"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Quotes</h1>
                      {!newsItem ? (
                        <textarea
                          required
                          id="newsquotes"
                          type="text"
                          name="newsquotes"
                          rows={5}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input quotes narasumber disini"
                        />
                      ) : (
                        <textarea
                          required
                          id="newsquotes"
                          type="text"
                          name="newsquotes"
                          defaultValue={newsItem.quotes}
                          rows={5}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahkan input quotes narasumber disini"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Isi Berita Bawah</h1>
                      {!newsItem ? (
                        <textarea
                          required
                          id="newsbody2"
                          type="text"
                          name="newsbody2"
                          rows={10}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahan input isi berita bawah disini"
                        />
                      ) : (
                        <textarea
                          required
                          id="newsbody2"
                          type="text"
                          name="newsbody2"
                          defaultValue={newsItem.body2}
                          rows={10}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Silahan input isi berita bawah disini"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
          {!newsItem ? (
            <>
              <div className="flex justify-end mt-4 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => closeNewsDetailModal()}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  form="formNews"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Tambah
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end mt-4 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => closeNewsDetailModal()}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  form="formNews"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Ubah
                </button>
              </div>
            </>
          )}
        </form>
      </>
    );
  }
}
