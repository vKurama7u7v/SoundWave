import React from "react";
import { map, size } from "lodash";

function ArtistsTablesComponent(props) {
  const { data } = props;

  if (!data) return null;

  return (
    <>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200 overflow-x-scroll">
          <thead class="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                class="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500 "
              >
                #
              </th>

              <th
                scope="col"
                class="px-4 pl-0 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Artist
              </th>

              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Popularity
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 ">
            {!data ? (
              <></>
            ) : (
              <>
                {size(data) == 0 ? (
                  <></>
                ) : (
                  <>
                    {data.map((item, index) => (
                      <>
                        <tr>
                          <td class="px-4 py-4 text-sm font-bold text-gray-500 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <span>{index + 1}</span>
                            </div>
                          </td>

                          <td class="px-4 pl-0 py-4 text-sm text-gray-500">
                            <div class="flex items-center gap-x-2">
                              <div className="w-10 h-10 relative">
                                <div className="absolute left-0 top-0 w-10 h-10 rounded bg-black opacity-0"></div>
                                <img
                                  class="object-cover w-10 h-10 rounded"
                                  src={item.images ? item.images[0].url : ""}
                                  alt={item.name ? item.name : ""}
                                />
                              </div>
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 whitespace-nowrap">
                                  {item.name ? item.name : ""}
                                </h2>
                                <p class="text-xs font-normal text-gray-600 uppercase">
                                  {item.type ? item.type : ""}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td class="px-4 py-4 text-gray-500">
                            <div class="flex justify-between mb-1 w-60">
                              <span class="font-semibold text-sm text-gray-400 ">
                                {`${item.popularity ? item.popularity : ""}%`}
                              </span>
                            </div>
                            <div className="w-60 h-2.5 bg-gray-200 rounded-full">
                              <div
                                class="bg-green-400 h-2.5 rounded-full dark:bg-green-500"
                                style={{
                                  width: `${
                                    item.popularity ? item.popularity : ""
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                )}
              </>
            )}
            {/* {!data ? <></> : <>{size(data) == 0 ? <></> : <></>}</>} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ArtistsTablesComponent;
