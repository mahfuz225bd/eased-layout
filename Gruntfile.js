module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Configuration for CSS Minification
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**/*.css"],
            dest: "dist",
            ext: ".min.css",
          },
        ],
      },
    },

    // Configuration for JavaScript Minification
    uglify: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**/*.js"],
            dest: "dist",
            ext: ".min.js",
          },
        ],
      },
    },

    // Concatenate all CSS files
    concat: {
      css: {
        src: ["src/**/*.css"],
        dest: "dist/eased-layout.css",
      },
      js: {
        src: ["src/**/*.js"],
        dest: "dist/eased-layout.js",
      },
    },

    // Minify the concatenated files
    cssmin: {
      concat_target: {
        files: {
          "dist/eased-layout.min.css": ["dist/eased-layout.css"],
        },
      },
    },

    uglify: {
      concat_target: {
        files: {
          "dist/eased-layout.min.js": ["dist/eased-layout.js"],
        },
      },
    },

    // Copy original files for non-minified versions while keeping comments
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**/*"],
            dest: "dist",
          },
        ],
      },
    },
  });

  // Load required Grunt plugins
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default task
  grunt.registerTask("default", [
    "copy",
    "cssmin",
    "uglify",
    "concat",
    "cssmin:concat_target",
    "uglify:concat_target",
  ]);
};
