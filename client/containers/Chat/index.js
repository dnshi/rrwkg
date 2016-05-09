import React from 'react'
import _chat from './chat.scss'

import ChannelList from './ChannelList'
export { ChannelList }

export default function Chat() {
  return (
    <div className={_chat.chatContent}>
      <div className={_chat.channelHeader}>
        <span className={_chat.channelName}>CHANNEL NAME</span>
      </div>
      <div className={_chat.channelBody}>

      </div>
      <div className={_chat.channelFooter}>

      </div>
    </div>
  )
}
