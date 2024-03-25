function ShoeCard({ imgUrl, changeBigShoeImage, bigShoeImg }) {
  function handleClick() {
    if (bigShoeImg !== imgUrl.bigShoe) changeBigShoeImage(imgUrl.bigShoe);
  }

  return (
    <div
      className={`rounded-xl border-2 ${bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="bg-cente flex items-center justify-center rounded-xl bg-card bg-cover max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
