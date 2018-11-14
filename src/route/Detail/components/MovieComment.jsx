import React from 'react'
import './MovieComment.scss' 

export default function MovieComment() {
  return (
    <section className="comment">
      <div className="comment-header clearfix">
        <h2 className="comment-title">观众热评</h2>
        <a href="#" className="comment-btn tBtn">写影评</a>
      </div>
      <div className="movieAffect">
        <div className="movieAffect-left">
          <span className="movieAffect-grade"></span>
          <div className="movieAffect-gradePersons">
            100000人评价
            <i className="i-arrow"></i>
          </div>
        </div>
        <div className="movieAffect-right">
          <ul className="movieAffect-stars">
            <li>
              <i className="movieAffect-star"></i>
              <span className="movieAffect-hot"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="movieAffect-labels">
        <div className="movieAffect-label">热门</div>      
      </div>
      <div className="movieAffect-reviewerns">
        <div className="maReviewern">
          <div className="mReviewern-title">
            <div className="mReviewern-avatar">
              <img src="" alt=""/>
            </div>
            <div className="mReviewern-info">
              <h4 className="mReviewern-username"></h4>
              <div className="mReviewern-grade">
                <i className="mReviewern-star"></i>
                <i className="mReviewern-score"></i>
              </div>
            </div>
            <a href="#" className="mReviewern-detail">
              <i className="mReviewern-detailIcon"></i>
            </a>
          </div>
          <div className="mReviewern-commentText"></div>
          <div className="mReviewern-footer">
            <span className="mReviewern-time"></span>
            <div className="mReviewern-idea">
              <a href="" className="mReviewern-praise">
                <i></i>
                1321
              </a>
              <a href="" className="mReviewern-reply">
                <i></i>
                24
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
