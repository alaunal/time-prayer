import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

export interface DataProps {
  children: any;
}

const Layout: React.FC<DataProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

// -- proptypes

Layout.propTypes = {
  children: PropTypes.node,
};

// -- Styled area

const Wrapper = styled.main(() => [
  tw`mx-auto w-full bg-green-700 min-h-screen relative relative flex items-center justify-center`,
]);

export default Layout;
