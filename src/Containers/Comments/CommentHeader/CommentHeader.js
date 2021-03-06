import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './CommentHeader.scss';

export function CommentHeader(props) {
  return (
    <div className="comments-header">
      <h4>{props.amountComment} Comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left" />
        Sort By
      </Button>
    </div>
  )
}