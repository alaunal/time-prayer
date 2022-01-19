import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import tw, { styled, css } from "twin.macro";

interface buttonProps {
  isActive?: boolean;
}

interface navigateProps {
  selectDate?: string;
}

const getWeek = () => {
  const startOfWeek = moment().startOf("isoWeek");
  const endOfWeek = moment().endOf("isoWeek");

  let days = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(day.toDate());
    day = day.clone().add(1, "d");
  }

  return days;
};

const DateNavigation: React.FC<navigateProps> = ({ selectDate }) => {
  const thisWeek = getWeek();

  const itemNavigation = thisWeek.map((day, index) => {
    const date = moment(day).format("DD");
    const daySort = moment(day).format("ddd");
    const isActive = moment(day).format("DD") === moment(selectDate).format("DD");

    return (
      <div key={index}>
        <Button isActive={isActive}>
          <span>{date}</span> <br /> {daySort}
        </Button>
      </div>
    );
  });

  return <Wrapper>{itemNavigation}</Wrapper>;
};

// -- styled area

const Wrapper = styled.nav(() => [tw`grid grid-cols-7 gap-2 px-6 mb-6`]);

const Button = styled.button<buttonProps>(({ isActive = false }) => [
  tw`w-full py-3 text-center rounded-lg`,
  isActive
    ? tw`text-white bg-green-500 cursor-default`
    : tw`text-gray-400 bg-gray-50 hover:bg-gray-100 cursor-pointer`,
  css`
    span {
      ${tw`text-2xl`}
      ${isActive ? tw`text-white` : tw`text-gray-600`}
    }
  `,
]);

// -- PropTypes

DateNavigation.propTypes = {
  selectDate: PropTypes.string,
};

DateNavigation.defaultProps = {
  selectDate: moment().format("DD MMM YYYY"),
};

export default DateNavigation;
