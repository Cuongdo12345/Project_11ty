module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css/styles.css');
    return {
      passthroughFileCopy: true,
      dir:{
        data:"_data"
      }
    };
  };