pipeline {
    agent any

    tools {
        nodejs "node-18"   // matches the NodeJS tool you configured in Jenkins
    }

    environment {
        BROWSERSTACK_USERNAME = credentials('BROWSERSTACK_USERNAME')
        BROWSERSTACK_ACCESS_KEY = credentials('BROWSERSTACK_ACCESS_KEY')
        BROWSERSTACK_APP_ID = credentials('BROWSERSTACK_APP_ID') 
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests on BrowserStack') {
            steps {
                sh 'npx wdio ./config/wdio.android.bs.conf.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'logs/*.gz', followSymlinks: false
        }
    }
}
