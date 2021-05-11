# DatingApp
Course cet core and angular

+---------------------------+
| Dotnet webapi             |
+---------------------------+
dotnet dev-certs https --trust

#--nuget packages
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Sqlite
Microsoft.EntityFrameworkCore.Design
#dotnet-ef
dotnet tool install --global dotnet-ef --version 5.0.4

#--used command
dotnet new sln
dotnet new ...<web api>

dotnet sln add <project>


dotnet ef migrations add InitialCreate -o Data\Migrations 
dotnet ef database drop
dotnet ef database update

dotnet ef migrations add UserPasswordAdded
dotnet ef database update

If certs fail
https://stackoverflow.com/questions/53300480/unable-to-configure-https-endpoint-no-server-certificate-was-specified-and-the/57301251#57301251

+---------------------------+
| Angular                   |
+---------------------------+
ng new client
-strinct mode option -->select No
-angular routing option select yes

ng serve
ng add ngx-bootstrap

ng generate <OR> ng g
ng g -h <HELP>
ng g c <component_name> --skip-tests
ng g s <service_name> --skip-tests

+---------------------------+
| JWT Json Web Tokens       |
+---------------------------+

+---------------------------+
| Services                  |
+---------------------------+
startup.cs  -> AddScoped last the duration of the http request
            -> AddTransient last the duration of a method

https://stackoverflow.com/questions/38138100/addtransient-addscoped-and-addsingleton-services-differences

Transient objects are always different; a new instance is provided to every controller and every service.

Scoped objects are the same within a request, but different across different requests.

Singleton objects are the same for every object and every request. 