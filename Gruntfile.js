module.exports = function(grunt) {
    // Load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            options: {
                noLineComments: true,
                force: true
            },
            dev: {
                options: {
                    sassDir: 'sass',
				    cssDir: '.',
				    outputStyle: 'expanded'
                }
            }
        },
        coffee: {
            dev: {

            }
        },
        autoprefixer: {
            dev: {
                options: {
                	browsers: ['> 1%', 'Android >= 2.1', 'Chrome >= 21', 'Explorer >= 7', 'Firefox >= 17', 'Opera >= 12.1', 'Safari >= 6.0']
                },
                src: 'style.css'
            }
        },
        concat: {

        },
        uglify: {

        },
        cssmin: {

        },
        imagemin: {

        },
        shell: {

        },
        watch: {
            compass: {
                files: 'sass/**/*.scss',
				tasks: ['compass', 'autoprefixer'] //still need autoprefixer
            },
            coffee: {
                files: 'coffee/**/*.coffee',
                tasks: ['coffee:dev']
            },
            livereload: {
            	options: {
            		livereload: true
            	},
                files: ['*.css', '*.php'] //still need js and images
            }
        },
        copy: {

        },
        clean: {

        },
        replace: {
        	style: {
				src: [
					'sass/style.scss',
					'style.css'
				],
				overwrite: true,
				replacements: [ {
					from: /^.*Version:.*$/m,
					to: ' * Version: <%= pkg.version %>'
				} ]
			},
			readme: {
				src: [
					'readme.md'
				],
				overwrite: true,
				replacements: [ {
					from: /^### Current Version: .*$/m,
					to: '### Current Version: <%= pkg.version %>'
				} ]
			}
        },
        bump: {
        	options: {
        		files: ['package.json', 'bower.json'],
        		updateConfigs: ['pkg'],
        		commit: false
        	}
        },
        'ftp-deploy': {
        	deploy: {
        		
        	}
        }
    });

    // Default tasks
    grunt.registerTask('default', ['watch']);
};
