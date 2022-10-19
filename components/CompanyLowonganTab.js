import Link from "next/link";
import ProfileCareerCard from "../components/ProfileCareerCard";

export default function CompanyLowonganTab({ editable, company }) {
  return (
    <>
      <div>
        <div className="p-8 space-y-8">
          {editable ? (
            <>
              {company.companyjob.map((item) => (
                <ProfileCareerCard editable={editable} item={item} />
              ))}
            </>
          ) : (
            <>
              {company.companyjob.map((item) => (
                <Link href={`/company/${company._id}/${item._id}`} passHref>
                  <a className="flex">
                    <ProfileCareerCard editable={editable} item={item} />
                  </a>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
