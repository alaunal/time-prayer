import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../../store";
import tw, { styled, css } from "twin.macro";

import { isEmpty } from "lodash";

import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import DateInfo from "../../components/DateInfo";
import ListTime from "../../components/ListTime";
import DateNavigation from "../../components/DateNavigation";

import bgCover from "../../assets/bg-image.jpg";

const Home: React.FC<any> = () => {
  const locationState = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch<Dispatch>();

  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: -6.2295712,
    longitude: 106.759478,
  });

  const [currentLocation, setCurrentLocation] = useState("Jakarta, Indonesia");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentCoordinate({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    dispatch.location.getLocation(currentCoordinate);
  }, []);

  useEffect(() => {
    if (!isEmpty(locationState)) {
      setCurrentLocation(`${locationState["city"]}, ${locationState["countryName"]}`);
    }
  }, [locationState]);

  return (
    <Layout>
      <BoxCard>
        <LeftCol>
          <Sidebar location={currentLocation} />
        </LeftCol>
        <RightCol>
          <DateInfo />
          <DateNavigation />
          <ListTime />
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
