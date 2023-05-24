<b>Login as Admin</b>

![Screenshot from 2023-05-24 13-47-40](https://github.com/boyiajas/laravelPermissionReactInertia/assets/12686949/0a20b19f-2eda-427e-88dd-eace212d4ef0)

![Screenshot from 2023-05-24 13-47-54](https://github.com/boyiajas/laravelPermissionReactInertia/assets/12686949/6b1b2421-85b6-4bc9-97ac-86889d2bce6c)

![Screenshot from 2023-05-24 13-48-25](https://github.com/boyiajas/laravelPermissionReactInertia/assets/12686949/52a2ae48-5eaf-4715-bd84-f26d58592cb2)

<b>Login as User</b>

![Screenshot from 2023-05-24 13-48-52](https://github.com/boyiajas/laravelPermissionReactInertia/assets/12686949/a0d01422-a697-4737-a18d-897d74ed2d87)

## To run the project following the instruction below:

1. Create a folder and Git clone this project using the command below inside your folder/directory, note the dot means clone the file into the current directory

    <b>git clone https://github.com/boyiajas/laravelPermissionReactInertia.git .</b>

2. Run the composer install command below in the project directory/folder in the terminal to install all the packages and dependencies required  

    <b>composer install </b>

3. in linux use the command below create your .env file by copy the .env.example to the .env file 
    
    <b>cp .env.example .env </b>

4. update your database name inside the .env file and use migrate command below to create all the project tables and seed the default data

    <b>php artisan migrate </b>

    <b>php artisan db:seed </b>


5. Generate a new application key by using the below command 

    <b> php artisan key:generate </b>

6. then for your frontend run the below command to install all the required npm package

   <b>npm install </b>

7. then start your backend server using the command below:

   <b> php artisan serve </b>


8. then finally open another terminal and run the below command 
    
   <b> npm run build / npm run dev  </b>



## You can login using the default credentials below:

name : Super Admin <br/>
email : superadmin@example.com <br/>
password: password <br/>

name : Admin <br/>
email : admin@example.com <br/>
password: password <br/>

name : user <br/>
email : user@example.com <br/>
password: password <br/>
