import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
      Discover the Steps to Latest in Online Security on our Blog.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://vpnsneak.blogspot.com/2023/12/navigating-public-wi-fi-safely.html">
        <Article
          imgUrl={blog01}
          date="Dec 13, 2023"
          text="Navigating Public Wi-Fi Safely: The Sneak2.0 Advantage"
        />
        </a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://vpnsneak.blogspot.com/2023/12/vpn-sneak-your-guide-to-choosing-right.html">
        <Article
          imgUrl={blog02}
          date="Dec 13, 2023"
          text="VPN Sneak: Your Guide to Choosing the Right Server"
        />
        </a>
        <a href="https://vpnsneak.blogspot.com/2023/12/behind-scenes-sneak-android-app-v770.html">
        <Article
          imgUrl={blog03}
          date="Dec 14, 2023"
          text="Behind the Scenes: Sneak Android App v7.7.0"
        />
        </a>
        <a href="https://vpnsneak.blogspot.com/2023/12/the-abcs-of-online-privacy-vpn-sneak.html">
        <Article
          imgUrl={blog04}
          date="Dec 14, 2023"
          text="The ABCs of Online Privacy: A VPN Sneak Perspective"
        />
        </a>
        <a href="https://vpnsneak.blogspot.com/2023/12/empowering-digital-education-with-vpn.html">
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="Empowering Digital Education with VPN Sneak"
        />
        </a>
      </div>
    </div>
  </div>
);

export default Blog;
