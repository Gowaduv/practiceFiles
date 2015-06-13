module.exports = function(grunt) {

  var srcFiles = ["KMSlab2ADV.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        config: '.jscsrc'
      }
    }
  });
//seriously, I hate GitHub. Y U SO DIFFICULT?!?!
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("default", ["jshint", "jscs"]);

};
