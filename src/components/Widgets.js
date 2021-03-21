import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import "./widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widget_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Twitter"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
