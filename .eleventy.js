module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css/styles.css');
    return {
      passthroughFileCopy: true,
      dir:{
        input:"src",
        output:"dist",
        data:"_data"
      }
    };
    
  };

  // 11ty config file 