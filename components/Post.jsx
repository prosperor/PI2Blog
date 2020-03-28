import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class extends React.Component {
  static async getInitialProps() {
    const content = await require(`../api/about.md`)
    return { content }
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.props.content}/>
      </div>
    )
  }
}