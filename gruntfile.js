module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'app.js': 'app.coffee', // 1:1 compile

        }
      }
    }
  })
  //Load NPM tasks 
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask('default', []);

};