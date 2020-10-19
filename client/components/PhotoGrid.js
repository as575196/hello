
import Photo from './Photo';
import React from 'react';

const PhotoGrid = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.refs.item.value);
  },

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map(
          (post,i) => <Photo
            {...this.props} key={i} i={i} post={post} />
        )}
      </div>
    );
  }
});

export default PhotoGrid;
