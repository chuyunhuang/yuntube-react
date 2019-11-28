import React from 'react';
import './Home.scss';
import { VideoGrid } from '../../Components/VideoGrid/VideoGrid';
import { SideBar } from '../SideBar/SideBar';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="International" hideDivider={true} />
          </div>
        </div>

      </React.Fragment>
    )
  }
}

