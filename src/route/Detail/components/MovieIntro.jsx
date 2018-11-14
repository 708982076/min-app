import React, { Component } from 'react'
import './MovieIntro.scss'

export default class MovieIntro extends Component {
  render() {
    const {showMore, toggleShowMore, introText} = this.props
    return (
      <section className="movieIntro">
        <p className="movieIntro-introText"
          style={showMore ? { overflow: 'visible', height: 'auto' } : {}}
        >
          如果我死了，那些我曾追求的人会很开心：每天烦我，我怎么知道喜不喜欢他？可能喜欢吧，可能不喜欢？无所谓了反正他都死了。哎呀，他一死去，就没人对我嘘寒问暖请我吃饭了，没人每天担心我了！算了，毕竟我这么漂亮，比不上明星也有自己的亮点，还会有下一个傻子不顾一切追求我的。可下一个人什么时候出现那？这么想来我还是亏本的啊，我怎么能做亏本的买卖——不能！他要是不死去多好，还能多一个追求者！我不喜欢他，我只是喜欢他追我无条件对我好，我这么做是有道理的，哪个人是不渴望被人爱的孩子那？我还是个孩子啊，我渴望人爱我追求我不图回报的对我好，我接受他的好有错吗？我是没错的？——恩。
        </p>
        <span className="movieIntro-moreBtn"
          onClick={toggleShowMore}
          style={showMore ? { position: 'static', padding: 0 } : {}}
        >
          {showMore ? '收起' : '更多'}
        </span>
      </section>
    )
  }
}
