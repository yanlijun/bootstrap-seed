'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        banner: '/* <%=pkg.name%> - v<%=pkg.version%> - <%=grunt.template.today("yyyy-mm-dd")%>\n' +
        '** Copyright (c) <%=grunt.template.today("yyyy")%> */\n',

        // Task configuration.
        clean: {
            font: 'assets/fonts/*',
            image: 'assets/images/*',
            others: ['assets/scripts/*','assets/styles/*']
        },
        copy: {
            init: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/fonts',
                        src: ['**/*'],
                        dest: 'src/fonts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components/',
                        src: [
                            'bootstrap-sass/assets/javascripts/bootstrap.min.js',
                            'jquery/dist/jquery.min.js',
                            'html5shiv/dist/html5shiv.min.js',
                            'respond/dest/respond.min.js'
                        ],
                        dest: 'assets/scripts/',
                        filter: 'isFile'
                    }
                ]
            },
            font: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts',
                        src: ['**/*'],
                        dest: 'assets/fonts'
                    }
                ]
            },
            image: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images',
                        src: ['**/*'],
                        dest: 'assets/images'
                    }
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            grunt: {
                src: 'Gruntfile.js'
            },
            main: {
                src: ['src/js/*.js', '!src/js/main.js']
            }
        },

        concat: {
            options: {
                //separator: ';'
            },
            main: {
                src: '<%= jshint.main.src %>',
                dest: 'src/js/main.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '<%=banner%>'
            },
            core: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['main.js'],
                    dest: 'assets/scripts',
                    ext: '.min.js'
                }]
            }
        },

        compass: {                      // Task
            dist: {                     // Target
                options: {              // Target options
                    config: 'config.rb'
                }
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            core: {
                options: {
                    import: false
                },
                src: ['src/css/*.css']
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            core: {
                options: {
                    map: true
                },
                src: 'src/css/*.css'
            }
        },

        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            },
            core: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css'],
                    dest: 'assets/styles',
                    ext: '.min.css'
                }]
            }
        },

        usebanner: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            files: {
                expand: true,
                cwd: 'assets/styles',
                src: ['*.css', '!bootstrap.min.css']
            }
        },

        watch: {
            script: {
                files: '<%= jshint.main.src %>',
                tasks: ['jshint:main', 'concat', 'uglify']
            },
            scss: {
                files: 'src/sass/**/*.scss',
                tasks: ['compass', 'csslint', 'autoprefixer', 'cssmin', 'usebanner']
            },
            font: {
                files: 'src/fonts/**/*',
                tasks: ['clean:font', 'copy:font']
            },
            image: {
                files: 'src/images/**/*',
                tasks: ['clean:image', 'copy:image']
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['clean', 'copy', 'jshint', 'concat', 'uglify', 'compass', 'csslint', 'autoprefixer', 'cssmin', 'usebanner', 'watch']);
};