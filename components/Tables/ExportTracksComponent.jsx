import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { size } from "lodash";

import useAuth from "@/hooks/useAuth";
import { getMoodTrack } from "@/utils/mood-meter.utils";

function ExportTracksComponent(props) {
  const { data, features, time_range, identifier } = props;

  const { data_user } = useAuth();

  // Export Table to EXCEL
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `${data_user ? data_user.display_name : ""}_${
      time_range ? time_range.value : null
    }`,
    sheet: "DATA",
  });

  if (!data || !features) return null;
  if (!data_user) return null;

  const { audio_features } = features;
  if (!audio_features || size(audio_features) == 0) return null;

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={onDownload}
          class="flex items-center text-sm px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-esmerald_btn_normal_500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <i class="uil uil-file-download-alt text-lg"></i>

          <span class=" mx-1">Download</span>
        </button>
      </div>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table
          id={identifier ? identifier : ""}
          ref={tableRef}
          class="min-w-full divide-y divide-gray-200 overflow-x-scroll"
        >
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
                Song
              </th>

              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Artists
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Album
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Username
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Time Range
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                URL
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Danceability
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Energy
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Valence
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Popularity
              </th>
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Mood
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 ">
            {!data
              ? null
              : size(data) == 0
              ? null
              : data.map((item, index) => (
                  <>
                    <>
                      <tr>
                        <td class="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {index + 1}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {item.name ? item.name : ""}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          <p class="  line-clamp-1">
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
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {item.album ? item.album.name : ""}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {data_user ? data_user.display_name : ""}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {time_range ? time_range.value : ""}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {item.external_urls ? item.external_urls.spotify : ""}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {audio_features[index].danceability}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {audio_features[index].energy}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {audio_features[index].valence}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {item.popularity ? item.popularity : 0}
                        </td>
                        <td className="px-4 py-4 max-w-[20em] text-sm text-gray-500 relative">
                          {
                            getMoodTrack(
                              audio_features[index].energy,
                              audio_features[index].valence
                            ).emotion
                          }
                        </td>
                      </tr>
                    </>
                  </>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ExportTracksComponent;
