import Link from "next/link";
import ProfileCareerCard from "../components/ProfileCareerCard";

export default function CompanyLowonganTab({ company }) {
  return (
    <>
      <div>
        <div className="p-8 space-y-8">
          {company.companyjob.map((item, index) => (
            <Link
              href={`/company/${company._id}/${item._id}`}
              passHref
              key={index}
            >
              <a className="flex">
                <ProfileCareerCard editable={false} item={item} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
