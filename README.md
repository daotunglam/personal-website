# DAO TUNG-LAM PORTFOLIO built with angular
<a href="https://tunglam-dao.com.de">https://tunglam-dao.com.de</a>

## Control the functions of a component from an other component:

 ex. we want that: <br>
 ``app.component`` handles the function ``changeActiveStickOnSidenav()`` of ``sidenav.component`` by scrolling, then:

````
import {header.component} from '.header/header.component';
headerComponent = HeaderComponent;
this.headerComponent.hideHeader(){...} 
````

## deploy folder dist on server but page is EMPTY
SOLUTION:
in folder ``dist/portfolio-angular/index.html``
instead ``<base href="/">``
give ``<base href="/portfolio-angular/">``