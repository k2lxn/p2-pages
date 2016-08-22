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
          "css/custom/forms.css": "css/custom/forms.less",
          "css/custom/pw_events_2016.css": "css/custom/pw_events_2016.less",
          "css/custom/pollinator_week_2016.css": "css/custom/pollinator_week_2016.less",
          "pollinatorweek/css/style.css": "pollinatorweek/css/style.less",
          "pollinatorweek/css/events.css": "pollinatorweek/css/events.less", 
          "css/custom/poster2016.css": "css/custom/poster2016.less",
          "css/custom/canada_new.css": "css/custom/canada_new.less",
          "css/custom/support-the-bees.css": "css/custom/support-the-bees.less",
          "support-the-bees/css/index.css": "support-the-bees/css/index.less",
          "nappc/css/nappc.css": "nappc/css/nappc.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['css/custom/*.less', 'pollinatorweek/css/*.less', 'support-the-bees/css/*.less','nappc/css/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};