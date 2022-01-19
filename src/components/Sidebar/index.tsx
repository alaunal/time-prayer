import React from "react";
import PropTypes from "prop-types";
import tw, { styled, css } from "twin.macro";
import { BsGithub, BsFillGeoAltFill } from "react-icons/bs";

export type SidebarProps = {
  prayTime?: string;
  times?: string;
  location?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ prayTime, times, location }) => {
  return (
    <>
      <Heading>
        <h1>
          waktu<span>Sholat</span>
        </h1>
        <p>Prayer times web application</p>
      </Heading>
      <div tw="text-center z-10">
        <p tw="text-gray-200 mb-2 text-2xl">{ prayTime }</p>
        <h2 tw="text-7xl text-white font-light mb-2">{ times }</h2>
        <p tw="text-gray-200">
          <BsFillGeoAltFill tw="inline-block align-middle mr-1" /> { location }
        </p>
      </div>
      <Footer>
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
      </Footer>
    </>
  );
};

// -- PropTypes

Sidebar.propTypes = {
  prayTime: PropTypes.string,
  times: PropTypes.string,
  location: PropTypes.string,
};

Sidebar.defaultProps = {
  prayTime: "Ashr",
  times: "04:20",
  location: "Jakarta Indonesia",
};

// -- styled area

const Heading = styled.div(() => [
  tw`text-center z-10`,
  css`
    h1 {
      ${tw`text-gray-100 text-3xl font-light`}

      span {
        ${tw`text-4xl font-bold text-yellow-400`}
      }
    }

    p {
      ${tw`text-gray-200 text-sm`}
    }
  `,
]);

const Footer = styled.footer(() => [tw`text-center z-10 flex justify-between w-full`]);

export default Sidebar;
