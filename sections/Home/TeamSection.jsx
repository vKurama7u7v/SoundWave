import React from "react";
import { getTeamData } from "@/utils/team-data.utils";
import { size } from "lodash";

function TeamSection() {
  return (
    <>
      <section class="text-gray-400 bg-gradient-to-r from-[#141417] via-[#1F1C1F] to-[#141417] body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-extrabold title-font mb-4 text-green-400 tracking-wider">
              Nuestro Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              En donde la innovación y la dedicación se fusionan para impulsar
              nuestro éxito. Conformamos un equipo diverso y apasionado
              comprometido a superar límites y crear soluciones excepcionales.
            </p>
          </div>
          <div class="w-full grid grid-cols-1 gap-6 lg:grid-cols-2 -m-4">
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
      </section>
    </>
  );
}

function CardItem(props) {
  const { data } = props;

  if (!data) return null;

  return (
    <>
      <div class="p-6 rounded-md bg-[#2C2A2D]">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt={data.user}
            title={data.user}
            class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={data.avatar}
          />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-semibold text-lg text-green-400">
              {data.name}
            </h2>
            <h3 class="text-gray-400 font-medium mb-3 text-sm">{data.rol}</h3>
            <p class="mb-4 text-sm text-justify">{data.description}</p>
            <div class="inline-flex gap-1.5">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-lg font-semibold rounded-full border border-gray-400 text-gray-400 hover:bg-green-400 hover:border-transparent hover:text-white disabled:opacity-50 disabled:pointer-events-none transition ease-in-out"
                target="_blank"
                href={data.github}
              >
                <i class="bx bxl-github flex-shrink-0"></i>
              </a>

              {!data.website ? null : (
                <>
                  <a
                    className="inline-flex justify-center items-center w-8 h-8 text-lg font-semibold rounded-full border border-gray-400 text-gray-400 hover:bg-green-400 hover:border-transparent hover:text-white disabled:opacity-50 disabled:pointer-events-none transition ease-in-out"
                    target="_blank"
                    href={data.website}
                  >
                    <i class="bx bx-globe flex-shrink-0"></i>
                  </a>
                </>
              )}

              {!data.linkedin ? null : (
                <>
                  <a
                    className="inline-flex justify-center items-center w-8 h-8 text-lg font-semibold rounded-full border border-gray-400 text-gray-400 hover:bg-green-400 hover:border-transparent hover:text-white disabled:opacity-50 disabled:pointer-events-none transition ease-in-out"
                    target="_blank"
                    href={data.linkedin}
                  >
                    <i class="bx bxl-linkedin flex-shrink-0"></i>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSection;
