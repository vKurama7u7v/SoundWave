import useAuth from "@/hooks/useAuth";
import React from "react";

function CardProfileSection() {
  const { data_user } = useAuth();

  return (
    <>
      <div class="flex items-center gap-x-4 mb-5">
        <div class="inline-flex justify-center items-center w-10 h-10 rounded-full border-4 border-blue-50 bg-blue-100">
          <i class="uil uil-user-circle text-blue-600 text-2xl"></i>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-medium text-gray-800 ">
            Bienvenido{" "}
            <span className="font-bold">
              {data_user ? data_user.display_name : <></>}
            </span>
            ! 🎉
          </h3>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={data_user ? data_user.images[1].url : ""}
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 ">
          {data_user ? data_user.display_name : <></>}
        </h5>
        <span class="text-sm text-gray-500 capitalize">
          {data_user ? data_user.product : <></>}
        </span>

        <p className="">{data_user ? data_user.followers.total : 0}</p>

        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            href={data_user ? data_user.external_urls.spotify : ""}
            target="_blank"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Ver Perfil
          </a>
        </div>
      </div>
    </>
  );
}

export default CardProfileSection;
