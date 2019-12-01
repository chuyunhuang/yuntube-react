import React from 'react';
import './Watch.scss';
import { Video } from '../../Components/Video/Video';
import { RelatedVideos } from '../../Components/RelatedVideos/RelatedVideos';

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <div className="metadata" style={{ width: '100%', height: '100px', background: '#F91112' }}>Metadata</div>
        <div className="video-info-box" style={{ width: '100%', height: '100px', background: 'orange' }}>Info</div>
        <div className="comments" style={{ width: '100%', height: '100px', background: 'green' }}>Comments</div>
        <RelatedVideos className="relatedVideos" />
      </div>
    )
  }
}