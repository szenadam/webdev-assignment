module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "dist/css/style.css": "css/style.scss",
        }
      }
    },
    copy: {
      main: {
        files: [
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["sass"]);
};
