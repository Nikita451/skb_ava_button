import React from 'react'
import importcss from 'importcss';

@importcss(require('./Avatar.css'))
export default class Avatar extends React.Component {
    render() {
        let { img, img2, admin, online, filter, boxshadow, border, radius, alt, title } = this.props
        filter = filter? filter : ""
        boxshadow = boxshadow === true? 'boxshadow': ""
        img2 = img2? `${img2} 2x`: undefined
        let styleObj = {}
        if (border) styleObj['border'] = `2px solid ${border}`
        if (radius) styleObj['borderRadius'] = `${radius}`
        
        return (    
            <div styleName="avatar">
                <img 
                    styleName={`${filter} ${boxshadow}`} 
                    alt={alt? alt : "Аватарка"}
                    title={title? title : "Аватарка"}
                    style={styleObj} src={img}
                    srcSet={img2} />
                {online &&  <p styleName="online"></p> }
                {admin && <p styleName="admin">Admin</p> }
            </div>
        )
    }
}
