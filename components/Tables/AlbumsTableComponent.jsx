import React from "react";
import { map, size } from "lodash";

function AlbumsTableComponent(props) {
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
                Album
              </th>

              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Artists
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
                                <p class="text-xs font-normal text-gray-600 capitalize">
                                  {item.album_type ? item.album_type : ""} |{" "}
                                  <span className="text-gray-600">
                                    {item.total}{" "}
                                    {item.total == 1 ? "Track" : "Tracks"}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </td>

                          <td class="px-4 py-4 text-gray-500">
                            <p class="text-sm font-normal text-gray-500 ">
                              {size(item.artists) == 0 ? (
                                <>N/A</>
                              ) : (
                                item.artists.map((artist, index) => (
                                  <>
                                    {index == 0 ? (
                                      <>{artist.name}</>
                                    ) : (
                                      <>, {artist.name}</>
                                    )}
                                  </>
                                ))
                              )}
                            </p>
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

export default AlbumsTableComponent;
