# Clovio
## Skills Test Full-Stack Web Developer

### [Angular-Universal](https://github.com/awwm/clovio/tree/angular-universal/angular)
1. Created a branch from main repository for converting into Angular Universal
2. To deploy an Angular project to production and serve it on port 80/443, you'll need to follow these general steps. Note that the exact process might vary depending on your hosting provider and server configuration.
    - **ng build** already build and we have ready ***dist*** folder
    - #### Choose a web server ####
        - Nginx example setup
            ```bash
                server {
                    listen 80;
                    server_name your_domain.com;

                    location / {
                        root /path/to/your/angular/app/dist;
                        index index.html;
                        try_files $uri $uri/ /index.html =404;
                    }
                }
            ```
        - Apache example setup
            ```bash
                <VirtualHost *:80>
                    ServerName your_domain.com

                    DocumentRoot /path/to/your/angular/app/dist
                    <Directory /path/to/your/angular/app/dist/>
                        Options Indexes FollowSymLinks
                        AllowOverride All
                        Require all granted
                    </Directory>

                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    CustomLog ${APACHE_LOG_DIR}/access.log combined
                </VirtualHost>
            ```
    - #### Configure SSL ####
        - If you want to serve your application over HTTPS (port 443), you'll need an SSL certificate. 

*** Remember to adjust the configurations based on your specific hosting environment and security requirements. Additionally, consider automating deployment and server configuration using tools like Docker, or CI/CD pipelines for smoother and more scalable processes. ***