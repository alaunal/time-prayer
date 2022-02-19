import React from "react";
import PropTypes from "prop-types";
import tw, { styled, css } from "twin.macro";

import { map, isEmpty } from "lodash";

interface listTime {
  isActive?: boolean;
}

export type ListTimeProps = {
  data?: any;
  prayerTime?: any;
};

const ListTime: React.FC<ListTimeProps> = ({ data, prayerTime }) => {

  return (
    <Wrapper>
      {!isEmpty(data) ? (
        <div tw="flex-1">
          {map(data, (item, index) => (
            <List key={index} isActive={prayerTime.name === index}>
              <div tw="text-lg text-gray-500">{index}</div>
              <div tw="text-lg text-gray-500">{item}</div>
            </List>
          ))}
        </div>
      ) : (
        <div tw="flex-1 py-20">
          <h1 tw="text-xl text-gray-500 text-center mb-2 font-semibold">Not Avaliable!</h1>
          <p tw="text-sm text-gray-600 text-center">Please Check your connection, times prayer failed load!</p>
        </div>
      )}
    </Wrapper>
  );
};

ListTime.propTypes = {
  data: PropTypes.object,
  prayerTime: PropTypes.object,
};

// -- styled area

const Wrapper = styled.nav(() => [tw`flex flex-col w-full px-6`]);

const List = styled.div<listTime>(({ isActive = false }) => [
  tw`flex w-full px-5 py-3 rounded-xl justify-between  mb-3`,
  isActive ? tw`bg-green-100` : tw`bg-gray-50`,
  css`
    div {
      ${tw`text-lg`}
      ${isActive ? tw`text-gray-700 font-medium` : tw`text-gray-500`}
    }
  `,
]);

export default ListTime;
