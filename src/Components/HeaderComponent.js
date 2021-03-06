import React from 'react';
import FaIconPack from 'react-icons/lib/fa/play'
import FaIconPackSquare from 'react-icons/lib/fa/square'
import FaIconPackFolder from 'react-icons/lib/md/create-new-folder'
import FaIconPackFace from 'react-icons/lib/md/face'
import FaArrowBack from 'react-icons/lib/md/arrow-back'
import { Link } from 'react-router-dom'

class HeaderComonent extends React.Component {
  state = {
    original: true,
    playing: false,
    showBack: true
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#4A4A4A',
        height: 80,
        justifyContent: 'center',
        marginBottom: 20
      }}>
      
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
            {this.state.showBack && 
            
              <Link
                id='home'
                to='/'>

                <FaArrowBack className='menu_icon' />

              </Link>
            }

            <FaIconPackFace
              style={{
                padding: 10,
                fontSize: 35,
                color: '#858585'
              }}/>
            <p style={{ color: '#858585', paddingRight: 5 }}>Hey, I see the input genre is</p> <p
            style={{ color: '#adadad', fontWeight: 'bold' }}> Rock</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#858585',
            width: 147,
            margin: 20,
            borderRadius: 5,
            cursor: 'pointer'
          }}>

            <div 
              className={'rightButton ' + (this.state.original ? 'selected' : '')}
              onClick={() => {
                this.props.handleMixed(false)
                this.setState({original: true})
              }}>
              Original
            </div>
            <div 
              className={'leftButton ' + (this.state.original ? '' : 'selected')}
              onClick={() => {
                this.props.handleMixed(true)
                this.setState({original: false})
              }}>
              Mixed
            </div>

          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }}>

          <FaIconPack
            className={'menu_icon ' + (this.state.playing ? 'selected_play_option' : '')}
            onClick={() => {
              this.setState({ playing: true })
              this.props.handlePlay(true)
            }}/>

          <FaIconPackSquare 
            className={'menu_icon ' + (this.state.playing ? '' : 'selected_play_option')}
            onClick={() => {
              this.setState({ playing: false });
              this.props.handlePlay(false)
            }}/>

          <FaIconPackFolder 
            className="menu_icon" />

        </div>
      </div>
    )
  }
};

export default HeaderComonent;