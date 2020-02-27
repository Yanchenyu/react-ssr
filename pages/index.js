import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const isServer = typeof window === 'undefined';
export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (isServer) {
        console.log('in server');
        return {
            type: 'server render'
        }
    } else {
        console.log('in client');
        debugger
        return {
            type: 'client render'
        }
    }
  }
  handleClick = () => {
      location.href = '/home';
  }
  handleRouter = () => {
      Router.push({
          pathname: '/home'
      })
  }
  render() {
    return (
      <div>
        Index {this.props.type}
        <button onClick={this.handleClick}>click me with location</button>
        <Link href='/home'>click me with Link</Link>
        <button onClick={this.handleRouter}>click me with router</button>
        <a href='/home'>click a </a>
      </div>
    )
  }
}