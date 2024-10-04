import { AvatarComp } from "./avatar-comp";

const Leaderboard = () => {
  return (
    <div className="">
      <div className="py-4 px-8 flex items-center gap-x-4 bg-[#FCFCFC] rounded-md">
        <h4 className="font-semibold text-lg">1st</h4>
        <AvatarComp alt="user-photo" image="https://github.com/shadcn.png" />
        <div className="">
          <h5 className="font-semibold text-black">Guy Hawkins</h5>
          <p className="text-[#ABABAB] font-light">example@gmail.com</p>
        </div>
        <p>5,000</p>
        <p>403,000pts</p>
      </div>
    </div>
  );
};

export default Leaderboard;
