import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import "../src/App.css";
import { CiSearch } from "react-icons/ci";

const WorkoutTracker = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[480px] border-1 min-h-full rounded-2xl shadow-lg shadow-gray-300 border-gray-400 h-[100%] pb-[52px] flex w-full  py-1 px-2 mx-auto  justify-center">
      <div className="w-full">

        <div className="flex space-x-12 my-4">
          <span
            className="px-2 bg-gray-100"
            onClick={() => {
              navigate("/start");
            }}
          >
            {" "}
            {"<"}
          </span>
          <h1 className="text-md">Workout Tracker</h1>
        </div>
        <div className="my-6">
          <img alt="tracker" src="ChartFull.png" />
        </div>

        <div className="flex space-x-2 bg-gradient-to-r from-violet-300 via-violet-50 to-slate-50 rounded-[16px] p-2">
          <div className="flex justify-center items-center">
            <span>
              <IoWarningOutline />
            </span>
          </div>
          <p className="text-[16px]">
            You've burned fewer calories than yesterday.Time to get moving!
          </p>
        </div>
        {/* new section */}
        <div className="flex justify-between px-0 py-8">
          <Link to="" className="text-md text-gray-800">
            Upcoming event
          </Link>
          <Link to="" className="text-[16px] hover:underline text-gray-400">
            See more
          </Link>
        </div>
        {/* new section */}
        <div className="space-y-3">
          <div className="rounded-[16px] flex justify-between shadow-md bg-gray-50 shadow-gray-200 p-3">
            <div className="flex ">
              <div className="rounded-[50%] bg-violet-100 mx-2">
                <img src="image5.png" alt="img5" />
              </div>
              <div>
                <p className="hover:underline text-[15px]">
                  Full body workout{" "}
                </p>
                <p className="hover:underline text-[13px] text-gray-400">
                  Today 3pm
                </p>
              </div>
            </div>

            <div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div className="rounded-[16px] flex justify-between shadow-md bg-gray-50 shadow-gray-200 p-3">
            <div className="flex ">
              <div className="rounded-[50%] bg-violet-100 mx-2">
                <img src="image4.png" alt="img5" />
              </div>
              <div>
                <p className="hover:underline text-[15px]">
                  Upper body workout{" "}
                </p>
                <p className="hover:underline text-[13px] text-gray-400">
                  4feb 3.30pm
                </p>
              </div>
            </div>

            <div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        {/* newsection */}
        <h2 className="my-4"> What do you want to train</h2>
        <div className="flex justify-between bg-[#afc0fa] p-2 rounded-xl">
          <div className="space-y-[2px] my-2">
            <p className="text-[15px] hover:underline">Full body workout</p>
            <p className="text-[15px] hover:underline">Arms</p>
            <p className="text-[15px] hover:underline">Chest</p>
          </div>
          <div className="bg-blue-200  rounded-[50%]">
            <img src="image3.png" alt="img3" />
          </div>
        </div>
        <div
          className="rounded-[50%] relative bottom-5 shadow-md shadow-gray-400 m-0 left-[45%] w-14 h-14 flex justify-center items-center bg-[#a1b5fe]  "
          onClick={() => {
            navigate("/schedule");
          }}
        >
          <span>
            <CiSearch size={30} fill="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
