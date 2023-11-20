import React from "react";

function FeaturesSection() {
  return (
    <>
      <section class="text-gray-400 bg-gradient-to-r from-[#18171B] via-[#242124] to-[#18171B] body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="text-3xl font-extrabold title-font mb-4 text-green-400 tracking-wider">
              Funcionalidades
            </h1>
          </div>
          {/*  */}
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-green-400 bg-[#2C2A2D] flex-shrink-0">
              <i class="uil uil-user sm:text-[60px] text-[40px]"></i>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Brindar Información Valiosa a Usuarios
              </h2>
              <p class="leading-relaxed text-base">
                La aplicación procesa y analiza estos datos de Spotify para
                extraer información valiosa. Esto puede incluir patrones de
                escucha, géneros favoritos, artistas más reproducidos, entre
                otros.
              </p>
              {/* <a class="mt-3 text-green-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          {/*  */}
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Ofreciendo Perspicacia sobre Preferencias
              </h2>
              <p class="leading-relaxed text-base">
                Ofrecer recomendaciones precisas y sugerencias personalizadas
                basadas en los hábitos de escucha y gustos individuales.
              </p>
              {/* <a class="mt-3 text-green-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
            <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-green-400 bg-[#2C2A2D] flex-shrink-0">
              <i class="uil uil-heart-alt sm:text-[60px] text-[40px]"></i>
            </div>
          </div>
          {/*  */}
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-green-400 bg-[#2C2A2D] flex-shrink-0">
              <i class="uil uil-arrow-growth sm:text-[60px] text-[40px]"></i>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Tendencias y Evolución Musical
              </h2>
              <p class="leading-relaxed text-base">
                Sigue la evolución de la música, permitiendo a los usuarios
                explorar cómo han cambiado sus gustos a lo largo de las semanas,
                meses o años.
              </p>
            </div>
          </div>
          {/*  */}
          <div class="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                Mejorando la Experiencia Musical Personalizada
              </h2>
              <p class="leading-relaxed text-base">
                SoundWave busca mejorar la experiencia musical personalizada de
                cada usuario. Esto se logra al ajustar constantemente las
                recomendaciones y descubrimientos, asegurando que la música
                sugerida esté alineada con los gustos cambiantes y las
                preferencias individuales.
              </p>
            </div>
            <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-green-400 bg-[#2C2A2D] flex-shrink-0">
              <i class="uil uil-flask sm:text-[60px] text-[40px]"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
