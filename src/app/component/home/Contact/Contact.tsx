"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import alogo from "../../../assets/alogo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWaze } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Contact = () => {
  return (
    <div id="contact" className="mt-20 bg-[#222] min-h-[350px] md:px-[64px] mb-8">
      <div className="container py-10">
        <div className="flex w-fit mx-auto gap-20 items-center">
          <div className="hidden lg:flex items-center justify-center ">
            <Image src={alogo} alt="alogo" className="object-contain" />
          </div>

          <div className="flex flex-col text-center lg:text-start">
            <div className="flex justify-start ">
              <h1 className="uppercase text-center lg:text-start w-full text-white font-bold">
                lojas
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 w-full lg:space-x-12 ">
              <div className="hidden md:flex flex-col justify-center items-center lg:items-start">
                <div className="flex gap-2 justify-center items-center">
                  <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-center lg:text-start text-[13px] font-bold text-white">
                    Av Norte
                  </h1>
                </div>
                <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                  Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada -
                  Recife/PE - 52021-020
                </p>

                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 3125-9150
                  </h1>
                </div>
                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 99161-3406
                  </h1>
                </div>

                <div className="max-w-[212px] w-full text-center h-auto bg-[#DDDAD4] hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaRegClock className="text-[12px]" />
                  <p className="text-[12px] "> Horário de Funcionamento</p>
                </div>

                <div className="max-w-[188px] w-full text-center h-auto bg-[#DDDAD4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaMapLocationDot className="text-[12px]" />
                  <p className="text-[12px] "> Abrir no Google Maps</p>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-center items-center lg:items-start">
                <div className="flex gap-2 justify-center items-center">
                  <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    Av Norte
                  </h1>
                </div>
                <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                  Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada -
                  Recife/PE - 52021-020
                </p>

                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 3125-9150
                  </h1>
                </div>
                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 99161-3406
                  </h1>
                </div>

                <div className="max-w-[212px] w-full text-center h-auto hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaRegClock className="text-[12px]" />
                  <p className="text-[12px] "> Horário de Funcionamento</p>
                </div>

                <div className="max-w-[188px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaMapLocationDot className="text-[12px]" />
                  <p className="text-[12px] "> Abrir no Google Maps</p>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-center items-center lg:items-start">
                <div className="flex gap-2 justify-center items-center">
                  <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    Av Norte
                  </h1>
                </div>
                <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                  Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada -
                  Recife/PE - 52021-020
                </p>

                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 3125-9150
                  </h1>
                </div>
                <div className="flex gap-2 justify-center mt-2 items-center">
                  <FaPhone className="text-[12px] text-[#ffc107]" />
                  <h1 className="uppercase text-[13px] font-bold text-white">
                    81 99161-3406
                  </h1>
                </div>

                <div className="max-w-[212px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaRegClock className="text-[12px]" />
                  <p className="text-[12px] "> Horário de Funcionamento</p>
                </div>

                <div className="max-w-[188px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                  <FaMapLocationDot className="text-[12px]" />
                  <p className="text-[12px] "> Abrir no Google Maps</p>
                </div>
              </div>
              <div className="max-w-[320px] w-full  static md:hidden">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="myswiper static"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="flex flex-col justify-center items-center bg-[#222222] w-full h-auto mb-10">
                      <div className="flex gap-2 justify-center items-center">
                        <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-center lg:text-start text-[13px] font-bold text-white">
                          Av Norte
                        </h1>
                      </div>
                      <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                        Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada -
                        Recife/PE - 52021-020
                      </p>

                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 3125-9150
                        </h1>
                      </div>
                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 99161-3406
                        </h1>
                      </div>

                      <div className="max-w-[212px] w-full text-center h-auto bg-[#DDDAD4] hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaRegClock className="text-[12px]" />
                        <p className="text-[12px] ">
                          {" "}
                          Horário de Funcionamento
                        </p>
                      </div>

                      <div className="max-w-[188px] w-full text-center h-auto bg-[#DDDAD4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaMapLocationDot className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Google Maps</p>
                      </div>
                      <div className="max-w-[144px] w-full text-center h-auto bg-[#dddad4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaWaze className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Waze</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="flex flex-col justify-center items-center bg-[#222222] w-full h-auto mb-10">
                      <div className="flex gap-2 justify-center items-center">
                        <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-center lg:text-start text-[13px] font-bold text-white">
                          Caxangá
                        </h1>
                      </div>
                      <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                        Av. Caxangá, 2477, Cordeiro - Recife/PE - 50721-000
                      </p>

                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 3225-9600
                        </h1>
                      </div>
                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 99161-3406
                        </h1>
                      </div>

                      <div className="max-w-[212px] w-full text-center h-auto bg-[#DDDAD4] hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaRegClock className="text-[12px]" />
                        <p className="text-[12px] ">
                          {" "}
                          Horário de Funcionamento
                        </p>
                      </div>

                      <div className="max-w-[188px] w-full text-center h-auto bg-[#DDDAD4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaMapLocationDot className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Google Maps</p>
                      </div>
                      <div className="max-w-[144px] w-full text-center h-auto bg-[#dddad4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaWaze className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Waze</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="flex flex-col justify-center items-center bg-[#222222] w-full h-auto mb-10">
                      <div className="flex gap-2 justify-center items-center">
                        <FaMapMarkerAlt className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-center lg:text-start text-[13px] font-bold text-white">
                          Caruaru
                        </h1>
                      </div>
                      <p className="max-w-[212px] mt-2 text-[12.8px] text-white">
                        Av. dos Estados, 473, Maurício de Nassau - Caruaru/PE -
                        55014-225
                      </p>

                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 3722-8500
                        </h1>
                      </div>
                      <div className="flex gap-2 justify-center mt-2 items-center">
                        <FaPhone className="text-[12px] text-[#ffc107]" />
                        <h1 className="uppercase text-[13px] font-bold text-white">
                          81 99161-3406
                        </h1>
                      </div>

                      <div className="max-w-[212px] w-full text-center h-auto bg-[#DDDAD4] hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaRegClock className="text-[12px]" />
                        <p className="text-[12px] ">
                          {" "}
                          Horário de Funcionamento
                        </p>
                      </div>

                      <div className="max-w-[188px] w-full text-center h-auto bg-[#DDDAD4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaMapLocationDot className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Google Maps</p>
                      </div>
                      <div className="max-w-[144px] w-full text-center h-auto bg-[#dddad4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
                        <FaWaze className="text-[12px]" />
                        <p className="text-[12px] "> Abrir no Waze</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
