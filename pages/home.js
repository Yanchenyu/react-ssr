import React from 'react'
import Link from 'next/link'

const isServer = typeof window === 'undefined';


export default class extends React.Component {
  static async getInitialProps({ req }) {
    
    if (isServer) {
        return {
            type: 'server render'
        }
    } else {
        return {
            type: 'client render'
        }
    }

  }

  render() {
    return (
      <div>
        Home {this.props.type}
      </div>
    )
  }
}