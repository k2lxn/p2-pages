module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
        	// destination file and source file
          "css/custom/custom-bootstrap.css": "css/custom/custom-bootstrap.less",
          "css/custom/pw_events_2016.css": "css/custom/pw_events_2016.less",
          "css/custom/pollinator_week_2016.css": "css/custom/pollinator_week_2016.less",
          "pollinatorweek/css/style.css": "pollinatorweek/css/style.less",
          "pollinatorweek/css/events.css": "pollinatorweek/css/events.less", 
          "css/custom/poster2016.css": "css/custom/poster2016.less",
          "css/custom/support-the-bees.css": "css/custom/support-the-bees.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['css/custom/*.less', 'pollinatorweek/css/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};