import React from "react";
import { size } from "lodash";

import useAuth from "@/hooks/useAuth";

import CardTitleComponent from "@/components/Titles/CardTitleComponent";
import CardDropdownComponent from "@/components/Dropdowns/CardDropdownComponent";

function CardProfileSection() {
  const { data_user } = useAuth();

  return (
    <>
      <CardTitleComponent>
        <div class="flex items-center gap-x-2">
          <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-esmerald-50 bg-esmerald-100">
            <i class="uil uil-user-circle text-esmerald-500 text-2xl"></i>
          </div>
          <h3 class="text-base font-medium text-gray-800">
            Bienvenido{" "}
            <span className="font-bold text-esmerald-500 ">
              {data_user ? data_user.display_name : <></>}
            </span>
            ! 🎉
          </h3>
        </div>
      </CardTitleComponent>

      <div class="flex items-center gap-5">
        <div className="flex  items-center justify-center">
          <img
            class="w-28 h-28 rounded-full shadow-lg"
            src={
              data_user ? (
                <>{size(data_user.images) > 0 ? data_user.images[1].url : ""}</>
              ) : (
                ""
              )
            }
            alt="Bonnie image"
          />
        </div>
        <div className="flex flex-col items-start">
          <h5 class="mb-1 text-xl font-medium text-gray-900 ">
            {data_user ? data_user.display_name : <></>}
          </h5>
          <p class="text-sm text-gray-500 capitalize">
            {data_user ? data_user.product : <></>}
          </p>
          <p class="text-sm text-gray-500">
            {data_user ? data_user.id : <></>}
          </p>
          <div class="flex mt-3 space-x-3 ">
            <a
              href={data_user ? data_user.external_urls.spotify : ""}
              target="_blank"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfileSection;
