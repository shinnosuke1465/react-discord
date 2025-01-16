import React from 'react'
import "./Sidebar.sass"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarLeft">
      {/* discrodIcon */}
      <div className="serverIcon">
        <img src="./discordLogo.png" alt="" />
      </div>
      <div className="serverIcon">
        <img src="./logo192.png" alt="" />
      </div>
    </div>

    <div className="sidebarRight">
      <div className="sidebarTop">
        <h3>Discord</h3>
        <ExpandMoreOutlined />
      </div>

      <div className="sidebarChannels">
        <div className="sidebarChannelsHeader">
          <div className="sidebarHeader">
            <ExpandMoreOutlined />
            <h4>プログラミングチャンネル</h4>
          </div>
          <AddIcon className="sidebarAddChannel" onClick={addChannel} />
        </div>

        <div className="sidebarChannelList">
          {channels.map((channel) => (
            <SidebarChannle
              id={channel.id}
              channel={channel}
              key={channel.id}
            />
          ))}
          {/* <SidebarChannle id="1" channel="sample" />
          <SidebarChannle id="1" channel="sample" />
          <SidebarChannle id="1" channel="sample" /> */}
        </div>

        <div className="sidebarSettings">
          <div className="sidebarAccount">
            <img
              src={user?.photo}
              alt="account"
              onClick={() => auth.signOut()}
            />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>

          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar