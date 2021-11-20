import React, { useEffect } from "react";
import tw, { styled, css } from "twin.macro";

import { BsGithub, BsFillGeoAltFill } from 'react-icons/bs';

import Layout from "../../components/Layout";

import bgCover from "../../assets/bg-image.jpg";

const Home: React.FC<any> = () => {

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log(position);
    // });
  }, []);

  return (
    <Layout>
      <BoxCard>
        <LeftCol>
          <div tw="text-center z-10">
            <h1 tw="text-gray-200 text-2xl font-light">
              waktu<span tw="text-4xl font-bold">Sholat</span>
            </h1>
            <p tw="text-gray-200 text-sm">Prayer times web application</p>
          </div>
          <div tw="text-center z-10">
            <p tw="text-gray-200 mb-2 text-lg">Ashar</p>
            <h2 tw="text-7xl text-white font-light mb-2">-04:20</h2>
            <p tw="text-gray-200"><BsFillGeoAltFill tw="inline-block align-middle mr-1" /> Jakarta Indonesia</p>
          </div>
          <div tw="text-center z-10 flex justify-between w-full">
            <div>
              <p tw="text-white text-sm">
                Copyright <span tw="font-medium">AKCODE</span> 2021
              </p>
            </div>
            <div>
              <a
                href="https://github.com/alaunal/time-prayer"
                target="_blank"
                rel="noreferrer"
                tw="text-white text-sm inline-block"
              >
                <BsGithub tw="inline-block mr-1 align-middle" /> Github
              </a>
            </div>
          </div>
        </LeftCol>
        <RightCol>
          <div tw="flex w-full items-center justify-between p-6">
            <div>
              <p tw="text-left text-gray-400"><span tw="font-bold text-gray-600 text-xl">Moday</span><br />23 March 2021</p>
            </div>
            <div>
            <p tw="text-right text-gray-400"><span tw="font-bold text-gray-600 text-xl">Al Athnayn</span><br />23 Rabīʿ al-awwal 1443</p>
            </div>
          </div>
          <div tw="grid grid-cols-7 gap-2 px-6 mb-6">
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">02</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">03</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">04</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-white bg-green-500 rounded-lg"><span tw="text-2xl text-white">05</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">06</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">07</span> <br /> Jan</button>
            </div>
            <div>
              <button tw="w-full py-3 text-center text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-lg"><span tw="text-2xl text-gray-600">08</span> <br /> Jan</button>
            </div>
          </div>
          <div tw="flex flex-col w-full px-6">
            <div tw="flex-1">
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Fajr</div>
                <div tw="text-lg text-gray-500">04:23 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Sunrise</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-green-100 mb-3">
                <div tw="text-lg text-gray-500">Dhuhr</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Asr</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Maghrib</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Isha</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
              <div tw="flex w-full px-5 py-3 rounded-xl justify-between bg-gray-50 mb-3">
                <div tw="text-lg text-gray-500">Imsak</div>
                <div tw="text-lg text-gray-500">05:22 (WIB)</div>
              </div>
            </div>
          </div>
        </RightCol>
      </BoxCard>
    </Layout>
  );
};

const BoxCard = styled.div(() => [
  tw`w-full flex bg-white shadow-xl overflow-hidden`,
  css`
    max-width: 1020px;
    height: 720px;
    border-radius: 28px;
  `,
]);

const LeftCol = styled.div(() => [
  tw`bg-cover bg-center relative overflow-hidden flex flex-col justify-between px-5 py-6`,
  css`
    width: 360px;
    height: 720px;
    background-image: url(${bgCover});

    &:before {
      ${tw`top-0 left-0 bg-gray-700 opacity-50 absolute w-full h-full`}
      content: '';
    }
  `,
]);

const RightCol = styled.div(() => [
  tw`bg-white flex-1`,
  css`
    height: 720px;
  `,
]);

export default Home;
