VAULT_SECRETS = [
  [
    path: "secret/jenkins/webgl/showcase-sdk-deploy-key",
    secretValues: [
      [
        envVar: "DEPLOY_KEY",
        vaultKey: "ssh_key"
      ],
    ]
  ],
]

pipeline {

    agent {
        docker { image "jekyll/builder" }
    }

    stages {

      stage("Setup") {
        when {
          anyOf {
            branch "main"
            changeRequest()
          }
        }
        steps {
          echo "Setting up SSH"
          withVault(vaultSecrets: VAULT_SECRETS) {
            sh '''
                # set prevents leaking the ssh secret
                set +x

                mkdir -p ~/.ssh/
                echo "${DEPLOY_KEY}" > ~/.ssh/id_rsa
                chmod 600 ~/.ssh/id_rsa
                grep github.com ~/.ssh/known_hosts || ssh-keyscan github.com > ~/.ssh/known_hosts
            '''

            echo "Setting up Git"
            sh '''
                git config --global user.email "infra@matterport.com"
                git config --global user.name "Jenkins Deployer"
            '''

            echo "Setting up Bundler"
            sh "bundle config path ~/.gems"
          }
        }
      }

      stage("Build") {
        when {
          anyOf {
            branch "main"
            changeRequest()
          }
        }
        steps {
          sh "yarn install"
        }
      }

      stage("Test") {
        when {
          anyOf {
            changeRequest()
          }
        }
        steps {
          sh "yarn clean"
          sh "bundle exec jekyll build --config _config.yml,_config_dev.yml"
        }
      }

      stage("Deploy") {
        when {
          branch "main"
        }
        steps {
          sh "yarn deploy-prod"
        }
      }
    }
}
