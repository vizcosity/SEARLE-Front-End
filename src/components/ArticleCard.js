/**
 * Article card component, containg the summary text, title, source and
 * a sentiment bar.
 */

import React, {Component} from 'react';
import {Line} from 'rc-progress';

const positiveSentimentColour = '#62d862';
const negativeSentimentColour = '#F44336';

export default class ArticleCard extends Component {

  render(){
    var sentimentNature = "neutral";
    if (this.props.sentiment.compound < 0) {
      sentimentNature = "negative";
      // Make sure the result is positive.
      this.props.sentiment.compound *= -1;
    }
    if (this.props.sentiment.compound > 0) sentimentNature = "positive";
    var sentimentPercentage = this.props.sentiment.compound * 100;
    return (
      <a
      href={"http://"+this.props.url} target="_blank"
      style={{
        marginTop: '15px',
        marginBottom: '15px',
        backgroundColor: '#363636',
        padding: '20px',
        borderRadius: '13px',
        display: 'block',
        textDecoration: 'none'
      }}>
        <h2
          className="articleTitle"
          >{this.props.title}</h2>
        <h3 className="siteName">{this.props.url.split('www.')[1].split('/')[0]}</h3>
        <hr
          style={{
            border: '0.5px solid #9d9d9d26'
          }}
        />
        <p className="articleBody">{this.props.body}</p>

        <div>
          <p className="articleSentimentLabel">
            Sentiment: {parseInt(sentimentPercentage)}% ({sentimentNature})
          </p>
          <Line
            style={{
              border: '1px solid #3d3d3d',
              borderRadius: '10px'
            }}
            percent={sentimentPercentage}
            strokeWidth="6"
            trailColor="rgba(0,0,0,0)"
            trailWidth="6"
            strokeColor={sentimentNature == "positive" ? positiveSentimentColour : negativeSentimentColour}
          />
        </div>
      </a>
    );
  }

}