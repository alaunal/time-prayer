import React from "react";
import PropTypes from "prop-types";
import tw, { styled, css } from "twin.macro";
import { BsGithub, BsFillGeoAltFill } from "react-icons/bs";

export type SidebarProps = {
  prayTime?: any;
  location?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ prayTime, location }) => {
  return (
    <>
      <Heading>
        <h1>
          waktu<span>Sholat</span>
        </h1>
        <p>Prayer times web application</p>
      </Heading>
      <ContentTime>
        <PrayName>{prayTime.name}</PrayName>
        <PrayTime>{prayTime.time}</PrayTime>
        <PrayLocation>
          <BsFillGeoAltFill /> {location}
        </PrayLocation>
      </ContentTime>
      <Footer>
        <div>
          <Copyright tw="text-white text-sm">
            Copyright <span>AKCODE</span> 2021
          </Copyright>
        </div>
        <div>
          <GithubLink
            href="https://github.com/alaunal/time-prayer"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> Github
          </GithubLink>
        </div>
      </Footer>
    </>
  );
};

// -- PropTypes

Sidebar.propTypes = {
  prayTime: PropTypes.object,
  location: PropTypes.string,
};

Sidebar.defaultProps = {
  prayTime: { name: "-", times: "00:00" },
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

const ContentTime = styled.div(() => [tw`text-center z-10`]);

const PrayName = styled.p(() => [tw`text-gray-200 mb-2 text-2xl`]);

const PrayTime = styled.h2(() => [tw`text-7xl text-white font-light mb-2`]);

const PrayLocation = styled.p(() => [
  tw`text-gray-200`,
  css`
    svg {
      ${tw`inline-block align-middle mr-1`}
    }
  `,
]);

const Footer = styled.footer(() => [tw`text-center z-10 flex justify-between w-full`]);

const Copyright = styled.p(() => [
  tw`text-white text-sm`,
  css`
    span {
      ${tw`font-medium`}
    }
  `,
]);

const GithubLink = styled.a(() => [
  tw`text-white text-sm inline-block`,
  css`
    svg {
      ${tw`inline-block mr-1 align-middle`}
    }
  `,
]);

export default Sidebar;
