import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

export type SidebarProps = {
  day?: string;
  date?: string;
  islamicDay?: string;
  islamicDate?: string;
};

const DateInfo: React.FC<SidebarProps> = ({ day, date, islamicDate, islamicDay }) => {
  return (
    <div tw="flex w-full items-center justify-between p-6">
      <div>
        <p tw="text-left text-gray-400">
          <span tw="font-bold text-gray-600 text-xl">{day}</span>
          <br />
          {date}
        </p>
      </div>
      <div>
        <p tw="text-right text-gray-400">
          <span tw="font-bold text-gray-600 text-xl">{islamicDay}</span>
          <br />
          {islamicDate}
        </p>
      </div>
    </div>
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
  day: "Moday",
  date: "23 March 2021",
  islamicDay: "Al Athnayn",
  islamicDate: "23 Rabīʿ al-awwal 1443",
};

export default DateInfo;
