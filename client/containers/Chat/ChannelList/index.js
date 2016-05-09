import React from 'react'
import _channelList from './channelList.scss'

export default function ChannelList() {
  const channelList = [
    {
      id: 0,
      name: 'general',
    },
    {
      id: 1,
      name: 'random',
    },
  ]
  return (
    <div className={_channelList.panel}>
      <ul className={_channelList.items}>
        {channelList.map(channel =>
          <li key={channel.id} className={_channelList.item}>{channel.name}</li>
        )}
      </ul>
    </div>
  )
}
