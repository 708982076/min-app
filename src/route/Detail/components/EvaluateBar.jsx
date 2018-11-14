import React from 'react'
import './EvaluateBar.scss'

export default function EvaluateBar() {
  return (
    <section className="evaluateBar">
      <div className="evaluateBar-score">
        <div className="evaluateBar-scoreCont">
          <span className="evaluateBar-num">9.3</span>
          <i className="evaluateBar-starIcon"></i>
        </div>
        <div className="evaluateBar-scoreTitle">观众评分456186人</div>
      </div>
      <div className="evaluateBar-finer">
        <div className="evaluateBar-per">83%</div>
        <div className="evaluateBar-perTitle">V淘推荐度</div>
      </div>
      <div className="evaluateBar-see">
        <div className="evaluateBar-wantPerson">
          712123
            </div>
        <div className="evaluateBar-seeTitle">想看人数</div>
      </div>
    </section>
  )
}
