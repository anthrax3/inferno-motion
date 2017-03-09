import Inferno from 'inferno'
import Component from 'inferno-component'
import {Motion, spring} from '../../src/inferno-motion';

let spring_default = {size: 1, o: 1}
let spring_show = {size: spring(1), o: spring(1)}
let spring_hide = {size: spring(1), o: spring(0)}

export default class Demo extends Component {
	state = {shown: true}
	onclick = (e) => {
		e.preventDefault();
		this.show()
	}
	show() {
	  debugger;
		this.setState({shown: !this.state.shown})
	}
	render() {
		var shown = this.state.shown
		return (
            <div>
              <Overlay show={shown} />
              <div id="thing-i-want-to-style">Test</div>
              <a id="show-button" onClick={this.onclick} style={{position:'fixed',top:0,left:0}}>show</a>
            </div>
		)
	}
}

function Overlay(props) {
	let {
		show
	} = props
	let scope = "#thing-i-want-to-style"
	let style = show ? spring_show : spring_hide
	return (
        <div>
          <Motion defaultStyle={spring_default} style={style} >{
			  (sprung)=>{
				  let css =  `
            ${scope} {
              visibility: ${sprung.o <= 0 ? 'hidden' : 'inherit'} !important;
              opacity: ${sprung.o};
              transform: scale(${sprung.size});
            }
          `
				  return (
                      <style dangerouslySetInnerHTML={{__html: css}} />
				  )
			  }
		  }</Motion>
        </div>
	)
}
