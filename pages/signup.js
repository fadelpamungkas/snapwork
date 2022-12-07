import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import SnapWorkLogo from "../public/SnapWork.png";

export default function Signup() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://snapwork.herokuapp.com/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.pass.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Successfully registered");
      router.push("/login");
    } else {
      alert("Fail to register, please contact for any problems");
    }

    // if (data.status === 200) {
    // 	const getUsers = await fetch("https://snapwork.herokuapp.com/api/users", {
    // 		method: "GET",
    // 		headers: {
    // 			"x-token": data.data.data,
    // 		},
    // 	});
    // } else {
    // 	alert(data.message);
    // }
  };

  return (
    <body>
      <div className="p-16 min-h-screen bg-indigo-500">
        <div>
          <Image src={SnapWorkLogo} width={100} height={20} alt="SnapWork" />
        </div>
        <div className="flex grid-cols-2 justify-center items-center p-8">
          <div className="flex-col col-span-1 justify-center items-center space-y-4 w-full">
            <h1 className="text-7xl font-bold text-white">
              Selamat Datang di SnapWork
            </h1>
            <p className="w-2/3 font-light text-white">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
          </div>
          <div className="flex col-span-1 justify-center items-center p-8 w-2/3 bg-white rounded-xl">
            <div className="p-12 w-full">
              <h1 className="mb-8 text-3xl font-bold leading-6 text-gray-800 focus:outline-none">
                Buat Akun Anda
              </h1>
              <form id="formSignUp" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    className="py-3.5 px-4 mt-2 w-full text-xs placeholder-gray-400 rounded-lg border border-gray-400"
                    placeholder="Masukkan nama anda"
                  />
                </div>
                <div className="mt-6 w-full">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="py-3.5 px-4 mt-2 w-full text-xs placeholder-gray-400 rounded-lg border border-gray-400"
                    placeholder="Masukkan email anda"
                  />
                </div>
                <div className="mt-6 w-full">
                  <label
                    htmlFor="pass"
                    className="text-sm font-medium leading-none text-gray-800"
                  >
                    Password
                  </label>
                  <div className="flex relative justify-center items-center">
                    <input
                      id="pass"
                      name="pass"
                      type={visible ? "password" : "text"}
                      minLength="4"
                      className="py-3.5 px-4 mt-2 w-full text-xs placeholder-gray-400 rounded-lg border border-gray-400"
                      placeholder="Masukkan password anda"
                    />
                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                      <div
                        id="show"
                        onClick={() => setVisible(false)}
                        className={visible ? "block" : "hidden"}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                            fill="#71717A"
                          />
                        </svg>
                      </div>
                      <div
                        onClick={() => setVisible(true)}
                        className={visible ? "hidden" : "block"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye-off"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#27272A"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="3" y1="3" x2="21" y2="21" />
                          <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                          <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    form="formSignUp"
                    type="submit"
                    className="py-4 w-full text-sm font-semibold leading-none text-white bg-green-500 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:outline-none active:shadow-none"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-light">
                    Sudah punya akun?
                    <Link href="/login">
                      <a className="text-sm font-medium text-blue-500">
                        {" "}
                        Masuk Sekarang
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
