"use client";

import React, { useState } from "react";
import { FaTag } from "react-icons/fa";

const Hero = () => {
  const [formData, setFormData] = useState<any>({
    origem: "INTERNET",
    tipoEvento: "LEAD",
    midia: "SITE",
    assunto: "",
  });
  const handleSubmit = () => {
    console.log("formData");
    console.log(formData);
  };

  return (
    <section id="offer" className="container pt-[24px] pb-[48px] md:py-[48px]">
      <div className="pb-4">
        <div className="flex  items-start md:items-center ">          
          <h1 className="text-[22px] leading-[1.2]  font-bold">
          <FaTag className="lg:text-[15px] inline-block h-[15px] text-[25px]" />
            {" "}
            Receba uma <span className="text-[#DC3545]">
              oferta exclusiva
            </span>{" "}
            do seu novo Renault
          </h1>
        </div>
        <p className="text-[16px]">
          Condições imperdíveis para você comprar o seu carro novo. Só aqui na
          Regence!
        </p>
      </div>

      <form
        id="formLead"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input type="hidden" name="origem" value="INTERNET" />
        <input type="hidden" name="tipoEvento" value="LEAD" />
        <input type="hidden" name="midia" value="SITE" />
        <input type="hidden" name="assunto" id="assunto" value="" />
        <div className="flex flex-wrap gap-1 bg-[#FDB414] bg-primary p-1">
          <div className="flex w-full lg:w-[calc(50%-4px)] gap-1">
            <div className="w-full bg-white h-[40px]">
              <select
                title="alksd"
                name="modelo"
                value={formData.modelo}
                required
                onChange={(e) => {
                  setFormData((prev: any) => ({
                    ...prev,
                    modelo: e.target.value,
                  }));
                }}
                id="modelo"
                className="form-control text-[14px]"
                data-parsley-required=""
                data-parsley-errors-messages-disabled=""
              >
                <option value="" className="">Qual o carro?</option>
                <option value="Kwid" data-slug="kwid">
                  Kwid
                </option>
                <option value="Kwid E-TECH" data-slug="kwid-e-tech">
                  Kwid E-TECH
                </option>
                <option value="Stepway" data-slug="stepway">
                  Stepway
                </option>
                <option value="Kangoo E-TECH" data-slug="kangoo-e-tech">
                  Kangoo E-TECH
                </option>
                <option value="Logan" data-slug="logan">
                  Logan
                </option>
                <option value="Duster" data-slug="duster">
                  Duster
                </option>
                <option value="Oroch" data-slug="duster-oroch">
                  Oroch
                </option>
                <option value="MASTER Chassi" data-slug="master-chassi">
                  MASTER Chassi
                </option>
                <option value="MASTER Furgão" data-slug="master-furgao">
                  MASTER Furgão
                </option>
                <option value="Minubus" data-slug="master-minibus">
                  Minubus
                </option>
                <option value="Megane E-tech" data-slug="megane">
                  Megane E-tech
                </option>
              </select>
            </div>
            <div className="w-full bg-white h-[40px]">
              <select
                title="alskd"
                name="loja"
                value={formData.loja}
                required
                onChange={(e) => {
                  setFormData((prev: any) => ({
                    ...prev,
                    loja: e.target.value,
                  }));
                }}
                id=""
                className="form-control"
                data-parsley-required=""
                data-parsley-errors-messages-disabled=""
              >
                <option value="">Qual a loja?</option>
                <option value="7">Av Norte</option>
                <option value="10">Caxangá</option>
                <option value="8">Caruaru</option>
              </select>
            </div>
          </div>
          <div className="w-full text-[14px] lg:w-[calc(25%-4px)] bg-white h-[40px]">
            <select
              title="lkasdjfsdl"
              name="preferencia"
              value={formData.preferencia}
              required
              onChange={(e) => {
                setFormData((prev: any) => ({
                  ...prev,
                  preferencia: e.target.value,
                }));
              }}
              id=""
              className="form-control"
              data-parsley-required=""
              data-parsley-errors-messages-disabled=""
            >
              <option value="">Como prefere o contato?</option>
              <option value="WhatsApp">Por WhatsApp</option>
              <option value="Telefone">Por Telefone</option>
            </select>
          </div>
          <div className="w-full lg:w-[calc(25%-4px)] bg-white h-[40px]">
            <select
              title="alkd,3m4"
              name="quando"
              value={formData.quando}
              required
              onChange={(e) => {
                setFormData((prev: any) => ({
                  ...prev,
                  quando: e.target.value,
                }));
              }}
              id=""
              className="form-control"
              data-parsley-required=""
              data-parsley-errors-messages-disabled=""
            >
              <option value="">Quando pretende comprar?</option>
              <option value="Agora">Agora!</option>
              <option value="Em até 30 dias">Em até 30 dias</option>
              <option value="Em 3 meses ou mais">Em 3 meses ou mais</option>
            </select>
          </div>
          <div className="w-full lg:w-[calc(25%-4px)] bg-white h-[40px]">
            <input
              type="text"
              className="form-control"
              id=""
              name="nome"
              value={formData.nome}
              required
              onChange={(e) => {
                setFormData((prev: any) => ({
                  ...prev,
                  nome: e.target.value,
                }));
              }}
              placeholder="Seu nome"
              data-parsley-trigger="change"
              data-parsley-required=""
              data-parsley-errors-messages-disabled=""
            />
          </div>
          <div className="w-full lg:w-[calc(25%-4px)] bg-white h-[40px]">
            <input
              type="email"
              className="form-control"
              id=""
              name="email"
              value={formData.email}
              required
              onChange={(e) => {
                setFormData((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              placeholder="Seu e-mail"
            />
          </div>
          <div className="w-full lg:w-[calc(25%-4px)] bg-white h-[40px]">
            <input
              type="tel"
              className="form-control telefone"
              id=""
              name="telefone"
              value={formData.telefone}
              required
              onChange={(e) => {
                setFormData((prev: any) => ({
                  ...prev,
                  telefone: e.target.value,
                }));
              }}
              placeholder="DDD + Telefone"
              data-parsley-trigger="change"
              autoComplete="off"
              minLength={14}
              data-parsley-minLength="14"
              data-parsley-required=""
              data-parsley-errors-messages-disabled=""
              maxLength={15}
            />
          </div>
          <button
            type="submit"
            id="formEnviar"
            className="w-full lg:w-[calc(25%-4px)] bg-[#FDB414] h-[40px] grid place-items-center font-bold"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
