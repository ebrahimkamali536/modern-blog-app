import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-6 gap-10 items-start justify-between bg-zinc-100 p-8">
      <div className="flex flex-col gap-y-4 md:col-span-2">
        <h4>متن تستی</h4>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        </p>
        <div className="flex items-center gap-x-4">
          <Link href="#">instagram</Link>
          <Link href="#">github</Link>
          <Link href="#">likedin</Link>
          <Link href="#">telegram</Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h4>لینک های مفید 1</h4>
        <ul className="flex flex-col gap-y-2.5">
          <li>
            <Link href="#">متن تستی 1</Link>
          </li>
          <li>
            <Link href="#">متن تستی 2</Link>
          </li>
          <li>
            <Link href="#">متن تستی 3</Link>
          </li>
          <li>
            <Link href="#">متن تستی 4</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h4>لینک های مفید 2</h4>
        <ul className="flex flex-col gap-y-2.5">
          <li>
            <Link href="#">متن تستی 1</Link>
          </li>
          <li>
            <Link href="#">متن تستی 2</Link>
          </li>
          <li>
            <Link href="#">متن تستی 3</Link>
          </li>
          <li>
            <Link href="#">متن تستی 4</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4 md:col-span-2">
        <h4>برای عضویت در خبرنامه ایمیل خود را وارد کنید:</h4>
        <div className="border border-gray-400 p-2 rounded-lg flex items-center justify-between">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="ایمیل خود را وارد کنید..."
          />
          <button className="border border-gray-400 rounded-full py-2 px-8">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
