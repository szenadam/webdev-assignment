module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "src/css/style.css": "src/css/style.scss",
          "src/css/akadalymentes.css": "src/css/akadalymentes.scss",
          "src/css/print.css": "src/css/print.scss",
          "src/css/xhtml_styles.css": "src/css/xhtml_styles.scss"
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: "src/", src: ["*.html", "*.xhtml"], dest: "dist/", filter: "isFile" },
          { expand: true, cwd: "src/", src: ["favicon.ico"], dest: "dist/", filter: "isFile" },
          { expand: true, cwd: "src/", src: ["assets/**"], dest: "dist/" },
          { expand: true, cwd: "src/", src: ["css/*.css"], dest: "dist/"},
          { expand: true, cwd: "src/", src: ["js/**"], dest: "dist/" }
        ]
      }
    },
    clean: {
      build: {
        src: ['dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["clean", "sass", "copy"]);
};
