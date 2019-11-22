/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as outlinedStyle from './outlineStyle';
import { btnBaseStyle, IconStyledButton } from './IconStyledButton';
import * as Icons from '../../staticData/images/icons';
import GlowStyledBtn from './GlowStyledBtn';

function OutlinedButton(props) {
  const Btn = styled.button.attrs(({ onClick }) => ({ onClick }))`
    ${outlinedStyle.base};
    ${outlinedStyle[props.size]}
    ${outlinedStyle[props.type]}
  `;
  return (
    <Btn {...props}>
      <span>{props.text}</span>
    </Btn>
  );
}

function IconButton(props) {
  if (props.effect === 'glow') {
    const Wrapper = styled.div`
      width: 70px;
    `;
    return (
      <div>
        <Wrapper>
          <GlowStyledBtn {...props}>{Icons[props.type]}</GlowStyledBtn>
        </Wrapper>
      </div>
    );
  }

  return (
    <div>
      <IconStyledButton {...props}>{Icons[props.type]}</IconStyledButton>
    </div>
  );
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  colorSet: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.propTypes = {
  colorSet: PropTypes.string,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string,
};

export { OutlinedButton, IconButton };
