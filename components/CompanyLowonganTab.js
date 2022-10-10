import Link from "next/link";
import ProfileCareerCard from "../components/ProfileCareerCard";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useUser from "../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function CompanyLowonganTab({ editable }) {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="p-8 space-y-8">
          {editable ? (
            <>
              <ProfileCareerCard editable={editable} />
              <ProfileCareerCard editable={editable} />
            </>
          ) : (
            <>
              <Link href="/company/home" passHref>
                <a className="flex">
                  <ProfileCareerCard editable={editable} />
                </a>
              </Link>
              <Link href="/company/home" passHref>
                <a className="flex">
                  <ProfileCareerCard editable={editable} />
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
