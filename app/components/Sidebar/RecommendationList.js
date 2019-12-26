import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthorCard from '../AuthorCard';
import Avatar from '../Avatar';
import OverlayTrigger from '../OverlayTrigger';
import PopoverContent from '../AuthorCard/PopoverContent';
import { IconButton } from '../Button';
import { Li, H2, Wrapper, NumWrapper, IconWrapper } from './ListWrappers';
const RecommendationList = props => {
  const leftSide = () => {
    let ele;
    if (props.type === 'newFromNetwork') {
      ele = (
        <OverlayTrigger
          trigger="hover"
          placement="top-bottom"
          popoverContent={<PopoverContent id={props.id} imgType="avatar" />}
        >
          <a href={props.authorLink}>
            <div>
              <Avatar id={props.id} size="40px" />
            </div>
          </a>
        </OverlayTrigger>
      );
    } else if (props.type === 'popularOnMedium') {
      ele = <NumWrapper>{`0${props.index + 1}`}</NumWrapper>;
    } else if (props.type === 'readingList') {
      ele = (
        <IconWrapper>
          <IconButton
            iconName="bookmarkSmallFilledIcon"
            colorSet="gray"
            title="Bookmark this story to read later"
          />
        </IconWrapper>
      );
    }
    return ele;
  };

  return (
    <Li>
      {leftSide()}
      <Wrapper>
        <a href={props.articleLink}>
          <H2>{props.title}</H2>
        </a>
        <AuthorCard id={props.id} variation="Home" hoverEffect />
      </Wrapper>
    </Li>
  );
};

RecommendationList.propTypes = {
  authorLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number,
  type: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { userInfo, articleInfo } = state.testState[id];
  return {
    authorLink: userInfo.authorLink,
    title: articleInfo.title,
    articleLink: articleInfo.articleLink,
  };
}
export default connect(mapStateToProps)(RecommendationList);