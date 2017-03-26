import React from 'react'
import importcss from 'importcss'

@importcss(require('./Button.css'))
export default class Button extends React.Component {
    
    constructor(props) {
        super(props)
        let { status } = this.props
        if (status == "success" || status == "ready") status = "button ready"
        else if (status == "error") status = "button error"
        else if (status == "loading") status = "button loading"
        else status = "button"

        this.state = {
            status: status
        }
    }

    onClick = (e) => {
        e.preventDefault();
        let self = this
        if (!this.props.onClick) return 

        self.setState({
            status: 'button loading'
        })

        this.props.onClick().then( 
        (data) => {
            self.setState({
                status: 'button ready'
            })
        }, 
        (err) => {
            self.setState({
                status: 'button error'
            })
        })
        
    }

    render() {
        const {title} = this.props
        return (
            <div styleName="wrapperButton">
                <button styleName={this.state.status} onClick={this.onClick} type="submit"> {title} </button>
            </div>
        )
    }
}
