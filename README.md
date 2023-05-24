<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## To run the project following the instruction below:


1. Run the composer install command below in your terminal to install all the packages and dependencies required  

    # composer install 

2. in linux use the command below create your .env file by copy the .env.example to the .env file 
    
    # cp .env.example .env

3. update your database name inside the .env file and use migrate command below to create all the project tables and seed the default data

    # php artisan migrate

    # php artisan db:seed


3. Generate a new application key by using the below command 

    # php artisan key:generate

4. then for your frontend run the below command to install all the required npm package

    # npm install

6. then start your backend server using the command below:

    # php artisan serve


5. then finally open another terminal and run the below command 
    
    # npm run build / npm run dev 



## You can login using the default credentials below:

name : Super Admin
email : superadmin@example.com
password: password

name : Admin
email : admin@example.com
password: password

name : user
email : user@example.com
password: password
