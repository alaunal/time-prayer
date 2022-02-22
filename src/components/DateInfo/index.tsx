import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import tw, { styled, css } from "twin.macro";

export type SidebarProps = {
  day?: string;
  date?: string;
  islamicDay?: string;
  islamicDate?: string;
};

const DateInfo: React.FC<SidebarProps> = ({ day, date, islamicDate, islamicDay }) => {
  return (
    <Wrapper>
      <DateContent>
        <p>
          <span>{day}</span>
          <br />
          {date}
        </p>
      </DateContent>
      <DateContent>
        <p>
          <span>{islamicDay}</span>
          <br />
          {islamicDate}
        </p>
      </DateContent>
    </Wrapper>
  );
};

// -- PropTypes

DateInfo.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  islamicDate: PropTypes.string,
  islamicDay: PropTypes.string,
};

DateInfo.defaultProps = {
  day: moment().format("dddd"),
  date: moment().format("DD MMM YYYY"),
  islamicDay: "",
  islamicDate: "",
};

// -- styled area

const Wrapper = styled.div(() => [tw`flex w-full items-center justify-between p-6`]);

const DateContent = styled.div(() => [
  css`
    p {
      ${tw`text-left text-gray-400`}

      span {
        ${tw`font-bold text-gray-600 text-xl`}
      }
    }
  `,
]);

export default DateInfo;
