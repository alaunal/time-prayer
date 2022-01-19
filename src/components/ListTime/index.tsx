import React from "react";
import tw, { styled, css } from "twin.macro";

interface listTime {
  isActive?: boolean;
}

const ListTime: React.FC<any> = () => {
  return (
    <Wrapper>
      <div tw="flex-1">
        <List>
          <div tw="text-lg text-gray-500">Fajr</div>
          <div tw="text-lg text-gray-500">04:23 (WIB)</div>
        </List>
        <List>
          <div tw="text-lg text-gray-500">Sunrise</div>
          <div tw="text-lg text-gray-500">05:22 (WIB)</div>
        </List>
        <List isActive>
          <div tw="text-lg text-gray-700 font-medium">Dhuhr</div>
          <div tw="text-lg text-gray-700 font-medium">05:22 (WIB)</div>
        </List>
        <List>
          <div tw="text-lg text-gray-500">Asr</div>
          <div tw="text-lg text-gray-500">05:22 (WIB)</div>
        </List>
        <List>
          <div tw="text-lg text-gray-500">Maghrib</div>
          <div tw="text-lg text-gray-500">05:22 (WIB)</div>
        </List>
        <List>
          <div tw="text-lg text-gray-500">Isha</div>
          <div tw="text-lg text-gray-500">05:22 (WIB)</div>
        </List>
        <List>
          <div tw="text-lg text-gray-500">Imsak</div>
          <div tw="text-lg text-gray-500">05:22 (WIB)</div>
        </List>
      </div>
    </Wrapper>
  );
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
