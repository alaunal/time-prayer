import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../../store";
import tw, { styled, css } from "twin.macro";

import { isEmpty } from "lodash";
import moment from "moment";

import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import DateInfo from "../../components/DateInfo";
import ListTime from "../../components/ListTime";
import DateNavigation from "../../components/DateNavigation";

import bgCover from "../../assets/bg-image.jpg";

const Home: React.FC<any> = () => {
  const locationState = useSelector((state: RootState) => state.location);
  const scheduleState = useSelector((state: RootState) => state.schedule);

  const dispatch = useDispatch<Dispatch>();

  // -- State of lat long
  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: -6.2295712,
    longitude: 106.759478,
  });

  // -- state of location
  const [currentLocation, setCurrentLocation] = useState("Jakarta, Indonesia");

  // -- state of selected date
  const [selectedDate, setSelectedDate] = useState<string>(moment().format("DD MMM YYYY"));

  // -- state of times prayer
  const [selectedTime, setSelectedTime] = useState<any>({});

  const handleChangeDate = (val: string) => {
    setSelectedDate(val);

    dispatch.schedule.fetchTimesByDate({
      latitude: currentCoordinate.latitude,
      longitude: currentCoordinate.longitude,
      date: moment(val).format("D-MM-YYYY"),
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentCoordinate({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    dispatch.location.getLocation(currentCoordinate);

    dispatch.schedule.fetchTimesByDate({
      latitude: currentCoordinate.latitude,
      longitude: currentCoordinate.longitude,
      date: moment(selectedDate).format("D-MM-YYYY"),
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(locationState)) {
      setCurrentLocation(`${locationState["city"]}, ${locationState["countryName"]}`);
    }
  }, [locationState]);

  useEffect(() => {
    if (!isEmpty(scheduleState)) {
      setSelectedTime(scheduleState);
    }
  }, [scheduleState]);

  return (
    <Layout>
      <BoxCard>
        <LeftCol>
          <Sidebar location={currentLocation} />
        </LeftCol>
        <RightCol>
          <DateInfo
            day={
              !isEmpty(selectedTime)
                ? moment(selectedTime.date.readable).format("dddd")
                : moment(selectedDate).format("dddd")
            }
            date={
              !isEmpty(selectedTime)
                ? moment(selectedTime.date.readable).format("DD MMM YYYY")
                : moment(selectedDate).format("DD MMM YYYY")
            }
            islamicDay={!isEmpty(selectedTime) ? selectedTime.date.hijri.weekday.en : ""}
            islamicDate={
              !isEmpty(selectedTime)
                ? `${selectedTime.date.hijri.day} ${selectedTime.date.hijri.month.en} ${selectedTime.date.hijri.year}`
                : ""
            }
          />
          <DateNavigation selectDate={selectedDate} handleChangeDate={handleChangeDate} />
          <ListTime data={!isEmpty(selectedTime) ? selectedTime.timings : {}} />
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
