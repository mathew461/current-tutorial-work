import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular}
                //I think we will have to rejig the Image tag for it to work in the Portfolio Project.
                />
            </div>
        );
    }
}

export default ImageCard;


// I want to use this component in my Portfolio project. 
//This component was built during 10. Using Ref's for DOM Access: 3. Creating an Image Card Component
// ImageList.JS is where this Component is connected to. We will have to work out what file in Portfolio will be neccesary {The file with the Grid component}