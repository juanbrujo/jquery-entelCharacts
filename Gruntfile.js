module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("entelCharacts.jquery.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Por: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  Licencia: <%= pkg.licenses[0].type %>\n" +
				" */\n"
		},
		concat: {
			dist: {
				src: ["src/jquery.entelCharacts.js"],
				dest: "dist/jquery.entelCharacts.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		jshint: {
			files: ["src/jquery.entelCharacts.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/jquery.entelCharacts.js"],
				dest: "dist/jquery.entelCharacts.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		less: {
	      dist: {
	      	options: {
	      		compress: true
	      	},
	        files: {
	            'demo/css/style.min.css': 'demo/css/style.less'
	        }
	      } 
	    },
		watch: {
		    scripts: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['demo/css/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['demo/*.html'],
			},
		    tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("travis", ["jshint"]);

};
