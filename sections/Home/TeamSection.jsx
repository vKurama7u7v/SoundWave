import React from "react";
import { getTeamData } from "@/utils/team-data.utils";
import { size } from "lodash";

function TeamSection() {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="mt-1 text-gray-600">Creative people</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {size(getTeamData) == 0 ? (
            <></>
          ) : (
            <>
              {getTeamData.map((item, index) => (
                <>
                  <CardItem data={item} index={index} />
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function CardItem(props) {
  const { data } = props;

  if (!data) return null;

  return (
    <>
      <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 ">
        <div className="flex items-center gap-x-4">
          <img
            className="rounded-full w-20 h-20"
            src={data.avatar ? data.avatar : ""}
            alt={data.user ? data.user : ""}
          />
          <div className="grow">
            <h3 className="font-medium text-gray-800 ">
              {data.name ? data.name : ""}
            </h3>
            <p className="text-xs uppercase text-gray-500">
              {data.rol ? data.rol : ""}
            </p>
          </div>
        </div>
        <p className="mt-3 text-gray-500 text-sm">
          {data.description ? data.description : ""}
        </p>
        {/* Social Brands */}
        <div className="mt-3 space-x-1">
          <a
            className="inline-flex justify-center items-center w-8 h-8 text-lg font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            target="_blank"
            href="#"
          >
            <i class="bx bxl-github flex-shrink-0"></i>
          </a>
        </div>
        {/* End Social Brands */}
      </div>
    </>
  );
}

export default TeamSection;
