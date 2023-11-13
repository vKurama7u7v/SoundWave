import React from "react";
import { map, size } from "lodash";

function GenresTableComponent(props) {
  const { data, total } = props;

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
                Genres
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
                          <td class="px-4 pr-0 py-[1.85em] text-sm font-bold text-gray-500 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <span>{index + 1}</span>
                            </div>
                          </td>

                          <td class="pr-4 py-4 text-sm text-gray-500">
                            <div class="flex justify-between mb-1 w-full">
                              <h2 class="text-sm font-medium text-gray-800 whitespace-nowrap capitalize">
                                {item.name ? item.name : ""}
                              </h2>
                              <span class="font-medium text-sm text-gray-400 ">
                                {item.total ? item.total : 0} /
                                {total ? total : 0}
                              </span>
                            </div>
                            <div className="w-full h-2.5 bg-gray-200 rounded-full">
                              <div
                                class="bg-green-400 h-2.5 rounded-full dark:bg-green-500"
                                style={{
                                  width: `${
                                    item.total ? (total / 100) * item.total : ""
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

export default GenresTableComponent;
