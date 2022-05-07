node {
      def app
      stage('Clone repository') {

            checkout scm
      }
      stage("Docker build"){
        app = docker.build("migutak/ecollect-cdi-apis")
      }

      stage('Test'){

            sh 'echo Testing ...'

        }

      stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker_credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
      }

      stage('Deploy'){
            //change deployed image to one that is build
            sh 'sed -i \"s, IMAGE_NAME, docker.io/migutak/ecollect-cdi-apis:${env.BUILD_NUMBER},\" ecollect-cdi-apis-deployment.yml'
            sh 'kubectl get pods'
            sh 'kubectl apply -f  ecollect-cdi-apis-deployment.yml'

        }

    }
