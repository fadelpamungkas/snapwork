export default function ReviewCard({ title }) {
  return (
    <>
      <div className="p-8 m-auto w-72 bg-white rounded-3xl shadow-xl">
        <div className="w-20 h-20 bg-purple-500 rounded-3xl" />
        <h1 className="mt-4 text-xl font-bold">{title}</h1>
        <p className="mt-2 text-sm font-medium text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh et
          in ut in consequat.{" "}
        </p>
      </div>
    </>
  );
}
