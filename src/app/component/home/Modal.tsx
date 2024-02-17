import React, { useState } from "react";
import Image from "next/image";
import Whatsapp from "../../assets/whatsapp.png";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
const Modal = ({ setModal }: { setModal: any }) => {
  return (
    <div className="block top-0 left-0 fixed h-screen z-[10] w-screen overflow-y-auto">
      <div
        className="absolute top-0 left-0 bg-black/50 cursor-pointer h-screen w-full z-[10]"
        onClick={() => {
          setModal(false);
        }}
      ></div>

        <div className="relative  z-[11] flex max-h-screen min-h-80 w-fit mx-auto mt-[10px] md:mt-10">
          <div className="bg-white rounded-lg shadow-xl w-[300px] md:min-w-[500px]  md:w-full max-w-md  mx-auto">
            <div className="bg-[#455a64] gray-700 text-white py-4 px-6 flex justify-between items-center">
              <Image src={Whatsapp} alt="WhatsApp Logo" />
              <button
                type="button"
                className=""
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setModal(false);
                }}
              >
              <p className="text-[#212529] text-[24px] ">  × </p>
              </button>
            </div>
            <div className="p-3 bg-white overflow-y-auto w-full h-auto">
              <p className="text-lg text-[12px] font-sans text-[#212529]">
                Preencha os campos abaixo para iniciar agora uma conversa pelo
                WhatsApp:
              </p>

              <div className="mt-5 mb-1 text-[#495057]">
                <input
                  type="text"
                  className="form-control py-3 px-4 block w-full border-gray-300 rounded-md border-[1px]   focus:border-[#fedc92] outline-none focus:border-solid focus:border-[3px] focus:shadow-sm  focus:shadow-[#fedc92] shadow-[rgba(253,180,20,0.25)] "
                  name="nome"
                  placeholder="Seu nome"
                  data-parsley-trigger="change"
                  data-parsley-required
                  data-parsley-errors-messages-disabled
                />
              </div>

              <div className="mb-1">
                <input
                  type="email"
                  className="form-control py-3 px-4 block w-full border-gray-300 rounded-md border-[1px]   focus:border-[#fedc92] outline-none focus:border-solid focus:border-[3px] focus:shadow-sm  focus:shadow-[#fedc92] shadow-[rgba(253,180,20,0.25)]"
                  name="email"
                  placeholder="Seu e-mail"
                  data-parsley-trigger="change"
                  data-parsley-required
                  data-parsley-errors-messages-disabled
                />
              </div>

              <div className="mb-1">
                <input
                  type="text"
                  className="form-control py-3 px-4 block w-full border-gray-300 rounded-md border-[1px]   focus:border-[#fedc92] outline-none focus:border-solid focus:border-[3px] focus:shadow-sm  focus:shadow-[#fedc92] shadow-[rgba(253,180,20,0.25)]"
                  name="telefone"
                  placeholder="DDD + Telefone"
                  data-parsley-trigger="change"
                  data-parsley-minlength="14"
                  data-parsley-required
                  data-parsley-errors-messages-disabled
                />
              </div>

              <div className="mb-1">
                <select
                  name="setor"
                  id="setor"
                  className="form-control py-3 px-4 block w-full border-gray-300 rounded-md border-[1px]   focus:border-[#fedc92] outline-none focus:border-solid focus:border-[3px] focus:shadow-sm  focus:shadow-[#fedc92] shadow-[rgba(253,180,20,0.25)]"
                  data-parsley-required
                  data-parsley-errors-messages-disabled
                >
                  <option value="">Selecione o Departamento</option>
                  <option value="Vendas">Venda de Veículos Novos</option>
                  <option value="Pos-vendas">Agendamento de Serviços</option>
                </select>
              </div>

              <div>
                <button className="bg-green-500 text-[1.25rem] flex items-center justify-center  hover:bg-green-600 text-white font-sans py-3  rounded-lg w-full">
                  <FaWhatsapp className="inline-block w-6 h-6 mr-2" />
                  INICIAR CONVERSA
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Modal;
