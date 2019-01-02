import React from 'react';
import { Link } from 'react-router-dom';
import RecentPost from './SidebarSubComponents/RecentPost';

export default ({ posts }) => (
  <div class="sidebar col s12 m4 l4 xl4">
    <div class="row">
      <div class="col s12 m12 l12 xl12">
        <Link to="/" class="btn back"><i class="fa fa-home"></i> home</Link>
      </div>
    </div>
    <div class="widget widget-search">
      <div>
        <input placeholder="Search in my blog ..." type="search" />
      </div>
    </div>
    <div class="widget recent-posts">
      <h3 class="widget-title">Recent Posts</h3>
      <ul class="unstyled clearfix">
        {posts.map(post => <RecentPost post={post} />)}
      </ul>
    </div>
    <div class="widget">
      <h3 class="widget-title">Categories</h3>
      <ul class="arrow nav nav-tabs second-font uppercase">
        <li><a href="#">Javascript</a></li>
        <li><a href="#">Wordpress</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">jQuery</a></li>
      </ul>
    </div>
    <div class="widget">
      <h3 class="widget-title">Archives</h3>
      <ul class="arrow nav nav-tabs second-font uppercase">
        <li><a href="#">January 2018</a></li>
        <li><a href="#">December 2017</a></li>
        <li><a href="#">November 2017</a></li>
        <li><a href="#">October 2017</a></li>
        <li><a href="#">September 2017</a></li>
      </ul>
    </div>
    <div class="widget widget-tags">
      <h3 class="widget-title">Popular Tags </h3>
      <ul class="unstyled clearfix">
        <li><a href="#">php</a></li>
        <li><a href="#">javascript</a></li>
        <li><a href="#">html</a></li>
        <li><a href="#">xml</a></li>
        <li><a href="#">envato</a></li>
            </ul>
    </div>
  </div>

)
