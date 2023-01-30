# Angular-Best-Practices : Lazy Loading

# Purpose

With the use of HTML and TypeScript, single-page client applications can be created using the Angular platform and framework. This indicates that the application is not reloaded upon changing pages. It is made possible by Angular's architecture, which mainly depends on modules and routing.

Less functionality applications do not experience delays or crashes. But large applications do have loading delays, which slows down even the loading of their landing page. All the modules are loaded before the application is displayed. The primary problem begins there. In order to solve this, we must follow the best practices recommended by the Angular team.

So the solution to it is # Lazy Loading

In order to enhance the performance of an Angular application, lazy loading is used. By only loading modules when they are required, it helps to decrease the size of the main bundle. The user experience is enhanced and the application can load more quickly as a result. The memory footprint of an application is also reduced because just the necessary components are loaded.

An important Angular feature called lazy loading speeds up initial load times by loading only the files that are absolutely necessary at that moment. When you travel to another required module's specific route, other modules are loaded as needed.


# Setup

Install Angular Cli on command prompt by running the following command

  ⦁	npm install -g @angular/cli

To create angular app, run following command

  ⦁	ng new student-app --routing

ng new student-app makes the app and --routing will make an app-routing for the application.

# Implementation

To create new module run the command:

  ⦁	ng generate module students --route students --module app.module

--module will create a separate module for that particular component and --route will separate the routing file for that component.

Similarly we add one more module

  ⦁	ng generate module teachers --route teachers  --module app.module

The students-routing.module.ts file, which is used to call that particular page, will be present in the component. The path to each component's routing file is given there.
 
Here we have used loadchildren instead of defining component in the main app-routing.module.ts file.
It will make the straight path to the component. 

The path to this specific component will be in the component routing file, and the other routes provided here are its child routes.

The students.component.ts and students-routing.module.ts files are imported in the students.module.ts file, which also provides access to the module file's own routing file.

Therefore, we can optimise our angular applications and improve the overall user experience by implementing structured methods.
